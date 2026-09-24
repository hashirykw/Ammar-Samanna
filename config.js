/* =====================================================================
   SIR MUHAMMAD AMMAR SAMANA — SITE CONFIG
   Built by Nexlyr Solutions.

   This is the ONLY file you edit for contact details, links and campus
   info. Every page on the site reads from here.

   RULE: anything marked "TO CONFIRM" is deliberately blank. Leave it
   blank and the site hides that element instead of showing a dead link
   or an invented number. Nothing on this site is made up.
   ===================================================================== */

window.SITE = {

  /* ---- identity (verified from his public pages) ------------------ */
  fullName:  "Muhammad Ammar Samana",
  shortName: "Ammar Samana",
  honorific: "Sir",
  slogan:    "Samana Ka Zamana",
  tagline:   "A teacher by passion, an entrepreneur by profession.",
  bioLine:   "More than an Accounting teacher — a mentor who turns concepts into confidence, and students into achievers.",
  credential:"CAIE certified Accounting and Business teacher",
  city:      "Karachi",
  country:   "Pakistan",

  /* ---- contact ----------------------------------------------------
     whatsapp: digits only, country code first, no + or spaces.
     Taken from his own public registration post.                      */
  whatsapp:  "923323649170",
  phoneShow: "+92 332 3649170",
  email:     "",                // TO CONFIRM
  mapUrl:    "",                // TO CONFIRM — Google Maps pin for the campus

  /* ---- socials (verified public accounts) ------------------------- */
  facebook:  "https://www.facebook.com/ammar.samana",
  instagram: "https://www.instagram.com/ammar.samana",
  linkedin:  "",                // TO CONFIRM — exact profile URL
  youtube:   "",                // TO CONFIRM — exact channel URL

  /* ---- where he teaches -------------------------------------------
     Add or remove campuses freely — the site renders whatever is here. */
  campuses: [
    { name: "Bahadurabad", area: "Bahadurabad, Karachi", note: "On-campus classes" }
    // TO CONFIRM — add further campuses with exact addresses
  ],
  online: true,                 // live online classes offered

  /* ---- affiliations (from his public profiles) -------------------- */
  affiliations: [
    "Glide Guide Consultancy",
    "Iqra University",
    "Titan College"
  ],

  /* ---- class timings ----------------------------------------------
     LEAVE EMPTY unless these are the CURRENT standing timings. The site
     shows a "timings on request" state when this array is empty, which
     is better than publishing a stale timetable.

     For reference, his own orientation post used this order:
       A2 7:30–8:30pm · AS 8:30–9:30pm · O Level / IGCSE 9:30–10:30pm
     Confirm before uncommenting.                                      */
  timings: [
    // { level: "A2",              time: "7:30 – 8:30 pm"  },
    // { level: "AS",              time: "8:30 – 9:30 pm"  },
    // { level: "O Level / IGCSE", time: "9:30 – 10:30 pm" }
  ],

  /* ---- enrolment --------------------------------------------------- */
  intakeOpen:  true,            // false → CTAs switch to "Join the waitlist"
  sessionYear: "2027",          // exam session currently being prepared

  /* ---- results / numbers -------------------------------------------
     DELIBERATELY EMPTY. Do not put estimates here. Whatever you type
     appears publicly as his own claim, so only fill it with figures he
     will stand behind.                                                 */
  claims: {
    yearsTeaching:  "",         // TO CONFIRM
    studentsTaught: "",         // TO CONFIRM
    topGrades:      ""          // TO CONFIRM
  },

  /* ---- photo --------------------------------------------------------
     Drop a JPG at assets/img/ammar.jpg. If the file is missing the site
     shows a designed monogram plate instead of a broken image.         */
  photo: "assets/img/ammar.jpg",

  /* ---- past paper PDFs ----------------------------------------------
     Point this at the folder holding the paper PDFs and the whole Past
     Papers portal goes live at once. While it is empty the portal shows
     a clean "request access" state — never a broken link.

     Example: "https://files.ammarsamana.com/papers/"                    */
  pdfBase: "",

  /* ---- agency credit -------------------------------------------------- */
  agency:    "Nexlyr Solutions",
  agencyUrl: "https://nexlyr.solutions"
};
