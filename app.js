/* Trace Workroom | Translation, two-view navigation and accessible appearance preferences. */
(() => {
  'use strict';
  const urls = {
    information:'https://work-information-support.gabrielchun336.workers.dev/',
    research:'https://content-research-demo.gabrielchun336.workers.dev/',
    thought:'https://thought-flow-profile-07.chungkang.chatgpt.site/#work',
    next:'https://next-stop-live.chungkang.chatgpt.site/'
  };
  const T = {
    zh: {
      navHome:'首頁',navWork:'作品',appearance:'外觀',themeWarm:'暖白',themeDark:'深夜',themeBlue:'灰藍',
      footerLabel:'一起工作 / LET’S WORK',footerTitle:'從一段混亂的資訊，開始有方向的合作。',footerBy:'/ by Gabriel Chung',backTop:'回到首頁 ↑',
      heroLabel:'INDEPENDENT RESEARCH & WORKFLOW PRACTICE',heroTitle:'你好，我是 <span class="accent">Trace。</span><br>我把複雜資訊整理成能使用的成果。',
      heroIntro:'我協助創作者、研究者與小型團隊，將<span class="strong">分散的談話、資料與工作線索</span>，轉換成能理解、能確認，也能交接的成果。不是把所有話縮成一份摘要，而是找到真正需要被處理的脈絡。',
      heroAction:'聊聊你的需求 ↗',heroSecondary:'看看我的作品 →',heroArt:'FROM LANGUAGE TO CLARITY',
      serviceLabel:'01 / WHAT I CAN HELP WITH',serviceHeading:'讓資訊不只被收集，而是真的可以使用。',
      serviceDesc:'每一項合作都從你已經有的材料開始。不要求你先整理好，我們一起確認問題、界線與可交付的成果。',
      serviceOne:'逐字稿與訪談整理',serviceOneDesc:'把錄音轉寫、對話或訪談材料整理成主題、重點、引述與待確認資訊；保留說話者原意，不擅自補上不存在的結論。',serviceOneTags:['逐字稿校對','語意分段','訪談編碼'],
      serviceTwo:'脈絡訪查與研究報告',serviceTwoDesc:'整合分散來源、事件進展與不同觀點，製作可以追溯依據的脈絡整理、比較分析或短篇研究報告。',serviceTwoTags:['資料蒐集','脈絡查核','研究簡報'],
      serviceThree:'一對一工作協作',serviceThreeDesc:'陪你把模糊想法做成可操作的成果。例如規劃 GitHub、Notion、Cloudflare 的串接流程，協作建立個人網站、資料管理或內容工作流。',serviceThreeTags:['線上協作','工作流程','網站原型'],
      workLabel:'02 / SELECTED WORK',workHeading:'用實際作品，說明我的工作方式。',workBrowse:'瀏覽所有作品 ↗',
      featureOne:'從自然語言，走到可追蹤的工作狀態。',featureOneDesc:'保留語境、辨認依賴關係，讓口語更新形成可維護的工作資料。',
      featureTwo:'先自然說，然後把事情接回脈絡。',featureTwoDesc:'用可讀的狀態視角，理解不同工作線目前在哪裡。',
      methodLabel:'03 / HOW I WORK',methodHeading:'先把問題看清楚，再開始整理。',
      methodDesc:'我習慣將原話、推論與尚未確認的部分分開，再與你對齊真正需要交付的結果。AI 可以加速整理，但判斷與核對不會省略。',
      methodSteps:[['聽懂材料','從原始對話與文件開始，確認使用情境。'],['拆解脈絡','分辨事實、推論、歧義與缺少的資訊。'],['共同確認','對齊範圍、成果格式與可用的依據。'],['交付可用的成果','整理成報告、資料庫、網站或可繼續工作的流程。']],
      workIntroLabel:'SELECTED PROJECTS / 2026',workIntroTitle:'作品與實作。',workIntroDesc:'這些是目前公開的工作展示與獨立專案。每個案例對應不同情境，但都在回答同一件事：如何讓資訊變成可以被使用的下一步。',
      openProject:'開啟作品 ↗',demo:'PUBLIC DEMO',project:'INDEPENDENT PROJECT',
      caseOneTitle:'Work Information Support',caseOneDesc:'從婚禮／活動情境的自然語言，辨認人物、期限、決策與待確認事項，再整理成可追蹤的工作資料結構。',caseOneResult:'展示能力：資訊抽取、人工核對、任務與狀態交接。',
      caseTwoTitle:'Content Research / Work Method',caseTwoDesc:'讓隨機、混雜的口語資料先被保留，再依工作線重新整理脈絡與狀態，避免過早把所有內容簡化成待辦。',caseTwoResult:'展示能力：脈絡整理、狀態映射、研究資訊架構。',
      caseThreeTitle:'Thought Flow Profile 07',caseThreeDesc:'公開安全的語意工作流展示。從原始捕捉、語意分段與歧義確認，到可交付成果，並延伸至 Transcript Lab。',caseThreeResult:'展示能力：逐字稿品質、語意確認、研究與交付流程。',
      caseFourTitle:'Next Stop Live',caseFourDesc:'個人的音樂、演出與城市探索專案。從音樂發現、活動資訊到旅行筆記，嘗試將分散的內容連成讀者能使用的探索路徑。',caseFourResult:'展示能力：內容策劃、資訊設計、獨立專案實踐。',
      note:'作品使用公開展示頁、模擬材料或去識別化案例。若要討論實際合作，我們會先確認範圍、素材與保密需求。'
    },
    en: {
      navHome:'Home',navWork:'Work',appearance:'Theme',themeWarm:'Warm',themeDark:'Night',themeBlue:'Slate',
      footerLabel:'LET’S WORK TOGETHER',footerTitle:'A clearer way forward starts with a conversation.',footerBy:'/ by Gabriel Chung',backTop:'Back to home ↑',
      heroLabel:'INDEPENDENT RESEARCH & WORKFLOW PRACTICE',heroTitle:'Hi, I’m <span class="accent">Trace.</span><br>I turn complex information into useful work.',
      heroIntro:'I help creators, researchers and small teams turn <span class="strong">scattered conversations, documents and working notes</span> into clear, verifiable and handoff-ready outcomes. The goal is not to flatten everything into a summary—it is to understand what matters.',
      heroAction:'Discuss a project ↗',heroSecondary:'Explore selected work →',heroArt:'FROM LANGUAGE TO CLARITY',
      serviceLabel:'01 / HOW I CAN HELP',serviceHeading:'Information should be useful, not just organized.',
      serviceDesc:'We start with the materials you already have. You do not have to clean them up first; we define the problem, the boundaries and the deliverable together.',
      serviceOne:'Transcripts & interviews',serviceOneDesc:'Structure transcripts and interviews into topics, key points, quotes and open questions while protecting the speaker’s original intent.',serviceOneTags:['Transcript review','Semantic segmentation','Interview coding'],
      serviceTwo:'Context research & reports',serviceTwoDesc:'Bring together scattered sources, timelines and perspectives into traceable research briefs, comparisons and contextual reports.',serviceTwoTags:['Source research','Context verification','Research briefs'],
      serviceThree:'One-on-one workflow support',serviceThreeDesc:'Turn an idea into something that works. We can collaborate on GitHub, Notion and Cloudflare workflows, or build a small personal site and content system together.',serviceThreeTags:['Live collaboration','Workflows','Web prototypes'],
      workLabel:'02 / SELECTED WORK',workHeading:'A closer look at my work.',workBrowse:'View all projects ↗',
      featureOne:'From spoken notes to trackable work.',featureOneDesc:'Preserving context and dependencies while turning updates into a maintainable working structure.',
      featureTwo:'Talk naturally. Find the thread later.',featureTwoDesc:'A readable state-based view of where each working thread stands.',
      methodLabel:'03 / THE APPROACH',methodHeading:'Understand the problem before solving it.',
      methodDesc:'I separate original statements, interpretations and unknowns, then work with you to define the outcome. AI can speed up processing, but human verification stays essential.',
      methodSteps:[['Listen first','Begin with the actual conversations, files and working context.'],['Find the structure','Distinguish facts, interpretations, ambiguity and missing information.'],['Confirm together','Align on scope, supporting evidence and delivery format.'],['Make it usable','Deliver a report, database, website or repeatable workflow.']],
      workIntroLabel:'SELECTED PROJECTS / 2026',workIntroTitle:'Selected work.',workIntroDesc:'Public demos and an independent project. Different contexts, one ongoing question: how can complex information become a useful next step?',
      openProject:'Open project ↗',demo:'PUBLIC DEMO',project:'INDEPENDENT PROJECT',
      caseOneTitle:'Work Information Support',caseOneDesc:'An event-planning example: identifying people, dates, decisions and pending items in conversational updates, then transforming them into trackable records.',caseOneResult:'Focus: information extraction, human verification and handoff.',
      caseTwoTitle:'Content Research / Work Method',caseTwoDesc:'An approach that preserves messy natural language and reconnects it to separate working threads, instead of prematurely converting everything into a checklist.',caseTwoResult:'Focus: context analysis, state mapping and information architecture.',
      caseThreeTitle:'Thought Flow Profile 07',caseThreeDesc:'A public-safe semantic workflow demo, from capturing raw language and verifying ambiguity to handoff-ready results and transcript quality checks.',caseThreeResult:'Focus: transcript quality, semantic verification and research workflows.',
      caseFourTitle:'Next Stop Live',caseFourDesc:'An independent editorial project connecting music discovery, live events and city exploration into useful pathways for readers.',caseFourResult:'Focus: editorial planning, information design and independent delivery.',
      note:'Demos use public, simulated or de-identified materials. Collaboration begins with a discussion of scope, source material and confidentiality.'
    }
  };
  // Order: explicit URL override > manual preference > browser language > Cloudflare country.
  // Automatic selections are never saved as preferences.
  const urlLocale = new URLSearchParams(location.search).get('lang');
  const queryLocale = urlLocale === 'en' ? 'en' : (urlLocale === 'zh' || urlLocale === 'zh-Hant') ? 'zh' : null;
  let savedLocale = null;
  try {
    const explicit = localStorage.getItem('trace-explicit-lang');
    if (explicit === 'en' || explicit === 'zh') savedLocale = explicit;
  } catch {}
  const firstBrowserLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || '';
  const browserLocale = /^zh(?:-|$)/i.test(firstBrowserLanguage) ? 'zh' : /^en(?:-|$)/i.test(firstBrowserLanguage) ? 'en' : null;
  const needsGeoFallback = !(queryLocale || savedLocale || browserLocale);
  let lang = queryLocale || savedLocale || browserLocale || 'en';
  let theme = ['warm','dark','blue'].includes(localStorage.getItem('trace-theme')) ? localStorage.getItem('trace-theme') : 'warm';
  const main = document.getElementById('content');
  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  function home(d) {
    const services = [1,2,3].map((n,i)=>{
      const key=['One','Two','Three'][i];
      return '<article class="service"><div class="service-num">0'+n+'</div><div><h3>'+d['service'+key]+'</h3><div class="service-tags">'+d['service'+key+'Tags'].map(t=>'<span>'+esc(t)+'</span>').join('')+'</div></div><div class="service-detail"><p>'+d['service'+key+'Desc']+'</p></div><div class="service-arrow" aria-hidden="true">↗</div></article>';
    }).join('');
    return '<div class="page-home fade-up">'+
      '<section class="hero"><div class="container hero-grid"><div><span class="eyebrow"><span class="live-dot"></span>'+d.heroLabel+'</span><h1>'+d.heroTitle+'</h1><p class="hero-intro">'+d.heroIntro+'</p><div class="hero-cta"><a class="btn-primary" href="mailto:gabrielchun336@gmail.com?subject=Trace%20Workroom%20%2F%20Collaboration">'+d.heroAction+'</a><a class="btn-quiet" href="#work">'+d.heroSecondary+'</a></div></div><div class="hero-art" aria-hidden="true"><div class="orbit"></div><div class="orbit two"></div><div class="art-center"><span>t.</span></div><div class="art-caption">'+d.heroArt+'</div></div></div></section>'+
      '<div class="container"><div class="divider"></div></div>'+
      '<section class="section" id="services"><div class="container"><div class="section-heading"><span class="eyebrow">'+d.serviceLabel+'</span><div><h2>'+d.serviceHeading+'</h2><p class="section-desc">'+d.serviceDesc+'</p></div></div><div class="service-list">'+services+'</div></div></section>'+
      '<section class="section feature-section"><div class="wide"><div class="feature-head"><div><span class="eyebrow">'+d.workLabel+'</span><h2>'+d.workHeading+'</h2></div><a class="text-link" href="#work">'+d.workBrowse+'</a></div><div class="featured-grid"><a class="feature-card" href="'+urls.information+'" target="_blank" rel="noopener noreferrer"><span class="card-meta">01 / WORK INFORMATION SUPPORT</span><span class="card-nudge" aria-hidden="true">↗</span><h3>'+d.featureOne+'</h3><p>'+d.featureOneDesc+'</p></a><a class="feature-card" href="'+urls.research+'" target="_blank" rel="noopener noreferrer"><span class="card-meta">02 / CONTENT RESEARCH</span><span class="card-nudge" aria-hidden="true">↗</span><h3>'+d.featureTwo+'</h3><p>'+d.featureTwoDesc+'</p></a></div></div></section>'+
      '<section class="section method-section"><div class="container method-layout"><div><span class="eyebrow">'+d.methodLabel+'</span><h2>'+d.methodHeading+'</h2><p>'+d.methodDesc+'</p></div><div class="method-steps">'+d.methodSteps.map((s,i)=>'<div class="method-step"><span>0'+(i+1)+'</span><div><b>'+s[0]+'</b><small>'+s[1]+'</small></div></div>').join('')+'</div></div></section>'+
      '</div>';
  }
  function work(d) {
    const cases=[
      ['01',d.caseOneTitle,d.caseOneDesc,d.caseOneResult,urls.information,d.demo,'RESEARCH / OPERATIONS'],
      ['02',d.caseTwoTitle,d.caseTwoDesc,d.caseTwoResult,urls.research,d.demo,'CONTEXT / MAPPING'],
      ['03',d.caseThreeTitle,d.caseThreeDesc,d.caseThreeResult,urls.thought,d.demo,'TRANSCRIPT / SEMANTICS'],
      ['04',d.caseFourTitle,d.caseFourDesc,d.caseFourResult,urls.next,d.project,'EDITORIAL / PERSONAL']
    ];
    return '<div class="page-work fade-up"><section class="work-intro"><div class="container"><span class="eyebrow"><span class="live-dot"></span>'+d.workIntroLabel+'</span><h1>'+d.workIntroTitle+'</h1><p>'+d.workIntroDesc+'</p></div></section><section class="work-list"><div class="container">'+cases.map(c=>'<article class="case-card"><span class="case-index">'+c[0]+' / 04</span><div><span class="card-meta">'+c[5]+'</span><h2>'+c[1]+'</h2><p>'+c[2]+'</p><p class="case-result">'+c[3]+'</p></div><div class="case-side"><span class="case-type">'+c[6]+'</span><a class="case-link" href="'+c[4]+'" target="_blank" rel="noopener noreferrer">'+d.openProject+'</a></div></article>').join('')+'<div class="callout-note"><span class="note-mark" aria-hidden="true">✳</span><p>'+d.note+'</p></div></div></section></div>';
  }
  function render() {
    const d=T[lang], route=location.hash==='#work'?'work':'home';
    document.documentElement.lang=lang==='zh'?'zh-Hant':'en';
    document.title=(route==='work'?(lang==='zh'?'作品':'Selected Work')+' — ':'')+'Trace Workroom';
    document.querySelectorAll('[data-i18n]').forEach(e=>{ e.innerHTML=d[e.dataset.i18n] || ''; });
    document.querySelectorAll('[data-nav]').forEach(el=>{const on=el.dataset.nav===route;el.classList.toggle('active',on); if(on)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current')});
    document.querySelectorAll('[data-lang]').forEach(el=>{el.classList.toggle('selected',el.dataset.lang===lang);el.setAttribute('aria-pressed',String(el.dataset.lang===lang))});
    main.innerHTML=route==='work'?work(d):home(d);
    const themeButtons=document.querySelectorAll('[data-theme-option]');
    themeButtons.forEach(el=>{el.classList.toggle('selected',el.dataset.themeOption===theme);el.setAttribute('aria-pressed',String(el.dataset.themeOption===theme))});
  }
  function applyTheme(next) { theme=next; document.body.dataset.theme=theme; localStorage.setItem('trace-theme',theme); const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=theme==='dark'?'#181b1e':theme==='blue'?'#e7ebf0':'#f7f4f0';render(); }
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{
    lang=b.dataset.lang;
    try { localStorage.setItem('trace-explicit-lang',lang); } catch {}
    const url = new URL(location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang',lang);
      history.replaceState(null,'',url);
    }
    render();
  }));
  const trigger=document.getElementById('theme-trigger'),menu=document.getElementById('theme-menu');
  trigger.addEventListener('click',()=>{menu.hidden=!menu.hidden;trigger.setAttribute('aria-expanded',String(!menu.hidden))});
  document.querySelectorAll('[data-theme-option]').forEach(b=>b.addEventListener('click',()=>{menu.hidden=true;trigger.setAttribute('aria-expanded','false');applyTheme(b.dataset.themeOption)}));
  document.addEventListener('click',e=>{if(!e.target.closest('.theme-wrap')){menu.hidden=true;trigger.setAttribute('aria-expanded','false')}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.hidden=true;trigger.setAttribute('aria-expanded','false');trigger.focus()}});
  window.addEventListener('hashchange',()=>{render();window.scrollTo({top:0,behavior:'instant'})});
  applyTheme(theme);
  if (needsGeoFallback) {
    fetch('/api/locale',{cache:'no-store'})
      .then(r=>r.ok?r.json():null)
      .then(data=>{
        if(!data || !['zh','en'].includes(data.lang)) return;
        let manual=null;
        try {manual=localStorage.getItem('trace-explicit-lang');}catch{}
        if(!manual && data.lang!==lang) {lang=data.lang;render();}
      })
      .catch(()=>{});
  }
})();