export const address = [
  "FIRST CLASS PHYSICAL THERAPY, PC 225 Broadway, Suite 1420,New York, NY 10007 Tel. (212) 571-5000,Fax (212) 571-5001",
  "ABSOLUTE CARE PHYSICAL THERAPY GROUP, PLLC3065 Brighto",
  "FIRST CLASS PHYSICAL THERAPY, PC 3514 Mermaid Ave., Suite 003,Brooklyn, NY 11224 Tel. (718) 996-1100,Fax (718) 676-9511",
];

export const patientData = {
  header: {
    clinic_name: "PEAK POINT PHYSICAL THERAPY, PC",
    address: "466 Chamberlain Ave., Paterson, NJ 07522",
    contact: "Tel. (732) 771-9023, Fax (732) 444-4326",
    date: "Sep 18, 2024",
    dob: "1969-05-10",
    patientName : "Augustine Rex"
  },
  patient_info: {
    dx: [
      { name: "LBP (M54.50)", desc: "Lumbar radiculopathy (M54.16)" },
      {
        name: "Muscle Spasms (M62.830)",
        desc: "Lumbar Disc herniation (M51.26)",
      },
    ],
    hx: "Returning patient c/o increasing low back pain and stiffness with numbness and tingling traveling down left leg.",
    allergies: "Penicillin",
    medications: "Please see attachment",
    pmh: "Depression with nerve impingement. PCP recommended patient to see pain management.",
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
