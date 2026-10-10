(() => {
  const TYPES = ['analytic', 'creative', 'social', 'practical', 'managerial'];
  const COLORS = ['#2563eb', '#7c3aed', '#f59e0b', '#ef4444', '#10b981'];
  const HTML_LANG = { en: 'en', kz: 'kk', ru: 'ru' };

  const UI = {
    names: {
      en: ['Analytical', 'Creative', 'Social', 'Practical', 'Managerial'],
      kz: ['Аналитикалық', 'Шығармашыл', 'Әлеуметтік', 'Практикалық', 'Басқарушылық'],
      ru: ['Аналитический', 'Творческий', 'Социальный', 'Практичный', 'Управленческий']
    },
    answered: { en: 'answered', kz: 'жауап берілді', ru: 'отвечено' },
    retake: { en: 'Retake the test', kz: 'Тестті қайта өту', ru: 'Пройти тест заново' },
    second: { en: 'Second strongest type: ', kz: 'Екінші басым тип: ', ru: 'Второй по силе тип: ' },
    profTitle: { en: 'Professions for your type', kz: 'Сіздің типіңізге сәйкес мамандықтар', ru: 'Профессии для вашего типа' },
    salary: { en: 'Salary per month', kz: 'Айлық жалақы', ru: 'Зарплата в месяц' },
    pros: { en: 'Pros', kz: 'Артықшылықтары', ru: 'Плюсы' },
    cons: { en: 'Cons', kz: 'Кемшіліктері', ru: 'Минусы' },
    note: {
      en: 'Salaries are approximate ranges for Kazakhstan, from junior to senior. Check current figures on hh.kz and enbek.kz.',
      kz: 'Жалақы — Қазақстан бойынша шамамен алынған диапазон. Нақты деректерді hh.kz және enbek.kz сайттарында тексеріңіз. Мамандық сипаттамасы орыс тілінде көрсетіледі.',
      ru: 'Зарплаты — ориентировочные диапазоны по Казахстану, от начинающего до опытного специалиста. Актуальные цифры смотрите на hh.kz и enbek.kz.'
    }
  };

  const EXPLAIN = {
    analytic: {
      en: 'You demonstrate a strong analytical personality type. Your strengths include logical reasoning, data interpretation, and systems thinking. Suitable modern professions include data analyst, AI researcher, cybersecurity specialist, and business intelligence expert.',
      kz: 'Сізде аналитикалық тұлға типі басым. Сіздің күшті жақтарыңыз — логикалық ойлау, деректерді талдау және жүйелік ойлау. Сізге деректер талдаушысы, AI зерттеуші, киберқауіпсіздік маманы сияқты заманауи мамандықтар сәйкес келеді.',
      ru: 'У вас доминирует аналитический тип личности. Ваши сильные стороны — логическое мышление, анализ данных и системное мышление. Вам подходят профессии аналитика данных, AI-исследователя и специалиста по кибербезопасности.'
    },
    creative: {
      en: 'You have a creative personality type characterized by innovation and originality. Your strengths lie in idea generation and conceptual thinking. Relevant professions include UX designer, digital content creator, game designer, and creative technologist.',
      kz: 'Сіз шығармашылық тұлға типіне жатасыз. Сіздің күшті жақтарыңыз — идея тудыру және концептуалдық ойлау. UX дизайнер, цифрлық контент жасаушы, гейм-дизайнер сияқты мамандықтар сізге сәйкес.',
      ru: 'Вы относитесь к творческому типу личности. Ваши сильные стороны — генерация идей и концептуальное мышление. Вам подходят профессии UX-дизайнера, цифрового контент-креатора и гейм-дизайнера.'
    },
    social: {
      en: 'You display a socially oriented personality type. Your strengths include communication, empathy, and collaboration. Suitable professions include HR specialist, community manager, education technologist, and international consultant.',
      kz: 'Сіз әлеуметтік бағытталған тұлғасыз. Сіздің күшті жақтарыңыз — қарым-қатынас, эмпатия және ынтымақтастық. HR маманы, комьюнити-менеджер, білім беру технологы мамандықтары сәйкес келеді.',
      ru: 'Вы социально ориентированная личность. Ваши сильные стороны — коммуникация, эмпатия и сотрудничество. Вам подходят профессии HR-специалиста, комьюнити-менеджера и образовательного технолога.'
    },
    practical: {
      en: 'You are a practical personality type focused on real-world application. Your strengths include efficiency and technical implementation. Relevant professions include product engineer, operations analyst, and logistics specialist.',
      kz: 'Сіз практикалық тұлға типіне жатасыз. Сіздің күшті жақтарыңыз — тиімділік пен техникалық іске асыру. Өнім инженері, операциялық талдаушы мамандықтары сәйкес келеді.',
      ru: 'Вы практичный тип личности, ориентированный на применение. Ваши сильные стороны — эффективность и техническая реализация. Вам подходят профессии продуктового инженера и операционного аналитика.'
    },
    managerial: {
      en: 'You demonstrate a managerial personality type. Your strengths include leadership, strategic planning, and decision-making. Suitable professions include project manager, product manager, startup founder, and business strategist.',
      kz: 'Сізде басқарушылық тұлға типі дамыған. Сіздің күшті жақтарыңыз — көшбасшылық, стратегиялық жоспарлау және шешім қабылдау. Жоба менеджері, өнім менеджері, стартап негізін қалаушы мамандықтары сәйкес келеді.',
      ru: 'У вас управленческий тип личности. Ваши сильные стороны — лидерство, стратегическое планирование и принятие решений. Вам подходят профессии проектного менеджера, продакт-менеджера и основателя стартапа.'
    }
  };

  const ENGLISH = {
    analytic: {
      en: 'English enables access to scientific research, technical documentation, and global data resources.',
      kz: 'Ағылшын тілі ғылыми зерттеулерге, техникалық құжаттарға және жаһандық деректерге қол жеткізуге мүмкіндік береді.',
      ru: 'Английский язык дает доступ к научным исследованиям, технической документации и глобальным данным.'
    },
    creative: {
      en: 'English allows creative professionals to participate in global digital and cultural industries.',
      kz: 'Ағылшын тілі шығармашылық мамандарға жаһандық цифрлық және мәдени индустрияларға қатысуға мүмкіндік береді.',
      ru: 'Английский язык позволяет творческим специалистам участвовать в глобальных цифровых и культурных индустриях.'
    },
    social: {
      en: 'English is essential for cross-cultural communication and international collaboration.',
      kz: 'Ағылшын тілі мәдениетаралық қарым-қатынас пен халықаралық ынтымақтастық үшін қажет.',
      ru: 'Английский язык необходим для межкультурного общения и международного сотрудничества.'
    },
    practical: {
      en: 'English is required to work with international standards, tools, and technologies.',
      kz: 'Ағылшын тілі халықаралық стандарттармен, құралдармен және технологиялармен жұмыс істеу үшін қажет.',
      ru: 'Английский язык необходим для работы с международными стандартами, инструментами и технологиями.'
    },
    managerial: {
      en: 'English is critical for global leadership, negotiation, and business strategy.',
      kz: 'Ағылшын тілі жаһандық көшбасшылық, келіссөздер және бизнес стратегия үшін маңызды.',
      ru: 'Английский язык критически важен для глобального лидерства, переговоров и бизнес-стратегии.'
    }
  };

  const form = document.getElementById('testForm');
  const resultEl = document.getElementById('result');
  const questions = form.querySelectorAll('.question');
  let lang = 'en';
  let chart = null;
  let last = null; // { perc: [...], order: [indexes sorted desc] }

  try { lang = localStorage.getItem('lang') || 'en'; } catch (_) {}
  if (!HTML_LANG[lang]) lang = 'en';

  /* Accessibility: group each question's radios under its title */
  questions.forEach((q, i) => {
    const title = q.querySelector('.q-title');
    title.id = 'qt' + (i + 1);
    q.setAttribute('role', 'radiogroup');
    q.setAttribute('aria-labelledby', title.id);
  });

  /* Progress bar */
  const progress = document.createElement('div');
  progress.className = 'progress';
  progress.setAttribute('role', 'status');
  progress.innerHTML = '<div class="bar"><span></span></div><p></p>';
  form.prepend(progress);

  function updateProgress() {
    const done = new Set(new FormData(form).keys()).size;
    progress.querySelector('span').style.width = (done / questions.length * 100) + '%';
    progress.querySelector('p').textContent = done + ' / ' + questions.length + ' ' + UI.answered[lang];
  }

  /* Retake button */
  const retake = document.createElement('button');
  retake.type = 'button';
  retake.className = 'reset';
  resultEl.append(retake);
  retake.addEventListener('click', () => {
    form.reset();
    resultEl.style.display = 'none';
    last = null;
    updateProgress();
    window.scrollTo({ top: 0 });
  });

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function renderProfs(type) {
    const i = TYPES.indexOf(type);
    const pl = lang === 'en' ? 'en' : 'ru'; // казахский текст профессий пока берётся из русского
    let box = document.getElementById('professions');
    if (!box) {
      box = el('section');
      box.id = 'professions';
      resultEl.querySelector('.flex').after(box);
    }
    box.textContent = '';
    box.append(el('h3', '', UI.profTitle[lang]), el('p', 'prof-note', UI.note[lang]));
    const grid = el('div', 'prof-grid');
    (window.PROFS[type] || []).forEach(p => {
      const card = el('article', 'prof');
      card.style.setProperty('--c', COLORS[i]);
      card.append(el('h4', '', p[pl === 'en' ? 0 : 1]), el('p', '', p[pl === 'en' ? 2 : 3]));
      const sal = el('div', 'salary');
      sal.append(el('span', '', UI.salary[lang]), el('strong', '', p[4]));
      card.append(sal);
      [['pros', 5, 'plus'], ['cons', 7, 'minus']].forEach(([k, idx, cls]) => {
        const ul = el('ul', cls);
        p[idx + (pl === 'en' ? 0 : 1)].split(';').forEach(t => ul.append(el('li', '', t.trim())));
        card.append(el('h5', cls, UI[k][lang]), ul);
      });
      grid.append(card);
    });
    box.append(grid);
  }

  function renderResult() {
    if (!last) return;
    const { perc, order } = last;
    const top = TYPES[order[0]];
    const text = document.getElementById('textResult');
    text.textContent = '';

    const p = document.createElement('p');
    p.textContent = EXPLAIN[top][lang];
    text.append(p);

    if (perc[order[1]] > 0) {
      const s = document.createElement('p');
      s.textContent = UI.second[lang] + UI.names[lang][order[1]] + ' (' + perc[order[1]] + '%)';
      text.append(s);
    }

    const list = document.createElement('ul');
    list.className = 'scores';
    UI.names[lang].forEach((name, i) => {
      const li = document.createElement('li');
      li.innerHTML = '<span></span><strong></strong>';
      li.firstChild.textContent = name;
      li.lastChild.textContent = perc[i] + '%';
      list.append(li);
    });
    text.append(list);

    document.getElementById('englishBlock').textContent = ENGLISH[top][lang];
    renderProfs(top);

    if (chart) {
      chart.data.labels = UI.names[lang];
      chart.data.datasets[0].data = perc;
      chart.update();
    } else {
      chart = new Chart(document.getElementById('chart'), {
        type: 'doughnut',
        data: { labels: UI.names[lang], datasets: [{ data: perc, backgroundColor: COLORS }] },
        options: { plugins: { legend: { position: 'bottom' } } }
      });
    }
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem('lang', lang); } catch (_) {}
    document.documentElement.lang = HTML_LANG[lang];
    document.querySelectorAll('[data-en]').forEach(el => { el.textContent = el.dataset[lang]; });
    document.querySelectorAll('.lang-switch button').forEach(b => {
      b.setAttribute('aria-pressed', String(b.textContent.trim().toLowerCase() === lang));
    });
    const h1 = document.querySelector('h1');
    if (h1) document.title = h1.textContent;
    retake.textContent = UI.retake[lang];
    updateProgress();
    renderResult();
  }
  window.setLang = setLang; // keeps your onclick="setLang('en')" buttons working

  form.addEventListener('change', updateProgress);

  form.addEventListener('submit', e => {
    e.preventDefault();
    const counts = TYPES.map(() => 0);
    new FormData(form).forEach(v => {
      const i = TYPES.indexOf(v);
      if (i > -1) counts[i]++;
    });
    const total = counts.reduce((a, b) => a + b, 0);
    const perc = counts.map(c => Math.round(c / total * 100));
    const order = counts.map((_, i) => i).sort((a, b) => counts[b] - counts[a]);
    last = { perc, order };
    renderResult();
    resultEl.style.display = 'block';
    resultEl.scrollIntoView({ behavior: 'smooth' });
  });

  setLang(lang);
})();
