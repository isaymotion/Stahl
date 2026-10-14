/* Drug families: the broad "type of drug" used to filter Compare, the drug database and the Nomenclature page.
   Each family lists the library groups (the `group` field on drug entries) that belong to it, in display order. */
SP.drugFamilies = [
  { id: 'antipsychotic', label: 'Antipsychotics (so-called)', groups: ['D2 antagonist (first generation)', '5HT2A/D2 antagonist', 'D2/5HT1A partial agonist', 'Selective 5HT2A antagonist', 'Muscarinic agonist', 'Investigational drug for psychosis'] },
  { id: 'ssri-snri', label: 'SSRIs and SNRIs', groups: ['SSRI', 'SNRI'] },
  { id: 'antidep-other', label: 'Other antidepressants', groups: ['Antidepressant'] },
  { id: 'tca', label: 'Tricyclics', groups: ['Tricyclic antidepressant'] },
  { id: 'maoi', label: 'MAO inhibitors', groups: ['MAO inhibitor'] },
  { id: 'mood', label: 'Mood stabilizers and anticonvulsants', groups: ['Mood stabilizer', 'Anticonvulsant', 'Glutamate modulator'] },
  { id: 'adhd', label: 'Stimulants and ADHD agents', groups: ['Stimulant', 'NRI', 'Investigational drug for ADHD'] },
  { id: 'wake', label: 'Wake-promoting agents', groups: ['Wake-promoting agent'] },
  { id: 'gaba', label: 'Benzodiazepines, Z-drugs and neuroactive steroids', groups: ['Benzodiazepine', 'Benzodiazepine antagonist', 'Z-drug hypnotic', 'Neuroactive steroid'] },
  { id: 'sleep-anx', label: 'Other hypnotics and anxiolytics', groups: ['Orexin antagonist', 'Melatonergic agent', 'Antihistamine', '5HT1A partial agonist', 'Hypnotic'] },
  { id: 'adrenergic', label: 'Adrenergic agents', groups: ['α2 agonist', 'α1 antagonist'] },
  { id: 'dementia', label: 'Dementia drugs', groups: ['Dementia treatment', 'Anti-amyloid antibody'] },
  { id: 'nmda', label: 'NMDA antagonists', groups: ['NMDA antagonist'] },
  { id: 'addiction', label: 'Opioids and addiction medicines', groups: ['Opioid', 'Opioid antagonist', 'Addiction treatment', 'Nicotinic partial agonist'] },
  { id: 'abuse', label: 'Drugs of abuse and cannabinoids', groups: ['Drug of abuse', 'Hallucinogen', 'Cannabinoid'] },
  { id: 'movement', label: 'Movement-disorder drugs', groups: ['VMAT2 inhibitor', 'VMAT inhibitor', 'Parkinson’s disease treatment', 'Anticholinergic', 'Movement disorder treatment', 'Muscle relaxant'] },
  { id: 'other', label: 'Adjuncts and other agents', groups: ['Metabolic adjunct', 'Hormone', 'Local anesthetic', 'Antiemetic', 'CYP2D6 inhibitor'] }
];
