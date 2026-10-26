import subprocess,re,html,sys,json
PDF='/mnt/user-data/uploads/Stahls_Essential_Psychopharmacology_5th_ed.pdf'
def words(p):
    out=subprocess.run(['pdftotext','-f',str(p),'-l',str(p),'-bbox',PDF,'-'],capture_output=True,text=True).stdout
    return [(float(m[1]),float(m[2]),float(m[3]),float(m[4]),html.unescape(m[5])) for m in re.finditer(r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</word>',out)]
LAB=re.compile(r'^(5HT\w*|D\d|H\d|M\d|α\w*|alpha\w*|NET|SERT|DAT|σ\w*|TAAR\w*|omega|ω|\d[A-Z]?|[A-Z]{1,2}\d?)$')
def strip(p,fig):
    ws=words(p)
    cap=[w for i,w in enumerate(ws) if w[4]=='Figure' and i+1<len(ws) and ws[i+1][4]==fig]
    if not cap: return None
    cy=cap[0][1]
    plus=[w for w in ws if re.fullmatch(r'\+{1,4}',w[4]) and cy-160<w[1]<cy]
    labs=[w for w in ws if cy-180<w[1]<cy and not re.fullmatch(r'\+{1,4}',w[4]) and len(w[4])<=7]
    # merge subscripts: label token immediately followed (x gap<2) by token
    labs.sort(key=lambda w:(round(w[1]/3),w[0]))
    merged=[]
    for w in labs:
        if merged and abs(merged[-1][2]-w[0])<1.5 and abs(merged[-1][1]-w[1])<4:
            m=merged[-1]; merged[-1]=(m[0],m[1],w[2],max(m[3],w[3]),m[4]+w[4])
        else: merged.append(w)
    res=[]
    for pw in sorted(plus,key=lambda w:w[0]):
        cx=(pw[0]+pw[2])/2
        cands=[l for l in merged if l[3]<=pw[1]+3 and pw[1]-l[1]<22 and LAB.match(l[4]) ]
        if not cands: res.append(('?',len(pw[4]),round(cx))); continue
        best=min(cands,key=lambda l:abs((l[0]+l[2])/2-cx)+0.3*abs(pw[1]-l[3]))
        res.append((best[4],len(pw[4]),round(cx)))
    return res
if __name__=='__main__':
    for arg in sys.argv[1:]:
        p,fig=arg.split(':')
        r=strip(int(p),fig)
        print(fig, ' '.join(f'{a}{"+"*b}' for a,b,c in r) if r else None)
