/* =====================================================================
   SYLLABUS + PAST PAPER ENGINE
   Drives papers.html and subjects.html.

   Every component name, duration, mark total and weighting below was
   taken from the official Cambridge syllabus documents (2026–2028 for
   the AS & A Level subjects). Nothing here is estimated.

   ---------------------------------------------------------------------
   HOW THE FILE LINKS WORK
   ---------------------------------------------------------------------
   Every URL is built as:   SITE.pdfBase + filename

   Filenames follow the standard Cambridge convention:

       9706_s23_qp_22.pdf    May/June 2023, Paper 2 variant 2, question paper
       9706_s23_ms_22.pdf    ...the matching mark scheme
       9706_s23_gt.pdf       grade thresholds for that session
       9706_s23_er.pdf       examiner report for that session

   Session codes:  m = Feb/March    s = May/June    w = Oct/Nov

   So: upload your PDF folder, set SITE.pdfBase in config.js, and every
   link in the portal goes live at once. Until then the portal shows a
   "request access" panel instead of a dead link.
   ===================================================================== */

window.SYLLABUS = (function () {

  const YEAR_FROM = 2015;
  const YEAR_TO   = 2025;

  const SESSIONS = [
    { code: "m", label: "Feb / March", short: "F/M" },
    { code: "s", label: "May / June",  short: "M/J" },
    { code: "w", label: "Oct / Nov",   short: "O/N" }
  ];

  const VARIANTS = [1, 2, 3];

  /* ===================================================================
     SUBJECTS
     =================================================================== */
  const SUBJECTS = [

    /* ------------------------------ ACCOUNTING ---------------------- */
    {
      key: "accounting",
      name: "Accounting",
      abbr: "ACC",
      accent: "brass",
      summary: "Double entry through to published financial statements, ratio analysis and management accounting.",
      qualifications: [
        {
          code: "7707", level: "O Level", title: "Cambridge O Level Accounting",
          components: [
            { n: 1, name: "Multiple Choice",         time: "1h 15m", marks: 35,  weight: "30%" },
            { n: 2, name: "Structured Written Paper",time: "1h 45m", marks: 100, weight: "70%" }
          ]
        },
        {
          code: "0452", level: "IGCSE", title: "Cambridge IGCSE Accounting",
          components: [
            { n: 1, name: "Multiple Choice",         time: "1h 15m", marks: 35,  weight: "30%" },
            { n: 2, name: "Structured Written Paper",time: "1h 45m", marks: 100, weight: "70%" }
          ]
        },
        {
          code: "9706", level: "AS & A Level", title: "Cambridge International AS & A Level Accounting",
          components: [
            { n: 1, name: "Multiple Choice",               time: "1h",     marks: 30, weight: "28% AS · 14% A" , stage: "AS" },
            { n: 2, name: "Fundamentals of Accounting",    time: "1h 45m", marks: 90, weight: "72% AS · 36% A" , stage: "AS" },
            { n: 3, name: "Financial Accounting",          time: "1h 30m", marks: 75, weight: "30% A Level"    , stage: "A2" },
            { n: 4, name: "Cost and Management Accounting",time: "1h",     marks: 50, weight: "20% A Level"    , stage: "A2" }
          ]
        }
      ],
      topics: [
        { unit: "1", stage: "Core", title: "The fundamentals of accounting",
          items: ["The purpose of accounting", "The accounting equation"] },
        { unit: "2", stage: "Core", title: "Sources and recording of data",
          items: ["The double entry system of book-keeping", "Business documents", "Books of prime entry"] },
        { unit: "3", stage: "Core", title: "Verification of accounting records",
          items: ["The trial balance", "Correction of errors", "Bank reconciliation statements", "Control accounts"] },
        { unit: "4", stage: "Core", title: "Accounting procedures",
          items: ["Capital and revenue expenditure and receipts", "Accounting for depreciation and disposal of non-current assets", "Other payables and other receivables", "Irrecoverable debts and provision for doubtful debts", "Valuation of inventory"] },
        { unit: "5", stage: "Core", title: "Preparation of financial statements",
          items: ["Sole traders", "Partnerships", "Limited companies", "Clubs and societies", "Manufacturing accounts", "Incomplete records"] },
        { unit: "6", stage: "Core", title: "Analysis and interpretation",
          items: ["Calculation and understanding of accounting ratios", "Interpretation of accounting ratios", "Inter-firm comparison", "Interested parties", "Limitations of accounting statements"] },
        { unit: "7", stage: "Core", title: "Accounting principles and policies",
          items: ["Accounting principles", "Accounting policies"] },
        { unit: "8", stage: "A Level", title: "Financial accounting (A Level)",
          items: ["Preparation of financial statements", "Regulatory and ethical considerations", "Business acquisition and merger", "Computerised accounting systems", "Analysis and communication of accounting information"] },
        { unit: "9", stage: "A Level", title: "Cost and management accounting (A Level)",
          items: ["Costs and cost behaviour", "Traditional costing methods", "Activity based costing", "Standard costing", "Budgeting and budgetary control", "Investment appraisal"] }
      ]
    },

    /* ------------------------------ BUSINESS ------------------------ */
    {
      key: "business",
      name: "Business",
      abbr: "BUS",
      accent: "jade",
      summary: "How firms are built, staffed, marketed, financed and steered — assessed through data response, case study and strategy.",
      qualifications: [
        {
          code: "7115", level: "O Level", title: "Cambridge O Level Business Studies",
          components: [
            { n: 1, name: "Short Answer and Data Response", time: "1h 30m", marks: 80, weight: "50%" },
            { n: 2, name: "Case Study",                     time: "1h 30m", marks: 80, weight: "50%" }
          ]
        },
        {
          code: "0450", level: "IGCSE", title: "Cambridge IGCSE Business Studies",
          components: [
            { n: 1, name: "Short Answer and Data Response", time: "1h 30m", marks: 80, weight: "50%" },
            { n: 2, name: "Case Study",                     time: "1h 30m", marks: 80, weight: "50%" }
          ]
        },
        {
          code: "9609", level: "AS & A Level", title: "Cambridge International AS & A Level Business",
          components: [
            { n: 1, name: "Business Concepts 1",     time: "1h 15m", marks: 40, weight: "40% AS · 20% A", stage: "AS" },
            { n: 2, name: "Business Concepts 2",     time: "1h 30m", marks: 60, weight: "60% AS · 30% A", stage: "AS" },
            { n: 3, name: "Business Decision-Making",time: "1h 45m", marks: 60, weight: "30% A Level",    stage: "A2" },
            { n: 4, name: "Business Strategy",       time: "1h 15m", marks: 40, weight: "20% A Level",    stage: "A2" }
          ]
        }
      ],
      topics: [
        { unit: "1", stage: "Core", title: "Business and its environment",
          items: ["Enterprise", "Business structure", "Size of business", "Business objectives", "Stakeholders in a business", "External influences on business activity"] },
        { unit: "2", stage: "Core", title: "People in business",
          items: ["Human resource management", "Motivation", "Management and leadership", "Organisational structure", "Communication"] },
        { unit: "3", stage: "Core", title: "Marketing",
          items: ["The nature of marketing", "Market research", "The marketing mix", "Marketing planning", "Globalisation and international marketing"] },
        { unit: "4", stage: "Core", title: "Operations management",
          items: ["The nature of operations", "Operations planning", "Inventory management", "Capacity utilisation", "Quality management", "Location decisions"] },
        { unit: "5", stage: "Core", title: "Finance and accounting",
          items: ["The need for business finance", "Sources of finance", "Costs", "Budgets", "Contents of published accounts", "Analysis of published accounts", "Investment appraisal"] },
        { unit: "6", stage: "A Level", title: "Strategic management (A Level)",
          items: ["What is strategic management", "Strategic analysis", "Strategic choice", "Strategic implementation"] }
      ]
    },

    /* ------------------------------ ECONOMICS ----------------------- */
    {
      key: "economics",
      name: "Economics",
      abbr: "ECO",
      accent: "rouge",
      summary: "Price theory, market failure, the macroeconomy and international trade — from the basic economic problem to unstructured A2 essays.",
      qualifications: [
        {
          code: "2281", level: "O Level", title: "Cambridge O Level Economics",
          components: [
            { n: 1, name: "Multiple Choice",      time: "45m",    marks: 30, weight: "30%" },
            { n: 2, name: "Structured Questions", time: "2h 15m", marks: 90, weight: "70%" }
          ]
        },
        {
          code: "0455", level: "IGCSE", title: "Cambridge IGCSE Economics",
          components: [
            { n: 1, name: "Multiple Choice",      time: "45m",    marks: 30, weight: "30%" },
            { n: 2, name: "Structured Questions", time: "2h 15m", marks: 90, weight: "70%" }
          ]
        },
        {
          code: "9708", level: "AS & A Level", title: "Cambridge International AS & A Level Economics",
          components: [
            { n: 1, name: "AS Level Multiple Choice",          time: "1h",     marks: 30, weight: "33% AS · 17% A", stage: "AS" },
            { n: 2, name: "AS Level Data Response and Essays", time: "2h",     marks: 60, weight: "67% AS · 33% A", stage: "AS" },
            { n: 3, name: "A Level Multiple Choice",           time: "1h 15m", marks: 30, weight: "17% A Level",    stage: "A2" },
            { n: 4, name: "A Level Data Response and Essays",  time: "2h",     marks: 60, weight: "33% A Level",    stage: "A2" }
          ]
        }
      ],
      topics: [
        { unit: "1", stage: "Core", title: "Basic economic ideas and resource allocation",
          items: ["Scarcity, choice and opportunity cost", "Economic methodology", "Factors of production", "Resource allocation in different economic systems", "Production possibility curves", "Classification of goods and services"] },
        { unit: "2", stage: "Core", title: "The price system and the microeconomy",
          items: ["Demand and supply curves", "Price elasticity, income elasticity and cross elasticity of demand", "Price elasticity of supply", "The interaction of demand and supply", "Consumer and producer surplus"] },
        { unit: "3", stage: "Core", title: "Government microeconomic intervention",
          items: ["Reasons for government intervention in markets", "Methods and effects of government intervention", "Addressing income and wealth inequality"] },
        { unit: "4", stage: "Core", title: "The macroeconomy",
          items: ["National income statistics", "Introduction to the circular flow of income", "Aggregate demand and aggregate supply analysis", "Economic growth", "Unemployment", "Price stability"] },
        { unit: "5", stage: "Core", title: "Government macroeconomic intervention",
          items: ["Government macroeconomic policy objectives", "Fiscal policy", "Monetary policy", "Supply-side policy"] },
        { unit: "6", stage: "Core", title: "International economic issues",
          items: ["The reasons for international trade", "Protectionism", "Current account of the balance of payments", "Exchange rates", "Policies to correct imbalances"] },
        { unit: "7", stage: "A Level", title: "A Level extensions",
          items: ["Utility theory and budget lines", "Costs, revenues and market structures", "Market failure and government failure", "Labour market forces", "The financial sector and money supply", "Economic development and sustainability"] }
      ]
    }
  ];

  /* ===================================================================
     HELPERS
     =================================================================== */

  const YEARS = [];
  for (let y = YEAR_TO; y >= YEAR_FROM; y--) YEARS.push(y);

  function findSubject(key) {
    return SUBJECTS.filter(function (s) { return s.key === key; })[0] || SUBJECTS[0];
  }

  function findQual(code) {
    for (let i = 0; i < SUBJECTS.length; i++) {
      const q = SUBJECTS[i].qualifications.filter(function (x) { return x.code === code; })[0];
      if (q) return { subject: SUBJECTS[i], qual: q };
    }
    return null;
  }

  /* Two-digit year for the filename, e.g. 2023 -> "23" */
  function yy(year) { return String(year).slice(2); }

  /* Component + variant become one token: paper 2 variant 2 -> "22" */
  function token(component, variant) { return String(component) + String(variant); }

  function fileName(code, session, year, kind, component, variant) {
    const base = code + "_" + session + yy(year) + "_" + kind;
    if (kind === "gt" || kind === "er") return base + ".pdf";
    return base + "_" + token(component, variant) + ".pdf";
  }

  /* Build the result rows for a given filter set. Generated on demand so
     the page never holds thousands of unused objects in memory. */
  function build(f) {
    const found = findQual(f.code);
    if (!found) return [];
    const qual = found.qual;
    const rows = [];

    const years    = f.year    ? [f.year]    : YEARS;
    const sessions = f.session ? SESSIONS.filter(function (s) { return s.code === f.session; }) : SESSIONS;
    const comps    = f.component ? qual.components.filter(function (c) { return c.n === f.component; }) : qual.components;
    const variants = f.variant ? [f.variant] : VARIANTS;

    years.forEach(function (year) {
      sessions.forEach(function (session) {
        comps.forEach(function (comp) {
          variants.forEach(function (v) {
            rows.push({
              subject:   found.subject.name,
              subjectKey:found.subject.key,
              accent:    found.subject.accent,
              code:      qual.code,
              level:     qual.level,
              year:      year,
              session:   session.code,
              sessionLabel: session.label,
              sessionShort: session.short,
              component: comp.n,
              compName:  comp.name,
              stage:     comp.stage || "",
              variant:   v,
              ref:       qual.code + "/" + token(comp.n, v),
              id:        qual.code + "_" + session.code + yy(year) + "_" + token(comp.n, v),
              qp:        fileName(qual.code, session.code, year, "qp", comp.n, v),
              ms:        fileName(qual.code, session.code, year, "ms", comp.n, v),
              gt:        fileName(qual.code, session.code, year, "gt"),
              er:        fileName(qual.code, session.code, year, "er")
            });
          });
        });
      });
    });
    return rows;
  }

  return {
    yearFrom: YEAR_FROM,
    yearTo: YEAR_TO,
    years: YEARS,
    sessions: SESSIONS,
    variants: VARIANTS,
    subjects: SUBJECTS,
    findSubject: findSubject,
    findQual: findQual,
    fileName: fileName,
    build: build
  };
})();
