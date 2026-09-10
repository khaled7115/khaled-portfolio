/* ============================================================
   DATA/RESEARCH.JS
   Same philosophy as data/projects.js — this array is EMPTY ON
   PURPOSE. No research exists yet, so nothing is invented to fill
   the page. pages/research.html shows an honest empty state until
   this array has real entries.

   ------------------------------------------------------------
   TO ADD YOUR FIRST REAL RESEARCH ENTRY:
   1. Add an object to the array below with this shape:

      {
        title: 'Paper or Research Title',
        abstract: 'A short summary of what the work covers.',
        authors: ['Hussein ElBassiouni'],   // array of strings
        journal: '',                         // publication venue, or '' if none yet
        date: 'YOUR_DATE',
        link: '',                            // URL to the publication, or ''
        pdf: '',                             // path in assets/documents/, or ''
      }

   2. Save the file. pages/research.html picks it up automatically.
   ------------------------------------------------------------ */

const researchData = [{
  title: {
    en: 'Leveraging Machine Learning and Natural Language Processing for Detecting Coordinated Disinformation Campaigns on Social Media Platforms',
    ar: 'الاستفادة من التعلم الآلي ومعالجة اللغة الطبيعية للكشف عن حملات التضليل المنسقة على منصات التواصل الاجتماعي',
    ru: 'Использование машинного обучения и обработки естественного языка для выявления скоординированных кампаний по дезинформации в социальных сетях'
  },

  abstract: {
    en: 'Social media has made it possible for coordinated disinformation campaigns to reach and manipulate public opinion at a scale that traditional propaganda never could. This paper reviews machine learning (ML) and natural language processing (NLP) approaches to detecting such campaigns, with a focus on the X (Twitter) platform. Drawing on research articles, benchmark datasets, and case studies published between 2016 and 2026, it examines classical and deep learning methods for identifying coordinated activity, compares their relative effectiveness, and considers what network-level approaches add beyond content analysis alone. Across the literature examined, hybrid approaches that combine content and network features consistently outperform single-method systems, though significant limitations around generalization, interpretability, and fairness remain.',

    ar: 'أتاحت وسائل التواصل الاجتماعي لحملات التضليل المنسقة الوصول إلى الرأي العام والتأثير فيه على نطاق لم يكن من الممكن أن تحققه الدعاية التقليدية. يستعرض هذا البحث الأساليب القائمة على التعلم الآلي ومعالجة اللغة الطبيعية للكشف عن هذه الحملات، مع التركيز على منصة X (تويتر سابقًا). وبالاعتماد على الأبحاث العلمية ومجموعات البيانات المعيارية ودراسات الحالة المنشورة بين عامي 2016 و2026، يتناول البحث أساليب التعلم الآلي التقليدية والعميقة المستخدمة في تحديد الأنشطة المنسقة، ويقارن مدى فعاليتها، كما يبحث في القيمة الإضافية لتحليل الشبكات مقارنة بتحليل المحتوى وحده. وتُظهر الدراسات التي تمت مراجعتها أن الأساليب الهجينة التي تجمع بين خصائص المحتوى وخصائص الشبكات تتفوق باستمرار على الأنظمة التي تعتمد على أسلوب واحد، رغم استمرار وجود قيود مهمة تتعلق بالتعميم وقابلية التفسير والعدالة.',

    ru: 'Социальные сети сделали возможным распространение и влияние скоординированных кампаний по дезинформации на общественное мнение в масштабах, недостижимых для традиционной пропаганды. В данной работе рассматриваются методы машинного обучения и обработки естественного языка для выявления таких кампаний с особым вниманием к платформе X. На основе научных статей, эталонных наборов данных и тематических исследований, опубликованных в период с 2016 по 2026 год, анализируются классические методы и методы глубокого обучения для выявления скоординированной активности. Рассматривается также дополнительная ценность сетевого анализа по сравнению с одним лишь анализом содержания. Исследования показывают, что гибридные подходы, объединяющие признаки содержания и сетевые характеристики, стабильно превосходят системы, основанные на одном методе, хотя сохраняются ограничения, связанные с обобщающей способностью, интерпретируемостью и справедливостью моделей.'
  },

  authors: ['Khaled Ahmed'],

  journal: 'papers.ssrn.com',

  date: '2026-09-06',

  link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7422978',

  pdf: 'assets/documents/machine.pdf'
}];

