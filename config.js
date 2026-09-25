/* =====================================================================
   SIR MUHAMMAD AMMAR SAMANA — SITE CONFIG
   Built by Nexlyr Solutions.

   The ONLY file you edit for contact details, links, campus info,
   intake dates, results, reviews and lectures. Every page reads it.

   RULE: anything marked "TO CONFIRM" is deliberately blank. Blank
   fields and empty lists are HIDDEN automatically — the site never
   shows a dead link, an invented number or a placeholder review.
   ===================================================================== */

window.SITE = {

  /* ---- identity (verified from his public pages) ------------------ */
  fullName:  "Muhammad Ammar Samana",
  shortName: "Ammar Samana",
  honorific: "Sir",
  slogan:    "Samana Ka Zamana",
  tagline:   "A teacher by passion, an entrepreneur by profession.",
  bioLine:   "More than an Accounting teacher — a mentor who turns concepts into confidence, and students into achievers.",
  welcome:   "Welcome to the journey of excellence.",
  credential:"CAIE certified Accounting and Business teacher",
  roles:     ["Tutor", "Lecturer", "Facilitator", "Academic Coordinator"],
  teaches:   "O and A Level Accounting, Business and Economics",
  city:      "Karachi",
  country:   "Pakistan",

  /* ---- contact ----------------------------------------------------
     whatsapp: digits only, country code first. From his own public
     registration post.                                                */
  whatsapp:  "923323649170",
  phoneShow: "+92 332 3649170",
  email:     "",                // TO CONFIRM
  mapUrl:    "",                // TO CONFIRM — Google Maps pin for the campus

  /* ---- socials (verified public accounts) ------------------------- */
  facebook:  "https://www.facebook.com/ammar.samana",
  instagram: "https://www.instagram.com/ammar.samana",
  linkedin:  "",                // TO CONFIRM — exact profile URL
  youtube:   "",                // TO CONFIRM — exact channel URL (enables the Lectures section)

  /* ---- where he teaches ------------------------------------------- */
  campuses: [
    { name: "Bahadurabad", area: "Bahadurabad, Karachi", note: "On-campus classes" }
    // TO CONFIRM — add further campuses with exact addresses
  ],
  online: true,

  /* ---- affiliations (from his public profiles) -------------------- */
  affiliations: ["Glide Guide Consultancy", "Iqra University", "Titan College"],

  /* ---- class timings ----------------------------------------------
     Only the CURRENT standing timetable. Empty → "confirmed per intake".
     His own orientation post used this order (confirm before enabling):
       A2 7:30–8:30pm · AS 8:30–9:30pm · O Level / IGCSE 9:30–10:30pm   */
  timings: [
    // { level: "A2",              time: "7:30 – 8:30 pm"  },
    // { level: "AS",              time: "8:30 – 9:30 pm"  },
    // { level: "O Level / IGCSE", time: "9:30 – 10:30 pm" }
  ],

  /* ---- intake countdown -------------------------------------------
     Set a real date/time and a live countdown appears on the Classes
     page and the home page. Leave "" to hide it.
     Format: "2026-10-11T19:30:00+05:00"                               */
  intakeDate:  "",
  intakeLabel: "Next intake begins",
  intakeOpen:  true,            // false → CTAs switch to "Join the waitlist"
  sessionYear: "2027",

  /* ---- introduction video -----------------------------------------
     A YouTube link to his introduction. Empty → button hidden.         */
  introVideo: "",

  /* ---- results -----------------------------------------------------
     Only real, verifiable figures. Empty list → section hidden.
     { value: "12", label: "A* in 9706", note: "May/June 2025" }        */
  results: [],

  /* ---- student reviews ---------------------------------------------
     Only real reviews, with the student's permission. Empty → hidden.
     { quote: "…", name: "First name L.", meta: "A2 Accounting, 2025" } */
  reviews: [],

  /* ---- lectures ----------------------------------------------------
     Links to his published lectures (YouTube etc). Empty → section
     shows only the channel link (if youtube is set) or is hidden.
     { title: "Bank reconciliation", url: "https://…", level: "O Level", subject: "Accounting", free: true } */
  lectures: [],

  /* ---- numbers ------------------------------------------------------
     DELIBERATELY EMPTY. Only figures he will stand behind publicly.    */
  claims: {
    yearsTeaching:  "",
    studentsTaught: ""
  },

  /* ---- photo --------------------------------------------------------
     Upload a portrait named ammar.jpg next to index.html (about 1200×1500).
     Missing → a designed monogram plate is shown instead.              */
  photo: "ammar.jpg",

  /* ---- past paper PDFs ---------------------------------------------
     Folder URL of the paper PDFs (Cambridge filenames, e.g.
     9706_s23_qp_22.pdf). Empty → portal shows "Request access".        */
  pdfBase: "",

  /* ---- agency credit ------------------------------------------------ */
  agency:    "Nexlyr Solutions",
  agencyUrl: "https://nexlyr.solutions"
};
