/*
 * Monitoring checklists. Two layers per row, kept visibly apart in the app:
 *   book     — what Stahl's Essential Psychopharmacology (5th ed.) says to watch and why, with chapter and pages.
 *   schedule — baseline / early / ongoing / act columns. NOT from the book: summarized from product labeling and
 *              published consensus guidance, with the source named on each row. Confirm against the hospital's protocol.
 * Rows:  { id, param, book: { ch, pages, text } | null, baseline, early, ongoing, act, source }
 * Entries: scope 'drug' (drugs: [ids]) or 'class' (groups: SP.drugs[].group values it applies to).
 *
 * REVIEW BEFORE RELEASE: every schedule cell below is outside the book and should be checked by the consultant/content reviewer.
 */
SP.monitoring = [
  {
    id: 'lithium', name: 'Lithium', scope: 'drug', drugs: ['lithium'],
    intro: 'Lithium has a **narrow therapeutic window** and long-term **thyroid** and **kidney** effects, so the book treats plasma-level monitoring as part of using it at all. The schedule columns add the usual timing from labeling and guidelines.',
    bookWhy: [
      { ch: 'ch07', pages: '345–346', text: 'Narrow therapeutic window: **plasma level monitoring** is needed; toxicity risk.' },
      { ch: 'ch07', pages: '345–346', text: 'Long-term risks to **thyroid** and **kidney**.' },
      { ch: 'ch07', pages: '345–346', text: 'Side-effect burden: GI upset, **weight gain**, hair loss, acne, **tremor**, sedation, decreased cognition, incoordination.' },
      { ch: 'ch07', pages: '345–346', text: 'New options, side effects and monitoring have reduced lithium use; experts now use it as one member of a **portfolio**, often at lower doses.' }
    ],
    rows: [
      { id: 'li-level', param: 'Serum lithium level (12-h trough)', book: { ch: 'ch07', pages: '345–346', text: 'Narrow therapeutic window; monitor **plasma levels**.' },
        baseline: 'No (not yet on drug)', early: '5–7 days after starting and after every dose change, until stable', ongoing: 'Every 3–6 months once stable; sooner with dehydration, new NSAID/ACE-inhibitor/thiazide, or symptoms of toxicity', act: 'Tremor worsening, vomiting, diarrhea, ataxia, confusion → urgent level and hold dose', source: 'US product labeling; NICE CG185' },
      { id: 'li-renal', param: 'Kidney: creatinine / eGFR, urea, electrolytes', book: { ch: 'ch07', pages: '345–346', text: 'Long-term **kidney** effects.' },
        baseline: 'Yes', early: 'At 6 months', ongoing: 'Every 6–12 months; more often if eGFR falling or level unstable', act: 'Progressive eGFR decline or polyuria/polydipsia → discuss continuing lithium with the consultant', source: 'US product labeling; NICE CG185' },
      { id: 'li-thyroid', param: 'Thyroid: TSH (± free T4)', book: { ch: 'ch07', pages: '345–346', text: 'Long-term **thyroid** effects.' },
        baseline: 'Yes', early: 'At 6 months', ongoing: 'Every 6–12 months', act: 'Raised TSH → treat hypothyroidism (usually without stopping lithium)', source: 'US product labeling; NICE CG185' },
      { id: 'li-calcium', param: 'Serum calcium', book: null,
        baseline: 'Yes', early: '—', ongoing: 'Every 6–12 months', act: 'Hypercalcemia → check parathyroid hormone', source: 'NICE CG185' },
      { id: 'li-weight', param: 'Weight / BMI', book: { ch: 'ch07', pages: '345–346', text: '**Weight gain** is part of the side-effect burden.' },
        baseline: 'Yes', early: 'At 3 months', ongoing: 'Every 6–12 months', act: 'Significant gain → lifestyle advice, review the portfolio', source: 'NICE CG185' },
      { id: 'li-ecg', param: 'ECG', book: null,
        baseline: 'If cardiovascular disease or risk factors, or age over 40 (per labeling)', early: '—', ongoing: 'As clinically indicated', act: 'Conduction changes or bradyarrhythmia → cardiology input', source: 'US product labeling; NICE CG185' },
      { id: 'li-preg', param: 'Pregnancy test (people who could become pregnant); contraception counseling', book: null,
        baseline: 'Yes', early: '—', ongoing: 'Ask at each visit', act: 'Pregnancy → urgent risk–benefit discussion; levels need closer monitoring if continued', source: 'US product labeling' }
    ],
    sources: [
      { label: 'US product labeling for lithium carbonate', detail: 'Boxed warning on toxicity and the need for level monitoring; renal and thyroid precautions.' },
      { label: 'NICE CG185 Bipolar disorder (2014, updated 2023)', detail: 'Baseline and routine monitoring intervals for lithium: levels, renal, thyroid, calcium, weight.' }
    ]
  },
  {
    id: 'valproate', name: 'Valproate', scope: 'drug', drugs: ['valproate'],
    intro: 'The book lists **bone marrow, liver and pancreatic** toxicity, **fetal** toxicity and **polycystic ovaries** as the safety concerns, and says to monitor counts and platelets periodically. Schedules below come from labeling and guidelines.',
    bookWhy: [
      { ch: 'ch07', pages: '347–350', text: 'Warnings: **bone marrow, liver, pancreas**, and **fetal** toxicity (**neural-tube defects**).' },
      { ch: 'ch07', pages: '347–350', text: 'Monitor **blood counts and platelets** periodically (carbamazepine, by contrast, suppresses counts more immediately: monitor at the start).' },
      { ch: 'ch07', pages: '347–350', text: 'Amenorrhea, **polycystic ovaries**, hyperandrogenism, obesity and insulin resistance in women.' },
      { ch: 'ch07', pages: '350–353', text: 'Raises **lamotrigine** levels, increasing rash risk unless lamotrigine is titrated slowly.' }
    ],
    rows: [
      { id: 'vpa-cbc', param: 'Full blood count with platelets', book: { ch: 'ch07', pages: '347–350', text: 'Monitor **blood counts and platelets** periodically; bone-marrow toxicity.' },
        baseline: 'Yes', early: 'At 6 months (sooner if bruising or bleeding)', ongoing: 'Every 6–12 months', act: 'Thrombocytopenia or bruising/bleeding → repeat count, reduce or stop', source: 'US product labeling; NICE CG185' },
      { id: 'vpa-lft', param: 'Liver function tests', book: { ch: 'ch07', pages: '347–350', text: '**Liver** toxicity warning.' },
        baseline: 'Yes', early: 'At 6 months, and whenever symptoms suggest hepatotoxicity', ongoing: 'Every 6–12 months', act: 'Malaise, vomiting, jaundice, or rising transaminases → stop and investigate', source: 'US product labeling; NICE CG185' },
      { id: 'vpa-level', param: 'Serum valproate level (trough)', book: null,
        baseline: 'No', early: 'At steady state (about 3–5 days) after starting or changing dose, if used to guide dosing', ongoing: 'When adherence, toxicity or interactions are in question', act: 'Toxicity symptoms with high level → reduce; low level with poor response → check adherence', source: 'US product labeling' },
      { id: 'vpa-panc', param: 'Pancreatitis symptoms (abdominal pain, vomiting); amylase/lipase if symptomatic', book: { ch: 'ch07', pages: '347–350', text: '**Pancreatic** toxicity warning.' },
        baseline: 'Counsel on symptoms', early: 'Ask at each visit', ongoing: 'Ask at each visit', act: 'Suspected pancreatitis → stop and investigate urgently', source: 'US product labeling' },
      { id: 'vpa-weight', param: 'Weight / BMI (and PCOS features in women)', book: { ch: 'ch07', pages: '347–350', text: '**Weight gain**; polycystic ovaries, hyperandrogenism, insulin resistance in women.' },
        baseline: 'Yes', early: 'At 3 months', ongoing: 'Every 6–12 months', act: 'Menstrual irregularity, hirsutism, rapid gain → review treatment', source: 'NICE CG185' },
      { id: 'vpa-preg', param: 'Pregnancy test; contraception and teratogenicity counseling', book: { ch: 'ch07', pages: '347–350', text: '**Neural-tube defects** and other fetal toxicity.' },
        baseline: 'Yes, before starting in anyone who could become pregnant', early: '—', ongoing: 'Ask at each visit', act: 'Planning or confirming pregnancy → consultant review; valproate is usually avoided', source: 'US product labeling; NICE CG185' },
      { id: 'vpa-ammonia', param: 'Ammonia (only if confusion, lethargy or vomiting)', book: null,
        baseline: 'No', early: '—', ongoing: 'If symptomatic', act: 'Hyperammonemic encephalopathy → stop valproate', source: 'US product labeling' }
    ],
    sources: [
      { label: 'US product labeling for valproate / divalproex', detail: 'Boxed warnings: hepatotoxicity, fetal risk, pancreatitis; recommends liver tests and platelet counts.' },
      { label: 'NICE CG185 Bipolar disorder (2014, updated 2023)', detail: 'Baseline and routine FBC, LFT and weight monitoring; pregnancy-prevention advice.' }
    ]
  },
  {
    id: 'clozapine', name: 'Clozapine', scope: 'drug', drugs: ['clozapine'],
    intro: 'Table 5-2 in the book lists the side effects that need expert management, led by **neutropenia**, with blood counts monitored for as long as treatment lasts. Point-of-care finger-stick counts and plasma levels lower the practical barriers. The schedule columns summarize the standard neutrophil timetable and the other checks.',
    bookWhy: [
      { ch: 'ch05', pages: '222–225', text: 'Table 5-2 side effects needing expert management: **neutropenia**, constipation/paralytic ileus, sedation/orthostasis/tachycardia, **sialorrhea**, **seizures**, weight gain/dyslipidemia/hyperglycemia, **myocarditis**/cardiomyopathy/interstitial nephritis, DRESS/serositis.' },
      { ch: 'ch05', pages: '222–225', text: 'Neutropenia is life-threatening, occasionally fatal; **blood counts are monitored as long as the patient is treated**; mechanism unknown.' },
      { ch: 'ch05', pages: '222–225', text: 'Use is too low given how many patients respond inadequately to other drugs. **Finger-stick** blood counts reduce one barrier; **plasma levels** help dosing.' },
      { ch: 'ch05', pages: '198–201', text: 'Clozapine sits in the **high** metabolic-risk tier with olanzapine, so the four-parameter metabolic kit applies in full.' }
    ],
    rows: [
      { id: 'clz-anc', param: 'Absolute neutrophil count (ANC)', book: { ch: 'ch05', pages: '222–225', text: '**Neutropenia**; counts monitored as long as treated.' },
        baseline: 'Yes: ANC ≥ 1500/µL to start (≥ 1000/µL with documented benign ethnic neutropenia)', early: 'Weekly for the first 6 months', ongoing: 'Every 2 weeks for months 6–12, then monthly for as long as treatment continues', act: 'ANC 1000–1499 → three-times-weekly counts; ANC 500–999 → daily counts, interrupt; ANC < 500 → stop, hematology; any fever or sore throat → urgent count', source: 'US product labeling (monitoring recommendations retained after REMS was eliminated in 2025)' },
      { id: 'clz-metab', param: 'Weight/BMI, fasting glucose or HbA1c, fasting lipids, blood pressure', book: { ch: 'ch05', pages: '198–201', text: 'High metabolic risk; the **four-parameter kit**: weight/BMI, fasting triglycerides, fasting glucose, blood pressure.' },
        baseline: 'Yes', early: 'Weight at 4, 8 and 12 weeks; glucose, lipids and BP at 12 weeks', ongoing: 'Weight quarterly; glucose and BP yearly; lipids yearly (consensus said every 5 years if normal)', act: 'Rising BMI or triglycerides → lifestyle plan; consider metformin or switching', source: 'ADA/APA/AACE/NAASO consensus (2004); US product labeling' },
      { id: 'clz-cardiac', param: 'Myocarditis watch: pulse, temperature, symptoms; troponin and CRP where available', book: { ch: 'ch05', pages: '222–225', text: '**Myocarditis**/cardiomyopathy in Table 5-2.' },
        baseline: 'Yes (vital signs; ECG if available)', early: 'Weekly for the first 4 weeks (highest-risk period)', ongoing: 'Symptom review at each visit; echocardiography if cardiomyopathy suspected', act: 'Fever, tachycardia, chest pain, dyspnea, raised troponin/CRP → stop and refer urgently', source: 'US product labeling; Ronaldson et al. monitoring protocol (2011)' },
      { id: 'clz-ortho', param: 'Orthostatic blood pressure and heart rate', book: { ch: 'ch05', pages: '222–225', text: 'Sedation/**orthostasis**/tachycardia in Table 5-2.' },
        baseline: 'Yes', early: 'Each visit during titration (slow titration; retitrate after ≥ 2 days missed)', ongoing: 'As indicated', act: 'Syncope or marked hypotension → slow titration, review dose', source: 'US product labeling' },
      { id: 'clz-bowel', param: 'Bowel function (constipation screen)', book: { ch: 'ch05', pages: '222–225', text: 'Constipation/**paralytic ileus** in Table 5-2.' },
        baseline: 'Ask and counsel', early: 'Ask at each visit', ongoing: 'Ask at each visit', act: 'No stool > 3 days, distension, vomiting → treat early; ileus is an emergency', source: 'US product labeling' },
      { id: 'clz-seiz', param: 'Seizure risk (dose-related); sedation; sialorrhea', book: { ch: 'ch05', pages: '222–225', text: '**Seizures** and sialorrhea in Table 5-2.' },
        baseline: 'History of seizures', early: 'Ask at each visit, especially above moderate doses', ongoing: 'Ask at each visit', act: 'Seizure → reduce dose, consider plasma level and an anticonvulsant', source: 'US product labeling' },
      { id: 'clz-level', param: 'Plasma clozapine level', book: { ch: 'ch05', pages: '222–225', text: '**Plasma levels** help dosing.' },
        baseline: 'No', early: 'At steady state if response is poor or toxicity suspected', ongoing: 'After dose changes, smoking changes, new interacting drugs (CYP1A2), or suspected nonadherence', act: 'Interpret with the consultant; smoking cessation raises levels', source: 'US product labeling; expert practice' },
      { id: 'clz-aims', param: 'Movement examination (AIMS)', book: { ch: 'ch05', pages: '170–174', text: '**Monitor movements in everyone**; screen periodically with the AIMS.' },
        baseline: 'Yes', early: '—', ongoing: 'Every 12 months (lower TD risk with clozapine; more often if high risk)', act: 'Emerging dyskinesia → document and review', source: 'APA schizophrenia guideline (2020)' }
    ],
    sources: [
      { label: 'US product labeling for clozapine', detail: 'Boxed warnings for severe neutropenia, orthostatic hypotension, seizures, myocarditis/cardiomyopathy; ANC monitoring frequencies. The FDA eliminated the clozapine REMS program in June 2025; the labeling monitoring recommendations remain.' },
      { label: 'ADA/APA/AACE/NAASO consensus on antipsychotic drugs and obesity and diabetes (2004)', detail: 'Metabolic monitoring schedule used across the antipsychotic class.' },
      { label: 'Ronaldson KJ et al., Aust N Z J Psychiatry 2011', detail: 'Troponin/CRP monitoring protocol for clozapine-induced myocarditis in the first 4 weeks.' },
      { label: 'APA practice guideline for schizophrenia (2020)', detail: 'AIMS frequency by risk.' }
    ]
  },
  {
    id: 'antipsychotics', name: 'Antipsychotics (all agents)', scope: 'class',
    drugs: [], groups: ['5HT2A/D2 antagonist', 'D2 antagonist (first generation)', 'D2/5HT1A partial agonist'],
    intro: 'The book frames antipsychotic safety around the **metabolic highway** and a **four-parameter** monitoring kit, plus periodic **movement** screening in everyone. It stresses that the same drug deserves the same monitoring whether it is given for psychosis or for depression. The schedule columns add the standard timetables.',
    bookWhy: [
      { ch: 'ch05', pages: '198–201', text: 'The metabolic monitoring tool kit (Figure 5-25): **weight/BMI**, **fasting triglycerides** (before and after starting), **fasting glucose**, **blood pressure**.' },
      { ch: 'ch05', pages: '198–201', text: 'In obese, dyslipidemic, prediabetic or diabetic patients also track **waist circumference**; if BMI or fasting triglycerides rise significantly, consider switching to a **low-risk** agent.' },
      { ch: 'ch05', pages: '198–201', text: 'An early rise in **fasting triglycerides** reflects insulin resistance that appears **before** weight gain (“receptor X”).' },
      { ch: 'ch05', pages: '198–201', text: '**Same drug, same monitoring**: drugs are monitored rigorously in psychosis and loosely in depression, yet mechanism dictates safety as well as efficacy.' },
      { ch: 'ch05', pages: '198–201', text: 'Risk tiers: **high** (clozapine, olanzapine); **moderate** (risperidone, paliperidone, quetiapine, asenapine, iloperidone); **low** (lurasidone, cariprazine, lumateperone, ziprasidone, pimavanserin, aripiprazole, brexpiprazole).' },
      { ch: 'ch05', pages: '170–174', text: '**Monitor movements in everyone** with a neurological exam and the **AIMS**; patients with mood disorders may be at greater risk of tardive dyskinesia.' },
      { ch: 'ch05', pages: '164–165', text: 'D2 blockade in the tuberoinfundibular pathway raises **prolactin** (galactorrhea, amenorrhea, sexual dysfunction).' },
      { ch: 'ch05', pages: '179–183', text: 'Some agents (thioridazine, mesoridazine, pimozide; ziprasidone noted in Chapter 5) carry **QTc** prolongation warnings.' }
    ],
    rows: [
      { id: 'ap-hx', param: 'Personal and family history: obesity, diabetes, dyslipidemia, hypertension, cardiovascular disease', book: { ch: 'ch05', pages: '198–201', text: 'The metabolic highway: appetite and weight gain → insulin resistance → diabetes and cardiovascular events.' },
        baseline: 'Yes', early: '—', ongoing: 'Yearly', act: 'High baseline risk → prefer a low-risk agent', source: 'ADA/APA/AACE/NAASO consensus (2004)' },
      { id: 'ap-weight', param: 'Weight / BMI', book: { ch: 'ch05', pages: '198–201', text: 'Kit parameter 1: **weight/BMI**.' },
        baseline: 'Yes', early: 'At 4, 8 and 12 weeks', ongoing: 'Every 3 months', act: 'Gain ≥ 5% of baseline → lifestyle plan; consider switching', source: 'ADA/APA/AACE/NAASO consensus (2004)' },
      { id: 'ap-waist', param: 'Waist circumference', book: { ch: 'ch05', pages: '198–201', text: 'Add **waist circumference** in obese, dyslipidemic, prediabetic or diabetic patients.' },
        baseline: 'Yes', early: '—', ongoing: 'Yearly', act: 'Central obesity → treat as metabolic syndrome risk', source: 'ADA/APA/AACE/NAASO consensus (2004)' },
      { id: 'ap-bp', param: 'Blood pressure', book: { ch: 'ch05', pages: '198–201', text: 'Kit parameter 4: **blood pressure**.' },
        baseline: 'Yes', early: 'At 12 weeks', ongoing: 'Yearly', act: 'Hypertension → treat; review agent', source: 'ADA/APA/AACE/NAASO consensus (2004)' },
      { id: 'ap-gluc', param: 'Fasting glucose (or HbA1c)', book: { ch: 'ch05', pages: '198–201', text: 'Kit parameter 3: **fasting glucose**.' },
        baseline: 'Yes', early: 'At 12 weeks', ongoing: 'Yearly (sooner if symptoms of hyperglycemia)', act: 'Prediabetes/diabetes → treat and consider switching to a low-risk agent', source: 'ADA/APA/AACE/NAASO consensus (2004)' },
      { id: 'ap-lipid', param: 'Fasting lipids (triglycerides emphasized by the book)', book: { ch: 'ch05', pages: '198–201', text: 'Kit parameter 2: **fasting triglycerides** before and after starting; early rise signals insulin resistance.' },
        baseline: 'Yes', early: 'At 12 weeks', ongoing: 'Yearly in practice (the 2004 consensus said every 5 years if normal)', act: 'Rising triglycerides → the book’s cue to consider switching', source: 'ADA/APA/AACE/NAASO consensus (2004); later guidance favors yearly' },
      { id: 'ap-aims', param: 'Movement examination (AIMS) for tardive dyskinesia, parkinsonism, akathisia', book: { ch: 'ch05', pages: '170–174', text: '**Monitor movements in everyone**; mood-disorder patients may be at greater risk.' },
        baseline: 'Yes', early: '—', ongoing: 'Every 6 months (first-generation) or 12 months (second-generation); every 3 or 6 months respectively if high risk (older age, mood disorder, prior movement effects)', act: 'Emerging dyskinesia → document, discuss dose/switch, consider a VMAT2 inhibitor', source: 'APA schizophrenia guideline (2020)' },
      { id: 'ap-prl', param: 'Prolactin (symptom-led)', book: { ch: 'ch05', pages: '164–165', text: 'Tuberoinfundibular D2 blockade → **hyperprolactinemia**.' },
        baseline: 'Ask about galactorrhea, menstrual change, sexual dysfunction', early: 'Measure if symptomatic', ongoing: 'Measure if symptomatic', act: 'Symptomatic hyperprolactinemia → reduce, switch (e.g., to a partial agonist), or add aripiprazole', source: 'APA schizophrenia guideline (2020); expert practice' },
      { id: 'ap-ecg', param: 'ECG / QTc', book: { ch: 'ch05', pages: '179–183', text: 'Agents with **QTc** warnings (thioridazine, mesoridazine, pimozide; ziprasidone).' },
        baseline: 'If cardiac risk factors, QT-prolonging co-medication, or a QTc-prolonging agent', early: 'After dose increase of a QTc-prolonging agent', ongoing: 'As indicated', act: 'QTc > 500 ms or rise > 60 ms → stop/switch, correct electrolytes, cardiology', source: 'US product labeling (agent-specific); APA schizophrenia guideline (2020)' }
    ],
    sources: [
      { label: 'ADA/APA/AACE/NAASO consensus development conference on antipsychotic drugs and obesity and diabetes (Diabetes Care 2004)', detail: 'The widely used metabolic monitoring table: baseline, 4, 8, 12 weeks, quarterly, yearly, 5-yearly.' },
      { label: 'APA practice guideline for the treatment of patients with schizophrenia, 3rd ed. (2020)', detail: 'Movement-disorder assessment frequency; prolactin and ECG guidance.' },
      { label: 'Agent-specific US product labeling', detail: 'QTc, prolactin and metabolic warnings for individual drugs.' }
    ]
  }
];
