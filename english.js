// Для каждого типа: навыки (EN|RU), экзамены/курсы, уровень (EN|RU), совет (EN|RU)
window.ENG = {
  analytic: {
    skills: ['Reading scientific papers and documentation|Чтение научных статей и документации', 'Understanding data terms (dataset, regression, query)|Понимание терминов (dataset, regression, query)', 'Writing clear reports and findings|Написание понятных отчётов и выводов', 'Using GitHub, Stack Overflow and Kaggle|Работа с GitHub, Stack Overflow и Kaggle'],
    certs: ['IELTS Academic', 'TOEFL iBT', 'Google Data Analytics (Coursera)'],
    level: 'B2 – upper-intermediate|B2 – выше среднего',
    tip: 'Read one article a week on Kaggle or Towards Data Science and write down 5 new terms.|Читайте одну статью в неделю на Kaggle или Towards Data Science и выписывайте 5 новых терминов.'
  },
  creative: {
    skills: ['Following design trends and tutorials (Figma, Behance)|Чтение трендов и уроков по дизайну (Figma, Behance)', 'Presenting ideas to international clients|Презентация идей иностранным клиентам', 'Writing portfolio and project descriptions|Описание проектов в портфолио', 'Understanding briefs and feedback|Понимание брифов и обратной связи'],
    certs: ['IELTS General', 'Duolingo English Test', 'Google UX Design (Coursera)'],
    level: 'B1–B2 – intermediate|B1–B2 – средний',
    tip: 'Describe each portfolio project in English in five sentences.|Опишите каждый проект из портфолио по-английски в пяти предложениях.'
  },
  social: {
    skills: ['Active listening and speaking in meetings|Умение слушать и говорить на встречах', 'Writing professional emails and messages|Деловая переписка и письма', 'Intercultural communication|Межкультурное общение', 'Interviewing and presenting|Интервью и выступления'],
    certs: ['IELTS General', 'TOEFL iBT', 'TKT (for educators)'],
    level: 'B2–C1 – upper-intermediate to advanced|B2–C1 – от выше среднего до продвинутого',
    tip: 'Join an English speaking club or a language exchange twice a week.|Ходите в разговорный клуб или на языковой обмен два раза в неделю.'
  },
  practical: {
    skills: ['Reading manuals and safety standards|Чтение инструкций и стандартов безопасности', 'Understanding technical terms|Понимание технических терминов', 'Communicating with international suppliers|Общение с иностранными поставщиками', 'Learning from video tutorials|Обучение по видеоурокам'],
    certs: ['IELTS General', 'TOEIC', 'Cambridge Business English (BEC)'],
    level: 'B1–B2 – intermediate|B1–B2 – средний',
    tip: 'Watch one technical tutorial a week in English with English subtitles.|Смотрите одно техническое видео в неделю по-английски с английскими субтитрами.'
  },
  managerial: {
    skills: ['Negotiating and pitching to investors|Переговоры и питч для инвесторов', 'Leading meetings and writing strategy documents|Проведение встреч и стратегические документы', 'Reading business news (Forbes, Bloomberg)|Чтение деловых новостей (Forbes, Bloomberg)', 'International networking|Международный нетворкинг'],
    certs: ['IELTS Academic (7.0+)', 'TOEFL iBT', 'Cambridge C1 Advanced'],
    level: 'C1 – advanced|C1 – продвинутый',
    tip: 'Prepare a two-minute English pitch of your idea and record yourself.|Подготовьте двухминутный питч своей идеи по-английски и запишите себя на видео.'
  }
};

// Казахский перевод блока про английский
window.ENG_KZ = {
  analytic: { skills: ['Ғылыми мақалалар мен құжаттаманы оқу', 'Деректер терминдерін түсіну (dataset, regression, query)', 'Түсінікті есептер мен қорытындылар жазу', 'GitHub, Stack Overflow және Kaggle-мен жұмыс'], level: 'B2 – орташадан жоғары', tip: 'Аптасына Kaggle немесе Towards Data Science сайтынан бір мақала оқып, 5 жаңа терминді жазып алыңыз.' },
  creative: { skills: ['Дизайн трендтері мен сабақтарын оқу (Figma, Behance)', 'Идеяларды шетелдік клиенттерге таныстыру', 'Портфолиодағы жобаларды сипаттау', 'Бриф пен кері байланысты түсіну'], level: 'B1–B2 – орташа', tip: 'Портфолиодағы әр жобаны ағылшынша бес сөйлеммен сипаттаңыз.' },
  social: { skills: ['Кездесулерде тыңдау және сөйлеу', 'Іскерлік хаттар мен хабарламалар жазу', 'Мәдениетаралық қарым-қатынас', 'Сұхбат беру және сөз сөйлеу'], level: 'B2–C1 – орташадан жоғарыдан жоғары деңгейге дейін', tip: 'Аптасына екі рет ағылшынша сөйлесу клубына немесе тіл алмасуға барыңыз.' },
  practical: { skills: ['Нұсқаулықтар мен қауіпсіздік стандарттарын оқу', 'Техникалық терминдерді түсіну', 'Шетелдік жеткізушілермен қарым-қатынас', 'Бейнесабақтар арқылы оқу'], level: 'B1–B2 – орташа', tip: 'Аптасына бір техникалық бейнесабақты ағылшынша субтитрмен қараңыз.' },
  managerial: { skills: ['Келіссөздер жүргізу және инвесторларға питч жасау', 'Кездесулер өткізу және стратегиялық құжаттар жазу', 'Іскерлік жаңалықтарды оқу (Forbes, Bloomberg)', 'Халықаралық нетворкинг'], level: 'C1 – жоғары', tip: 'Идеяңыздың екі минуттық ағылшынша питчін дайындап, өзіңізді бейнеге түсіріңіз.' }
};
