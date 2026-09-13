/* ============================================================
   DATA/CERTIFICATES.JS
   Pure data. No HTML, no styling, no logic beyond the array
   itself — js/certificates.js (and the CV page) are the only
   files that read this.

   MULTILINGUAL FIELDS (AR / EN / RU)
   A certificate's `title` and `description` may each be EITHER:
     • a plain string  — shown as-is in every language, or
     • an object { en, ar, ru }  — the matching language is shown,
       falling back to English. This lets a certificate read
       naturally in Arabic and Russian, matching the rest of the
       trilingual site.
   `provider`, `date` and `category` stay single strings for now
   (proper nouns / a shared filter key) — see CHANGELOG v1.6.0 for
   why, and what the next honest localisation step would be.

   IMAGE PATHS are written relative to the academic/ folder itself
   (e.g. `assets/certificates/x.jpg`), NOT to any one page. js/certificates.js
   resolves them per page through EventSystem.resolveMediaPath, so the SAME
   data renders correctly on the homepage preview, the full Certificates page,
   and the root mirror — with no build step. Don't prefix them with `../`.

   ------------------------------------------------------------
   TO ADD A REAL CERTIFICATE:
   1. Copy the object below (the real one is a good template).
   2. Fill in title, provider, date, category, description and
      credentialUrl. Use a { en, ar, ru } object for title/description
      if you have translations, or a plain string if you don't.
   3. credentialUrl: paste the real verification link here (the URL
      that proves the certificate is genuine). The moment this field
      is non-empty, a "Click to verify" / "انقر للتحقق" button appears
      automatically in that certificate's detail view — leave it '' to
      keep the button hidden.
   4. Keep `isDemo: false`.
   5. Put the image file in academic/assets/certificates/ and point
      `image` at it (`assets/certificates/your-file.jpg`, academic-relative —
      no `../`). If the file isn't there yet, the card just hides its media
      frame and the viewer shows a clean placeholder — nothing breaks.
   6. Save the file — nothing else needs to change.
   ------------------------------------------------------------ */

const certificatesData = [
  // ---- Computer Science (shows under the "Computer Science" filter chip) ----


{
  title: {
    en: 'HackerRank Software Engineer Intern – Certificate of Accomplishment',
    ar: 'HackerRank لمهندس برمجيات متدرب – شهادة إنجاز',
    ru: 'HackerRank Software Engineer Intern – Сертификат о достижении',
  },
  provider: 'HackerRank',
  date: 'September 2026',
  category: 'Achievement',
  image: 'assets/certificates/software.jpg',
  credentialUrl: 'https://www.hackerrank.com/certificates/iframe/deb795ff2390',
  description: {
    en: 'Earned the HackerRank Software Engineer Intern Certificate of Accomplishment after successfully passing the role certification test, demonstrating foundational skills relevant to software engineering.',
    
    ar: 'حصلت على شهادة الإنجاز من HackerRank في مسار مهندس البرمجيات المتدرب بعد اجتياز اختبار الاعتماد الخاص بالدور بنجاح، مما يثبت امتلاك مهارات أساسية مرتبطة بمجال هندسة البرمجيات.',
    
    ru: 'Получен сертификат о достижении HackerRank Software Engineer Intern после успешного прохождения сертификационного теста, подтверждающий базовые навыки, необходимые в области разработки программного обеспечения.',
  },
  isDemo: false,
},

   
  {
  title: {
    en: 'Kangaroo Without Borders International Initiative – Certificate of Excellence',
    ar: 'مبادرة كانجارو بلا حدود – شهادة تميز',
    ru: 'Международная инициатива «Кенгуру без границ» – Сертификат отличия',
  },
  provider: 'EduMeter Egypt · Kangaroo Without Borders',
  date: 'Summer 2026',
  category: 'Computer Science',
  image: 'assets/certificates/math.png',
  credentialUrl: 'https://edumeteregypt.com/verify_certificate.php?data=eyJzdHVkZW50X2lkIjoia2hhbGVkMjAwNzEyMjA0ODAiLCJpdGVtX2lkIjoiMjAyNjY4Y2RmMDBjYzIwMjYiLCJjZXJ0aWZpY2F0ZV90eXBlIjoiXHUwNjJhXHUwNjQxXHUwNjQ4XHUwNjQyIn0%3D',
  description: {
    en: 'A Certificate of Excellence recognizing outstanding achievement in mathematics through the Kangaroo Without Borders International Initiative, with a focus on logical thinking, analytical reasoning, and problem-solving.',
    ar: 'شهادة تميز تقديرًا للإنجاز المتميز في الرياضيات ضمن مبادرة كانجارو بلا حدود، مع التركيز على التفكير المنطقي والتحليل وحل المشكلات.',
    ru: 'Сертификат отличия за выдающиеся достижения в математике в рамках международной инициативы «Кенгуру без границ», с акцентом на логическое мышление, аналитическое рассуждение и решение задач.',
  },
  isDemo: false,
},
  
  {
    title: 'AI Tools',
    provider: 'Microsoft · Kider Misr · Ministry of Youth and Sports',
    date: 'February 1–5, 2026',
    category: 'Computer Science',
    image: 'assets/certificates/ai-tools.jpg',
    credentialUrl: '',
    description: {
      en: 'A short, hands-on training on practical AI tools, delivered by Microsoft in partnership with Kider Misr and the Ministry of Youth and Sports.',
      ar: 'تدريب عملي قصير على أدوات الذكاء الاصطناعي، بالتعاون بين Microsoft وكيدر مصر ووزارة الشباب والرياضة.',
      ru: 'Короткое практическое обучение инструментам ИИ, проведённое Microsoft совместно с Kider Misr и Министерством молодёжи и спорта.',
    },
    isDemo: false,
  },
  {
    title: {
      en: 'Front-End Development — "El-Khaima El-Ramadania"',
      ar: 'تطوير الواجهات الأمامية — "الخيمة الرمضانية"',
      ru: 'Фронтенд-разработка — «Аль-Хайма Аль-Рамадания»',
    },
    provider: 'Microsoft · Kider Misr · Ministry of Youth and Sports',
    date: 'February 22–26, 2026',
    category: 'Computer Science',
    image: 'assets/certificates/front-end-development.jpg',
    credentialUrl: '',
    description: {
      en: 'A front-end web development track completed as part of the "El-Khaima El-Ramadania" training program, run by Microsoft with Kider Misr and the Ministry of Youth and Sports.',
      ar: 'مسار تدريبي في تطوير الواجهات الأمامية (Front-End)، ضمن برنامج "الخيمة الرمضانية"، بالتعاون بين Microsoft وكيدر مصر ووزارة الشباب والرياضة.',
      ru: 'Курс по фронтенд-разработке в рамках программы «Аль-Хайма Аль-Рамадания» от Microsoft совместно с Kider Misr и Министерством молодёжи и спорта.',
    },
    isDemo: false,
  },
  {
    title: {
      en: 'Introduction to Artificial Intelligence and Generative AI',
      ar: 'مدخل إلى الذكاء الاصطناعي والذكاء الاصطناعي التوليدي',
      ru: 'Введение в искусственный интеллект и генеративный ИИ',
    },
    provider: 'Edraak · Crescent Petroleum',
    date: 'August 2026',
    category: 'Computer Science',
    image: 'assets/certificates/intro-to-ai-generative-ai.jpg',
    credentialUrl: 'https://programs.edraak.org/learn/verify-certificate/86ecda3ef0cd4678a7e176bc492aa0fe/?lang=en',
    description: {
      en: 'A simplified, practical introduction to AI and Generative AI: core concepts, how models work, and real-world applications.',
      ar: 'مدخل مبسّط وعملي إلى الذكاء الاصطناعي والذكاء الاصطناعي التوليدي، يغطي المفاهيم الأساسية وآلية عمل النماذج وأبرز التطبيقات العملية.',
      ru: 'Упрощённое практическое введение в ИИ и генеративный ИИ: базовые понятия, принципы работы моделей и реальные применения.',
    },
    isDemo: false,
  },
  {
    title: {
      en: 'Data Science & Machine Learning',
      ar: 'علم البيانات والتعلّم الآلي',
      ru: 'Наука о данных и машинное обучение',
    },
    provider: 'Edraak',
    date: 'August 2026',
    category: 'Computer Science',
    image: 'assets/certificates/data-science-machine-learning.jpg',
    credentialUrl: 'https://programs.edraak.org/learn/verify-certificate/cd2e85836866450188d68f240d5335b8/?lang=en',
    description: {
      en: 'Covered the basics of data science and machine learning — practical applications, machine learning, AI, and neural networks — with hands-on, interactive training on real datasets.',
      ar: 'أساسيات علم البيانات والتعلّم الآلي وتطبيقاتهما العملية، مع التعرّف على التعلّم الآلي والذكاء الاصطناعي والشبكات العصبية، وساعات تدريبية تفاعلية على بيانات فعلية.',
      ru: 'Основы науки о данных и машинного обучения — практическое применение, машинное обучение, ИИ и нейронные сети — с интерактивной практикой на реальных данных.',
    },
    isDemo: false,
  },
  {
    title: {
      en: 'Robot Maker',
      ar: 'مقدمة في صناعة الروبوتات',
      ru: 'Robot Maker — основы робототехники',
    },
    provider: 'Edraak',
    date: 'August 2026',
    category: 'Computer Science',
    image: 'assets/certificates/robot-maker.jpg',
    credentialUrl: 'https://programs.edraak.org/learn/verify-certificate/2eed8ec940c64334bc9ad2333df45170/?lang=en',
    description: {
      en: 'Training in the basics of robotics — the sensors and electronics used in building robots, and how a robot can be designed using 3D programs — through practical projects.',
      ar: 'تدريب على أساسيات الروبوتات وأنواع الحساسات والإلكترونيات المستخدمة في تصميمها، والتدريب على برامج التصميم ثلاثي الأبعاد من خلال مشاريع عملية.',
      ru: 'Обучение основам робототехники — датчикам и электронике для сборки роботов, а также проектированию в 3D-программах — через практические проекты.',
    },
    isDemo: false,
  },

  // ---- Achievements (general — shows under the "Achievement" filter chip) ----

{
  title: {
    en: 'Kangaroo Without Borders International Initiative – Certificate of Excellence',
    ar: 'مبادرة كانجارو بلا حدود – شهادة تميز',
    ru: 'Международная инициатива «Кенгуру без границ» – Сертификат отличия',
  },
  provider: 'EduMeter Egypt · Kangaroo Without Borders',
  date: 'Summer 2026',
  category: 'Achievement',
  image: 'assets/certificates/math.png',
  credentialUrl: 'https://edumeteregypt.com/verify_certificate.php?data=eyJzdHVkZW50X2lkIjoia2hhbGVkMjAwNzEyMjA0ODAiLCJpdGVtX2lkIjoiMjAyNjY4Y2RmMDBjYzIwMjYiLCJjZXJ0aWZpY2F0ZV90eXBlIjoiXHUwNjJhXHUwNjQxXHUwNjQ4XHUwNjQyIn0%3D',
  description: {
    en: 'A Certificate of Excellence recognizing outstanding achievement in mathematics through the Kangaroo Without Borders International Initiative, highlighting logical thinking, analytical reasoning, and problem-solving skills.',
    ar: 'شهادة تميز تقديرًا للإنجاز المتميز في الرياضيات ضمن مبادرة كانجارو بلا حدود، وإبرازًا لمهارات التفكير المنطقي والتحليل وحل المشكلات.',
    ru: 'Сертификат отличия за выдающиеся достижения в математике в рамках международной инициативы «Кенгуру без границ», подчёркивающий навыки логического мышления, анализа и решения задач.',
  },
  isDemo: false,
},

  {
    title: {
      en: 'The National Awareness Role in Developing Youth Skills to Face Crises and Challenges',
      ar: 'دور الوعي الوطني في تنمية مهارات الشباب لمواجهة الأزمات والتحديات',
      ru: 'Роль национальной осведомлённости в развитии навыков молодёжи для преодоления кризисов и вызовов',
    },
    provider: 'Arab Court of Arbitration · Ministry of Youth and Sports (26th batch, sponsored by Faisal Islamic Bank of Egypt)',
    date: 'August 30 – September 1, 2026',
    category: 'Achievement',
    image: 'assets/certificates/national-awareness-youth-skills.jpg',
    credentialUrl: '',
    description: {
      en: 'A training program on national awareness and crisis-response skills for youth, run by the Arab Court of Arbitration with the Ministry of Youth and Sports.',
      ar: 'برنامج تدريبي في الوعي الوطني ومهارات مواجهة الأزمات والتحديات للشباب، نظّمته المحكمة العربية للتحكيم بالتعاون مع وزارة الشباب والرياضة.',
      ru: 'Тренинговая программа по национальной осведомлённости и навыкам преодоления кризисов для молодёжи, организованная Арабским арбитражным судом совместно с Министерством молодёжи и спорта.',
    },
    isDemo: false,
  },
  {
    title: {
      en: "International Financial Security Dictation — Winner's Diploma",
      ar: 'الإملاء الدولي للأمن المالي — دبلوم الفائز',
      ru: 'Международный диктант по финансовой безопасности — Диплом победителя',
    },
    provider: 'International Financial Security Dictation ("Финансовая безопасность в мире искусственного интеллекта")',
    date: 'September 2026',
    category: 'Achievement',
    image: 'assets/certificates/financial-security-dictation.jpg',
    credentialUrl: 'https://rosfindictant.ru/ru/verify?code=E1B5D2E5',
    description: {
      en: 'Scored 100 out of 100 in the International Financial Security Dictation, on the theme "Financial Security in the World of Artificial Intelligence: Challenges and Opportunities."',
      ar: 'حصل على 100 من 100 في الإملاء الدولي للأمن المالي، حول موضوع "الأمن المالي في عالم الذكاء الاصطناعي: التحديات والفرص".',
      ru: 'Набрал 100 из 100 баллов в Международном диктанте по финансовой безопасности на тему «Финансовая безопасность в мире искусственного интеллекта: вызовы и возможности».',
    },
    isDemo: false,
  },

  // ---- Activities (community / youth programs — shows under the "Activity" filter chip) ----
  {
    title: {
      en: 'Professional Consultation Workshops — "Mashwary" Project',
      ar: 'ورش المشورة المهنية — مشروع "مشواري"',
      ru: 'Мастер-классы по профориентации — проект «Машвари»',
    },
    provider: 'UNICEF · Ministry of Youth and Sports — Gezira Youth Development Center, Cairo',
    date: 'February 21–26, 2026',
    category: 'Activity',
    image: 'assets/certificates/mashwary-consultation-workshops.jpg',
    credentialUrl: '',
    description: {
      en: 'Took part in professional consultation workshops under the "Mashwary" project, run by UNICEF and the Ministry of Youth and Sports.',
      ar: 'المشاركة الفعّالة في ورش المشورة المهنية ضمن مشروع "مشواري"، بالتعاون بين يونيسف ووزارة الشباب والرياضة.',
      ru: 'Активное участие в мастер-классах по профориентации в рамках проекта «Машвари» при поддержке ЮНИСЕФ и Министерства молодёжи и спорта.',
    },
    isDemo: false,
  },
  {
    title: {
      en: 'Skills Development Program — "Mashwary" Project',
      ar: 'برنامج تنمية المهارات — مشروع "مشواري"',
      ru: 'Программа развития навыков — проект «Машвари»',
    },
    provider: 'UNICEF · Ministry of Youth and Sports — Baladi Al-Gezira Youth Academy, Cairo',
    date: 'March 5–11, 2026',
    category: 'Activity',
    image: 'assets/certificates/mashwary-skills-development.jpg',
    credentialUrl: '',
    description: {
      en: 'Took part in a skills development program under the "Mashwary" project, run by UNICEF and the Ministry of Youth and Sports.',
      ar: 'المشاركة الفعّالة في برنامج تنمية المهارات ضمن مشروع "مشواري"، بالتعاون بين يونيسف ووزارة الشباب والرياضة.',
      ru: 'Активное участие в программе развития навыков в рамках проекта «Машвари» при поддержке ЮНИСЕФ и Министерства молодёжи и спорта.',
    },
    isDemo: false,
  },
];

/* ------------------------------------------------------------
   PARKED DEMO ENTRIES — kept, not deleted (nothing is ever lost).

   These were placeholder stubs used to preview the UI before any
   real certificate existed. Now that a real one is in place they are
   commented out, so visitors only ever see genuine certificates.
   To reuse one as a starting point, copy it up into the array above
   and fill it in with real details.
   ------------------------------------------------------------
  {
    title: 'YOUR_CERTIFICATE_TITLE (e.g. Introduction to Python)',
    provider: 'YOUR_PROVIDER',
    date: 'YOUR_DATE',
    category: 'Programming',
    image: 'assets/certificates/YOUR_CERTIFICATE_IMAGE.jpg',
    credentialUrl: '',
    description: 'A short, honest description of what this certificate covers.',
    isDemo: true,
  },
  {
    title: 'YOUR_CERTIFICATE_TITLE (e.g. Statistics Fundamentals)',
    provider: 'YOUR_PROVIDER',
    date: 'YOUR_DATE',
    category: 'Mathematics',
    image: 'assets/certificates/YOUR_CERTIFICATE_IMAGE.jpg',
    credentialUrl: '',
    description: 'A short, honest description of what this certificate covers.',
    isDemo: true,
  },
  {
    title: 'YOUR_CERTIFICATE_TITLE (e.g. English for Academic Purposes)',
    provider: 'YOUR_PROVIDER',
    date: 'YOUR_DATE',
    category: 'English',
    image: 'assets/certificates/YOUR_CERTIFICATE_IMAGE.jpg',
    credentialUrl: '',
    description: 'A short, honest description of what this certificate covers.',
    isDemo: true,
  },
------------------------------------------------------------ */
