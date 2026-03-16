import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

import { useState } from "react";

interface SpecialtyData {
  name: string;
  emoji: string;
  description: string;
  procedures: string[];
  keyFacts: string[];
  pmjayBenefit: string;
  commonConditions: string[];
  references: { label: string; url: string }[];
}

const categories: SpecialtyData[] = [
  {
    name: "Oncology",
    emoji: "🎗️",
    description:
      "PM-JAY provides end-to-end cancer care coverage — from diagnosis to surgery, chemotherapy, radiation, and palliative support.",
    procedures: [
      "Chemotherapy cycles",
      "Radical mastectomy",
      "Lung resection",
      "Bone marrow biopsy",
      "Radiation therapy",
      "Laryngectomy",
      "Gastrectomy for cancer",
    ],
    keyFacts: [
      "India records ~14 lakh new cancer cases every year",
      "Breast, cervical, and oral cancers are most common among PM-JAY beneficiaries",
      "PM-JAY covers Day-1 oncology procedures including diagnostics",
      "Over 1.2 lakh cancer surgeries funded under PM-JAY as of 2024",
    ],
    pmjayBenefit:
      "Up to ₹5 lakh per year covers surgery, chemo, and radiation at any empanelled cancer hospital cashlessly.",
    commonConditions: [
      "Breast cancer",
      "Oral cancer",
      "Cervical cancer",
      "Lung cancer",
      "Colorectal cancer",
    ],
    references: [
      { label: "NHA – PM-JAY Cancer Packages", url: "https://pmjay.gov.in" },
      {
        label: "Indian Council of Medical Research (ICMR)",
        url: "https://www.icmr.gov.in",
      },
      { label: "National Cancer Grid India", url: "https://tmc.gov.in/ncg" },
    ],
  },
  {
    name: "Cardiology",
    emoji: "❤️",
    description:
      "Comprehensive cardiac care from diagnostics and angioplasty to open-heart surgery — all cashless under PM-JAY at empanelled hospitals.",
    procedures: [
      "Coronary Artery Bypass Graft (CABG)",
      "Angioplasty with stent",
      "Pacemaker implantation",
      "Heart valve replacement",
      "Echocardiography",
      "Cardiac catheterization",
    ],
    keyFacts: [
      "Cardiovascular disease is India's #1 cause of death",
      "A single CABG surgery can cost ₹2–4 lakh — fully covered under PM-JAY",
      "Over 3 lakh cardiac procedures performed under PM-JAY since launch",
      "PM-JAY includes 248 cardiology-related packages",
    ],
    pmjayBenefit:
      "Covers all major cardiac surgeries including valve replacement, CABG, and stenting, eliminating out-of-pocket costs for the poor.",
    commonConditions: [
      "Coronary artery disease",
      "Heart failure",
      "Arrhythmia",
      "Valvular heart disease",
      "Hypertension complications",
    ],
    references: [
      {
        label: "PM-JAY Cardiology Packages – NHA",
        url: "https://pmjay.gov.in",
      },
      { label: "Cardiological Society of India", url: "https://csi.org.in" },
      {
        label: "WHO – Cardiovascular Diseases",
        url: "https://www.who.int/health-topics/cardiovascular-diseases",
      },
    ],
  },
  {
    name: "Neurosurgery",
    emoji: "🧠",
    description:
      "PM-JAY covers complex brain and spinal surgeries that were previously unaffordable for millions of Indians.",
    procedures: [
      "Craniotomy for brain tumour",
      "VP Shunt for hydrocephalus",
      "Spinal disc surgery",
      "Cerebral aneurysm clipping",
      "Epilepsy surgery",
      "Deep Brain Stimulation",
    ],
    keyFacts: [
      "India has ~18 lakh stroke patients annually",
      "A single brain surgery can cost ₹1.5–5 lakh — covered under PM-JAY",
      "PM-JAY includes 156 neurology and neurosurgery packages",
      "Beneficiaries can access AIIMS, NIMHANS, and Apollo under PM-JAY",
    ],
    pmjayBenefit:
      "Covers emergency and elective neurosurgery including brain tumour removal and spinal cord decompression at no cost to the patient.",
    commonConditions: [
      "Stroke",
      "Brain tumours",
      "Epilepsy",
      "Spinal cord injury",
      "Hydrocephalus",
    ],
    references: [
      {
        label: "Neurological Society of India",
        url: "https://www.nsindia.org",
      },
      { label: "NIMHANS Bangalore", url: "https://nimhans.ac.in" },
      { label: "PM-JAY NHA Portal", url: "https://pmjay.gov.in" },
    ],
  },
  {
    name: "Orthopaedics",
    emoji: "🦴",
    description:
      "From joint replacements to fracture surgeries, PM-JAY restores mobility for millions suffering from bone and joint conditions.",
    procedures: [
      "Total Knee Replacement (TKR)",
      "Total Hip Replacement (THR)",
      "Spine surgery",
      "Fracture fixation",
      "Arthroscopy",
      "Bone graft procedures",
    ],
    keyFacts: [
      "Osteoarthritis affects 15% of India's population over 60",
      "Knee replacement costs ₹1–2 lakh per knee — fully covered under PM-JAY",
      "Orthopaedics accounts for the highest number of PM-JAY surgical claims",
      "Over 4 lakh orthopaedic procedures done under the scheme",
    ],
    pmjayBenefit:
      "Enables elderly and accident victims to get joint replacements and fracture repairs at empanelled hospitals at zero cost.",
    commonConditions: [
      "Osteoarthritis",
      "Rheumatoid arthritis",
      "Fractures",
      "Spondylosis",
      "Sports injuries",
    ],
    references: [
      {
        label: "Indian Orthopaedic Association",
        url: "https://www.ioaindia.org",
      },
      { label: "PM-JAY Orthopaedics Packages", url: "https://pmjay.gov.in" },
      {
        label: "Ministry of Health & Family Welfare",
        url: "https://mohfw.gov.in",
      },
    ],
  },
  {
    name: "Nephrology & Dialysis",
    emoji: "💧",
    description:
      "PM-JAY provides dialysis coverage for chronic kidney disease patients — one of the costliest long-term treatments in India.",
    procedures: [
      "Haemodialysis (per session)",
      "Peritoneal dialysis",
      "Kidney biopsy",
      "AV Fistula creation",
      "Kidney transplant evaluation",
      "CRRT in ICU",
    ],
    keyFacts: [
      "India has 2.2 lakh new End-Stage Renal Disease (ESRD) cases every year",
      "Each dialysis session costs ₹1,500–3,000 — PM-JAY covers up to 3 sessions per week",
      "PM-JAY has a dedicated dialysis programme under PMNDP",
      "Over 30 lakh dialysis sessions funded under the scheme",
    ],
    pmjayBenefit:
      "Regular dialysis sessions are covered cashlessly, removing the catastrophic financial burden on CKD patients and their families.",
    commonConditions: [
      "Chronic Kidney Disease (CKD)",
      "End-Stage Renal Disease",
      "Diabetic nephropathy",
      "Glomerulonephritis",
      "Polycystic kidney disease",
    ],
    references: [
      {
        label: "PM National Dialysis Programme (PMNDP)",
        url: "https://nhm.gov.in/index4.php?lang=1&level=0&linkid=221&lid=3658",
      },
      { label: "Indian Society of Nephrology", url: "https://www.isncon.com" },
      { label: "NHA PM-JAY Portal", url: "https://pmjay.gov.in" },
    ],
  },
  {
    name: "Burns Management",
    emoji: "🏥",
    description:
      "Comprehensive burns care including ICU, skin grafting, and rehabilitation is covered under PM-JAY for accident and fire victims.",
    procedures: [
      "Split-thickness skin grafting",
      "Full-thickness skin grafting",
      "Burns ICU care",
      "Debridement procedures",
      "Contracture release surgery",
      "Wound dressings",
    ],
    keyFacts: [
      "India has ~70 lakh burn injuries annually; ~1.4 lakh result in death",
      "Burns ICU treatment can cost ₹10,000–50,000 per day",
      "PM-JAY covers hospitalisation and reconstructive procedures for burns",
      "Women and children are disproportionately affected by burns in India",
    ],
    pmjayBenefit:
      "Covers emergency burns hospitalisation, ICU, multiple surgeries, and skin grafts — often the only financial safety net for fire accident victims.",
    commonConditions: [
      "Flame burns",
      "Chemical burns",
      "Electrical burns",
      "Scald injuries",
      "Post-burn contractures",
    ],
    references: [
      {
        label: "Indian Burn Association",
        url: "https://www.indianburnassociation.org",
      },
      {
        label: "WHO – Burns Fact Sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/burns",
      },
      { label: "PM-JAY NHA Portal", url: "https://pmjay.gov.in" },
    ],
  },
  {
    name: "Neonatology",
    emoji: "👶",
    description:
      "PM-JAY covers critical care for newborns — including premature babies needing NICU support and complex congenital surgeries.",
    procedures: [
      "NICU admission and monitoring",
      "Mechanical ventilation for newborns",
      "Phototherapy for jaundice",
      "Congenital heart defect surgery",
      "Surfactant therapy",
      "Exchange transfusion",
    ],
    keyFacts: [
      "India has the world's highest number of neonatal deaths (~5.4 lakh per year)",
      "NICU care can cost ₹10,000–₹50,000 per day in private hospitals",
      "PM-JAY covers newborns under the mother's entitlement in the same hospitalisation",
      "Congenital surgeries like VSD repair are covered under PM-JAY",
    ],
    pmjayBenefit:
      "Critically ill newborns receive NICU care, ventilator support, and congenital surgeries at empanelled hospitals at zero cost.",
    commonConditions: [
      "Premature birth complications",
      "Neonatal sepsis",
      "Respiratory Distress Syndrome (RDS)",
      "Congenital heart defects",
      "Neonatal jaundice",
    ],
    references: [
      {
        label: "National Neonatology Forum India",
        url: "https://www.nnfi.org",
      },
      { label: "Ministry of Health – Newborn Care", url: "https://nhm.gov.in" },
      { label: "PM-JAY NHA Portal", url: "https://pmjay.gov.in" },
    ],
  },
  {
    name: "Emergency Trauma",
    emoji: "🚑",
    description:
      "Road accident victims and other trauma patients can receive immediate cashless care at any PM-JAY empanelled hospital, even without prior card verification.",
    procedures: [
      "Emergency laparotomy",
      "Craniotomy for head injury",
      "Fracture fixation",
      "ICU stabilisation",
      "Damage control surgery",
      "Vascular repair",
    ],
    keyFacts: [
      "India records ~4.5 lakh road accident deaths per year — highest in the world",
      "PM-JAY allows emergency admission without Aadhaar authentication",
      "Trauma surgeries can be initiated immediately; documents verified within 24 hours",
      "Multi-organ trauma care costs ₹5–20 lakh — covered under PM-JAY top-up",
    ],
    pmjayBenefit:
      "Emergency trauma care is cashless from minute one — no upfront payment, no delay. Hospitals cannot turn away PM-JAY beneficiaries in emergency.",
    commonConditions: [
      "Road traffic accidents",
      "Head injuries",
      "Polytrauma",
      "Crush injuries",
      "Internal bleeding",
    ],
    references: [
      {
        label: "Ministry of Road Transport – Road Accidents India",
        url: "https://morth.nic.in",
      },
      {
        label: "PM-JAY Cashless Emergency Policy",
        url: "https://pmjay.gov.in",
      },
      {
        label: "Indian Society of Critical Care Medicine",
        url: "https://isccm.org",
      },
    ],
  },
  {
    name: "Ophthalmology",
    emoji: "👁️",
    description:
      "From cataract surgery to retinal treatments and corneal transplants, PM-JAY covers the full spectrum of eye care.",
    procedures: [
      "Phacoemulsification (cataract)",
      "Glaucoma surgery",
      "Retinal detachment repair",
      "Diabetic retinopathy laser",
      "Corneal transplant",
      "Squint correction",
    ],
    keyFacts: [
      "India has ~8 million cataract-blind individuals — largest globally",
      "Cataract surgery under PM-JAY is one of the most performed procedures",
      "Retinal detachment surgery costs ₹30,000–₹80,000 — covered under PM-JAY",
      "PM-JAY includes 88 ophthalmology packages",
    ],
    pmjayBenefit:
      "Restores vision for millions who could not afford eye surgery — from simple cataract removal to complex retinal procedures at zero cost.",
    commonConditions: [
      "Cataract",
      "Glaucoma",
      "Diabetic retinopathy",
      "Retinal detachment",
      "Corneal blindness",
    ],
    references: [
      {
        label: "All India Ophthalmological Society",
        url: "https://www.aios.org",
      },
      {
        label: "National Programme for Control of Blindness",
        url: "https://npcbvi.gov.in",
      },
      { label: "PM-JAY NHA Portal", url: "https://pmjay.gov.in" },
    ],
  },
  {
    name: "Pulmonology",
    emoji: "🫁",
    description:
      "PM-JAY covers respiratory diseases from TB and asthma to complex lung surgeries and ICU management for pneumonia.",
    procedures: [
      "Bronchoscopy",
      "Thoracotomy",
      "VATS (Video-Assisted Thoracic Surgery)",
      "Mechanical ventilation",
      "Pleural drainage",
      "Lung biopsy",
    ],
    keyFacts: [
      "India accounts for 27% of the world's TB burden",
      "COPD affects ~55 million Indians",
      "Lung surgeries can cost ₹1–3 lakh — covered under PM-JAY",
      "PM-JAY coordinates with the National TB Elimination Programme",
    ],
    pmjayBenefit:
      "Covers ICU ventilator support, lung surgeries, and bronchoscopy — critical for TB, pneumonia, and COVID-related respiratory complications.",
    commonConditions: [
      "Tuberculosis (TB)",
      "COPD",
      "Asthma",
      "Lung cancer",
      "Pneumonia",
      "Pleural effusion",
    ],
    references: [
      {
        label: "National TB Elimination Programme",
        url: "https://tbcindia.gov.in",
      },
      {
        label: "Indian Chest Society",
        url: "https://www.indianchestsociety.org",
      },
      { label: "PM-JAY NHA Portal", url: "https://pmjay.gov.in" },
    ],
  },
  {
    name: "Gastroenterology",
    emoji: "⚕️",
    description:
      "Comprehensive GI care including liver disease, GI cancers, endoscopies, and major abdominal surgeries are covered under PM-JAY.",
    procedures: [
      "Endoscopy & colonoscopy",
      "Laparoscopic cholecystectomy",
      "Liver biopsy",
      "GI cancer surgery",
      "ERCP",
      "Hernia repair",
      "Colostomy",
    ],
    keyFacts: [
      "Liver cirrhosis affects over 10 lakh Indians and is rising",
      "Gallstone surgery (laparoscopic) is among PM-JAY's top 10 procedures by volume",
      "Colorectal cancer surgeries cost ₹1.5–3 lakh — fully covered",
      "PM-JAY includes 200+ gastrointestinal and hepatobiliary packages",
    ],
    pmjayBenefit:
      "Removes the cost barrier for life-saving GI surgeries and endoscopic procedures for below-poverty-line families.",
    commonConditions: [
      "Gallstones",
      "Peptic ulcer disease",
      "Liver cirrhosis",
      "Hepatitis B/C",
      "Colorectal cancer",
      "Hernia",
    ],
    references: [
      {
        label: "Indian Society of Gastroenterology",
        url: "https://www.isg.org.in",
      },
      {
        label: "Indian National Association for Study of the Liver",
        url: "https://www.inasl.org",
      },
      { label: "PM-JAY NHA Portal", url: "https://pmjay.gov.in" },
    ],
  },
  {
    name: "Urology",
    emoji: "🔬",
    description:
      "PM-JAY covers kidney stones, prostate conditions, urological cancers, and bladder diseases through comprehensive surgical packages.",
    procedures: [
      "PCNL (kidney stone removal)",
      "TURP for prostate",
      "Cystoscopy",
      "Radical nephrectomy",
      "Urethral stricture surgery",
      "URS Lithotripsy",
    ],
    keyFacts: [
      "Kidney stones affect ~12% of Indians, with high recurrence rates",
      "PCNL surgery costs ₹60,000–₹1.5 lakh — covered under PM-JAY",
      "Prostate cancer is rising in India's ageing male population",
      "PM-JAY includes 130+ urology packages",
    ],
    pmjayBenefit:
      "Kidney stone removal, prostate surgery, and urological cancer treatment are cashless at empanelled hospitals nationwide.",
    commonConditions: [
      "Kidney stones",
      "Benign prostatic hyperplasia",
      "Bladder cancer",
      "Kidney cancer",
      "UTI complications",
    ],
    references: [
      { label: "Urological Society of India", url: "https://www.usi.org.in" },
      { label: "PM-JAY NHA Portal", url: "https://pmjay.gov.in" },
      {
        label: "Indian Cancer Society",
        url: "https://www.indiancancersociety.org",
      },
    ],
  },
];

export default function DiseasesCovered() {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<SpecialtyData | null>(null);

  return (
    <section
      className="section-saffron py-16 md:py-20"
      data-ocid="diseases.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "diseases.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t(lang, "diseases.subtitle")}
          </p>
          <p className="mt-2 text-sm text-muted-foreground italic">
            Click any specialty to see detailed information &amp; references.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setSelected(cat)}
              data-ocid={`diseases.item.${i + 1}`}
              className="flex items-center gap-2 rounded-xl border-2 border-saffron/30 bg-saffron/10 px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:shadow-md hover:border-primary hover:bg-primary/5 cursor-pointer"
            >
              <span className="text-xl">{cat.emoji}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          And many more specialties including Plastic Surgery, ENT, Psychiatry,
          Rheumatology, and Endocrinology.
        </p>
      </div>

      {/* Specialty Detail Dialog */}
      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent
          className="max-w-2xl max-h-[85vh] overflow-y-auto"
          data-ocid="diseases.dialog"
        >
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-2xl">
                  <span className="text-3xl">{selected.emoji}</span>
                  {selected.name}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-2 space-y-5">
                {/* Description */}
                <p className="text-muted-foreground">{selected.description}</p>

                {/* PM-JAY Benefit */}
                <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                  <h4 className="font-bold text-green-800 mb-1">
                    💰 PM-JAY Benefit
                  </h4>
                  <p className="text-green-700 text-sm">
                    {selected.pmjayBenefit}
                  </p>
                </div>

                {/* Key Facts */}
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    📊 Key Facts
                  </h4>
                  <ul className="space-y-1">
                    {selected.keyFacts.map((fact) => (
                      <li
                        key={fact}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5">▸</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Procedures */}
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    🏥 Procedures Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.procedures.map((p) => (
                      <Badge key={p} variant="secondary" className="text-xs">
                        {p}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Common Conditions */}
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    🩺 Common Conditions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.commonConditions.map((c) => (
                      <Badge key={c} variant="outline" className="text-xs">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* References */}
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    🔗 Official References
                  </h4>
                  <ul className="space-y-2">
                    {selected.references.map((ref) => (
                      <li key={ref.label}>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-secondary hover:text-secondary/80 hover:underline flex items-center gap-1"
                        >
                          <span>↗</span> {ref.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
