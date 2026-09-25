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
}, {
  title: {
    en: 'Predicting Software Module Defects Using Static Code Metrics: A Machine Learning Analysis of the NASA KC1 Dataset',
    ar: 'التنبؤ بعيوب وحدات البرمجيات باستخدام مقاييس الشيفرة الثابتة: تحليل بالتعلم الآلي لمجموعة بيانات NASA KC1',
    ru: 'Прогнозирование дефектов программных модулей с использованием статических метрик кода: анализ набора данных NASA KC1 с помощью машинного обучения'
  },

  abstract: {
    en: 'Software defect prediction tries to flag which parts of a codebase are likely to contain bugs before those bugs are found through testing or after release. This project examines whether static code metrics such as lines of code, cyclomatic complexity, and several Halstead measures can predict whether a software module is defective, using the NASA KC1 dataset from the PROMISE repository. A duplicate check performed on the raw 2,109-row dataset, before any cleaning, found that 897 rows were exact duplicates; these were removed before modeling, because letting the same observation appear on both sides of a train/test split can make a model look more accurate than it actually is. After cleaning, 1,212 unique modules remained, about 26% of them defective. Three classifiers, Logistic Regression, a Decision Tree, and a Random Forest, were trained and evaluated on a single stratified 75/25 split, each in a baseline version and a class-weighted version. Random Forest reached the highest ROC-AUC on this split (0.639). A Stratified 5-fold cross-validation was then run as a robustness check on the full cleaned dataset; under cross-validation, Logistic Regression\'s mean ROC-AUC (about 0.690) was essentially tied with, and slightly above, Random Forest\'s (about 0.679-0.685), which shows that the single-split ranking of models does not fully hold up once evaluation is repeated across folds. Class weighting increased recall on the defective class for Logistic Regression and the Decision Tree, but not for Random Forest, so its effect depended on the model rather than being uniform. None of the models reached strong predictive performance, and this is reported honestly rather than as a success. The main contribution of this project is a concrete, hands-on demonstration of how duplicate records and the choice of evaluation procedure can each change how trustworthy a defect-prediction result looks, more than any single prediction score.',

    ar: 'يهدف التنبؤ بعيوب البرمجيات إلى تحديد أجزاء قاعدة الشيفرة البرمجية التي يُحتمل أن تحتوي على أخطاء قبل اكتشاف هذه الأخطاء من خلال الاختبار أو بعد إطلاق البرنامج. يدرس هذا المشروع ما إذا كانت مقاييس الشيفرة الثابتة، مثل عدد أسطر الشيفرة والتعقيد الدوري وعدد من مقاييس Halstead، قادرة على التنبؤ بما إذا كانت وحدة برمجية ما تحتوي على عيب، وذلك باستخدام مجموعة بيانات NASA KC1 من مستودع PROMISE. أظهر فحص للتكرارات أُجري على مجموعة البيانات الخام المكونة من 2,109 صفوف، قبل إجراء أي عملية تنظيف، وجود 897 صفًا مكررًا بشكل مطابق؛ وتم حذف هذه الصفوف قبل بناء النماذج، لأن ظهور الملاحظة نفسها في كل من بيانات التدريب والاختبار قد يجعل النموذج يبدو أكثر دقة مما هو عليه فعليًا. بعد التنظيف، تبقى 1,212 وحدة برمجية فريدة، كان نحو 26% منها مصنفًا على أنه معيب. تم تدريب وتقييم ثلاثة نماذج تصنيف، وهي الانحدار اللوجستي وشجرة القرار والغابة العشوائية، باستخدام تقسيم طبقي واحد بنسبة 75/25، مع اختبار كل نموذج في نسخته الأساسية ونسخة تستخدم أوزانًا للفئات. حققت الغابة العشوائية أعلى قيمة ROC-AUC على هذا التقسيم، بلغت 0.639. بعد ذلك، أُجري تحقق متقاطع طبقي من خمس طيات على مجموعة البيانات المنظفة بالكامل كاختبار للمتانة؛ وأظهر التحقق المتقاطع أن متوسط ROC-AUC للانحدار اللوجستي، والذي بلغ نحو 0.690، كان متقاربًا جدًا مع الغابة العشوائية بل أعلى منها قليلًا، التي تراوحت قيمتها بين نحو 0.679 و0.685. ويُظهر ذلك أن ترتيب النماذج في التقسيم الواحد لا يصمد بالكامل عند تكرار التقييم عبر عدة طيات. أدت أوزان الفئات إلى زيادة الاستدعاء للفئة المعيبة في الانحدار اللوجستي وشجرة القرار، لكنها لم تحقق التأثير نفسه في الغابة العشوائية، مما يدل على أن تأثيرها يعتمد على النموذج المستخدم وليس موحدًا. ولم يصل أي من النماذج إلى أداء تنبؤي قوي، وقد تم الإبلاغ عن هذه النتيجة بموضوعية بدلًا من عرضها كنجاح. وتتمثل المساهمة الرئيسية لهذا المشروع في تقديم توضيح عملي ومباشر لكيفية تأثير السجلات المكررة واختيار طريقة التقييم على مدى موثوقية نتائج التنبؤ بعيوب البرمجيات، وربما بدرجة أكبر من تأثير أي درجة تنبؤية منفردة.',

    ru: 'Прогнозирование дефектов программного обеспечения направлено на выявление частей исходного кода, которые с высокой вероятностью содержат ошибки, до того, как эти ошибки будут обнаружены в ходе тестирования или после выпуска программного продукта. В данном проекте исследуется, могут ли статические метрики кода, такие как количество строк кода, цикломатическая сложность и несколько метрик Halstead, предсказывать наличие дефекта в программном модуле. Для анализа используется набор данных NASA KC1 из репозитория PROMISE. Проверка на дубликаты, проведённая до очистки исходного набора из 2 109 строк, выявила 897 точных дубликатов. Они были удалены до построения моделей, поскольку присутствие одного и того же наблюдения одновременно в обучающей и тестовой выборках может привести к завышенной оценке точности модели. После очистки осталось 1 212 уникальных модулей, около 26% из которых были дефектными. Были обучены и оценены три классификатора: логистическая регрессия, дерево решений и случайный лес. Каждый из них оценивался с использованием одного стратифицированного разбиения 75/25 в базовой версии и версии с учетом весов классов. На этом разбиении случайный лес показал наибольшее значение ROC-AUC — 0,639. Затем для проверки устойчивости результатов была проведена стратифицированная пятикратная перекрёстная проверка на полном очищенном наборе данных. При перекрёстной проверке среднее значение ROC-AUC для логистической регрессии составило около 0,690, что практически совпало с результатом случайного леса и оказалось немного выше его значения, находившегося примерно в диапазоне 0,679–0,685. Это показывает, что исходное ранжирование моделей на одном разбиении не полностью сохраняется при повторной оценке на нескольких фолдах. Использование весов классов повысило полноту выявления дефектного класса для логистической регрессии и дерева решений, но не для случайного леса, поэтому его влияние зависело от выбранной модели и не было одинаковым. Ни одна из моделей не достигла высокой прогностической эффективности, и данный результат представлен объективно, а не как успешный результат. Основной вклад проекта заключается в практической демонстрации того, как дубликаты записей и выбор процедуры оценки могут влиять на достоверность результатов прогнозирования дефектов программного обеспечения, зачастую сильнее, чем отдельное значение прогностической метрики.', 
  },

  authors: ['Khaled Ahmed'],

  journal: 'papers.ssrn.com',

  date: '2026-09-13',

  link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7464660',

  pdf: 'assets/documents/Software.pdf'
}];

