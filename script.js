/**
 * BoniStudio — static site i18n + light interactions
 * All user-facing copy lives in I18N below.
 */

(function () {
  "use strict";

  var STORAGE_KEY = "bonistudio_lang";
  var DEFAULT_LANG = "en";

  var I18N = {
    en: {
      "nav.brand": "BoniStudio",
      "nav.tagline": "AI Automation Studio",
      "nav.services": "Services",
      "nav.systems": "Systems",
      "nav.process": "Process",
      "nav.why": "Why Us",
      "nav.contact": "Contact",
      "nav.bookDemo": "Book a Demo",

      "hero.eyebrow": "AI Automation Studio",
      "hero.title": "AI systems for modern businesses.",
      "hero.subtitle":
        "We build AI-powered websites, intake systems, and automations that help small teams capture leads, reduce repetitive work, and launch faster.",
      "hero.ctaPrimary": "Book a Demo",
      "hero.ctaSecondary": "View Example Systems",
      "hero.trust": "Bilingual. AI-first. Built fast. Designed for real business use.",

      "mock.windowTitle": "BoniStudio / Live",
      "mock.aiIntake": "AI Intake",
      "mock.live": "Live",
      "mock.leadCaptured": "Lead Captured",
      "mock.autoReply": "Auto Reply",
      "mock.sent": "Sent",
      "mock.bookingConfirmed": "Booking Confirmed",
      "mock.workflowActive": "Workflow Active",
      "mock.ops": "Operations console",
      "mock.health": "Systems nominal",
      "mock.synced": "Synced",
      "mock.chip1": "Intake received",
      "mock.chip2": "Lead qualified",
      "mock.chip3": "Summary sent",
      "mock.chip4": "Follow-up scheduled",
      "mock.ev1": "Workflow run #2841 · completed",
      "mock.ev2": "Bilingual summary dispatched",
      "mock.ev3": "Calendar bridge · idle",

      "graph.inquiry": "Inquiry",
      "graph.intake": "AI Intake",
      "graph.summary": "Summary",
      "graph.reply": "Reply",
      "graph.booking": "Booking",
      "graph.crm": "CRM / Email",

      "problem.title": "Your business should not lose leads because of outdated systems.",
      "problem.p1": "Outdated website experience",
      "problem.p2": "Repetitive customer questions",
      "problem.p3": "Missed leads from mobile visitors",
      "problem.p4": "Manual booking and follow-up",
      "problem.p5": "Weak bilingual support",
      "problem.p6": "No clear client intake flow",

      "services.title": "What we build",
      "services.s1.title": "AI-Powered Website",
      "services.s1.desc": "Modern, mobile-first websites designed to convert visitors into inquiries.",
      "services.s2.title": "AI Intake System",
      "services.s2.desc": "Collect client needs, qualify leads, and summarize inquiries automatically.",
      "services.s3.title": "Business Automation",
      "services.s3.desc": "Automate replies, forms, follow-ups, booking, and internal workflows.",
      "services.s4.title": "Bilingual Digital System",
      "services.s4.desc":
        "Built for businesses serving both English-speaking and Chinese-speaking clients.",

      "systems.title": "Example systems",
      "systems.lead": "Industry-specific systems we can customize and launch quickly.",
      "systems.law.title": "Law Firm AI Intake System",
      "systems.law.f1": "Structured client intake",
      "systems.law.f2": "Bilingual summaries",
      "systems.law.f3": "Document checklist",
      "systems.law.f4": "Attorney admin preview",
      "systems.law.f5": "Website upgrade option",
      "systems.law.status": "Live Demo",
      "systems.realtor.title": "Realtor Lead System",
      "systems.realtor.f1": "Listing landing pages",
      "systems.realtor.f2": "Buyer / seller lead forms",
      "systems.realtor.f3": "AI follow-up",
      "systems.realtor.f4": "Content automation",
      "systems.realtor.status": "Planned",
      "systems.creator.title": "Creator Automation System",
      "systems.creator.f1": "Digital product landing page",
      "systems.creator.f2": "AI caption workflow",
      "systems.creator.f3": "Email capture",
      "systems.creator.f4": "Social content pipeline",
      "systems.creator.status": "Planned",
      "systems.statusLabel": "Status",
      "systems.viewDemo": "View Demo",

      "process.title": "From idea to working system in days.",
      "process.s1.title": "Diagnose",
      "process.s1.desc": "We identify the business bottleneck.",
      "process.s2.title": "Prototype",
      "process.s2.desc": "We create a fast visual and functional demo.",
      "process.s3.title": "Build",
      "process.s3.desc": "We launch the system with real tools and automation.",
      "process.s4.title": "Improve",
      "process.s4.desc": "We track usage and improve based on feedback.",

      "why.title": "Why work with us",
      "why.lead":
        "We do not just build pages. We build usable systems that connect design, automation, AI, and business workflow.",
      "why.r1": "AI-first workflow",
      "why.r2": "Fast turnaround",
      "why.r3": "Bilingual execution",
      "why.r4": "Product-minded development",
      "why.r5": "Designed for small teams",

      "contact.title": "Ready to modernize your business system?",
      "contact.lead":
        "Send us your current website or workflow. We will show you where AI and automation can create immediate leverage.",
      "contact.emailLabel": "Email",
      "contact.emailUs": "Email Us",
      "contact.bookDemo": "Book a Demo",
      "contact.bookDemoSubject": "Book a Demo",
      "contact.phTitle": "Coming soon",
      "contact.phCal": "Calendly",
      "contact.phCalNote": "Placeholder — add your scheduling link",
      "contact.phWx": "WeChat QR",
      "contact.phWxNote": "Placeholder — add QR image in /assets",
      "contact.phDemo": "Demo pages",
      "contact.phDemoNote": "Placeholder — link Case Study / Demo URLs",

      "footer.copy": "© BoniStudio. AI Automation Studio.",

      _metaTitle: "BoniStudio — AI Automation Studio",
      _metaDesc:
        "AI-powered websites, intake systems, and automation tools for modern businesses, creators, and professional service teams.",
    },

    zh: {
      "nav.brand": "BoniStudio",
      "nav.tagline": "AI Automation Studio",
      "nav.services": "服务",
      "nav.systems": "系统案例",
      "nav.process": "流程",
      "nav.why": "为什么选择我们",
      "nav.contact": "联系",
      "nav.bookDemo": "预约演示",

      "hero.eyebrow": "AI 自动化工作室",
      "hero.title": "为现代商业打造 AI 系统。",
      "hero.subtitle":
        "我们为小型团队、专业服务机构和创作者打造 AI 网站、咨询收集系统与自动化工具，帮助你获取客户、减少重复沟通，并更快上线。",
      "hero.ctaPrimary": "预约演示",
      "hero.ctaSecondary": "查看系统案例",
      "hero.trust": "中英双语 · AI 优先 · 快速交付 · 面向真实业务",

      "mock.windowTitle": "BoniStudio / 实时",
      "mock.aiIntake": "AI 咨询收集",
      "mock.live": "运行中",
      "mock.leadCaptured": "线索已捕获",
      "mock.autoReply": "自动回复",
      "mock.sent": "已发送",
      "mock.bookingConfirmed": "预约已确认",
      "mock.workflowActive": "工作流进行中",
      "mock.ops": "运营控制台",
      "mock.health": "系统正常",
      "mock.synced": "已同步",
      "mock.chip1": "咨询已接收",
      "mock.chip2": "线索已筛选",
      "mock.chip3": "摘要已发送",
      "mock.chip4": "跟进已排期",
      "mock.ev1": "工作流 #2841 · 已完成",
      "mock.ev2": "双语摘要已发出",
      "mock.ev3": "日历桥接 · 空闲",

      "graph.inquiry": "客户咨询",
      "graph.intake": "AI 收集",
      "graph.summary": "摘要",
      "graph.reply": "自动回复",
      "graph.booking": "预约",
      "graph.crm": "CRM / 邮件",

      "problem.title": "你的业务不应该因为系统落后而流失客户。",
      "problem.p1": "网站体验过时",
      "problem.p2": "重复客户咨询过多",
      "problem.p3": "移动端访客流失",
      "problem.p4": "预约与跟进依赖人工",
      "problem.p5": "中英文支持薄弱",
      "problem.p6": "缺少清晰的客户收集流程",

      "services.title": "我们可以为你构建什么",
      "services.s1.title": "AI 驱动型官网",
      "services.s1.desc": "现代化、移动端优先的网站，目标是把访客转化为真实咨询。",
      "services.s2.title": "AI 咨询收集系统",
      "services.s2.desc": "自动收集客户需求、筛选潜在客户，并整理成清晰的咨询摘要。",
      "services.s3.title": "业务自动化",
      "services.s3.desc": "自动化回复、表单、跟进、预约以及内部流程。",
      "services.s4.title": "中英双语数字系统",
      "services.s4.desc": "适合同时服务英文与中文客户的商业场景。",

      "systems.title": "系统案例",
      "systems.lead": "可以按行业快速定制并上线的系统模板。",
      "systems.law.title": "律师事务所 AI 咨询系统",
      "systems.law.f1": "结构化客户咨询",
      "systems.law.f2": "中英双语摘要",
      "systems.law.f3": "文件清单",
      "systems.law.f4": "律师后台预览",
      "systems.law.f5": "官网升级选项",
      "systems.law.status": "可查看 Demo",
      "systems.realtor.title": "地产经纪获客系统",
      "systems.realtor.f1": "房源落地页",
      "systems.realtor.f2": "买家 / 卖家线索表单",
      "systems.realtor.f3": "AI 自动跟进",
      "systems.realtor.f4": "内容自动化",
      "systems.realtor.status": "计划中",
      "systems.creator.title": "创作者自动化系统",
      "systems.creator.f1": "数字产品销售页",
      "systems.creator.f2": "AI 文案工作流",
      "systems.creator.f3": "邮件收集",
      "systems.creator.f4": "社媒内容流水线",
      "systems.creator.status": "计划中",
      "systems.statusLabel": "状态",
      "systems.viewDemo": "查看演示",

      "process.title": "从想法到可用系统，只需要几天。",
      "process.s1.title": "诊断",
      "process.s1.desc": "诊断业务瓶颈。",
      "process.s2.title": "原型",
      "process.s2.desc": "快速制作视觉与功能原型。",
      "process.s3.title": "构建",
      "process.s3.desc": "使用真实工具与自动化流程上线系统。",
      "process.s4.title": "优化",
      "process.s4.desc": "根据使用反馈持续优化。",

      "why.title": "为什么选择我们",
      "why.lead": "我们不只是做页面，而是把设计、自动化、AI 与业务流程连接成真正可用的系统。",
      "why.r1": "AI 优先的工作流",
      "why.r2": "快速交付",
      "why.r3": "中英双语执行能力",
      "why.r4": "产品思维开发",
      "why.r5": "专为小团队设计",

      "contact.title": "准备升级你的业务系统了吗？",
      "contact.lead":
        "把你当前的网站或业务流程发给我们，我们会帮你判断 AI 与自动化可以从哪里立刻产生杠杆。",
      "contact.emailLabel": "邮箱",
      "contact.emailUs": "发送邮件",
      "contact.bookDemo": "预约演示",
      "contact.bookDemoSubject": "预约演示",
      "contact.phTitle": "即将推出",
      "contact.phCal": "Calendly",
      "contact.phCalNote": "占位 — 请添加你的预约链接",
      "contact.phWx": "微信 QR",
      "contact.phWxNote": "占位 — 请在 /assets 中放置二维码图片",
      "contact.phDemo": "演示页面",
      "contact.phDemoNote": "占位 — 可链接案例研究 / 演示地址",

      "footer.copy": "© BoniStudio。AI 自动化工作室。",

      _metaTitle: "BoniStudio — AI 自动化工作室",
      _metaDesc:
        "面向现代企业、创作者与专业团队的 AI 官网、咨询收集系统与自动化工具。",
    },
  };

  function getStoredLang() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      if (v === "en" || v === "zh") return v;
    } catch (e) {}
    return null;
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function getDict(lang) {
    return I18N[lang] || I18N[DEFAULT_LANG];
  }

  function t(lang, key) {
    var d = getDict(lang);
    return Object.prototype.hasOwnProperty.call(d, key) ? d[key] : key;
  }

  function applyLanguage(lang) {
    if (lang !== "en" && lang !== "zh") lang = DEFAULT_LANG;

    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

    var d = getDict(lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key || key.indexOf("_") === 0) return;
      var val = t(lang, key);
      if (typeof val === "string") el.textContent = val;
    });

    if (d._metaTitle) document.title = d._metaTitle;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && d._metaDesc) metaDesc.setAttribute("content", d._metaDesc);

    var toggleLabel = document.getElementById("langToggleLabel");
    if (toggleLabel) {
      toggleLabel.textContent = lang === "en" ? "中文" : "EN";
    }

    var langBtn = document.getElementById("langToggle");
    if (langBtn) {
      langBtn.setAttribute(
        "aria-label",
        lang === "en" ? "切换到中文" : "Switch to English"
      );
    }

    var bookDemoLink = document.getElementById("contactBookDemo");
    if (bookDemoLink) {
      var subj = t(lang, "contact.bookDemoSubject");
      if (typeof subj === "string") {
        bookDemoLink.setAttribute(
          "href",
          "mailto:bonistudio.core@gmail.com?subject=" + encodeURIComponent(subj)
        );
      }
    }

    setStoredLang(lang);
    window.__bonistudioLang = lang;
  }

  function initHeaderScroll() {
    var header = document.getElementById("header");
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 12) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function closeMobileNav() {
    var nav = document.getElementById("nav");
    var toggle = document.getElementById("menuToggle");
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  function openMobileNav() {
    var nav = document.getElementById("nav");
    var toggle = document.getElementById("menuToggle");
    if (!nav || !toggle) return;
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  function initMobileMenu() {
    var nav = document.getElementById("nav");
    var toggle = document.getElementById("menuToggle");
    if (!nav || !toggle) return;

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      if (nav.classList.contains("is-open")) closeMobileNav();
      else openMobileNav();
    });

    nav.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function () {
        closeMobileNav();
      });
    });

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 721px)").matches) closeMobileNav();
    });
  }

  function initLangToggle() {
    var btn = document.getElementById("langToggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = window.__bonistudioLang === "zh" ? "en" : "zh";
      applyLanguage(next);
    });
  }

  function initScrollReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    els.forEach(function (el) {
      io.observe(el);
    });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      a.addEventListener("click", function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (history.pushState) history.pushState(null, "", id);
      });
    });
  }

  function initReducedMotion() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("reduce-motion");
    document.querySelectorAll("svg *").forEach(function (el) {
      var n = el.tagName.toLowerCase();
      if (n === "animatemotion" || n === "animate") el.remove();
    });
  }

  initReducedMotion();
  var initial = getStoredLang() || DEFAULT_LANG;
  applyLanguage(initial);
  initHeaderScroll();
  initMobileMenu();
  initLangToggle();
  initScrollReveal();
  initSmoothAnchors();
})();
