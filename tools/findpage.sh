#!/bin/bash
# usage: findpage.sh dir offset "phrase"...
d=$1; off=$2; shift 2
for ph in "$@"; do echo -n "$ph => "; grep -l -F "$ph" $d/*.txt | xargs -n1 basename 2>/dev/null | sed 's/.txt//' | awk -v o=$off '{printf "%d ", $1-o}'; echo; done
