export const address = [
  {
    clinicName: "PEAK POINT PHYSICAL THERAPY, PC",
    addressLine1: "225 Broadway, Suite 1420",
    addressLine2: "New York, NY 10007",
    tel: "(212) 571-5000",
    fax: "(212) 571-5001"
  },
  {
    clinicName: "PEAK POINT PHYSICAL THERAPY, PC PLLC",
    addressLine1: "3065 Brighton",
    addressLine2: "", // No second address line provided
    tel: "", // No contact details provided
    fax: ""
  },
  {
    clinicName: "PEAK POINT PHYSICAL THERAPY, PC",
    addressLine1: "3514 Mermaid Avenue, Suite 003",
    addressLine2: "Brooklyn, NY 11224",
    tel: "(718) 996-1100",
    fax: "(718) 676-9511"
  }
];


export const PMH = [
  'Hypertension', 'Asthma',
  'Diabetes', 'Thyroid disorder',
  'High', 'Cholesterol', 'Arthritis'
]

export const GENDER = [
  { label: "Men", value: "Men" },
  { label: "Women", value: "Women" }
]

export const HTYPE = [
  { label: "house", value: "house" },
  { label: "apartment", value: "apartment" }
]

export const testResults = [
  { label: "NDI", value: "https://orthopowertools.com/NDI" },
  { label: "Oswestry", value: "https://orthotoolkit.com/oswestry/" },
  { label: "LEFS", value: "https://orthopowertools.com/LEFS" },
  { label: "QuickDASH", value: "https://orthopowertools.com/QUICKDASH" }
]

export const DX = [
  "Low back pain M54.50",
  "Lumbar radiculopathy M54.16",
  "Lumbar disc displacement M51.26",
  "Lumbar strain S39.012D",
  "Lumbar spondylosis M43.06",
  "Gait abnormality R26.89",
  "Multiple arthritis M15.9",
  "S/p Orthopedic aftercare Z47.89",
  "History of fall Z91.81",
  "Other muscle spasm M62.838",
  "Muscle spasm of back M62.830",
  "Muscle weakness specific R53.1",
  "Muscle weakness General M62.81",
  "Parasythesia R20.2",
  "Stroke I63.9",
  "Lt hip pain M25.552",
  "Rt hip pain M25.551",
  "Unspecified ITB Syndrome M76.30",
  "Lt ITB Syndrome M76.32",
  "Rt ITB Syndrome M76.31",
  "Lt knee pain M25.562",
  "Rt knee pain M25.561",
  "BL knee OA M17.0",
  "Rt knee OA M17.11",
  "Lt knee OA M17.12",
  "Rt knee sprain S83.91XD",
  "Lt knee sprain S83.92XD",
  "Lt ankle/foot pain M25.572",
  "Rt ankle/foot pain M25.571",
  "Plantar fasciitis M72.2",
  "Mid back pain M54.6",
  "Neck pain M54.2",
  "Cervical radiculopathy M54.12",
  "Cervical disc displacement M50.20",
  "Dizziness/ Vertigo R42",
  "Cervicogenic headache G44.86",
  "Lt shoulder pain M25.512",
  "Rt shoulder pain M25.511",
  "Adhesive capsulitis, Unspecified M75.00",
  "Lt Adhesive capsulitis M75.02",
  "Rt Adhesive capsulitis M75.01",
  "Lt shoulder strain S46.912D",
  "Rt shoulder strain S46.911D",
  "Lt shoulder OA M19.012",
  "Rt shoulder OA M19.011",
  "Lt shoulder impingement syndrome M75.42",
  "Rt shoulder impingement syndrome M75.41",
  "Lt elbow pain M25.522",
  "Rt elbow pain M25.521",
  "Lt Lateral epicondylitis M77.12",
  "Rt Lateral epicondylitis M77.11",
  "Lt Medial epicondylitis M77.02",
  "Rt Medial epicondylitis M77.01",
  "Lt wrist pain M25.532",
  "Rt wrist pain M25.531",
  "Carpal tunnel syndrome M56.00",
  "Lt carpal tunnel syndrome M56.02",
  "Rt carpal tunnel syndrome M56.01",
  "Finger pain M79.646",
  "Lt hand pain M79.642",
  "Rt hand pain M79.641",
  "Lt hand OA M19.042",
  "Rt hand OA M19.041",
];

export const radiatingAreas = ["BLE", "BUE", "LLE", "LUE"];
export const symptoms = ["tingling", "numbness", "burning"];
export const durationUnits = ["days", "months", "years"];
export const causes = [
  "MVA",
  "Fall",
  "Lifting heavy weight",
  "getting a jerk on ____",
];

export const bodyParts = [
  "NECK",
  "Left Shoulder",
  "Right Shoulder",
  "BL Shoulder",
  "Left Elbow",
  "Right Elbow",
  "BL Elbow",
  "Left Wrist",
  "Right Wrist",
  "BL Wrist",
  "Mid back",
  "Lower back",
  "Left Hip",
  "Right Hip",
  "BL Hip",
  "Left Knee",
  "Right Knee",
  "BL Knee",
  "Left Ankle",
  "Right Ankle",
  "BL Ankle",
  "Left Finger",
  "Right Finger",
  "BL Finger",
  "Left Toes",
  "Right Toes",
  "BL Toes"
];

export const stregthDetails = {
  "NECK": "Cx paraspinal and BUE",
  "Lower Back": "Lx paraspinal and BLE",
  "Mid Back": "Tx paraspinal and BUE",
  "Left Finger": "Hand muscles and UE",
  "Right Finger": "Hand muscles and UE",
  "BL Finger": "Hand muscles and UE",
  "Left Toes": "Foot muscles and LE",
  "Right Toes": "Foot muscles and LE",
  "BL Toes": "Foot muscles and LE",
  "Left Shoulder": "Shoulder prime movers",
  "Right Shoulder": "Shoulder prime movers",
  "BL Shoulder": "Shoulder prime movers",
  "Left Elbow": "Elbow prime movers",
  "Right Elbow": "Elbow prime movers",
  "BL Elbow": "Elbow prime movers",
  "Left Wrist": "Wrist prime movers",
  "Right Wrist": "Wrist prime movers",
  "BL Wrist": "Wrist prime movers",
  "Left Hip": "Hip prime movers",
  "Right Hip": "Hip prime movers",
  "BL Hip": "Hip prime movers",
  "Left Knee": "Knee prime movers",
  "Right Knee": "Knee prime movers",
  "BL Knee": "Knee prime movers",
  "Left Ankle": "Ankle prime movers",
  "Right Ankle": "Ankle prime movers",
  "BL Ankle": "Ankle prime movers",
}

export const palpation = {
  "NECK": "BL Cx paraspinal, Trapezius, SCM, Scalene, Rhomboids, Levators",
  "Lower Back": "BL Lx paraspinal, Piriformis, Gluteals, TFL, Hamstrings, Calves",
  "Mid Back": "BL Tx paraspinals, Latissimus dorsi, Rhomboids, Levators",
  "Left Finger": "Hand muscles, Finger prime movers",
  "Right Finger": "Hand muscles, Finger prime movers",
  "BL Finger": "Hand muscles, Finger prime movers",
  "Left Toes": "Foot muscles and Toe prime movers, Foot arch",
  "Right Toes": "Foot muscles and Toe prime movers, Foot arch",
  "BL Toes": "Foot muscles and Toe prime movers, Foot arch",
  "Left Shoulder": "Deltoids, RC, Pectoralis, Rhomboids, Brachialis",
  "Right Shoulder": "Deltoids, RC, Pectoralis, Rhomboids, Brachialis",
  "BL Shoulder": "Deltoids, RC, Pectoralis, Rhomboids, Brachialis",
  "Left Elbow": "Biceps, Triceps, Brachialis, Supinator, Pronator",
  "Right Elbow": "Biceps, Triceps, Brachialis, Supinator, Pronator",
  "BL Elbow": "Biceps, Triceps, Brachialis, Supinator, Pronator",
  "Left Wrist": "Hand muscles, Wrist flexors, Wrist extensors",
  "Right Wrist": "Hand muscles, Wrist flexors, Wrist extensors",
  "BL Wrist": "Hand muscles, Wrist flexors, Wrist extensors",
  "Left Hip": "Iliopsoas, TFL, Gluteals",
  "Right Hip": "Iliopsoas, TFL, Gluteals",
  "BL Hip": "Iliopsoas, TFL, Gluteals",
  "Left Knee": "Quadriceps, ITB, Calf, Tib ant/post, Hamstrings",
  "Right Knee": "Quadriceps, ITB, Calf, Tib ant/post, Hamstrings",
  "BL Knee": "Quadriceps, ITB, Calf, Tib ant/post, Hamstrings",
  "Left Ankle": "Foot arches, Calf, Tib ant/post, Peroneals",
  "Right Ankle": "Foot arches, Calf, Tib ant/post, Peroneals",
  "BL Ankle": "Foot arches, Calf, Tib ant/post, Peroneals",
}

const commonMovementsForSecA = [
  { movement: "Flexion : Reduced", showPostfix: true, postfixVal: "% > pain ^" },
  { movement: "Extension : Reduced", showPostfix: true, postfixVal: "% > pain ^" },
  { movement: "Side Bending : Reduced", showPostfix: true, postfixVal: "% > pain ^" },
  { movement: "Rotation : Reduced", showPostfix: true, postfixVal: "% > pain ^" },
];

const commonMovementsForSecB = [
  { movement: "Flexion : Reduced", showPostfix: true, postfixVal: "% > pain ^" },
  { movement: "Extension : Reduced", showPostfix: true, postfixVal: "% > pain ^" },
  { movement: "Abduction : Reduced", showPostfix: true, postfixVal: "% > pain ^" },
  { movement: "Aduction : Reduced", showPostfix: true, postfixVal: "% > pain ^" },
]

const commonMovementsForSecC = [
  { movement: "Flexion", showPostfix: true, postfixVal: "* > pain ^" },
  { movement: "Extension", showPostfix: true, postfixVal: "* > pain ^" },
  { movement: "Abduction", showPostfix: true, postfixVal: "* > pain ^" },
  { movement: "External Rot.", showPostfix: true, postfixVal: "* > pain ^" },
  { movement: "Internal Rot.", showPostfix: true, postfixVal: "* > pain ^" },
]

export const bodyPartConfig = {
  "Neck": commonMovementsForSecA,
  "Mid back": commonMovementsForSecA,
  "LB": commonMovementsForSecA,
  "Lumbar spine": commonMovementsForSecA,
  "Cervical spine": commonMovementsForSecA,
  "Thoracic spine": commonMovementsForSecA,
  "Finger": commonMovementsForSecB,
  "Toes": commonMovementsForSecB,
  "Left shoulder": commonMovementsForSecC,
  "Right shoulder": commonMovementsForSecC,
  "Hip": commonMovementsForSecC,
  "Knee": [
    { movement: "Flexion" },
    { movement: "Extension" }
  ],
  "Elbow": [
    { movement: "Flexion" },
    { movement: "Extension" },
    { movement: "Supination" },
    { movement: "Pronation" }
  ],
  "Ankle": [
    { movement: "Flexion" },
    { movement: "Extension" },
    { movement: "Inversion" },
    { movement: "Eversion" }
  ],
  "Wrist": [
    { movement: "Flexion" },
    { movement: "Extension" },
    { movement: "Ulnar deviation" },
    { movement: "Radial deviation" }
  ]
};

export const gait = [
  "mod to sev guarded with antalgic gait and decreased cadence",
  "Antalgic, slow and guarding",
  "Normal",
  "Not available to demonstrate"
];

export const posture = [
  "Increased lumbar lordotic curve",
  "Increased cervical lordotic curve",
  "Decreased thoracic kyphotic curve",
  "Lordotic posture",
  "Kypholordotic posture",
  "Flat low back posture",
  "Postural Scoliosis",
  "Idiopathic scoliosis",
  "Adolescent idiopathic scoliosis",
  "Neuromuscular scoliosis",
  "Anterior pelvic tilt",
  "Shrugged shoulders",
  "Increased thoracic kyphotic curve",
  "Decreased cervical lordotic curve",
  "Kyphotic posture",
  "Slouched Posture",
  "Flat upper back posture",
  "Structural Scoliosis",
  "Congenital scoliosis",
  "Degenerative scoliosis",
  "Kyphoscoliosis",
  "Posterior pelvic tilt",
  "Knee hyperextension",
  "Protruded Head",
  "Rounded shoulders",
  "Unleveled shoulders",
  "Lateral Tilt",
  "Anterior Tilt"
]

export const arom = [
  "Neck",
  "LB",
  "Mid back",
  "Cervical spine",
  "Lumbar spine",
  "Thoracic spine",
  "Finger",
  "Toes",
  "Left shoulder",
  "Right shoulder",
  "Hip",
  "Knee",
  "Elbow",
  "Ankle",
  "Wrist"
]

export const bodyPartDetails = {
  "Neck": "C2-7",
  "Lower Back": "L2-5",
  "Mid Back": "T7-12",
  "Left Finger": "MPJ, IPJ",
  "Right Finger": "MPJ, IPJ",
  "BL Finger": "MPJ, IPJ",
  "Left Toes": "MTPJ, IPJ",
  "Right Toes": "MTPJ, IPJ",
  "BL Toes": "MTPJ, IPJ",
  "Left Shoulder": "GHJ",
  "Right Shoulder": "GHJ",
  "BL Shoulder": "GHJ",
  "Left Hip": "AFJ",
  "Right Hip": "AFJ",
  "BL Hip": "AFJ",
  "Left Knee": "PFJ and TFJ",
  "Right Knee": "PFJ and TFJ",
  "BL Knee": "PFJ and TFJ",
  "Left Elbow": "HRJ and HUJ",
  "Right Elbow": "HRJ and HUJ",
  "BL Elbow": "HRJ and HUJ",
  "Left Ankle": "TTJ, TCJ and TNJ",
  "Right Ankle": "TTJ, TCJ and TNJ",
  "BL Ankle": "TTJ, TCJ and TNJ",
  "Left Wrist": "RCJ and CMCJ",
  "Right Wrist": "RCJ and CMCJ",
  "BL Wrist": "RCJ and CMCJ",
};

export const MVMT = [
  "Flex", "Ext", "SB", "Rot", "Add", "Abd", "Supin", "Pron"
]

export const specialTest = [
  "SLR", "McMurray", "Slump", "McMurray", "Empty Can", "Neer"
]

export const testResult = [
  "P", "N"
]

export const balance = [
  "Normal", "Good", "Fair", "Poor"
]

export const functionalStatus = [
  "Sitting > 25 min till Pain^", "Twisting/Turning> sev-mod diff", ""
]

export const days = [
  "days", "week"
]

export const yesNo = [
  "Yes", "No"
]

export const duration = [
  "1 time/week",
  "2 times/week",
  "3 times/week",
  "4 times/week",
  "5 times/week"
]

export const goals = [
  "Increase ROM to WFL with Pain 2/10",
  "Increase Strength in LB & BLE by 1 grade",
  "Increase pushing/pulling > mod diff",
  "Increase Transfers -->  mod diff",
  "Increase bed mobility -->  mod diff"
]

export const options = [
  { value: "Mid back", label: "Mid back" },
  { value: "LB", label: "LB" },
  { value: "Lumbar spine", label: "Lumbar spine" },
  { value: "Toes", label: "Toes" },
  { value: "Left shoulder", label: "Left shoulder" },
  { value: "Right shoulder", label: "Right shoulder" },
  { value: "Neck", label: "Neck" },
  { value: "Cervical spine", label: "Cervical spine" },
  { value: "Thoracic spine", label: "Thoracic spine" },
  { value: "Finger", label: "Finger" },
  { value: "Hip", label: "Hip" },
  { value: "Knee", label: "Knee" },
  { value: "Elbow", label: "Elbow" },
  { value: "Ankle", label: "Ankle" },
  { value: "Wrist", label: "Wrist" },
];

export const PLAN_OPTIONS = [
  "ADLs/IADLS training - To perform ADLs and IADLS w/o restriction",
  "Balance Training - To improve & normalize balance & coordination",
  "Cold Pack (CP) - Reduce pain and inflammation",
  "Dynamic exerc. - To restore functional performance",
  "ESTIM - To control pain and swelling",
  "Gait training - To improve and normalize gait.",
  "HEP - To maintain the acquired functional ability",
  "HEP - To prevent worsening of the condition",
  "Joint Mobs - Reduce pain and increase flexibility",
  "Manual Stretching - To restore flexibility",
  "McKenzie Exercise Program - To restore ROM",
  "McKenzie Exercise Program - To restore ROM & functional mobility",
  "MFR - To reduce muscle spasm & increase flexibility",
  "MFR - To restore mobility to restricted soft tissue",
  "Moist Heat Pack (MHP) - Reduce pain & increase flexibility",
  "NMR - To improve balance & coordination",
  "NMR - To improve kinesthetic sense & motor efficiency",
  "NMR - To improve posture and proprioception",
  "Paraffin - To improve flexibility & reduce pain",
  "Patient education - To prevent worsening of the condition",
  "PNF - To improve flexibility & reduce muscle spasm",
  "PNF - To improve muscle elasticity",
  "PNF - To increase ROM",
  "Postural reeducation - To correct posture",
  "PROM/AROM Exerc - To restore ROM to restricted areas",
  "Resistance exercises - To improve strength and coordination",
  "Stairs training - To help with stair negotiation",
  "Stationary Bike - To increase ROM, reduce swelling, increase flexibility",
  "Taping - Posture correction",
  "Taping - To correct movement mechanics",
  "Taping - To reduce pain, swelling",
  "Taping - To restrict joint movement",
  "Therapeutic Massage - For pain reduction & improving flexibility",
  "Therapeutic Massage - To increase blood & lymph circulation",
  "Therapeutic Massage - To increase blood, lymph circulation & reduce swelling",
  "Trigger point release - To reduce pain & increase flexibility",
  "US - To reduce deep tissue inflammation"
]

export const patientData = {
  header: {
    clinic_name: "PEAK POINT PHYSICAL THERAPY, PC",
    address: "466 Chamberlain Ave., Paterson, NJ 07522",
    contact: "Tel. (732) 771-9023, Fax (732) 444-4326",
    date: "Sep 18, 2024",
    dob: "1969-05-10",
    patientName: "Augustine Rex"
  },
  patient_info: {
    dx: [
      { name: "LBP (M54.50)" },
      {
        name: "Muscle Spasms (M62.830)"
      },
      {
        name: "Muscle Spasms (M62.830)"
      },
      { name: "Lumbar Disc herniation (M51.26)" },
      {
        name: "Muscle Spasms (M62.830)"
      },
    ],
    hx: "Returning patient c/o increasing low back pain and stiffness with numbness and tingling traveling down left leg. ",
    allergies: "Penicillin",
    medications: "Please see attachment",
    pmh: "Depression",
    psh: "Stomach Sx",
    social: "53 y.o. male, lives with family and works as a school bus driver.",
    test_results: "Oswestry ~ 68%",
    subjective:
      "Patient reports with increasing 9/10 low back pain with numbness and tingling traveling down left leg. Pain increases with squatting, lifting, prolonged sitting/standing.",
    physical: {
      observation: {
        gait: "mod to sev guarded with antalgic gait and decreased cadence",
        posture: "Forward Head and Round shoulders, increased lumbar lordosis",
      },
      arom: {
        flex: "red. 45% > pn/stiff",
        ext: "red. 65% > pn/stiff",
        sb: "red. 60% > pn/stiff",
        ext_rot: "red. 55% > pn/stiff",
      },
      prom: {
        lx_spine: "Red 40-60% all direct",
        shoulder: "Add.",
      },
      joint_mobs: "PA L2-5 & B/L SJ Grade 1+ to 2 --> Pain",
      strength: "B/L Lx-Paraspinal and BLE --> grossly 3+/5 to 4-/5 on MMT",
      special_test: {
        slr: "P",
        mckenzie: "P",
        apprehension: "P",
        va: "Lachman",
      },
      palpation:
        "B/L Lx-Paraspinal, QL mm, Piriformis, Gluteals --> trigger points --> severe tenderness (L>R)",
      tone: "B/L Lx-Paraspinal, Piriformis, Gluteals, Hamstrings, ITB, Quads --> Sev-mod muscle spasm (L>R)",
    },
  },
  coordination_balance: "Fair due to pain",
  reflexes: "Intact",
  sensation: "Radiating pain with numbness and tingling traveling down L LE",
  skin: "Intact",
  girth: "Normal",
  functional_status: {
    note: "Patient has difficulties with functional activities such as",
    activities: [
      "Sitting > 25 min till Pain^",
      "Twisting/Turning -> sev-mod diff",
      "Transfers -> sev-mod diff, pn",
      "Squatting -> sev-mod diff, pain",
      "Standing >12-15 min till Pain^",
      "Ambulation -> 2 blocks till Pain^",
      "Pushing/Pulling -> sev-mod diff, pain",
      "Bed mobility -> sev-mod diff, pn",
      "Bend & lift objects > 4-5 lbs diff, Pain",
    ],
  },
  prior_functional_status:
    "Patient had no limitations in functional activities mentioned above prior to the present impairment: ambulation > 10+ blocks to local grocery store, standing > 90+ min, sitting > 120+ minutes, Bending & Lifting objects > 25 Lbs, normal pulling/Twist/Turn/Bed mobility/Prolong sit-stand/Walk uphill/Sweep/Mop -> no diff, squatting > min to no diff",
  assessment:
    "Returning 53 y.o. patient with LBP with radiating pain with numbness and tingling traveling down left leg. Pt had MRI for lumbar spine in July showing multilevel disc herniations with left sided nerve impingement. Examination shows increased tenderness and muscle spasm with decreased strength and mobility. Pt confronted with sev-mod difficulty dealing with daily activities and adapting wrong biomechanics to avoid pain. Skilled PT and HEP will be helpful to improve patient condition and quality of life. (LOW COMPLEXITY)",
  goals: {
    short_term: [
      "1) Increase LB ROM by 45% with Pain 3/10",
      "2) Increase Strength in LB & BLE by 1 grade",
      "3) Increase Squatting -> mod diff",
      "4) Increase Transfers -> mod diff",
      "5) Increase Mobility -> mod diff",
    ],
    long_term: [
      "1) Increase LB ROM to 85-90% without Pain",
      "2) Increase Strength in LB & BLE -> grade 4+/5 to 5/5",
      "3) Increase Squatting -> min to no diff",
      "4) Increase Turning/twisting -> no diff",
      "5) Increase Lifting > 100+ lbs",
    ],
  },
  plan: {
    details: [
      "E stim + MHP/CP to Lx spine & BLE",
      "Joint Mobs to LB",
      "McKenzie Exercise program to LB",
      "MFR to LB & BLE",
      "AROM, PROM, AAROM Exs to LB & BLE",
      "Isometric exercises",
      "Stretching Exercise to LB",
      "Postural Correction ex.",
      "Dynamic exercises",
      "Bike",
      "Strength Exercises to BLE",
      "Patient Education/HEP",
      "Core strengthening",
      "Work hardening Ex",
    ],
  },
  frequency: "2-3 times/week",
  certification: {
    patient_certification:
      "Patient/Family advised of findings and has agreed to participate in Treatment Plan: Yes",
    physician_certification: "",
    therapist_signature: "",
    date: "",
  },
};
