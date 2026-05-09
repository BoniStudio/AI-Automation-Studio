/**
 * Law Firm AI Intake Demo — i18n + intake + admin (no API, localStorage only)
 */
(function () {
  "use strict";

  var STORAGE_KEY = "bonistudio_law_firm_intake_demo";
  var LANG_KEY = "bonistudio_law_firm_demo_lang";
  var DEFAULT_LANG = "en";

  var I18N = {
    en: {
      "meta.titleIntake": "Law Firm AI Intake System | BoniStudio",
      "meta.titleAdmin": "Law Firm Admin Preview | BoniStudio",

      "nav.brand": "BoniStudio",
      "nav.tag": "Law Firm AI Intake",

      "hero.eyebrow": "AI-enhanced intake for modern law firms",
      "nav.home": "Back to Home",
      "nav.admin": "Admin Preview",
      "nav.intake": "Back to Intake Demo",
      "nav.contact": "Contact Us",
      "lang.toggle": "中文",

      "admin.navBrand": "Law Firm Admin Preview",
      "admin.navTag": "AI Intake System",

      "hero.title": "AI Intake Workflow for Modern Law Firms",
      "hero.sub":
        "A bilingual intake system that helps law firms collect client information, organize documents, and generate structured summaries before the first consultation.",
      "hero.cta1": "Try Intake Demo",
      "hero.cta2": "View Admin Preview",
      "hero.trust":
        "Designed for immigration, family, real estate, business, personal injury, estate planning, and other legal practices.",

      "flow.c": "Client",
      "flow.f": "Intake Form",
      "flow.a": "AI Summary",
      "flow.r": "Attorney Review",
      "flow.x": "Consultation",

      "why.title": "The problem is not just an outdated website.",
      "why.lead":
        "Many law firms still rely on scattered phone calls, emails, text messages, and manual notes. Before an attorney reviews a potential client, important information is often fragmented or incomplete.",
      "why.p1": "Calls, emails, and messages are hard to organize",
      "why.p2": "Staff repeatedly ask the same basic questions",
      "why.p3": "Important dates and documents are often missing",
      "why.p4": "Bilingual clients may need clearer communication support",
      "why.p5": "Attorneys spend time reviewing scattered notes",
      "why.p6": "Old websites do not guide clients into a clear intake flow",

      "how.title": "How It Works",
      "how.s1t": "Client starts intake",
      "how.s1d": "The client or staff member opens a structured intake form.",
      "how.s2t": "Information is collected",
      "how.s2d":
        "The form collects practice area, urgency, timeline, contact preference, and available documents.",
      "how.s3t": "AI organizes the summary",
      "how.s3d": "AI turns the intake into a clear structured summary for internal review.",
      "how.s4t": "Attorney reviews and follows up",
      "how.s4d": "The attorney or staff reviews the lead and decides the next step.",

      "form.title": "Try the law firm intake workflow",
      "form.filler": "Who is filling this form?",
      "form.opt.client": "Client",
      "form.opt.assistant": "Staff member",
      "form.opt.family": "Family member / representative",
      "form.name": "Client name",
      "form.lang": "Preferred language",
      "form.lang.zh": "Chinese",
      "form.lang.en": "English",
      "form.lang.bi": "Bilingual",
      "form.contact": "Contact method",
      "form.cm.phone": "Phone",
      "form.cm.wechat": "WeChat",
      "form.cm.email": "Email",
      "form.cm.sms": "SMS",
      "form.contactDetail": "Phone / email / WeChat ID (if applicable)",
      "form.area": "Practice area",
      "form.ar.immigration": "Immigration",
      "form.ar.family": "Family / Divorce",
      "form.ar.realestate": "Real Estate",
      "form.ar.business": "Business",
      "form.ar.injury": "Personal Injury",
      "form.ar.estate": "Estate Planning",
      "form.ar.other": "Other",
      "form.urgency": "Urgency level",
      "form.ug.low": "Low",
      "form.ug.med": "Medium",
      "form.ug.high": "High",
      "form.ug.urgent": "Urgent",
      "form.situation": "Situation description",
      "form.situation.ph":
        "Briefly describe the situation, important dates, notices received, current status, and what you want help with.",
      "form.dates": "Important dates",
      "form.dates.ph": "Example: Court date, USCIS deadline, contract closing date, accident date…",
      "form.docs": "Available documents",
      "form.doc.passport": "Passport / ID",
      "form.doc.uscis": "USCIS notice",
      "form.doc.court": "Court document",
      "form.doc.contract": "Contract",
      "form.doc.police": "Police report",
      "form.doc.medical": "Medical record",
      "form.doc.marriage": "Marriage certificate",
      "form.doc.tax": "Tax / financial document",
      "form.doc.photos": "Photos / evidence",
      "form.doc.unsure": "Not sure",
      "form.next": "Preferred next step",
      "form.nx.phone": "Phone consultation",
      "form.nx.video": "Video consultation",
      "form.nx.inperson": "In-person meeting",
      "form.nx.email": "Email follow-up",
      "form.nx.unsure": "Not sure",
      "form.submit": "Generate Intake Summary",

      "sum.title": "AI-organized intake summary",
      "sum.profile": "Client Profile",
      "sum.practice": "Practice Area",
      "sum.urgency": "Urgency",
      "sum.facts": "Key Facts",
      "sum.dates": "Important Dates",
      "sum.docs": "Available Documents",
      "sum.missing": "Missing Information",
      "sum.rec": "Recommended Internal Next Step",
      "sum.bilingual": "Bilingual Summary",
      "sum.notprovided": "Not provided",
      "sum.miss1": "Full timeline of events",
      "sum.miss2": "Copies of relevant notices or documents",
      "sum.miss3": "Opposing party / agency information if applicable",
      "sum.miss4": "Preferred consultation time",
      "sum.recbody":
        "Law firm staff should review the summary, confirm missing information, and schedule an initial consultation if appropriate.",
      "sum.disclaimer":
        "This demo does not provide legal advice. It only organizes intake information for review by a qualified attorney or law firm staff.",

      "after.admin": "View Admin Preview",
      "after.email": "Email BoniStudio",

      "opt.title": "Two ways to use this system",
      "opt.at": "Full Law Firm Website Upgrade + AI Intake",
      "opt.ad":
        "Best for law firms with outdated websites, weak mobile experience, or no structured online intake flow.",
      "opt.ali1": "Modern law firm website redesign",
      "opt.ali2": "Mobile-first experience",
      "opt.ali3": "Bilingual pages",
      "opt.ali4": "Practice area pages",
      "opt.ali5": "Attorney profile section",
      "opt.ali6": "AI intake workflow",
      "opt.ali7": "Contact / booking flow",
      "opt.ali8": "Basic SEO setup",
      "opt.ali9": "Launch support",
      "opt.acta": "Request Website Upgrade",

      "opt.bt": "AI Intake Add-on for Existing Websites",
      "opt.bd":
        "Best for law firms that already have a website and want to add structured intake without rebuilding everything.",
      "opt.bli1": "Intake form module",
      "opt.bli2": "AI summary generation",
      "opt.bli3": "Admin preview",
      "opt.bli4": "Email notification workflow",
      "opt.bli5": "Document checklist",
      "opt.bli6": "Website embed support",
      "opt.bli7": "Minimal disruption to current website",
      "opt.bcta": "Request AI Intake Add-on",

      "risk.title": "This is not an AI lawyer.",
      "risk.body":
        "The system does not answer legal questions, predict outcomes, or replace attorney judgment. It only organizes intake information so law firm staff can review potential clients faster and with less confusion.",

      "final.title": "Want to see how this could work for your law firm?",
      "final.sub":
        "Send us your current website or intake workflow. We can recommend whether you need a full website upgrade or an AI intake add-on.",
      "final.cta": "Email BoniStudio",

      "admin.hero.title": "Organized client information before the first consultation.",
      "admin.hero.sub":
        "Every intake becomes a structured client card with practice area, urgency, documents, key facts, and recommended follow-up.",

      "dash.s1": "New Intakes",
      "dash.s2": "High Priority",
      "dash.s3": "Missing Documents",
      "dash.s4": "Ready for Consultation",

      "lead.status.needs": "Needs review",
      "lead.status.missing": "Missing documents",
      "lead.status.ready": "Ready for follow-up",

      "panel.info": "Client Information",
      "panel.contact": "Contact Method",
      "panel.area": "Practice Area",
      "panel.urgency": "Urgency",
      "panel.ai": "AI Summary",
      "panel.dates": "Important Dates",
      "panel.docs": "Available Documents",
      "panel.missing": "Missing Information",
      "panel.rec": "Recommended Follow-up",
      "panel.notes": "Internal Notes",

      "act.reviewed": "Mark as Reviewed",
      "act.request": "Request Documents",
      "act.schedule": "Schedule Consultation",
      "act.email": "Send Follow-up Email",

      "toast.demo": "Demo action only.",

      "strip":
        "Client submits → AI organizes → Staff reviews → Attorney follows up → Consultation",

      "foot.disclaimer":
        "This is a workflow demo. It does not provide legal advice. Final review must be completed by a qualified attorney or law firm staff.",

      "mock1.sum":
        "Client is seeking help with an immigration-related issue and has provided partial document information. Important dates require confirmation.",
      "mock1.miss": "Full timeline\nCurrent visa status details\nPreferred consultation time",
      "mock1.rec": "Confirm missing timeline and schedule initial consultation.",
      "mock2.sum":
        "Client wants to understand next steps for a family law matter. Basic situation was provided, but supporting documents are missing.",
      "mock3.sum":
        "Client is considering a real estate contract review and prefers email follow-up.",
    },

    zh: {
      "meta.titleIntake": "律师事务所 AI 咨询系统演示 | BoniStudio",
      "meta.titleAdmin": "律所后台预览 | BoniStudio",

      "nav.brand": "BoniStudio",
      "nav.tag": "律师事务所 AI 咨询系统",
      "hero.eyebrow": "面向现代律师事务所的 AI 咨询流程",
      "nav.home": "返回首页",
      "nav.admin": "后台预览",
      "nav.intake": "返回咨询演示",
      "nav.contact": "联系我们",
      "lang.toggle": "EN",

      "admin.navBrand": "律所后台预览",
      "admin.navTag": "AI 咨询系统",

      "hero.title": "现代律师事务所 AI 客户咨询流程",
      "hero.sub":
        "一个中英双语的客户咨询系统，帮助律师事务所在正式咨询前收集客户信息、整理资料，并生成结构化摘要。",
      "hero.cta1": "体验咨询流程",
      "hero.cta2": "查看后台预览",
      "hero.trust":
        "适用于移民、婚姻家庭、房产、商业、人身伤害、遗产规划及其他法律服务场景。",

      "flow.c": "客户",
      "flow.f": "咨询表",
      "flow.a": "AI 摘要",
      "flow.r": "律师查看",
      "flow.x": "正式咨询",

      "why.title": "真正的问题不只是网站老旧。",
      "why.lead":
        "很多律师事务所仍然依赖电话、邮件、短信和人工笔记处理初步咨询。律师正式查看潜在客户前，关键信息往往已经分散或不完整。",
      "why.p1": "电话、邮件和短信信息难以整理",
      "why.p2": "团队反复询问相同基础问题",
      "why.p3": "关键日期和文件经常缺失",
      "why.p4": "双语客户需要更清晰的沟通支持",
      "why.p5": "律师需要花时间查看零散记录",
      "why.p6": "老旧网站无法引导客户进入清晰咨询流程",

      "how.title": "工作流程",
      "how.s1t": "客户开始填写",
      "how.s1d": "客户或团队成员打开结构化咨询表。",
      "how.s2t": "信息被统一收集",
      "how.s2d": "表单收集法律服务领域、紧急程度、时间线、联系方式与已有资料。",
      "how.s3t": "AI 整理摘要",
      "how.s3d": "AI 将内容整理成清晰的结构化摘要，供内部查看。",
      "how.s4t": "律师查看并跟进",
      "how.s4d": "律师或团队成员查看客户卡片，并决定下一步沟通方式。",

      "form.title": "体验律所客户咨询流程",
      "form.filler": "谁在填写本表？",
      "form.opt.client": "客户本人",
      "form.opt.assistant": "律所工作人员",
      "form.opt.family": "家人 / 代理人协助填写",
      "form.name": "客户姓名",
      "form.lang": "首选语言",
      "form.lang.zh": "中文",
      "form.lang.en": "英文",
      "form.lang.bi": "中英双语",
      "form.contact": "联系方式",
      "form.cm.phone": "电话",
      "form.cm.wechat": "微信",
      "form.cm.email": "邮件",
      "form.cm.sms": "短信",
      "form.contactDetail": "电话 / 邮箱 / 微信号（如适用）",
      "form.area": "法律服务领域",
      "form.ar.immigration": "移民",
      "form.ar.family": "婚姻家庭 / 离婚",
      "form.ar.realestate": "房产",
      "form.ar.business": "商业",
      "form.ar.injury": "人身伤害",
      "form.ar.estate": "遗产规划",
      "form.ar.other": "其他",
      "form.urgency": "紧急程度",
      "form.ug.low": "低",
      "form.ug.med": "中",
      "form.ug.high": "高",
      "form.ug.urgent": "紧急",
      "form.situation": "情况说明",
      "form.situation.ph":
        "请简要描述当前情况、重要日期、收到的通知、当前状态，以及希望律师帮助解决的问题。",
      "form.dates": "重要日期",
      "form.dates.ph": "例如：开庭日期、USCIS 截止日期、房屋交割日期、事故日期等",
      "form.docs": "已有资料",
      "form.doc.passport": "护照 / 身份证件",
      "form.doc.uscis": "USCIS 通知",
      "form.doc.court": "法庭文件",
      "form.doc.contract": "合同",
      "form.doc.police": "警方报告",
      "form.doc.medical": "医疗记录",
      "form.doc.marriage": "结婚证明",
      "form.doc.tax": "税务 / 财务文件",
      "form.doc.photos": "照片 / 证据",
      "form.doc.unsure": "不确定",
      "form.next": "希望下一步",
      "form.nx.phone": "电话咨询",
      "form.nx.video": "视频咨询",
      "form.nx.inperson": "线下面谈",
      "form.nx.email": "邮件跟进",
      "form.nx.unsure": "不确定",
      "form.submit": "生成咨询摘要",

      "sum.title": "AI 整理后的咨询摘要",
      "sum.profile": "客户概况",
      "sum.practice": "法律服务领域",
      "sum.urgency": "紧急程度",
      "sum.facts": "关键事实",
      "sum.dates": "重要日期",
      "sum.docs": "已有资料",
      "sum.missing": "待补充信息",
      "sum.rec": "建议内部下一步",
      "sum.bilingual": "双语摘要",
      "sum.notprovided": "未填写",
      "sum.miss1": "完整事件时间线",
      "sum.miss2": "相关通知或文件副本",
      "sum.miss3": "相对方或机构信息（如适用）",
      "sum.miss4": "希望预约咨询的时间",
      "sum.recbody": "律所工作人员应核对摘要、确认缺失信息，并在合适时安排初次咨询。",
      "sum.disclaimer":
        "本 Demo 不提供法律建议，仅用于整理初步咨询信息，供合格律师或律所工作人员进一步查看。",

      "after.admin": "查看后台预览",
      "after.email": "邮件联系 BoniStudio",

      "opt.title": "两种使用方式",
      "opt.at": "完整律所官网升级 + AI 咨询系统",
      "opt.ad": "适合网站老旧、移动端体验差，或缺少结构化线上咨询流程的律师事务所。",
      "opt.ali1": "现代化律所官网改版",
      "opt.ali2": "移动端优先体验",
      "opt.ali3": "中英双语页面",
      "opt.ali4": "法律服务领域页面",
      "opt.ali5": "律师介绍区域",
      "opt.ali6": "AI 客户咨询流程",
      "opt.ali7": "联系 / 预约流程",
      "opt.ali8": "基础 SEO 设置",
      "opt.ali9": "上线支持",
      "opt.acta": "咨询网站升级",

      "opt.bt": "现有网站 AI 咨询模块",
      "opt.bd":
        "适合已有官网，但希望在不完全重做网站的情况下加入结构化客户咨询能力的律师事务所。",
      "opt.bli1": "客户咨询表单模块",
      "opt.bli2": "AI 摘要生成",
      "opt.bli3": "后台预览",
      "opt.bli4": "邮件通知流程",
      "opt.bli5": "文件清单",
      "opt.bli6": "现有网站嵌入支持",
      "opt.bli7": "最小化改动",
      "opt.bcta": "咨询 AI 模块",

      "risk.title": "这不是 AI 律师。",
      "risk.body":
        "系统不会回答法律问题、预测结果，也不会替代律师判断。它只负责整理初步咨询信息，让律所团队更快、更清晰地查看潜在客户情况。",

      "final.title": "想看看这套系统如何用于你的律师事务所吗？",
      "final.sub":
        "把你当前的网站或咨询流程发给我们，我们可以判断你更适合完整网站升级，还是只嵌入 AI 咨询模块。",
      "final.cta": "邮件联系 BoniStudio",

      "admin.hero.title": "在正式咨询前，先看到整理好的客户资料。",
      "admin.hero.sub":
        "每一次初步咨询都会转化为结构化客户卡片，包含法律服务领域、紧急程度、资料状态、关键事实与后续跟进建议。",

      "dash.s1": "新咨询",
      "dash.s2": "高优先级",
      "dash.s3": "缺失资料",
      "dash.s4": "可安排咨询",

      "lead.status.needs": "待查看",
      "lead.status.missing": "资料不全",
      "lead.status.ready": "可跟进",

      "panel.info": "客户信息",
      "panel.contact": "联系方式",
      "panel.area": "法律服务领域",
      "panel.urgency": "紧急程度",
      "panel.ai": "AI 摘要",
      "panel.dates": "重要日期",
      "panel.docs": "已有资料",
      "panel.missing": "待补充",
      "panel.rec": "建议跟进",
      "panel.notes": "内部备注",

      "act.reviewed": "标记已查看",
      "act.request": "请求补充资料",
      "act.schedule": "安排咨询",
      "act.email": "发送跟进邮件",

      "toast.demo": "Demo 演示操作。",

      "strip": "客户提交 → AI 整理 → 工作人员查看 → 律师跟进 → 正式咨询",

      "foot.disclaimer":
        "这是一个工作流 Demo，不提供法律建议。最终查看与判断必须由合格律师或律所工作人员完成。",

      "mock1.sum":
        "客户寻求移民相关法律帮助，已提供部分文件信息，重要日期需进一步确认。",
      "mock1.miss": "完整时间线\n当前签证身份详情\n希望预约咨询的时间",
      "mock1.rec": "确认缺失时间线并安排初次咨询。",
      "mock2.sum": "客户希望了解婚姻家庭法律事项的下一步，基本情况已提供，但支持文件缺失。",
      "mock3.sum": "客户考虑房产合同审阅，倾向于邮件跟进。",
    },
  };

  function getLang() {
    try {
      var s = localStorage.getItem(LANG_KEY);
      if (s === "en" || s === "zh") return s;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
  }

  function t(lang, key) {
    var d = I18N[lang] || I18N.en;
    return Object.prototype.hasOwnProperty.call(d, key) ? d[key] : key;
  }

  function applyLanguage(lang) {
    if (lang !== "en" && lang !== "zh") lang = DEFAULT_LANG;
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      var val = t(lang, key);
      if (typeof val === "string") {
        if (el.tagName === "TITLE") {
          document.title = val;
        } else {
          el.textContent = val;
        }
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(lang, key));
    });
    var lt = document.getElementById("lfdLangToggle");
    if (lt) lt.textContent = lang === "en" ? "中文" : "EN";
    setLang(lang);
    window.__lfdLang = lang;
    if (typeof window.__lfdOnLangChange === "function") window.__lfdOnLangChange(lang);
  }

  function labelMap(lang, prefix, keys) {
    var o = {};
    keys.forEach(function (k) {
      o[k] = t(lang, prefix + k);
    });
    return o;
  }

  function getFormData() {
    var docs = [];
    document.querySelectorAll('input[name="docs"]:checked').forEach(function (c) {
      docs.push(c.value);
    });
    return {
      filler: val("lfd-filler"),
      clientName: val("lfd-name"),
      preferredLanguage: val("lfd-lang"),
      contactMethod: val("lfd-contact"),
      contactDetail: val("lfd-contact-detail"),
      serviceArea: val("lfd-area"),
      urgency: val("lfd-urgency"),
      situation: val("lfd-situation"),
      importantDates: val("lfd-dates"),
      documents: docs,
      nextStep: val("lfd-next"),
    };
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  function formatDocsList(docs, lang) {
    if (!docs.length) return t(lang, "sum.notprovided");
    var labels = labelMap(lang, "form.doc.", [
      "passport",
      "uscis",
      "court",
      "contract",
      "police",
      "medical",
      "marriage",
      "tax",
      "photos",
      "unsure",
    ]);
    return docs
      .map(function (d) {
        return "- " + (labels[d] || d);
      })
      .join("\n");
  }

  function mapKey(lang, prefix, value) {
    return t(lang, prefix + value) || value;
  }

  function buildSummaryText(data, lang) {
    var isZh = lang === "zh";
    var dates = data.importantDates || t(lang, "sum.notprovided");
    var docs = formatDocsList(data.documents, lang);
    var miss =
      "- " +
      t(lang, "sum.miss1") +
      "\n- " +
      t(lang, "sum.miss2") +
      "\n- " +
      t(lang, "sum.miss3") +
      "\n- " +
      t(lang, "sum.miss4");

    var profile =
      t(lang, "sum.profile") +
      ":\n" +
      (isZh ? "姓名" : "Name") +
      ": " +
      (data.clientName || "—") +
      "\n" +
      (isZh ? "首选语言" : "Preferred Language") +
      ": " +
      mapKey(lang, "form.lang.", data.preferredLanguage) +
      "\n" +
      (isZh ? "联系方式" : "Contact Method") +
      ": " +
      mapKey(lang, "form.cm.", data.contactMethod) +
      "\n" +
      (data.contactDetail ? (isZh ? "联系详情" : "Contact Detail") + ": " + data.contactDetail : "");

    var fillerLine =
      (isZh ? "填写人" : "Filled by") + ": " + mapKey(lang, "form.opt.", data.filler);

    var practiceBlock = t(lang, "sum.practice") + ":\n" + mapKey(lang, "form.ar.", data.serviceArea);
    var urgency = t(lang, "sum.urgency") + ":\n" + mapKey(lang, "form.ug.", data.urgency);
    var facts =
      t(lang, "sum.facts") +
      ":\n" +
      (isZh
        ? "客户正在寻求与「" +
          mapKey(lang, "form.ar.", data.serviceArea) +
          "」相关的帮助。情况说明包括：" +
          (data.situation || "—")
        : "The client is seeking help related to " +
          mapKey(lang, "form.ar.", data.serviceArea) +
          ". The situation description mentions: " +
          (data.situation || "—"));

    var bilingual =
      t(lang, "sum.bilingual") +
      ":\n" +
      (isZh
        ? "【中文】客户咨询「" +
          mapKey(lang, "form.ar.", data.serviceArea) +
          "」，紧急程度为「" +
          mapKey(lang, "form.ug.", data.urgency) +
          "」。\n【EN】The client inquires about " +
          data.serviceArea +
          " matters; urgency: " +
          data.urgency +
          "."
        : "【EN】The client inquires about " +
          mapKey(lang, "form.ar.", data.serviceArea) +
          "; urgency: " +
          mapKey(lang, "form.ug.", data.urgency) +
          ".\n【中文】客户咨询「" +
          mapKey(lang, "form.ar.", data.serviceArea) +
          "」，紧急程度「" +
          mapKey(lang, "form.ug.", data.urgency) +
          "」。");

    return (
      fillerLine +
      "\n\n" +
      profile +
      "\n\n" +
      practiceBlock +
      "\n\n" +
      urgency +
      "\n\n" +
      facts +
      "\n\n" +
      t(lang, "sum.dates") +
      ":\n" +
      dates +
      "\n\n" +
      t(lang, "sum.docs") +
      ":\n" +
      docs +
      "\n\n" +
      t(lang, "sum.missing") +
      ":\n" +
      miss +
      "\n\n" +
      t(lang, "sum.rec") +
      ":\n" +
      t(lang, "sum.recbody") +
      "\n\n" +
      bilingual
    );
  }

  function saveSubmission(data, summaryEn, summaryZh) {
    var payload = {
      savedAt: new Date().toISOString(),
      form: data,
      summaryEn: summaryEn,
      summaryZh: summaryZh,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {}
  }

  function loadSubmission() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function initIntakePage() {
    var form = document.getElementById("lfd-intake-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = getFormData();
      var lang = window.__lfdLang || "en";
      var summaryEn = buildSummaryText(data, "en");
      var summaryZh = buildSummaryText(data, "zh");
      var display = lang === "zh" ? summaryZh : summaryEn;

      saveSubmission(data, summaryEn, summaryZh);

      var out = document.getElementById("lfd-summary");
      var body = document.getElementById("lfd-summary-body");
      if (body) body.textContent = display;
      if (out) {
        out.classList.add("is-visible");
        out.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    var langBtn = document.getElementById("lfdLangToggle");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        var next = window.__lfdLang === "zh" ? "en" : "zh";
        applyLanguage(next);
        refreshSummaryIfVisible();
      });
    }

    var menuToggle = document.getElementById("lfdMenuToggle");
    var nav = document.getElementById("lfdNav");
    if (menuToggle && nav) {
      menuToggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  function refreshSummaryIfVisible() {
    var out = document.getElementById("lfd-summary");
    if (!out || !out.classList.contains("is-visible")) return;
    var sub = loadSubmission();
    if (!sub) return;
    var lang = window.__lfdLang || "en";
    var body = document.getElementById("lfd-summary-body");
    if (body) body.textContent = lang === "zh" ? sub.summaryZh : sub.summaryEn;
  }

  function buildMockLeads() {
    return [
      {
        id: "mock-1",
        name: "Zhang Wei",
        serviceArea: "immigration",
        urgency: "high",
        status: "needs_review",
        contactMethod: "phone",
        contactDetail: "(redacted)",
        situation: "",
        importantDates: "",
        documents: ["passport", "uscis"],
        summaryKey: "mock1.sum",
        missingKey: "mock1.miss",
        recKey: "mock1.rec",
      },
      {
        id: "mock-2",
        name: "Emily Chen",
        serviceArea: "family",
        urgency: "medium",
        status: "missing",
        contactMethod: "email",
        contactDetail: "(redacted)",
        situation: "",
        importantDates: "",
        documents: [],
        summaryKey: "mock2.sum",
        missingKey: "",
        recKey: "",
      },
      {
        id: "mock-3",
        name: "David Liu",
        serviceArea: "realestate",
        urgency: "low",
        status: "ready",
        contactMethod: "email",
        contactDetail: "(redacted)",
        situation: "",
        importantDates: "",
        documents: [],
        summaryKey: "mock3.sum",
        missingKey: "",
        recKey: "",
      },
    ];
  }

  function submissionToLead(sub) {
    var d = sub.form;
    var status = "needs_review";
    if (!d.documents || d.documents.length === 0) status = "missing";
    else if (d.urgency === "low" || d.urgency === "medium") status = "ready";

    return {
      id: "live-" + (sub.savedAt || Date.now()),
      isLive: true,
      filler: d.filler,
      name: d.clientName || "New client",
      nameZh: d.clientName || "新客户",
      serviceArea: d.serviceArea,
      urgency: d.urgency,
      status: status,
      contactMethod: d.contactMethod,
      contactDetail: d.contactDetail,
      situation: d.situation,
      importantDates: d.importantDates,
      documents: d.documents || [],
      summaryEn: sub.summaryEn,
      summaryZh: sub.summaryZh,
      missingStatic: null,
      recStatic: null,
    };
  }

  function leadDisplayName(lead, lang) {
    if (lang === "zh" && lead.nameZh) return lead.nameZh;
    return lead.name;
  }

  function leadSummaryText(lead, lang) {
    if (lead.summaryEn) return lang === "zh" ? lead.summaryZh : lead.summaryEn;
    return t(lang, lead.summaryKey);
  }

  function leadMissingText(lead, lang) {
    if (lead.missingStatic != null) return lead.missingStatic;
    if (!lead.missingKey) return "—";
    return t(lang, lead.missingKey);
  }

  function leadRecText(lead, lang) {
    if (lead.recStatic != null) return lead.recStatic;
    if (!lead.recKey) return "—";
    return t(lang, lead.recKey);
  }

  function statusLabel(lang, st) {
    if (st === "needs_review") return t(lang, "lead.status.needs");
    if (st === "missing") return t(lang, "lead.status.missing");
    return t(lang, "lead.status.ready");
  }

  function initAdminPage() {
    var root = document.getElementById("lfd-admin-root");
    if (!root) return;

    var leads = buildMockLeads();
    var sub = loadSubmission();
    if (sub && sub.form) {
      leads.unshift(submissionToLead(sub));
    }

    function renderStats() {
      var lang = window.__lfdLang || "en";
      document.getElementById("lfd-stat-new").textContent = String(leads.length);
      document.getElementById("lfd-stat-hi").textContent = String(
        leads.filter(function (l) {
          return l.urgency === "high" || l.urgency === "urgent";
        }).length
      );
      document.getElementById("lfd-stat-miss").textContent = String(
        leads.filter(function (l) {
          return l.status === "missing";
        }).length
      );
      document.getElementById("lfd-stat-ready").textContent = String(
        leads.filter(function (l) {
          return l.status === "ready";
        }).length
      );
    }

    function renderCards() {
      var lang = window.__lfdLang || "en";
      var wrap = document.getElementById("lfd-leads");
      if (!wrap) return;
      wrap.innerHTML = "";
      leads.forEach(function (lead, idx) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lfd-lead-card" + (idx === 0 ? " is-active" : "");
        btn.dataset.idx = String(idx);
        btn.innerHTML =
          '<p class="lfd-lead-card__name"></p><p class="lfd-lead-card__meta"></p><span class="lfd-badge"></span><p style="margin:0.5rem 0 0;font-size:0.78rem;color:rgba(155,170,195,0.85);"></p>';
        btn.querySelector(".lfd-lead-card__name").textContent = leadDisplayName(lead, lang);
        btn.querySelector(".lfd-lead-card__meta").textContent =
          mapKey(lang, "form.ar.", lead.serviceArea) +
          " · " +
          mapKey(lang, "form.ug.", lead.urgency);
        btn.querySelector(".lfd-badge").textContent = statusLabel(lang, lead.status);
        btn.querySelector("p:last-child").textContent = leadSummaryText(lead, lang).split("\n")[0];
        btn.addEventListener("click", function () {
          wrap.querySelectorAll(".lfd-lead-card").forEach(function (c) {
            c.classList.remove("is-active");
          });
          btn.classList.add("is-active");
          openPanel(lead);
        });
        wrap.appendChild(btn);
      });
    }

    var overlay = document.getElementById("lfd-overlay");
    var panel = document.getElementById("lfd-panel");
    var closeBtn = document.getElementById("lfd-panel-close");

    function openPanel(lead) {
      var lang = window.__lfdLang || "en";
      document.getElementById("lfd-panel-title").textContent = leadDisplayName(lead, lang);
      document.getElementById("lfd-p-info").textContent =
        (lang === "zh" ? "填写人" : "Filled by") +
        ": " +
        (lead.isLive && lead.filler ? mapKey(lang, "form.opt.", lead.filler) : "—") +
        "\n" +
        (lang === "zh" ? "姓名" : "Name") +
        ": " +
        leadDisplayName(lead, lang);
      document.getElementById("lfd-p-contact").textContent =
        mapKey(lang, "form.cm.", lead.contactMethod) +
        (lead.contactDetail ? "\n" + lead.contactDetail : "");
      document.getElementById("lfd-p-area").textContent = mapKey(lang, "form.ar.", lead.serviceArea);
      document.getElementById("lfd-p-urgency").textContent = mapKey(lang, "form.ug.", lead.urgency);
      document.getElementById("lfd-p-ai").textContent = leadSummaryText(lead, lang);
      document.getElementById("lfd-p-dates").textContent =
        lead.importantDates || (lead.isLive ? loadSubmission().form.importantDates : "—") || "—";
      document.getElementById("lfd-p-docs").textContent = lead.isLive
        ? formatDocsList(lead.documents, lang)
        : formatDocsList(lead.documents, lang) || "—";
      document.getElementById("lfd-p-missing").textContent = leadMissingText(lead, lang);
      document.getElementById("lfd-p-rec").textContent = leadRecText(lead, lang);
      document.getElementById("lfd-p-notes").textContent =
        lang === "zh" ? "（演示）内部备注区域。" : "(Demo) Internal notes area.";
      overlay.classList.add("is-open");
      panel.classList.add("is-open");
    }

    function closePanel() {
      overlay.classList.remove("is-open");
      panel.classList.remove("is-open");
    }

    if (closeBtn) closeBtn.addEventListener("click", closePanel);
    if (overlay) overlay.addEventListener("click", closePanel);

    document.querySelectorAll("[data-lfd-action]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var toast = document.getElementById("lfd-toast");
        if (toast) {
          toast.textContent = t(window.__lfdLang || "en", "toast.demo");
          toast.classList.add("is-visible");
          setTimeout(function () {
            toast.classList.remove("is-visible");
          }, 2200);
        }
      });
    });

    var langBtn = document.getElementById("lfdLangToggle");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        var next = window.__lfdLang === "zh" ? "en" : "zh";
        applyLanguage(next);
      });
    }

    window.__lfdOnLangChange = function () {
      renderStats();
      renderCards();
    };

    var menuToggle = document.getElementById("lfdMenuToggle");
    var nav = document.getElementById("lfdNav");
    if (menuToggle && nav) {
      menuToggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  function boot() {
    initIntakePage();
    initAdminPage();
    applyLanguage(getLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
