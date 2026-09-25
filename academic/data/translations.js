/* ============================================================
   DATA/TRANSLATIONS.JS
   All translatable text lives here, keyed by language then by a
   dot-free key. js/language.js reads this object and writes the
   matching string into any element with a matching data-i18n
   attribute — see js/language.js for exactly how.

   ------------------------------------------------------------
   SCOPE RIGHT NOW (Phase 12.1):
   Only the strings actually used on index.html (nav, footer, and
   every homepage section) are filled in for all 3 languages.
   Later phases add the keys for About, Certificates, Volunteering,
   Journey, Goals, Projects, Research, Skills and CV as each page
   is migrated — this file just grows, nothing here needs to change
   structurally when that happens.

   ------------------------------------------------------------
   TO ADD A NEW TRANSLATABLE STRING:
   1. Pick a key, e.g. "heroTitle".
   2. Add it under all three languages below.
   3. In the HTML, add data-i18n="heroTitle" to the element.
   4. js/language.js does the rest automatically.
   ------------------------------------------------------------ */

const translations = {
  en: {
    // Navigation
    navHome: 'Home',
    navAbout: 'About',
    navWork: 'Work',
    navCertificates: 'Certificates',
    navVolunteering: 'Volunteering',
    navJourney: 'Technical Journey',
    navGoals: 'Roadmap',
    navProjects: 'Projects',
    navResearch: 'Research',
    navSkills: 'Skills',
    navCv: 'CV',
    navComputerScience: 'Computer Science',
    navEducation: 'Education',
    navMore: 'More',
    navContact: 'Contact',
    navPortal: 'Portal',
    navVolleyball: 'Activities',
    navTournaments: 'Tournaments',
    navAcademic: 'Academic',

    // Global identity — site / personal name, localized (one source
    // of truth). Used via data-i18n="siteName" on the logo, hero h1,
    // footer brand and copyright, so the name follows the language
    // automatically with no refresh re-typing anywhere.
    siteName: 'Khaled Ahmed',

    // Hero
    heroEyebrow: '“My Lord, increase me in knowledge.”',
    heroSubtitle: 'Computer Science Student | Pursuing Studies in Russia | Aiming to Build a Global Academic & Professional Path',
    heroLead: 'Passionate about computer science and technology, always working to grow my skills and build practical projects that reflect what I learn — with a focus on continuous learning and a strong professional future in tech.',
    heroCtaPrimary: 'Explore My Journey',
    heroCtaSecondary: 'My Achievements',

    // Short Introduction
    aboutEyebrow: 'About',
    aboutHeading: 'A short summary before the details',
    aboutPara1: "Khaled is a Computer Science student pursuing a university scholarship in Russia. No specific scholarship is secured yet; it's a deliberate first step, not the destination — the foundation he's using to build real strength in programming, computer networks, cloud computing, and cybersecurity, while collecting certificates toward the goal before specializing further.",
    aboutPara2: "The long-term direction is growing into a strong Software Engineer or Software Architect. It's an ambitious goal, and one he's approaching one deliberate stage at a time, starting from where he actually stands today.",

    // Current Mission (renamed "My Current Progress" — same section, sharper name)
    missionEyebrow: 'My Current Progress',
    missionHeading: "What I'm working on now",
    missionLead: 'Before specializing, the priority is a strong, honest foundation across the skills that a real career in technology actually requires.',
    missionItem1Title: 'Programming & Python',
    missionItem1Body: 'Building core programming fluency as the base for everything that follows.',
    missionItem2Title: 'Computer Networks & Cloud Computing',
    missionItem2Body: 'Learning how networks and cloud systems work, from fundamentals to real practice.',
    missionItem3Title: 'AI & Machine Learning',
    missionItem3Body: 'Using AI tools to learn faster, and starting to explore machine learning concepts.',
    missionItem4Title: 'English & Russian',
    missionItem4Body: 'Preparing for academic study in Russia, and for research communicated in English.',
    missionItem5Title: 'Cybersecurity',
    missionItem5Body: 'Building awareness of how systems are secured, and where they can be attacked.',
    missionItem6Title: 'Academic Research Skills',
    missionItem6Body: 'Learning how research actually works, ahead of doing any of his own.',

    // Latest Highlight — a single spotlight slot under "My Current Progress"
// For the newest certificate, research entry, or project. Left empty on
// purpose; see the commented-out card templates in index.html.
latestEyebrow: 'Latest Highlight',
latestHeading: 'The newest addition to my progress',
latestEmpty: 'Nothing added yet — this spot is reserved for the latest certificate, research entry, or project.',

latestCertCategory: 'Achievement',
latestCertTitle: 'HackerRank Software Engineer Intern — Certificate of Accomplishment',
latestCertProvider: 'HackerRank · September 2026',
latestCertDescription: 'Successfully passed the HackerRank Software Engineer Intern role certification test, demonstrating foundational skills relevant to software engineering.',
latestCertVerify: 'Verify Certificate', 
    // Certificates Preview
    certificatesEyebrow: 'Certificates',
    certificatesHeading: "What I've completed so far",
    certificatesLead: 'A growing record of completed courses and certifications. The full list — with filtering and search — lives on the Certificates page.',
    viewAllCertificates: 'View All Certificates',

    // Research Preview
    researchPreviewEyebrow: 'Research',
    researchPreviewHeading: 'Early steps into academic research',
    viewAllResearch: 'View All Research',

    // Volunteering Preview
    volunteeringEyebrow: 'Volunteer Experience',
    volunteeringHeading: "Where I've volunteered",
    viewAllVolunteering: 'View All Volunteer Experience',

    // Academic Journey (preview)
    journeyEyebrow: 'Academic Journey',
    journeyHeading: 'My timeline, step by step',
    journeyLead: 'Everything after "now" below is a plan, not a completed step — shown honestly as one.',
    viewFullJourney: 'View Full Academic Journey',


    // Future Vision
    visionEyebrow: 'What Comes Next',
    visionHeading: "Where I'm headed",
    visionPara1: "From strong foundations, to real projects, to a career in technology — that's the direction, not a claim of having arrived.",
    visionPara2: "The long-term ambition is real: growing into a skilled Software Engineer or Software Architect, studying in Russia, and eventually earning a Master's in Computer Science — approached one deliberate stage at a time, starting from exactly where things stand today.",
    readFullVision: 'Read the Full Vision',

    // Final CTA
    finalCtaEyebrow: 'Get In Touch',
    finalCtaHeading: "Here's how to reach me",
    finalCtaLead: 'Certificates, volunteer experience, and the academic path ahead — all in one place, growing as the journey does.',
    finalCtaContact: 'Contact Me',

    // Footer
    footerMission: 'Building a path from strong foundations toward a strong career in technology, one real project at a time.',

    // ---- Internal pages (Phase 12.2) ----

    // Common (shared across internal pages)
    skipToContent: 'Skip to main content',
    ctaAcademicJourney: 'Academic Journey',
    viewCertificates: 'View Certificates',

    // About page
    aboutPageTitle: 'My Story',
    aboutPageLead: 'Not a finished résumé — a clear account of where things stand today, and how Khaled is approaching the path ahead.',
    aboutStory1Title: 'The Beginning',
    aboutStory1Body: "Khaled's journey started with a simple passion for technology and computer science. Over time, that passion turned into a clear goal: building himself academically and professionally, earning the chance to study in Russia, and later continuing on to a Master's in Computer Science.",
    aboutStory2Title: 'Where I Am Now',
    aboutStory2Body: "Right now, Khaled is steadily developing his skills in programming, computer science, and modern technologies — alongside learning English and Russian and taking part in scholarships and educational programs, documenting every step and achievement along the way.",
    aboutStory3Title: 'More Than Certificates',
    aboutStory3Body: "Khaled doesn't treat learning as just collecting certificates — the focus is on building real knowledge and practical skills that can be used in actual projects and problem-solving. That's why he keeps building projects, documenting his progress, and shaping a portfolio that reflects real growth over time.",
    aboutValuesEyebrow: 'My Approach',
    aboutValuesHeading: 'What Matters Most to Me',
    aboutValue1Title: 'Curiosity',
    aboutValue1Body: 'Asking why something works, not just learning that it does.',
    aboutValue2Title: 'Discipline',
    aboutValue2Body: 'Consistent, unglamorous effort over long periods of time.',
    aboutValue3Title: 'Academic Excellence',
    aboutValue3Body: 'Taking the fundamentals seriously before rushing toward specialization.',
    aboutValue4Title: 'Exploration',
    aboutValue4Body: 'Staying open to what a field actually needs, not just what looks impressive.',
    aboutCtaEyebrow: 'Keep Reading',
    aboutCtaHeading: 'See More of the Journey',
    // Goals page
    goalsEyebrow: 'My Goals',
    goalsTitle: "What's Next",
    goalsLead: 'Ambitious, honestly stated, and not yet achieved. This page is a direction, not a résumé line.',
    goalsMissionEyebrow: 'The Plan',
    goalsMissionHeading: 'From Basics to a Real Tech Career',
    goalsMissionPara1: "That's the direction stated as plainly as possible — not a claim of having arrived anywhere on it yet. Every stage before this one exists to make the next stage possible.",
    goalsMissionPara2: 'The long-term aim is to build a strong professional future in technology: turning educational opportunities into real experience, projects, and value he can offer the tech community.',
    goalsAimEyebrow: 'My Targets',
    goalsAimHeading: "Not There Yet, But That's the Goal",
    goalsAimLead: "Stated as goals because that's what they are — not achievements, not credentials, not promises.",
    goalsAim1Title: 'Become a Skilled Software Engineer',
    goalsAim1Body: 'Grow into a strong Software Engineer or Software Architect, building real, working systems.',
    goalsAim2Title: 'Work Alongside Serious Institutions',
    goalsAim2Body: 'Collaborate with serious teams and organizations doing real work in technology — earned, not assumed.',
    goalsAim3Title: 'Study Computer Science in Russia',
    goalsAim3Body: 'A distant, honestly-stated reach — a direction to grow toward, not a claim being made today.',
    goalsAim4Title: 'Build Meaningful Projects',
    goalsAim4Body: "Ship projects that hold up on their own merit, once there's something real to contribute.",
    goalsCtaEyebrow: 'The Big Picture',
    goalsCtaHeading: 'Every Step Here Builds on the One Before It',
    // Journey page
    journeyPageTitle: 'My Full Timeline',
    journeyPageLead: 'One stage is complete. One is happening right now. Everything else is a stated plan, shown honestly as a plan — not as something already achieved.',
    statusCompleted: 'Completed',
    statusInProgress: 'In Progress',
    statusPlanned: 'Planned',
    statusVision: 'Vision',
    dateNow: '2026',
    dateNext: '2026',
    dateAlongside: '2026',
    dateGoal: '2026',
    dateRussia: '2027',
    dateLongTerm: 'Long-Term',
    journeyItem1Title: 'High School Graduation',
    journeyItem1Body: 'Graduating high school and moving into the university stage, with a clear direction toward computer science and technology.',
    journeyItem2Title: 'Building the Foundation',
    journeyItem2Body: 'Studying computer science and programming fundamentals — programming, algorithms, data structures, computer networks, and operating systems.',
    journeyItem3Title: 'Going Deeper Technically',
    journeyItem3Body: 'Expanding into software development, AI & machine learning, cloud computing, and cybersecurity, while starting to build real, practical projects.',
    journeyItem4Title: 'Building an Academic Portfolio',
    journeyItem4Body: 'Earning strong certificates and courses, joining competitions and training programs, and building a solid portfolio and GitHub documenting every project and achievement.',
    journeyItem5Title: 'Preparing for Scholarships',
    journeyItem5Body: 'Developing English and Russian, researching suitable scholarships and universities, preparing documents, and writing a competitive motivation letter and academic profile.',
    journeyItem6Title: 'Studying Computer Science in Russia',
    journeyItem6Body: 'Earning a scholarship to study Computer Science in Russia, making the most of an international academic and research environment.',
    journeyItem7Title: "Master's in Computer Science",
    journeyItem7Body: "Moving on to a Master's in Computer Science and specializing further in a research or technical field based on experience and interests.",
    journeyItem8Title: 'Long-Term: Technology & Research',
    journeyItem8Body: 'Working in technology and scientific research, with room to specialize in advanced fields like AI, Computational Science, or Space Computing, and contributing to projects with real impact.',
    homeTlBody1: 'Graduating high school and starting the university stage.',
    homeTlBody2: 'Actively developing the skills covered in the Current Mission section above.',
    homeTlBody3: 'Expanding into software development, AI & machine learning, cloud computing, and cybersecurity, while building real projects.',
    homeTlBody4: 'Developing English and Russian, and preparing documents and a competitive academic profile.',
    homeTlBody5: 'Earning a scholarship to study Computer Science in Russia — the next concrete milestone on this path.',

    // Certificates page
    certificatesPageTitle: 'Certificates & Achievements',
    certificatesPageLead: 'General certificates and achievements — technical, computer-science-specific certificates live on their own Computer Science page.',
    csPageTitle: 'Computer Science',
    csPageLead: 'Programming, AI, and software training — the technical side of the path, kept separate from general certificates and activities.',
    csEmpty: 'No computer science certificates added yet.',
    certificatesSearchLabel: 'Search certificates',
    certificatesSearchPlaceholder: 'Search by title, provider, or keyword...',
    certificatesEmpty: 'No certificates match your search.',
    activitiesCertsEmpty: 'No activity certificates added yet.',
    certModalNoImage: 'Certificate image not added yet',
    certModalCredential: 'View Credential',
    certModalClose: 'Close',

    // Volunteering page
    volunteeringPageTitle: 'My Volunteer Work',
    volunteeringPageLead: 'Every entry below is real experience, presented with what it actually involved — not padded to look bigger than it was.',

    // Projects page
    projectsPageLead: 'This section will grow as real, substantial work exists to show — nothing is placed here just to fill space.',
    projectsEmpty: 'No projects yet — check back as this section grows.',

    // Research page
    researchPageLead: 'Here you\'ll find all my research related to the field.',
    researchEmpty: 'No research published yet — check back as this section grows.',

    // Skills page
    skillsPageLead: 'Honest self-assessment, not a sales pitch — levels here are text labels, never invented percentages.',
    skillsEmpty: 'No skill levels recorded yet.',

    // CV page
    cvPageTitle: 'My CV',
    cvPageLead: 'Stays current automatically — pulled from the same data as the rest of the site.',
    cvPrintBtn: 'Print / Save as PDF',
    cvProfile: 'Profile',
    cvProfileBody: "Computer Science student pursuing a university scholarship in Russia, as a deliberate step toward a strong career in technology. Actively building programming, networking, and AI skills, and collecting certificates toward the goal.",
    cvEducation: 'Education',
    eduPageTitle: 'Education',
    eduPageLead: "Where things stand today, kept clearly separate from where they're headed.",
    eduCurrentHeading: 'Current Education',
    eduFutureHeading: "What's Next in Education",
    eduFutureLead: 'Not secured yet — a clearly stated goal, not a claim of something already underway.',
    eduMasterTitle: "Master's in Computer Science",
    eduMasterBody: "After the bachelor's degree, specializing further in a research or technical field based on experience and interests.",
    cvEduHsTitle: 'High School Diploma',
    cvEduHsBody: 'Egyptian high school — graduating in 2026.',
    cvEduBscTitle: 'Undergraduate Scholarship',
    cvEduBscBody: 'Russia — Computer Science; not yet secured.',

    // Volunteering empty state (shared: homepage preview + page)
    volunteeringEmpty: 'More volunteering experiences are on the way.',

    // Portal (gateway) — the site-root choice screen
    portalPrompt: 'Which side are you here for?',
    portalConnect: 'Connect with me',
    portalAcademicEyebrow: 'Academic Side',
    portalAcademicTitle: 'Computer Science & Technology',
    portalAcademicDesc: 'Certificates, academic journey, projects, and the long-term path toward a career in technology.',
    portalSportsEyebrow: 'Personal',
    portalSportsTitle: 'Interests & Activities',
    portalSportsDesc: 'This space is empty for now — content can be added here later.',
    portalEnter: 'Enter',

    // Digital Presence (homepage) + Discord community CTA
    digitalEyebrow: 'Find Me Online',
    digitalHeading: 'Where I Post Updates',
    digitalLead: 'The same path, shared across the places I create and connect in — academic work, projects, and everyday content.',
    digitalCreatorLine: 'Academic by direction. Creative by practice.',
    discordTitle: 'Join the Community',
    discordSubtitle: 'A relaxed Discord server for the journey — say hi.',
    discordButton: 'Join the Server',
    opensNewTab: 'opens in a new tab',

    // Volleyball (sports) page
    volleyballEyebrow: 'Outside School',
    volleyballTitle: 'Volleyball',
    volleyballLead: 'A part of the story off the screen — teamwork, discipline, and play. This space grows as there are real moments to show.',
    volleyballEmpty: 'More volleyball stories coming soon.',

    // Activities page (replaces the old volleyball-only page — a
    // simple, honest placeholder until real content is added).
    activitiesEyebrow: 'Personal',
    activitiesTitle: 'Interests & Activities',
    activitiesLead: 'Volunteering, community programs, and youth initiatives — kept separate from academic and computer-science work.',
    activitiesEmpty: 'Nothing here yet. Come back soon.',

    // --- Premium Volleyball universe (page-volleyball skin) ---
    volleyKicker: 'A developing player. A love for attacking and blocking. An honest journey.',
    volleyTitleA: 'Volleyball',
    volleyTitleB: 'Journey',
    volleySub: 'A developing volleyball player with a grassroots background, a preference for Middle Blocker, and a long-term commitment to the road ahead.',
    volleyCtaStory: 'The journey',
    volleyCtaAcademic: 'Academic journey',
    volleyTicker: 'First tournament · Third place · Next chapter',

    // Athlete profile
    volleyProfileTitle: 'Player profile',
    volleyPosLabel: 'Position',
    volleyPos: 'Middle Blocker',
    volleyNameLabel: 'Identity',
    volleyName: 'Hussein',
    volleyDobLabel: 'Born',
    volleyDob: 'June 9, 2004',
    volleyHeightLabel: 'Height',
    volleyHeight: '188 cm',
    volleyStyleLabel: 'Preference',
    volleyStyle: 'Versatile — at home anywhere except Libero. I especially enjoy attacking and blocking.',
    volleyRoleLine: 'A developing player with a grassroots background — not on any professional team. The story is told as it is.',

    // Grassroots
    volleyGrassTitle: 'Where it began',
    volleyGrassLead: 'My journey did not begin in a professional club. It began on local courts, in youth centers, with friends, informal teams, and a genuine love for volleyball.',

    // First tournament
    volleyFirstEyebrow: 'First tournament',
    volleyFirstTitle: 'My First Friendly Volleyball Tournament',
    volleyFirstYear: 'Ramadan 2023',
    volleyFirstTeamLabel: 'Team',
    volleyFirstTeam: 'Al Taawoon Sporting Club — Al Haram',
    volleyFirstVenueLabel: 'Venue',
    volleyFirstVenue: 'Engineering Syndicate Club',
    volleyFirstPosLabel: 'Position',
    volleyFirstPos: 'Middle Blocker',
    volleyFirstResLabel: 'Result',
    volleyFirstRes: 'Third Place',
    volleyFirstStory: 'I played this first tournament with a knee injury. For me it was a personal challenge more than a win — and a memory I keep. After the tournament we gathered and shared Iftar together during Ramadan.',
    volleyGallery: 'View gallery',
    volleyCertificate: 'View certificate',

    // Honest numbers
    volleyStatsTitle: 'In real numbers',
    volleyStatFirstNum: '01',
    volleyStatFirstLabel: 'First tournament',
    volleyStatPlaceNum: '03',
    volleyStatPlaceLabel: 'Third place',
    volleyStatPosNum: 'MB',
    volleyStatPosLabel: 'Middle blocker',

    // Timeline — six honest stages
    volleyTimelineTitle: 'My Journey So Far',
    volleyTl1Time: 'Grassroots beginnings',
    volleyTl1Title: 'The beginning',
    volleyTl1Sub: 'Local courts, youth centers, friends, and informal teams.',
    volleyTl2Time: '2023',
    volleyTl2Title: 'First friendly tournament',
    volleyTl2Sub: 'Third Place — played with a knee injury, Iftar together after.',
    volleyTl3Time: '2023–2025',
    volleyTl3Title: 'Local & community play',
    volleyTl3Sub: 'Booked games with friends and community teams — the love of the game kept growing.',
    volleyTl4Time: 'After 2025',
    volleyTl4Title: 'A turning point',
    volleyTl4Sub: 'I stepped back after an eye injury and travel circumstances. The goal did not change.',
    volleyTl5Time: 'Current',
    volleyTl5Title: 'Athletic development',
    volleyTl5Sub: 'In progress — building strength, mobility, conditioning, and craft.',
    volleyTl6Time: 'Future',
    volleyTl6Title: 'Continue volleyball',
    volleyTl6Sub: 'A long-term commitment to keep playing outside Egypt.',

    // Turning point
    volleyTurnTitle: 'A turning point',
    volleyTurnMsg: 'The path changed after 2025, but the goal did not.',
    volleyTurnSub: 'After 2025 I stepped back from competitive play because of an eye injury and my travel circumstances. The goal — to keep growing as a player and continue the journey — did not change.',

    // Athletic development
    volleyDevTitle: 'Athletic development',
    volleyDevStatus: 'Status',
    volleyDevStatusVal: 'In progress',
    volleyDevBody: 'Building the foundation for the next chapter — strength, mobility, conditioning, plyometrics, and volleyball-specific training. No claims yet, just steady work.',

    // Next chapter
    volleyNextTitle: 'The next chapter',
    volleyNextLead: 'Continue volleyball outside Egypt. The journey is not over — it is simply taking a new route.',
    volleyNextDream: 'Both teams I played for were grassroots — neither was registered with the Federation, and I have never joined an official team. That is the dream I could not realize in Egypt, and the one I intend to achieve in Russia.',
    volleyFollowing: 'Developing athlete · Middle Blocker · Long-haul commitment',

    // Memories
    volleyMemTitle: 'Memories',
    volleyMemLead: 'Early memories from the first tournament — kept as they were.',

    // Media viewer & event controls (built in JS by media-system.js —
    // these can't be reached by data-i18n, so the labels are resolved
    // from this table at build/switch time instead)
    mvLabel: 'Media viewer',
    mvClose: 'Close viewer',
    mvPrev: 'Previous image',
    mvNext: 'Next image',
    mvUnavailable: 'Image not available.',
    eventClose: 'Close',
    eventViewCert: 'View certificate',
    eventViewFull: 'View image full screen',
    eventOpenImage: 'Open image',
    eventWatchVideo: 'Watch video',
    eventWhatIDid: 'What I did',
    eventWhatILearned: 'What I learned',
    eventSkills: 'Skills',
    eventPeople: 'People',
    eventGallery: 'Gallery',
    eventVideo: 'Video',
    eventLinks: 'Links',
    eventViewExperience: 'View experience',
    eventPhotos: 'Photos',
    eventCertificate: 'Certificate',
    eventPosition: 'Position',
    eventVlog: 'Vlog',
    eventVs: 'vs',
    eventResult: 'Result',
    eventStats: 'Stats',
    eventNotes: 'Notes',
  },

  ar: {
    // Navigation
    navHome: 'الرئيسية',
    navAbout: 'نبذة عني',
    navWork: 'الأعمال',
    navCertificates: 'الشهادات',
    navVolunteering: 'التطوع',
    navJourney: 'المسار التقني',
    navGoals: 'خارطة الطريق',
    navProjects: 'المشاريع',
    navResearch: 'الأبحاث',
    navSkills: 'المهارات',
    navCv: 'السيرة الذاتية',
    navComputerScience: 'علوم الحاسب',
    navEducation: 'التعليم',
    navMore: 'المزيد',
    navContact: 'تواصل',
    navPortal: 'البوابة',
    navVolleyball: 'الأنشطة',
    navTournaments: 'البطولات',
    navAcademic: 'الأكاديمي',
    siteName: 'خالد أحمد',

    // Hero
    heroEyebrow: '‏ﷺ﴿وَقُل رَّبِّ زِدْنِي عِلْمًا﴾',
    heroSubtitle: 'طالب علوم حاسب | أسعى للدراسة في روسيا | أطمح لبناء مسار أكاديمي ومهني عالمي',
    heroLead: 'مهتم بمجال علوم الحاسب والتقنية، وأسعى باستمرار لتطوير مهاراتي وبناء مشاريع عملية تعكس ما أتعلمه، مع التركيز على التعلم المستمر وصناعة مستقبل مهني قوي في التكنولوجيا.',
    heroCtaPrimary: 'اكتشف مساري',
    heroCtaSecondary: 'اطّلع على إنجازاتي',

    // Short Introduction
    aboutEyebrow: 'نبذة عني',
    aboutHeading: 'ملخص قبل التفاصيل',
    aboutPara1: 'خالد طالب علوم حاسب يسعى حاليًا للحصول على منحة دراسية جامعية في روسيا. لم تُحسم منحة بعينها بعد؛ وهي خطوة أولى مقصودة وليست الوجهة النهائية — الأساس الذي يستخدمه لبناء قوة حقيقية في البرمجة والشبكات والحوسبة السحابية والأمن السيبراني، مع جمع الشهادات نحو الهدف قبل التخصص أكثر.',
    aboutPara2: 'الاتجاه بعيد المدى هو التطور ليصبح مهندس أو معماري برمجيات محترفًا. هدف طموح، يقترب منه على مراحل مدروسة، بدءًا من حيث يقف فعليًا اليوم.',

    // Current Mission (renamed "تقدمي الحالي")
    missionEyebrow: 'تقدمي الحالي',
    missionHeading: 'بعمل إيه دلوقتي',
    missionLead: 'قبل التخصص، الأولوية هي أساس قوي وصادق في المهارات التي يتطلبها مستقبل مهني حقيقي في التكنولوجيا.',
    missionItem1Title: 'البرمجة وPython',
    missionItem1Body: 'بناء طلاقة برمجية أساسية كقاعدة لكل ما سيأتي بعدها.',
    missionItem2Title: 'شبكات الحاسب والحوسبة السحابية',
    missionItem2Body: 'تعلّم كيفية عمل الشبكات والأنظمة السحابية، من الأساسيات إلى التطبيق العملي.',
    missionItem3Title: 'الذكاء الاصطناعي وتعلم الآلة',
    missionItem3Body: 'توظيف أدوات الذكاء الاصطناعي للتعلم بشكل أسرع، والبدء في استكشاف مفاهيم تعلم الآلة.',
    missionItem4Title: 'الإنجليزية والروسية',
    missionItem4Body: 'الاستعداد للدراسة الأكاديمية في روسيا، وللأبحاث المكتوبة بالإنجليزية.',
    missionItem5Title: 'الأمن السيبراني',
    missionItem5Body: 'بناء وعي بكيفية تأمين الأنظمة، وأين يمكن أن تُستهدف.',
    missionItem6Title: 'مهارات البحث الأكاديمي',
    missionItem6Body: 'تعلّم كيف يعمل البحث العلمي فعليًا، قبل القيام بأي بحث خاص به.',

    // Latest Highlight
latestEyebrow: 'آخر إنجاز',
latestHeading: 'أحدث إضافة إلى مسيرتي',
latestEmpty: 'لم يتم إضافة شيء هنا بعد — سيكون هذا المكان مخصصًا لأحدث شهادة أو بحث أو مشروع.',

latestCertCategory: 'إنجاز',
latestCertTitle: 'HackerRank لمهندس برمجيات متدرب — شهادة إنجاز',
latestCertProvider: 'HackerRank · سبتمبر 2026',
latestCertDescription: 'اجتزت بنجاح اختبار الاعتماد الخاص بدور مهندس البرمجيات المتدرب من HackerRank، مما يثبت امتلاك مهارات أساسية مرتبطة بمجال هندسة البرمجيات.',
latestCertVerify: 'التحقق من الشهادة',
    latestHeading: 'أحدث إضافة إلى تقدمي',
    latestEmpty: 'لسه معملتش حاجة هنا — المكان ده محجوز لآخر شهادة أو بحث أو مشروع.',

    // Certificates Preview
    certificatesEyebrow: 'الشهادات',
    certificatesHeading: 'الشهادات اللي حصلت عليها',
    certificatesLead: 'سجل متنامٍ من الدورات والشهادات المكتملة. القائمة الكاملة — مع الفلترة والبحث — موجودة في صفحة الشهادات.',
    viewAllCertificates: 'عرض كل الشهادات',

    // Research Preview
    researchPreviewEyebrow: 'الأبحاث',
    researchPreviewHeading: 'خطوات أولى في البحث الأكاديمي',
    viewAllResearch: 'عرض كل الأبحاث',

    // Volunteering Preview
    volunteeringEyebrow: 'تجربة التطوع',
    volunteeringHeading: 'أماكن تطوعت فيها',
    viewAllVolunteering: 'عرض كل تجارب التطوع',

    // Academic Journey (preview)
    journeyEyebrow: 'المسار الأكاديمي',
    journeyHeading: 'مسيرتي خطوة بخطوة',
    journeyLead: 'كل ما بعد "الآن" أدناه هو خطة، وليس خطوة مكتملة — مُعروضة بصدق على هذا الأساس.',
    viewFullJourney: 'عرض المسار الأكاديمي الكامل',

    // Future Vision
    visionEyebrow: 'اللي جاي',
    visionHeading: 'وجهتي',
    visionPara1: 'من الأساس المتين، إلى المشاريع الحقيقية، إلى مستقبل مهني في التكنولوجيا — هذا هو الاتجاه، وليس ادّعاء بأنني وصلت إليه.',
    visionPara2: 'الطموح بعيد المدى حقيقي: التطور ليصبح مهندس أو معماري برمجيات ماهرًا، والدراسة في روسيا، ثم الحصول على ماجستير في علوم الحاسب — يُقترب منه على مراحل مدروسة، بدءًا من حيث تقف الأمور بالضبط اليوم.',
    readFullVision: 'اقرأ الرؤية الكاملة',

    // Final CTA
    finalCtaEyebrow: 'تواصل معي',
    finalCtaHeading: 'تقدر توصلني من هنا',
    finalCtaLead: 'الشهادات، تجربة التطوع، والمسار الأكاديمي القادم — كلها في مكان واحد، تنمو مع نمو المسار.',
    finalCtaContact: 'تواصل معي',

    // Footer
    footerMission: 'أبني مسارًا من أساسٍ متين نحو مستقبل مهني قوي في التكنولوجيا، مشروعًا حقيقيًا تلو الآخر.',

    // ---- Internal pages (Phase 12.2) ----

    // Common (shared across internal pages)
    skipToContent: 'تخطَّ إلى المحتوى الرئيسي',
    ctaAcademicJourney: 'المسار الأكاديمي',
    viewCertificates: 'عرض الشهادات',

    // About page
    aboutPageTitle: 'قصتي',
    aboutPageLead: 'ليست سيرة ذاتية مكتملة — بل وصف واضح لأين تقف الأمور اليوم، وكيف يتعامل خالد مع الطريق أمامه.',
    aboutStory1Title: 'البداية',
    aboutStory1Body: 'بدأت رحلة خالد من شغف بسيط بالتكنولوجيا وعلوم الحاسب. ومع الوقت تحوّل الشغف إلى هدف واضح: بناء نفسه أكاديميًا ومهنيًا، والحصول على فرصة للدراسة في روسيا، ثم مواصلة رحلته بدراسة الماجستير في علوم الحاسب.',
    aboutStory2Title: 'أنا فين دلوقتي',
    aboutStory2Body: 'الخطوة الأكاديمية التالية هي منحة دراسية جامعية في روسيا — في إدارة الأعمال أو الاقتصاد أو الإحصاء أو أي مجال يخدم الهدف الأكبر. لم تُحسم منحة بعينها بعد، وهي ليست الوجهة النهائية — اختيرت عن قصد كأساس: بيئة منظّمة لبناء قوة حقيقية في البرمجة والرياضيات والإحصاء والتفكير التحليلي، إلى جانب الإنجليزية والروسية ومتطلبات اللغة التي يستلزمها الطريق أمامه. وفي هذه الأثناء يستمر العمل — الاستعداد وجمع الشهادات نحو ذلك الهدف.',
    aboutStory3Title: 'مش بس شهادات',
    aboutStory3Body: 'لا يتعامل خالد مع التعلم باعتباره مجرد الحصول على شهادات، بل يركّز على بناء معرفة حقيقية ومهارات عملية يمكن استخدامها في المشاريع وحل المشكلات. لذلك يستمر في بناء مشاريعه، وتوثيق إنجازاته، وتطوير ملفه الشخصي (Portfolio) ليعكس تطوره الحقيقي مع مرور الوقت.',
    aboutValuesEyebrow: 'أسلوبي',
    aboutValuesHeading: 'أهم حاجة بالنسبالي',
    aboutValue1Title: 'الفضول',
    aboutValue1Body: 'السؤال عن سبب عمل الشيء، لا مجرد معرفة أنه يعمل.',
    aboutValue2Title: 'الانضباط',
    aboutValue2Body: 'جهد ثابت وغير برّاق على مدى فترات طويلة.',
    aboutValue3Title: 'التميّز الأكاديمي',
    aboutValue3Body: 'أخذ الأساسيات على محمل الجدّ قبل الاندفاع نحو التخصص.',
    aboutValue4Title: 'الاستكشاف',
    aboutValue4Body: 'البقاء منفتحًا على ما يحتاجه المجال فعلًا، لا ما يبدو مبهرًا فحسب.',
    aboutCtaEyebrow: 'كمّل قراءة',
    aboutCtaHeading: 'شوف باقي التفاصيل',
    // Goals page
    goalsEyebrow: 'أهدافي',
    goalsTitle: 'الخطوة الجاية',
    goalsLead: 'طموحة، ومُصرَّح بها بصدق، ولم تتحقق بعد. هذه الصفحة اتجاه، وليست سطرًا في سيرة ذاتية.',
    goalsMissionEyebrow: 'الخطة',
    goalsMissionHeading: 'من الأساسيات لمهنة حقيقية في التكنولوجيا',
    goalsMissionPara1: 'هذا هو الاتجاه مذكورًا بأوضح ما يمكن — وليس ادّعاءً بالوصول إلى أي نقطة عليه بعد. كل مرحلة قبل هذه موجودة لتجعل المرحلة التالية ممكنة.',
    goalsMissionPara2: 'الهدف بعيد المدى هو بناء مستقبل مهني قوي في التكنولوجيا: تحويل الفرص التعليمية إلى خبرة ومشاريع وقيمة حقيقية يمكن تقديمها للمجتمع التقني.',
    goalsAimEyebrow: 'اللي بستهدفه',
    goalsAimHeading: 'لسه ما وصلتش، بس ده الهدف',
    goalsAimLead: 'مذكورة كأهداف لأن هذا ما هي عليه — ليست إنجازات، ولا مؤهلات، ولا وعودًا.',
    goalsAim1Title: 'أن يصبح مهندس برمجيات محترفًا',
    goalsAim1Body: 'التطور ليصبح مهندس أو معماري برمجيات قويًا، وبناء أنظمة حقيقية وفعّالة.',
    goalsAim2Title: 'العمل إلى جانب مؤسسات جادّة',
    goalsAim2Body: 'التعاون مع فرق ومؤسسات جادّة تقوم بعمل حقيقي في مجال التكنولوجيا — يُكتسب، ولا يُفترض.',
    goalsAim3Title: 'الدراسة في روسيا',
    goalsAim3Body: 'مسعى بعيد ومُصرَّح به بصدق — اتجاه للنمو نحوه، وليس ادّعاءً يُطرح اليوم.',
    goalsAim4Title: 'بناء مشاريع ذات قيمة',
    goalsAim4Body: 'تقديم مشاريع تصمد بجدارتها الخاصة، حين يوجد شيء حقيقي يُسهم به.',
    goalsCtaEyebrow: 'الصورة الكاملة',
    goalsCtaHeading: 'كل خطوة هنا مبنية على اللي قبلها',
    // Journey page
    journeyPageTitle: 'مساري بالكامل',
    journeyPageLead: 'مرحلة واحدة مكتملة. وواحدة تجري الآن. وكل ما عدا ذلك خطة مُعلنة، مُعروضة بصدق كخطة — لا كشيء تحقق بالفعل.',
    statusCompleted: 'مكتمل',
    statusInProgress: 'قيد التنفيذ',
    statusPlanned: 'مُخطَّط له',
    statusVision: 'رؤية',
    dateNow: '2026',
    dateNext: '2026',
    dateAlongside: '2026',
    dateGoal: '2026',
    dateRussia: '2027',
    dateLongTerm: 'بعيد المدى',
    journeyItem1Title: 'التخرّج من الثانوية العامة',
    journeyItem1Body: 'التخرّج من الثانوية والانتقال إلى المرحلة الجامعية، مع تحديد مسار واضح نحو علوم الحاسب والتكنولوجيا.',
    journeyItem2Title: 'بناء الأساس',
    journeyItem2Body: 'دراسة أساسيات علوم الحاسب والبرمجة، مع التركيز على الخوارزميات وهياكل البيانات وشبكات الحاسب وأنظمة التشغيل.',
    journeyItem3Title: 'التعمق التقني',
    journeyItem3Body: 'التوسع في مجالات مثل تطوير البرمجيات والذكاء الاصطناعي وتعلم الآلة والحوسبة السحابية والأمن السيبراني، والبدء في بناء مشاريع عملية حقيقية.',
    journeyItem4Title: 'بناء الملف الأكاديمي',
    journeyItem4Body: 'الحصول على شهادات ودورات قوية، والمشاركة في مسابقات وبرامج تدريبية، وبناء Portfolio وGitHub قوي، وتوثيق المشاريع والإنجازات.',
    journeyItem5Title: 'الاستعداد للمنح',
    journeyItem5Body: 'تطوير اللغة الإنجليزية والروسية، والبحث عن المنح والجامعات المناسبة، وتجهيز الأوراق، وكتابة خطاب الدافع (Motivation Letter) وبناء ملف أكاديمي تنافسي.',
    journeyItem6Title: 'الدراسة في روسيا',
    journeyItem6Body: 'الحصول على منحة ودراسة علوم الحاسب في روسيا، والاستفادة من البيئة الأكاديمية والبحثية الدولية.',
    journeyItem7Title: 'ماجستير في علوم الحاسب',
    journeyItem7Body: 'طموح بعيد ومُصرَّح به بصدق، لا يقين به — يُسعى إليه فقط إذا استحقّه المسار حتى هذه النقطة.',
    journeyItem8Title: 'مسار بحثي — بحث علمي عالمي',
    journeyItem8Body: 'العمل في مجال التكنولوجيا والبحث العلمي، مع إمكانية التخصص مستقبلًا في مجالات متقدمة مثل الذكاء الاصطناعي أو علوم الحوسبة، والمساهمة في مشاريع ذات أثر حقيقي.',
    homeTlBody1: 'التخرّج من الثانوية والانتقال إلى المرحلة الجامعية.',
    homeTlBody2: 'تطوير فعلي للمهارات المذكورة في قسم المهمة الحالية بالأعلى.',
    homeTlBody3: 'التوسع في تطوير البرمجيات والذكاء الاصطناعي وتعلم الآلة والحوسبة السحابية والأمن السيبراني، مع بناء مشاريع حقيقية.',
    homeTlBody4: 'تطوير اللغة الإنجليزية والروسية، وتجهيز الأوراق وملف أكاديمي تنافسي.',
    homeTlBody5: 'الحصول على منحة لدراسة علوم الحاسب في روسيا — المحطة الملموسة القادمة في هذا المسار.',

    // Certificates page
    certificatesPageTitle: 'الشهادات والإنجازات',
    certificatesPageLead: 'شهادات وإنجازات عامة — أما الشهادات التقنية المتخصصة في علوم الحاسب فلها صفحة مستقلة.',
    csPageTitle: 'علوم الحاسب',
    csPageLead: 'البرمجة والذكاء الاصطناعي والتدريب التقني — الجانب التقني من المسار، منفصل عن الشهادات العامة والأنشطة.',
    csEmpty: 'لا توجد شهادات في علوم الحاسب بعد.',
    certificatesSearchLabel: 'ابحث في الشهادات',
    certificatesSearchPlaceholder: 'ابحث بالعنوان أو الجهة أو كلمة مفتاحية...',
    certificatesEmpty: 'لا توجد شهادات مطابقة لبحثك.',
    activitiesCertsEmpty: 'لا توجد شهادات أنشطة بعد.',
    certModalNoImage: 'لم تُضَف صورة الشهادة بعد',
    certModalCredential: 'عرض بيانات الاعتماد',
    certModalClose: 'إغلاق',

    // Volunteering page
    volunteeringPageTitle: 'شغلي التطوعي',
    volunteeringPageLead: 'كل مُدخَل أدناه تجربة حقيقية، معروضة بما تضمّنته فعلًا — دون تضخيم لتبدو أكبر مما كانت.',

    // Projects page
    projectsPageLead: 'سينمو هذا القسم مع وجود عمل حقيقي وجوهري يُعرض — لا شيء يُوضع هنا لمجرد ملء الفراغ.',
    projectsEmpty: 'لا مشاريع بعد — عُد لاحقًا مع نمو هذا القسم.',

    // Research page
    researchPageLead: 'تجد هنا جميع أبحاثي المتعلقة بالمجال.',
    researchEmpty: 'لا أبحاث منشورة بعد — عُد لاحقًا مع نمو هذا القسم.',

    // Skills page
    skillsPageLead: 'تقييم ذاتي صادق، لا عرض تسويقي — المستويات هنا وصوف نصية، وليست نسبًا مُختلَقة.',
    skillsEmpty: 'لم تُسجَّل مستويات مهارات بعد.',

    // CV page
    cvPageTitle: 'سيرتي الذاتية',
    cvPageLead: 'تبقى محدَّثة تلقائيًا — مسحوبة من البيانات نفسها التي يستخدمها بقية الموقع.',
    cvPrintBtn: 'طباعة / حفظ كـ PDF',
    cvProfile: 'نبذة',
    cvProfileBody: 'طالب علوم حاسب يسعى للحصول على منحة دراسية جامعية في روسيا، كخطوة مقصودة نحو مستقبل مهني قوي في التكنولوجيا. يعمل حاليًا على تطوير مهاراته في البرمجة والشبكات والذكاء الاصطناعي، ويجمع الشهادات نحو هدفه.',
    cvEducation: 'التعليم',
    eduPageTitle: 'التعليم',
    eduPageLead: 'أين تقف الأمور اليوم بالضبط، بشكل منفصل عمّا هو مخطط للمستقبل.',
    eduCurrentHeading: 'التعليم الحالي',
    eduFutureHeading: 'الخطوة الجاية في الدراسة',
    eduFutureLead: 'لم يُحسم بعد — هدف معلن بوضوح، وليس ادّعاء بأن شيئًا يحدث بالفعل.',
    eduMasterTitle: 'ماجستير في علوم الحاسب',
    eduMasterBody: 'بعد البكالوريوس، التخصص بشكل أعمق في مجال بحثي أو تقني بناءً على الخبرة والاهتمامات.',
    cvEduHsTitle: 'شهادة الثانوية العامة',
    cvEduHsBody: 'ثانوية عامة مصرية — يتخرج فيها عام 2026.',
    cvEduBscTitle: 'منحة دراسية جامعية (بكالوريوس)',
    cvEduBscBody: 'روسيا — علوم الحاسب؛ لم تُحسم بعد.',

    // Volunteering empty state (shared: homepage preview + page)
    volunteeringEmpty: 'المزيد من تجارب التطوع في الطريق.',

    // Portal (gateway) — the site-root choice screen
    portalPrompt: 'لأي جانب أتيت؟',
    portalConnect: 'تواصل معي',
    portalAcademicEyebrow: 'الجانب الأكاديمي',
    portalAcademicTitle: 'علوم الحاسب والتكنولوجيا',
    portalAcademicDesc: 'الشهادات، والمسيرة الأكاديمية، والمشاريع، والطريق طويل المدى نحو مستقبل مهني في التكنولوجيا.',
    portalSportsEyebrow: 'شخصي',
    portalSportsTitle: 'الاهتمامات والأنشطة',
    portalSportsDesc: 'الأنشطة الشخصية، مثل الأنشطة التطوعية، والأنشطة العامة، واللغات.',
    portalEnter: 'ادخل',

    // Digital Presence (homepage) + Discord community CTA
    digitalEyebrow: 'لاقيني أونلاين',
    digitalHeading: 'هنا بتابعوني',
    digitalLead: 'المسار نفسه، مُشارَكًا عبر الأماكن التي أُبدع وأتواصل فيها — العمل الأكاديمي، والمشاريع، والمحتوى اليومي.',
    digitalCreatorLine: 'أكاديمي في الاتجاه. مُبدِع في الممارسة.',
    discordTitle: 'انضم إلى المجتمع',
    discordSubtitle: 'سيرفر Discord ودود يرافق المسار — مرحبًا بك.',
    discordButton: 'انضم إلى السيرفر',
    opensNewTab: 'يفتح في تبويب جديد',

    // Volleyball (sports) page
    volleyballEyebrow: 'برا الدراسة',
    volleyballTitle: 'الكرة الطائرة',
    volleyballLead: 'جزء من القصة بعيدًا عن الشاشة — عمل جماعي وانضباط ولعب. تنمو هذه المساحة مع وجود لحظات حقيقية لعرضها.',
    volleyballEmpty: 'المزيد من قصص الكرة الطائرة قريبًا.',

    // صفحة الاهتمامات والأنشطة (بديل صفحة الكرة الطائرة — مساحة
    // فارغة بصدق إلى أن يُضاف محتوى حقيقي).
    activitiesEyebrow: 'شخصي',
    activitiesTitle: 'الاهتمامات والأنشطة',
    activitiesLead: 'التطوع والبرامج المجتمعية ومبادرات الشباب — بشكل منفصل عن العمل الأكاديمي وعلوم الحاسب.',
    activitiesEmpty: 'لا يوجد شيء هنا بعد. تفضّل بالعودة قريبًا.',

    // --- Premium Volleyball universe (page-volleyball skin) ---
    volleyKicker: 'لاعب في طور التطور. حب للهجوم والصد. رحلة صادقة.',
    volleyTitleA: 'الكرة',
    volleyTitleB: 'الطائرة',
    volleySub: 'لاعب كرة طائرة في طور التطور بخلفية بدأت من القواعد الشعبية، مركزه المفضل حائط الصد، والتزام طويل المدى باستكمال الرحلة.',
    volleyCtaStory: 'الرحلة',
    volleyCtaAcademic: 'الرحلة الأكاديمية',
    volleyTicker: 'أول بطولة · المركز الثالث · الفصل القادم',

    // Profile
    volleyProfileTitle: 'ملف اللاعب',
    volleyPosLabel: 'المركز',
    volleyPos: 'حائط الصد',
    volleyNameLabel: 'الهوية',
    volleyName: 'حسين',
    volleyDobLabel: 'تاريخ الميلاد',
    volleyDob: '9 يونيو 2004',
    volleyHeightLabel: 'الطول',
    volleyHeight: '188 سم',
    volleyStyleLabel: 'التفضيل',
    volleyStyle: 'مرن — مرتاح في أي مركز باستثناء الليبرو. أستمتع بشكل خاص بالهجوم والصد.',
    volleyRoleLine: 'لاعب في طور التطور بخلفية بدأت من القواعد الشعبية — وليس ضمن أي فريق محترف. القصة تُروى كما هي.',

    // Grassroots
    volleyGrassTitle: 'أين بدأت الرحلة',
    volleyGrassLead: 'لم تبدأ رحلتي في نادٍ محترف. بدأت في الملاعب القريبة ومراكز الشباب، مع الأصدقاء والفرق غير الرسمية، وحب حقيقي للكرة الطائرة.',

    // First tournament
    volleyFirstEyebrow: 'أول بطولة',
    volleyFirstTitle: 'أول بطولة ودية في مسيرتي مع الكرة الطائرة',
    volleyFirstYear: 'رمضان 2023',
    volleyFirstTeamLabel: 'الفريق',
    volleyFirstTeam: 'نادي التعاون الرياضي — الهرم',
    volleyFirstVenueLabel: 'المكان',
    volleyFirstVenue: 'نادي نقابة المهندسين',
    volleyFirstPosLabel: 'المركز',
    volleyFirstPos: 'حائط الصد',
    volleyFirstResLabel: 'النتيجة',
    volleyFirstRes: 'المركز الثالث',
    volleyFirstStory: 'لعبت هذه البطولة الأولى وأنا أعاني من إصابة في الركبة. بالنسبة لي كانت تجربة شخصية أكثر من كونها فوزًا — وذكري أحتفظ بها. وبعد انتهاء البطولة اجتمعنا على مائدة الإفطار معًا خلال رمضان.',
    volleyGallery: 'عرض المعرض',
    volleyCertificate: 'عرض الشهادة',

    // Numbers
    volleyStatsTitle: 'أرقام حقيقية',
    volleyStatFirstNum: '01',
    volleyStatFirstLabel: 'أول بطولة',
    volleyStatPlaceNum: '03',
    volleyStatPlaceLabel: 'المركز الثالث',
    volleyStatPosNum: 'MB',
    volleyStatPosLabel: 'حائط الصد',

    // Timeline
    volleyTimelineTitle: 'رحلتي لحد دلوقتي',
    volleyTl1Time: 'بدايات شعبية',
    volleyTl1Title: 'البداية',
    volleyTl1Sub: 'ملاعب قريبة، مراكز شباب، أصدقاء، وفرق غير رسمية.',
    volleyTl2Time: '2023',
    volleyTl2Title: 'أول بطولة ودية',
    volleyTl2Sub: 'المركز الثالث — لعب بإصابة في الركبة، وإفطار معًا بعدها.',
    volleyTl3Time: '2023–2025',
    volleyTl3Title: 'اللعب المحلي والمجتمعي',
    volleyTl3Sub: 'مباريات محجوزة مع الأصدقاء وفرق محلية — واستمر حب اللعبة في النمو.',
    volleyTl4Time: 'بعد 2025',
    volleyTl4Title: 'نقطة تحول',
    volleyTl4Sub: 'ابتعدت مؤقتًا بعد إصابة في العين وظروف سفر. الهدف لم يتغير.',
    volleyTl5Time: 'الآن',
    volleyTl5Title: 'التطور الرياضي',
    volleyTl5Sub: 'قيد التقدم — بناء القوة والمرونة واللياقة والمهارة.',
    volleyTl6Time: 'المستقبل',
    volleyTl6Title: 'مواصلة الكرة الطائرة',
    volleyTl6Sub: 'التزام طويل المدى بمواصلة اللعب خارج مصر.',

    // Turning point
    volleyTurnTitle: 'نقطة تحول',
    volleyTurnMsg: 'تغيّر المسار بعد 2025، لكن الهدف لم يتغير.',
    volleyTurnSub: 'بعد 2025 ابتعدت عن اللعب التنافسي بسبب إصابة في العين وظروف سفري. الهدف — الاستمرار في التطور كلاعب ومواصلة الرحلة — لم يتغير.',

    // Athletic development
    volleyDevTitle: 'التطور الرياضي',
    volleyDevStatus: 'الحالة',
    volleyDevStatusVal: 'قيد التقدم',
    volleyDevBody: 'بناء الأساس للفصل القادم — قوة، مرونة، لياقة، تمارين قفز، وتدريبات خاصة بالكرة الطائرة. بلا ادعاءات بعد، فقط عمل ثابت.',

    // Next chapter
    volleyNextTitle: 'الفصل القادم',
    volleyNextLead: 'مواصلة الكرة الطائرة خارج مصر. الرحلة لم تنتهِ — بل تسلك طريقًا جديدًا.',
    volleyNextDream: 'الفريقان اللذان لعبتُ لهما كانا شعبيَّين — كلاهما غير مسجَّل في الاتحاد، ولم أنضمّ يومًا لفريق رسمي. هذا هو الحلم الذي لم أستطع تحقيقه في مصر، وأنوي تحقيقه في روسيا.',
    volleyFollowing: 'لاعب في طور التطور · حائط الصد · التزام بعيد المدى',

    // Memories
    volleyMemTitle: 'ذكريات',
    volleyMemLead: 'ذكريات البدايات من أول بطولة — محفوظة كما كانت.',

    // Media viewer & event controls (built in JS by media-system.js —
    // these can't be reached by data-i18n, so the labels are resolved
    // from this table at build/switch time instead)
    mvLabel: 'عارض الوسائط',
    mvClose: 'إغلاق العارض',
    mvPrev: 'الصورة السابقة',
    mvNext: 'الصورة التالية',
    mvUnavailable: 'الصورة غير متاحة.',
    eventClose: 'إغلاق',
    eventViewCert: 'عرض الشهادة',
    eventViewFull: 'عرض الصورة بملء الشاشة',
    eventOpenImage: 'افتح الصورة',
    eventWatchVideo: 'مشاهدة الفيديو',
    eventWhatIDid: 'ما الذي قمت به',
    eventWhatILearned: 'ما الذي تعلمته',
    eventSkills: 'المهارات',
    eventPeople: 'الأشخاص',
    eventGallery: 'المعرض',
    eventVideo: 'الفيديو',
    eventLinks: 'الروابط',
    eventViewExperience: 'عرض التجربة',
    eventPhotos: 'الصور',
    eventCertificate: 'الشهادة',
    eventPosition: 'المركز',
    eventVlog: 'فلوج',
    eventVs: 'ضد',
    eventResult: 'النتيجة',
    eventStats: 'الإحصائيات',
    eventNotes: 'ملاحظات',
  },

  ru: {
    // Navigation
    navHome: 'Главная',
    navAbout: 'Обо мне',
    navWork: 'Работы',
    navCertificates: 'Сертификаты',
    navVolunteering: 'Волонтёрство',
    navJourney: 'Технический путь',
    navGoals: 'Дорожная карта',
    navProjects: 'Проекты',
    navResearch: 'Исследования',
    navSkills: 'Навыки',
    navCv: 'Резюме',
    navComputerScience: 'Компьютерные науки',
    navEducation: 'Образование',
    navMore: 'Ещё',
    navContact: 'Контакты',
    navPortal: 'Портал',
    navVolleyball: 'Увлечения',
    navTournaments: 'Турниры',
    navAcademic: 'Учёба',
    siteName: 'Халед Ахмед',

    // Hero
    heroEyebrow: '«Господи, приумножь мои знания»',
    heroSubtitle: 'Студент компьютерных наук | Стремлюсь учиться в России | Хочу построить международный академический и профессиональный путь',
    heroLead: 'Увлечён компьютерными науками и технологиями, постоянно развиваю свои навыки и создаю практические проекты, отражающие то, чему я учусь, — с упором на непрерывное обучение и крепкое профессиональное будущее в технологиях.',
    heroCtaPrimary: 'Мой путь',
    heroCtaSecondary: 'Мои достижения',

    // Short Introduction
    aboutEyebrow: 'Обо мне',
    aboutHeading: 'Кратко, прежде чем углубляться',
    aboutPara1: 'Халед — студент компьютерных наук, сейчас добивается университетской стипендии в России. Конкретная стипендия пока не получена; это осознанный первый шаг, а не конечная цель — основа для развития реальных навыков в программировании, компьютерных сетях, облачных вычислениях и кибербезопасности, с параллельным сбором сертификатов на пути к цели, перед дальнейшей специализацией.',
    aboutPara2: 'Долгосрочное направление — стать сильным инженером-программистом или архитектором ПО. Амбициозная цель, к которой он подходит поэтапно, начиная с того, где он находится сегодня.',

    // Current Mission (переименовано в «Мой текущий прогресс»)
    missionEyebrow: 'Мой текущий прогресс',
    missionHeading: 'Над чем работаю сейчас',
    missionLead: 'Перед специализацией приоритет — прочная, честная основа в навыках, которые реально требуются для настоящей карьеры в технологиях.',
    missionItem1Title: 'Программирование и Python',
    missionItem1Body: 'Формирование базовой уверенности в программировании как основы для всего последующего.',
    missionItem2Title: 'Компьютерные сети и облачные вычисления',
    missionItem2Body: 'Изучение работы сетей и облачных систем — от основ до практики.',
    missionItem3Title: 'ИИ и машинное обучение',
    missionItem3Body: 'Использование инструментов ИИ для более быстрого обучения и знакомство с основами машинного обучения.',
    missionItem4Title: 'Английский и русский языки',
    missionItem4Body: 'Подготовка к обучению в России и к исследованиям на английском языке.',
    missionItem5Title: 'Кибербезопасность',
    missionItem5Body: 'Формирование понимания того, как защищаются системы и где они уязвимы.',
    missionItem6Title: 'Навыки академических исследований',
    missionItem6Body: 'Изучение того, как устроены исследования, прежде чем проводить собственные.',

    // Latest Highlight
latestEyebrow: 'Последнее достижение',
latestHeading: 'Новейшее дополнение к моему прогрессу',
latestEmpty: 'Пока ничего не добавлено — это место зарезервировано для последнего сертификата, исследования или проекта.',

latestCertCategory: 'Достижение',
latestCertTitle: 'HackerRank Software Engineer Intern — Сертификат о достижении',
latestCertProvider: 'HackerRank · Сентябрь 2026',
latestCertDescription: 'Успешно пройден сертификационный тест HackerRank для роли стажёра-инженера программного обеспечения, подтверждающий наличие базовых навыков, необходимых в области разработки программного обеспечения.',
latestCertVerify: 'Проверить сертификат',

    // Certificates Preview
    certificatesEyebrow: 'Сертификаты',
    certificatesHeading: 'Что я уже прошёл',
    certificatesLead: 'Растущий список пройденных курсов и сертификатов. Полный список — с фильтрами и поиском — на странице сертификатов.',
    viewAllCertificates: 'Все сертификаты',

    // Research Preview
    researchPreviewEyebrow: 'Исследования',
    researchPreviewHeading: 'Первые шаги в академические исследования',
    viewAllResearch: 'Все исследования',

    // Volunteering Preview
    volunteeringEyebrow: 'Волонтёрский опыт',
    volunteeringHeading: 'Где я занимался волонтёрством',
    viewAllVolunteering: 'Весь волонтёрский опыт',

    // Academic Journey (preview)
    journeyEyebrow: 'Академический путь',
    journeyHeading: 'Мой путь, шаг за шагом',
    journeyLead: 'Всё после "сейчас" ниже — это план, а не завершённый шаг, честно представленный именно так.',
    viewFullJourney: 'Полный академический путь',

    // Future Vision
    visionEyebrow: 'Что впереди',
    visionHeading: 'Куда я иду',
    visionPara1: 'От прочного фундамента — к реальным проектам — к карьере в технологиях. Это направление, а не заявление о том, что цель уже достигнута.',
    visionPara2: 'Долгосрочная амбиция реальна: стать опытным инженером-программистом или архитектором ПО, учиться в России и затем получить степень магистра компьютерных наук. Путь к ней — поэтапный, начиная ровно с того места, где всё находится сегодня.',
    readFullVision: 'Читать полностью',

    // Final CTA
    finalCtaEyebrow: 'Связаться',
    finalCtaHeading: 'Вот как со мной связаться',
    finalCtaLead: 'Сертификаты, волонтёрский опыт и предстоящий академический путь — всё в одном месте, растёт вместе с этим путём.',
    finalCtaContact: 'Связаться со мной',

    // Footer
    footerMission: 'Строю путь от прочного фундамента к крепкой карьере в технологиях, проект за проектом.',

    // ---- Internal pages (Phase 12.2) ----

    // Common (shared across internal pages)
    skipToContent: 'Перейти к основному содержанию',
    ctaAcademicJourney: 'Академический путь',
    viewCertificates: 'Смотреть сертификаты',

    // About page
    aboutPageTitle: 'Моя история',
    aboutPageLead: 'Это не готовое резюме, а честное описание того, где всё находится сегодня и как Халед подходит к пути впереди.',
    aboutStory1Title: 'Начало',
    aboutStory1Body: 'Путь Халеда начался с простой увлечённости технологиями и компьютерными науками. Со временем эта увлечённость превратилась в чёткую цель: развиваться академически и профессионально, получить возможность учиться в России, а затем продолжить обучение в магистратуре по компьютерным наукам.',
    aboutStory2Title: 'Где я сейчас',
    aboutStory2Body: 'Сейчас Халед последовательно развивает навыки программирования, компьютерных наук и современных технологий — наряду с изучением английского и русского языков и участием в стипендиях и образовательных программах, документируя каждый шаг и достижение на этом пути.',
    aboutStory3Title: 'Не только сертификаты',
    aboutStory3Body: 'Халед не относится к обучению как к простому сбору сертификатов — основное внимание уделяется построению настоящих знаний и практических навыков, применимых в реальных проектах и решении задач. Поэтому он продолжает создавать проекты, документировать свой прогресс и развивать портфолио, отражающее его реальный рост со временем.',
    aboutValuesEyebrow: 'Мой подход',
    aboutValuesHeading: 'Что для меня важнее всего',
    aboutValue1Title: 'Любопытство',
    aboutValue1Body: 'Спрашивать, почему что-то работает, а не просто знать, что оно работает.',
    aboutValue2Title: 'Дисциплина',
    aboutValue2Body: 'Ровное, неброское усилие на длинных дистанциях.',
    aboutValue3Title: 'Академическая основательность',
    aboutValue3Body: 'Серьёзно относиться к основам, прежде чем спешить к специализации.',
    aboutValue4Title: 'Открытость',
    aboutValue4Body: 'Оставаться открытым к тому, что области действительно нужно, а не к тому, что просто эффектно выглядит.',
    aboutCtaEyebrow: 'Читать дальше',
    aboutCtaHeading: 'Смотреть больше деталей',
    // Goals page
    goalsEyebrow: 'Мои цели',
    goalsTitle: 'Что дальше',
    goalsLead: 'Амбициозные, честно заявленные и ещё не достигнутые. Эта страница — направление, а не строка в резюме.',
    goalsMissionEyebrow: 'План',
    goalsMissionHeading: 'От основ к настоящей карьере в технологиях',
    goalsMissionPara1: 'Это направление, изложенное максимально ясно, — а не заявление о том, что какая-либо его точка уже достигнута. Каждый этап до него существует, чтобы сделать возможным следующий.',
    goalsMissionPara2: 'Долгосрочная цель — построить крепкое профессиональное будущее в технологиях: превращать образовательные возможности в реальный опыт, проекты и ценность для технологического сообщества.',
    goalsAimEyebrow: 'На что я нацелен',
    goalsAimHeading: 'Ещё не достигнуто, но это цель',
    goalsAimLead: 'Названы целями, потому что именно ими они и являются — не достижения, не квалификации, не обещания.',
    goalsAim1Title: 'Стать опытным инженером-программистом',
    goalsAim1Body: 'Развиться в сильного инженера-программиста или архитектора ПО, создающего реальные, рабочие системы.',
    goalsAim2Title: 'Работать рядом с серьёзными институтами',
    goalsAim2Body: 'Сотрудничать с серьёзными командами и организациями, ведущими настоящую работу в технологиях, — это заслуживается, а не предполагается.',
    goalsAim3Title: 'Учиться в России',
    goalsAim3Body: 'Далёкое, честно заявленное устремление — направление для роста, а не заявление, выдвигаемое сегодня.',
    goalsAim4Title: 'Создавать значимые проекты',
    goalsAim4Body: 'Выпускать проекты, которые выдерживают проверку по собственным заслугам, когда будет что-то настоящее для вклада.',
    goalsCtaEyebrow: 'Полная картина',
    goalsCtaHeading: 'Каждый шаг здесь строится на предыдущем',
    // Journey page
    journeyPageTitle: 'Мой путь целиком',
    journeyPageLead: 'Один этап завершён. Один идёт сейчас. Всё остальное — заявленный план, честно показанный как план, а не как то, что уже произошло.',
    statusCompleted: 'Завершено',
    statusInProgress: 'В процессе',
    statusPlanned: 'Запланировано',
    statusVision: 'Перспектива',
    dateNow: '2026',
    dateNext: '2026',
    dateAlongside: '2026',
    dateGoal: '2026',
    dateRussia: '2027',
    dateLongTerm: 'Долгосрочно',
    journeyItem1Title: 'Окончание средней школы',
    journeyItem1Body: 'Окончание школы и переход к университетскому этапу с чётким направлением к компьютерным наукам и технологиям.',
    journeyItem2Title: 'Построение фундамента',
    journeyItem2Body: 'Изучение основ компьютерных наук и программирования — алгоритмы, структуры данных, компьютерные сети и операционные системы.',
    journeyItem3Title: 'Более глубокое погружение',
    journeyItem3Body: 'Расширение в сторону разработки ПО, ИИ и машинного обучения, облачных вычислений и кибербезопасности, с началом создания реальных практических проектов.',
    journeyItem4Title: 'Построение академического портфолио',
    journeyItem4Body: 'Получение сильных сертификатов и курсов, участие в конкурсах и программах обучения, создание крепкого портфолио и GitHub с документацией всех проектов и достижений.',
    journeyItem5Title: 'Подготовка к стипендиям',
    journeyItem5Body: 'Развитие английского и русского языков, поиск подходящих стипендий и университетов, подготовка документов и написание мотивационного письма и конкурентного академического профиля.',
    journeyItem6Title: 'Учёба в России',
    journeyItem6Body: 'Получение стипендии на обучение компьютерным наукам в России и использование международной академической и исследовательской среды.',
    journeyItem7Title: 'Магистратура по компьютерным наукам',
    journeyItem7Body: 'Переход к магистратуре по компьютерным наукам и дальнейшая специализация в исследовательской или технической области на основе опыта и интересов.',
    journeyItem8Title: 'Долгосрочно: технологии и наука',
    journeyItem8Body: 'Работа в сфере технологий и научных исследований, с возможностью специализации в таких областях, как ИИ, вычислительная наука или космические технологии, и вклад в проекты с реальным влиянием.',
    homeTlBody1: 'Окончание школы и начало университетского этапа.',
    homeTlBody2: 'Активное развитие навыков из раздела «Текущая миссия» выше.',
    homeTlBody3: 'Расширение в сторону разработки ПО, ИИ и машинного обучения, облачных вычислений и кибербезопасности, с созданием реальных проектов.',
    homeTlBody4: 'Развитие английского и русского языков, подготовка документов и конкурентного академического профиля.',
    homeTlBody5: 'Получение стипендии на обучение компьютерным наукам в России — следующий конкретный этап этого пути.',

    // Certificates page
    certificatesPageTitle: 'Сертификаты и достижения',
    certificatesPageLead: 'Общие сертификаты и достижения — технические сертификаты по информатике вынесены на отдельную страницу.',
    csPageTitle: 'Компьютерные науки',
    csPageLead: 'Программирование, ИИ и техническое обучение — техническая часть пути, отдельно от общих сертификатов и активностей.',
    csEmpty: 'Пока нет сертификатов по компьютерным наукам.',
    certificatesSearchLabel: 'Поиск по сертификатам',
    certificatesSearchPlaceholder: 'Поиск по названию, организации или ключевому слову...',
    certificatesEmpty: 'Нет сертификатов, соответствующих вашему запросу.',
    activitiesCertsEmpty: 'Пока нет сертификатов активностей.',
    certModalNoImage: 'Изображение сертификата ещё не добавлено',
    certModalCredential: 'Смотреть удостоверение',
    certModalClose: 'Закрыть',

    // Volunteering page
    volunteeringPageTitle: 'Моя волонтёрская работа',
    volunteeringPageLead: 'Каждая запись ниже — реальный опыт, показанный таким, каким он был на самом деле, без преувеличения его масштаба.',

    // Projects page
    projectsPageLead: 'Этот раздел будет расти по мере появления настоящей, значимой работы для показа — сюда ничего не ставится просто для заполнения.',
    projectsEmpty: 'Пока нет проектов — загляните позже, по мере роста этого раздела.',

    // Research page
    researchPageLead: 'Здесь вы найдёте все мои исследования, связанные с этой областью.',
    researchEmpty: 'Пока нет опубликованных исследований — загляните позже, по мере роста этого раздела.',

    // Skills page
    skillsPageLead: 'Честная самооценка, а не рекламная витрина — уровни здесь описаны словами, а не выдуманными процентами.',
    skillsEmpty: 'Уровни навыков ещё не зафиксированы.',

    // CV page
    cvPageTitle: 'Моё резюме',
    cvPageLead: 'Остаётся актуальным автоматически — берётся из тех же данных, что использует остальной сайт.',
    cvPrintBtn: 'Печать / Сохранить как PDF',
    cvProfile: 'О себе',
    cvProfileBody: 'Студент компьютерных наук, добивается университетской стипендии в России как осознанный шаг к крепкой карьере в технологиях. Активно развивает навыки программирования, сетей и ИИ, собирает сертификаты на пути к цели.',
    cvEducation: 'Образование',
    eduPageTitle: 'Образование',
    eduPageLead: 'Где всё находится сегодня — чётко отдельно от того, куда это ведёт.',
    eduCurrentHeading: 'Текущее образование',
    eduFutureHeading: 'Следующий шаг в учёбе',
    eduFutureLead: 'Пока не подтверждено — чётко заявленная цель, а не утверждение о том, что уже происходит.',
    eduMasterTitle: 'Магистратура по компьютерным наукам',
    eduMasterBody: 'После бакалавриата — дальнейшая специализация в исследовательской или технической области, исходя из опыта и интересов.',
    cvEduHsTitle: 'Аттестат о среднем образовании',
    cvEduHsBody: 'Египетская средняя школа — окончание в 2026 году.',
    cvEduBscTitle: 'Университетская стипендия (бакалавриат)',
    cvEduBscBody: 'Россия — компьютерные науки; пока не получена.',

    // Volunteering empty state (shared: homepage preview + page)
    volunteeringEmpty: 'Скоро будет больше волонтёрского опыта.',

    // Portal (gateway) — the site-root choice screen
    portalPrompt: 'За какой стороной вы пришли?',
    portalConnect: 'Связаться со мной',
    portalAcademicEyebrow: 'Академическая сторона',
    portalAcademicTitle: 'Компьютерные науки и технологии',
    portalAcademicDesc: 'Моя деятельность, включая волонтёрскую и общественную деятельность, а также языковые навыки.',
    portalSportsEyebrow: 'Личное',
    portalSportsTitle: 'Интересы и увлечения',
    portalSportsDesc: 'Этот раздел пока пуст — контент можно добавить позже.',
    portalEnter: 'Войти',

    // Digital Presence (homepage) + Discord community CTA
    digitalEyebrow: 'Я в сети',
    digitalHeading: 'Здесь я делюсь новостями',
    digitalLead: 'Тот же путь — в местах, где я создаю и общаюсь: академическая работа, проекты и повседневный контент.',
    digitalCreatorLine: 'Академичен по направлению. Творческий на практике.',
    discordTitle: 'Присоединяйтесь к сообществу',
    discordSubtitle: 'Уютный сервер Discord для этого пути — заходите.',
    discordButton: 'Зайти на сервер',
    opensNewTab: 'открывается в новой вкладке',

    // Volleyball (sports) page
    volleyballEyebrow: 'Вне учёбы',
    volleyballTitle: 'Волейбол',
    volleyballLead: 'Часть истории вне экрана — командная игра, дисциплина и спорт. Этот раздел растёт по мере появления реальных моментов.',
    volleyballEmpty: 'Скоро больше волейбольных историй.',

    // Страница «Интересы и увлечения» (заменяет старую страницу о
    // волейболе — честно пустое место, пока нет реального контента).
    activitiesEyebrow: 'Личное',
    activitiesTitle: 'Интересы и увлечения',
    activitiesLead: 'Волонтёрство, общественные программы и молодёжные инициативы — отдельно от академической и IT-работы.',
    activitiesEmpty: 'Здесь пока ничего нет. Загляните позже.',

    // --- Premium Volleyball universe (page-volleyball skin) ---
    volleyKicker: 'Развивающийся игрок. Любовь к атаке и блоку. Честный путь.',
    volleyTitleA: 'Волейбольный',
    volleyTitleB: 'Путь',
    volleySub: 'Развивающийся волейболист с любительскими корнями, предпочтением позиции центрального блокирующего и долгосрочным обязательством продолжать путь.',
    volleyCtaStory: 'Путь',
    volleyCtaAcademic: 'Учебный путь',
    volleyTicker: 'Первый турнир · 3-е место · Следующая глава',

    // Profile
    volleyProfileTitle: 'Профиль игрока',
    volleyPosLabel: 'Позиция',
    volleyPos: 'Центральный блокирующий',
    volleyNameLabel: 'Личность',
    volleyName: 'Хусейн',
    volleyDobLabel: 'Дата рождения',
    volleyDob: '9 июня 2004',
    volleyHeightLabel: 'Рост',
    volleyHeight: '188 см',
    volleyStyleLabel: 'Предпочтение',
    volleyStyle: 'Универсал — комфортно на любой позиции, кроме либеро. Особенно мне нравятся атака и блок.',
    volleyRoleLine: 'Развивающийся игрок с любительскими корнями — не входит ни в одну профессиональную команду. История рассказана как есть.',

    // Grassroots
    volleyGrassTitle: 'Где всё началось',
    volleyGrassLead: 'Мой путь начался не в профессиональном клубе. Он начался на местных площадках, в молодёжных центрах, с друзьями, неформальными командами и искренней любовью к волейболу.',

    // First tournament
    volleyFirstEyebrow: 'Первый турнир',
    volleyFirstTitle: 'Мой первый товарищеский турнир по волейболу',
    volleyFirstYear: 'Рамадан 2023',
    volleyFirstTeamLabel: 'Команда',
    volleyFirstTeam: 'Спортивный клуб Аль-Таавун — Аль-Харам',
    volleyFirstVenueLabel: 'Место',
    volleyFirstVenue: 'Инженерный синдикат',
    volleyFirstPosLabel: 'Позиция',
    volleyFirstPos: 'Центральный блокирующий',
    volleyFirstResLabel: 'Результат',
    volleyFirstRes: 'Третье место',
    volleyFirstStory: 'Я сыграл этот первый турнир с травмой колена. Для меня это был личный вызов больше, чем победа, — и воспоминание, которое я храню. После турнира мы собрались и разделили ифтар вместе во время Рамадана.',
    volleyGallery: 'Смотреть галерею',
    volleyCertificate: 'Смотреть сертификат',

    // Numbers
    volleyStatsTitle: 'В реальных цифрах',
    volleyStatFirstNum: '01',
    volleyStatFirstLabel: 'Первый турнир',
    volleyStatPlaceNum: '03',
    volleyStatPlaceLabel: 'Третье место',
    volleyStatPosNum: 'MB',
    volleyStatPosLabel: 'Центральный блокирующий',

    // Timeline
    volleyTimelineTitle: 'Мой путь до сих пор',
    volleyTl1Time: 'Любительские начала',
    volleyTl1Title: 'Начало',
    volleyTl1Sub: 'Местные площадки, молодёжные центры, друзья и неформальные команды.',
    volleyTl2Time: '2023',
    volleyTl2Title: 'Первый товарищеский турнир',
    volleyTl2Sub: 'Третье место — сыграно с травмой колена, ифтар вместе после.',
    volleyTl3Time: '2023–2025',
    volleyTl3Title: 'Локальная игра',
    volleyTl3Sub: 'Согласованные игры с друзьями и местными командами — любовь к игре росла.',
    volleyTl4Time: 'После 2025',
    volleyTl4Title: 'Поворотный момент',
    volleyTl4Sub: 'Я сделал паузу после травмы глаза и обстоятельств. Цель не изменилась.',
    volleyTl5Time: 'Сейчас',
    volleyTl5Title: 'Физическое развитие',
    volleyTl5Sub: 'В процессе — сила, подвижность, кондиция и мастерство.',
    volleyTl6Time: 'Будущее',
    volleyTl6Title: 'Продолжить волейбол',
    volleyTl6Sub: 'Долгосрочное обязательство продолжать играть за пределами Египта.',

    // Turning point
    volleyTurnTitle: 'Поворотный момент',
    volleyTurnMsg: 'Путь изменился после 2025, но цель — нет.',
    volleyTurnSub: 'После 2025 я сделал паузу в соревновательной игре из-за травмы глаза и обстоятельств переезда. Цель — продолжать развиваться как игрок и идти дальше — не изменилась.',

    // Athletic development
    volleyDevTitle: 'Физическое развитие',
    volleyDevStatus: 'Статус',
    volleyDevStatusVal: 'В процессе',
    volleyDevBody: 'Создание основы для следующей главы — сила, подвижность, кондиция, плиометрика и специализированные тренировки. Пока без заявлений, просто постоянная работа.',

    // Next chapter
    volleyNextTitle: 'Следующая глава',
    volleyNextLead: 'Продолжить волейбол за пределами Египта. Путь не окончен — он просто выбирает новый маршрут.',
    volleyNextDream: 'Обе команды, за которые я играл, были любительскими — ни одна не была зарегистрирована в Федерации, и я никогда не состоял в официальной команде. Это мечта, которую я не смог осуществить в Египте и намерен воплотить в России.',
    volleyFollowing: 'Развивающийся игрок · Центральный блокирующий · Долгий путь',

    // Memories
    volleyMemTitle: 'Воспоминания',
    volleyMemLead: 'Ранние воспоминания с первого турнира — сохранённые как есть.',

    // Media viewer & event controls (built in JS by media-system.js —
    // these can't be reached by data-i18n, so the labels are resolved
    // from this table at build/switch time instead)
    mvLabel: 'Просмотр медиа',
    mvClose: 'Закрыть просмотр',
    mvPrev: 'Предыдущее изображение',
    mvNext: 'Следующее изображение',
    mvUnavailable: 'Изображение недоступно.',
    eventClose: 'Закрыть',
    eventViewCert: 'Посмотреть сертификат',
    eventViewFull: 'Открыть изображение на весь экран',
    eventOpenImage: 'Открыть изображение',
    eventWatchVideo: 'Смотреть видео',
    eventWhatIDid: 'Что я делал',
    eventWhatILearned: 'Чему я научился',
    eventSkills: 'Навыки',
    eventPeople: 'Люди',
    eventGallery: 'Галерея',
    eventVideo: 'Видео',
    eventLinks: 'Ссылки',
    eventViewExperience: 'Подробнее',
    eventPhotos: 'Фото',
    eventCertificate: 'Сертификат',
    eventPosition: 'Позиция',
    eventVlog: 'Влог',
    eventVs: 'против',
    eventResult: 'Результат',
    eventStats: 'Статистика',
    eventNotes: 'Заметки',
  },
};
