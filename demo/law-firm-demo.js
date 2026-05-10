/**
 * Law Firm Demo — AI Chat Intake (rule-based, no API) + admin (localStorage)
 */
(function () {
  "use strict";

  var STORAGE_KEY = "bonistudio_law_firm_intake_demo";
  var LANG_KEY = "bonistudio_law_firm_demo_lang";
  var DEFAULT_LANG = "en";

  var FIELD_ORDER = [
    "serviceArea",
    "clientName",
    "preferredLanguage",
    "contactMethod",
    "contactDetail",
    "situation",
    "importantDates",
    "documents",
    "urgency",
    "nextStep",
  ];

  var PRACTICE_FOLLOW_KEYS = {
    immigration: ["f0", "f1", "f2", "f3"],
    family: ["f0", "f1", "f2", "f3"],
    realestate: ["f0", "f1", "f2", "f3"],
    business: ["f0", "f1", "f2", "f3"],
    injury: ["f0", "f1", "f2", "f3"],
    estate: ["f0", "f1", "f2", "f3"],
    other: ["f0", "f1", "f2", "f3"],
  };

  function getFollowKeys(area) {
    return PRACTICE_FOLLOW_KEYS[area] || PRACTICE_FOLLOW_KEYS.other;
  }

  function followQuestion(lang, area, idx) {
    var keys = getFollowKeys(area);
    if (idx < 0 || idx >= keys.length) return "";
    return t(lang, "follow." + area + "." + keys[idx]);
  }

  var UPLOAD_DOC_KEYS = ["passport", "uscis", "court", "contract", "police", "medical", "photos"];

  /** Stripe Payment Links — keep in sync with root script.js STRIPE_LINKS when URLs change. */
  var STRIPE_LINKS = {
    websiteDeposit: "https://buy.stripe.com/14A4gs5WB1Y2cRp4F6bAs02",
    aiIntakeDeposit: "https://buy.stripe.com/9B68wI84JgSWdVtdbCbAs01",
    completeSystemDeposit: "https://buy.stripe.com/aFa6oA70FbyC9Fdb3ubAs00",
  };

  function applyStripePaymentLinksDemo() {
    document.querySelectorAll("[data-stripe]").forEach(function (el) {
      var key = el.getAttribute("data-stripe");
      if (!key || !STRIPE_LINKS[key]) return;
      var url = STRIPE_LINKS[key];
      if (typeof url === "string" && /^https:\/\//i.test(url)) {
        el.setAttribute("href", url);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      } else if (el.tagName === "A") {
        el.setAttribute("href", "#");
        el.addEventListener("click", function (e) {
          e.preventDefault();
        });
      }
    });
  }

  var I18N = {
    en: {
      "meta.titleIntake": "Law Firm AI Intake System | BoniStudio",
      "meta.titleAdmin": "Law Firm Admin Preview | BoniStudio",

      "nav.brand": "BoniStudio",
      "nav.tag": "Law Firm AI Intake System",
      "hero.eyebrow": "Law Firm AI Intake System",
      "nav.home": "Back to Home",
      "nav.admin": "Admin Preview",
      "nav.intake": "Back to Intake Demo",
      "nav.contact": "Contact Us",
      "lang.toggle": "中文",

      "admin.navBrand": "Law Firm Admin Preview",
      "admin.navTag": "AI Intake System",

      "hero.title": "Law Firm AI Intake System",
      "hero.sub":
        "AI chat intake, structured attorney briefs, secure dashboard review, and customizable question sets for modern law firms.",
      "hero.cta1": "Try Chat Intake",
      "hero.cta2": "View Admin Preview",
      "hero.trust":
        "Designed for immigration, family, real estate, business, personal injury, estate planning, and other legal practices.",

      "flow.c": "Client",
      "flow.f": "AI Chat",
      "flow.a": "Intake Brief",
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
      "how.s1t": "Client chats with the assistant",
      "how.s1d": "The client describes their situation in natural language inside an embedded chat experience.",
      "how.s2t": "Information is gathered conversationally",
      "how.s2d":
        "The assistant asks focused follow-ups and quietly maps answers into structured intake fields.",
      "how.s3t": "A brief is prepared for the firm",
      "how.s3d": "The system produces a structured attorney brief with facts, dates, documents, and gaps.",
      "how.s4t": "Attorney reviews and follows up",
      "how.s4d": "Your team reviews the brief and transcript preview, then decides the next step.",

      "chat.sectionTitle": "Talk to the intake assistant",
      "chat.sectionSub":
        "Describe your situation naturally. The assistant will ask a few follow-up questions and prepare a structured brief for the law firm.",
      "chat.assistantTitle": "AI Intake Assistant",
      "chat.status": "Organizing information",
      "chat.miniDisclaimer":
        "This assistant does not provide legal advice. It only helps organize intake information for review by a qualified attorney or law firm staff.",
      "chat.liveBriefTitle": "Live Structured Extraction",
      "chat.waiting": "Waiting for client input…",
      "chat.progress": "Intake progress",
      "chat.examplesLabel": "Try an example",
      "chat.ex1": "H1B job loss",
      "chat.ex2": "Divorce consultation",
      "chat.ex3": "Contract review",
      "chat.ex4": "Car accident",
      "chat.send": "Send",
      "chat.placeholder": "Type your message…",
      "chat.chip.immigration": "Immigration",
      "chat.chip.family": "Family / Divorce",
      "chat.chip.realestate": "Real Estate",
      "chat.chip.business": "Business",
      "chat.chip.injury": "Personal Injury",
      "chat.chip.estate": "Estate Planning",
      "chat.chip.unsure": "Not sure",
      "chat.greeting":
        "Hello. I can help organize your initial information for the law firm before your consultation. I do not provide legal advice, but I can help prepare a clear summary for attorney review.\n\nWhat would you like help with today?",
      "chat.askArea": "What type of legal matter is this related to?",
      "chat.qName": "Thank you. What name should we use for this intake?",
      "chat.qLang": "What is your preferred language for follow-up — English, Chinese, or bilingual?",
      "chat.qContact":
        "What is the best way for the office to contact you — phone, email, SMS, or WeChat?",
      "chat.qDetail": "Please share your contact detail (number, email address, or username).",
      "chat.qSituation":
        "Could you briefly describe what happened, including any important dates or notices?",
      "chat.qDates": "Are there any specific deadlines or dates we should note separately?",
      "chat.qDocs":
        "Do you already have documents such as notices, passport or ID, contracts, court papers, or immigration forms? List what you have.",
      "chat.qUrgency": "How urgent is this matter — low, medium, high, or urgent?",
      "chat.qNext":
        "What would you prefer as a next step — phone consultation, video call, in-person meeting, or email follow-up?",
      "chat.ackArea": "Got it. I’ll organize this for attorney review.",
      "chat.done":
        "Thank you. I have enough information to prepare an intake brief. Review the live brief on the right, then generate the attorney brief when you’re ready.",
      "chat.ackExtra":
        "Noted — I’ve added that to the intake notes for your firm to review.",
      "chat.generate": "Generate Attorney Brief",
      "chat.briefTitle": "Attorney intake brief",
      "chat.disclaimer":
        "This assistant does not provide legal advice. It only helps organize intake information for review by a qualified attorney or law firm staff.",
      "chat.restart": "Restart Demo",
      "chat.restartInline": "Restart demo",
      "chat.afterAdmin": "View Admin Preview",
      "chat.afterEmail": "Email BoniStudio",

      "product.name": "Law Firm AI Intake System",
      "product.tagline":
        "AI chat intake, structured attorney briefs, secure dashboard review, and customizable question sets for modern law firms.",
      "products.title": "What your firm gets",
      "products.c1t": "AI Chat Intake Assistant",
      "products.c1d":
        "Clients describe their situation naturally. The assistant asks follow-up questions and organizes key facts without forcing clients through a long form.",
      "products.c2t": "Structured Attorney Brief",
      "products.c2d":
        "Every conversation becomes a clean internal brief with practice area, urgency, key facts, documents, missing information, and recommended follow-up.",
      "products.c3t": "Email Alert + Secure Dashboard",
      "products.c3d":
        "Your team receives a low-sensitive email alert, then reviews full intake details in a secure dashboard instead of exposing private information in email.",
      "products.c4t": "Custom Practice Area Questions",
      "products.c4d":
        "Each practice area can have its own question set, required documents, and intake logic.",

      "delivery.title": "How your team receives the intake",
      "delivery.s1t": "Client chats with the intake assistant",
      "delivery.s1d": "The client works through a guided chat with practice-area follow-up questions—not a long static form.",
      "delivery.s2t": "AI extracts key facts and prepares an internal brief",
      "delivery.s2d": "Answers map into structured fields and a live extraction panel while the conversation continues.",
      "delivery.s3t": "Your firm receives an email alert with only low-sensitive summary information",
      "delivery.s3d": "Email contains a short summary and a link—no full narrative, documents, or contact details in the body.",
      "delivery.s4t": "Full details are reviewed inside the secure dashboard",
      "delivery.s4d": "Authenticated staff open the secure dashboard to read the full brief, notes, and transcript preview.",
      "delivery.note":
        "The demo is static. A production version would use authenticated access, secure database storage, and role-based review.",

      "upload.title": "Document upload preview",
      "upload.sub":
        "In the production version, clients can upload documents securely. This demo only shows the workflow.",

      "pkg.title": "Available implementation options",
      "pkg.includes": "Includes:",
      "pkg.p1t": "Website Modernization",
      "pkg.p1d": "For law firms with outdated websites or no clear online consultation flow.",
      "pkg.p1i1": "Modern law firm website redesign",
      "pkg.p1i2": "Mobile-first layout",
      "pkg.p1i3": "Practice area pages",
      "pkg.p1i4": "Attorney profile section",
      "pkg.p1i5": "Bilingual language support",
      "pkg.p1i6": "Contact and consultation CTA",
      "pkg.p1i7": "Basic SEO setup",
      "pkg.p2t": "AI Intake Add-on",
      "pkg.p2d": "For law firms that already have a website and want to add AI-powered intake.",
      "pkg.p2i1": "Embedded AI chat intake assistant",
      "pkg.p2i2": "Structured attorney brief",
      "pkg.p2i3": "Practice area question sets",
      "pkg.p2i4": "Email alert workflow",
      "pkg.p2i5": "Secure dashboard preview",
      "pkg.p2i6": "Document checklist",
      "pkg.p2i7": "Bilingual summary",
      "pkg.p3t": "Complete Law Firm System",
      "pkg.p3d": "For firms that want a full modern website plus AI intake workflow.",
      "pkg.p3i1": "Everything in Website Modernization and AI Intake Add-on",
      "pkg.p3i2": "Custom practice area setup",
      "pkg.p3i3": "Intake flow customization",
      "pkg.p3i4": "Launch support",
      "pkg.p3i5": "Monthly maintenance option",
      "pkg.cta": "Request This Option",
      "pkg.pay500": "Pay $500 Deposit",
      "pkg.pay800": "Pay $800 Deposit",
      "pkg.pay1500": "Pay $1,500 Deposit",

      "live.extractTitle": "Live Structured Extraction",
      "live.nextq": "Next Suggested Question",
      "chip.collected": "Collected",
      "chip.missing": "Missing",
      "chip.review": "Needs review",

      "follow.immigration.f0": "What is your current immigration status?",
      "follow.immigration.f1": "Did you receive any notice or deadline?",
      "follow.immigration.f2": "Do you have any existing filings or approvals?",
      "follow.immigration.f3": "Is there an employer, sponsor, or family petitioner involved?",
      "follow.family.f0": "Are there children involved?",
      "follow.family.f1": "Is there an existing court order?",
      "follow.family.f2": "Are there urgent safety or custody concerns?",
      "follow.family.f3": "What is the preferred communication method?",
      "follow.realestate.f0": "Are you buyer, seller, landlord, or tenant?",
      "follow.realestate.f1": "Has a contract or lease already been signed?",
      "follow.realestate.f2": "Is there a closing date or deadline?",
      "follow.realestate.f3": "What documents are available?",
      "follow.business.f0": "Is this related to contract, company formation, partnership, or dispute?",
      "follow.business.f1": "Are there signed agreements?",
      "follow.business.f2": "Is there a deadline or active dispute?",
      "follow.business.f3": "What outcome are you hoping to discuss with an attorney?",
      "follow.injury.f0": "When did the incident happen?",
      "follow.injury.f1": "Was there a police report or medical treatment?",
      "follow.injury.f2": "Is insurance involved?",
      "follow.injury.f3": "Do you have photos, records, or other evidence?",
      "follow.estate.f0": "Is this about will, trust, probate, or inheritance?",
      "follow.estate.f1": "Are there existing estate documents?",
      "follow.estate.f2": "Is there a deadline or family dispute?",
      "follow.estate.f3": "Who should the attorney contact?",
      "follow.other.f0": "What is the main issue in one sentence?",
      "follow.other.f1": "Are there any deadlines we should note?",
      "follow.other.f2": "What documents do you already have?",
      "follow.other.f3": "What would you like the firm to help with first?",

      "admin.secureBanner": "Secure dashboard preview",
      "admin.secureText":
        "In production, full intake details would only be available after authenticated login. Email notifications should contain low-sensitive summaries and link back to this secure dashboard.",
      "admin.emailCardTitle": "Email alert preview",
      "admin.emailSubjLabel": "Subject",
      "admin.emailBodyLabel": "Body",
      "admin.emailSubj": "New intake received — {area} / {urgency}",
      "admin.emailBodyIntro": "A new client intake has been submitted.",
      "admin.emailOpen": "Open Intake",
      "admin.emailFooter": "Review full details in secure dashboard:",
      "admin.qsetTitle": "Practice area question sets",
      "admin.qsetHint": "Each area can be customized for your firm.",
      "admin.qset.q": "Sample questions",
      "admin.qset.docs": "Required documents",
      "admin.qset.logic": "Missing info logic",

      "qs.immigration.q":
        "• Current immigration status\n• Notice or deadline\n• Existing filing or approval\n• Sponsor / employer / petitioner",
      "qs.immigration.d":
        "• Passport / ID\n• USCIS notice\n• I-94 / visa record\n• Approval notice if available",
      "qs.immigration.l":
        'If a deadline is mentioned but no date is provided, mark "Important date missing."',
      "qs.family.q": "• Children involved\n• Existing court order\n• Safety or custody concerns\n• Preferred communication",
      "qs.family.d": "• Court orders\n• Parenting plan drafts\n• Financial statements if applicable",
      "qs.family.l": "If children are mentioned but ages are not listed, flag for staff follow-up.",
      "qs.realestate.q": "• Buyer / seller / landlord / tenant\n• Signed contract or lease\n• Closing or key deadlines\n• Documents on hand",
      "qs.realestate.d": "• Purchase agreement or lease\n• Title / survey if available\n• Correspondence with other party",
      "qs.realestate.l": "If closing is referenced without a date, mark timeline as incomplete.",
      "qs.business.q": "• Contract / formation / partnership / dispute\n• Signed agreements\n• Deadlines or active dispute\n• Desired discussion outcome",
      "qs.business.d": "• Signed contracts\n• Corporate records\n• Demand letters or filings",
      "qs.business.l": "If dispute is alleged but parties are unnamed, note opposing party missing.",
      "qs.injury.q": "• Incident timing\n• Police or medical records\n• Insurance involvement\n• Photos or evidence",
      "qs.injury.d": "• Medical records\n• Police report\n• Insurance correspondence\n• Photos",
      "qs.injury.l": "If injury is described but incident date is missing, mark date needed.",
      "qs.estate.q": "• Will / trust / probate / inheritance\n• Existing estate documents\n• Deadlines or family dispute\n• Primary contact for attorney",
      "qs.estate.d": "• Existing wills or trusts\n• Death certificate if probate\n• Asset list if available",
      "qs.estate.l": "If probate is mentioned but court is not identified, flag for verification.",

      "brief.source": "Intake Source",
      "brief.sourceChat": "AI Chat Intake",
      "brief.snapshot": "Client Snapshot",
      "brief.transcript": "Chat Transcript Preview",
      "brief.followup": "Practice-area follow-up notes",

      "form.doc.passport": "Passport / ID",
      "form.doc.uscis": "USCIS notice",
      "form.doc.court": "Court document",
      "form.doc.contract": "Contract",
      "form.doc.police": "Police report",
      "form.doc.medical": "Medical record",
      "form.doc.photos": "Photos / evidence",

      "brief.s1": "Client Overview",
      "brief.s2": "Matter Type",
      "brief.s3": "Situation Summary",
      "brief.s4": "Key Facts",
      "brief.s5": "Important Dates",
      "brief.s6": "Available Documents",
      "brief.s7": "Missing Information",
      "brief.s8": "Urgency",
      "brief.s9": "Recommended Internal Next Step",
      "brief.s10": "Legal Disclaimer",
      "brief.miss1": "Full timeline confirmation",
      "brief.miss2": "Copies of relevant notices or filings",
      "brief.miss3": "Preferred consultation window",
      "brief.rec":
        "Staff should confirm the timeline, request copies of relevant notices, and schedule an initial consultation if appropriate.",

      "live.practice": "Practice Area",
      "live.urgency": "Urgency",
      "live.lang": "Preferred Language",
      "live.contact": "Contact Method",
      "live.facts": "Key Facts",
      "live.dates": "Important Dates",
      "live.docs": "Documents Mentioned",
      "live.missing": "Missing Information",
      "live.rec": "Recommended Next Step",

      "form.lang.zh": "Chinese",
      "form.lang.en": "English",
      "form.lang.bi": "Bilingual",
      "form.lang.chinese": "Chinese",
      "form.lang.english": "English",
      "form.lang.bilingual": "Bilingual",
      "form.cm.phone": "Phone",
      "form.cm.wechat": "WeChat",
      "form.cm.email": "Email",
      "form.cm.sms": "SMS",
      "form.ar.immigration": "Immigration",
      "form.ar.family": "Family / Divorce",
      "form.ar.realestate": "Real Estate",
      "form.ar.business": "Business",
      "form.ar.injury": "Personal Injury",
      "form.ar.estate": "Estate Planning",
      "form.ar.other": "Other",
      "form.ug.low": "Low",
      "form.ug.med": "Medium",
      "form.ug.high": "High",
      "form.ug.urgent": "Urgent",
      "form.nx.phone": "Phone consultation",
      "form.nx.video": "Video consultation",
      "form.nx.inperson": "In-person meeting",
      "form.nx.email": "Email follow-up",
      "form.nx.unsure": "Not sure",

      "opt.title": "Two ways to use this system",
      "opt.at": "Full Law Firm Website Upgrade + AI Intake",
      "opt.ad":
        "Best for law firms with outdated websites, weak mobile experience, or no structured online intake flow.",
      "opt.ali1": "Modern law firm website redesign",
      "opt.ali2": "Mobile-first experience",
      "opt.ali3": "Bilingual pages",
      "opt.ali4": "Practice area pages",
      "opt.ali5": "Attorney profile section",
      "opt.ali6": "AI chat intake assistant",
      "opt.ali7": "Contact / booking flow",
      "opt.ali8": "Basic SEO setup",
      "opt.ali9": "Launch support",
      "opt.acta": "Request Website Upgrade",

      "opt.bt": "AI Intake Add-on for Existing Websites",
      "opt.bd":
        "Best for law firms that already have a website and want to add structured intake without rebuilding everything.",
      "opt.bli1": "AI chat intake module",
      "opt.bli2": "Structured attorney brief",
      "opt.bli3": "Admin preview",
      "opt.bli4": "Email notification workflow",
      "opt.bli5": "Document checklist",
      "opt.bli6": "Website embed support",
      "opt.bli7": "Minimal disruption to current website",
      "opt.bcta": "Request AI Intake Add-on",

      "risk.title": "This assistant does not provide legal advice.",
      "risk.body":
        "It does not answer legal questions, predict outcomes, or substitute for an attorney's independent professional judgment. It only organizes intake information so law firm staff can review potential clients more efficiently.",

      "final.title": "Want to see how this could work for your law firm?",
      "final.sub":
        "Send us your current website or intake workflow. We can recommend whether you need a full website upgrade or an AI intake add-on.",
      "final.cta": "Email BoniStudio",
      "final.pricing": "View Pricing",
      "final.contact": "Contact Us",
      "final.payCompleteDeposit": "Pay Complete System Deposit",

      "admin.hero.title": "What your firm sees after the chat intake.",
      "admin.hero.sub":
        "Structured briefs, live field extraction, and a transcript preview — ready before the first consultation.",

      "dash.s1": "New Intakes",
      "dash.s2": "High Priority",
      "dash.s3": "Missing Documents",
      "dash.s4": "Ready for Consultation",

      "lead.badgeChat": "From AI Chat Intake",
      "lead.status.needs": "Needs review",
      "lead.status.missing": "Missing documents",
      "lead.status.ready": "Ready for follow-up",

      "panel.info": "Client Information",
      "panel.contact": "Contact Preference",
      "panel.area": "Practice Area",
      "panel.urgency": "Urgency",
      "panel.ai": "Attorney Brief",
      "panel.facts": "Key Facts",
      "panel.transcript": "Chat Transcript Preview",
      "panel.dates": "Important Dates",
      "panel.docs": "Documents Mentioned",
      "panel.missing": "Missing Information",
      "panel.rec": "Recommended Follow-up",
      "panel.followup": "Practice-area follow-up",
      "panel.addclient": "Additional client notes",
      "panel.notes": "Internal Notes",

      "act.reviewed": "Mark as Reviewed",
      "act.request": "Request Documents",
      "act.schedule": "Schedule Consultation",
      "act.email": "Send Follow-up Email",

      "toast.demo": "Demo action only.",

      "strip":
        "Client chats → Fields organize → Staff reviews brief → Attorney follows up → Consultation",

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
      "meta.titleIntake": "律师事务所 AI 咨询系统 | BoniStudio",
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

      "hero.title": "律师事务所 AI 咨询系统",
      "hero.sub":
        "为现代律师事务所提供 AI 聊天式咨询收集、结构化律师简报、安全后台查看与可定制问题流程。",
      "hero.cta1": "体验聊天咨询",
      "hero.cta2": "查看后台预览",
      "hero.trust":
        "适用于移民、婚姻家庭、房产、商业、人身伤害、遗产规划及其他法律服务场景。",

      "flow.c": "客户",
      "flow.f": "AI 对话",
      "flow.a": "咨询简报",
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
      "how.s1t": "客户与助手对话",
      "how.s1d": "客户在嵌入网站的对话界面中用自然语言描述情况。",
      "how.s2t": "对话中收集信息",
      "how.s2d": "助手通过追问补充关键信息，并在后台映射到结构化咨询字段。",
      "how.s3t": "生成律所简报",
      "how.s3d": "系统输出结构化律师简报，包含事实、日期、资料与待补充项。",
      "how.s4t": "律师查看并跟进",
      "how.s4d": "团队查看简报与对话摘要预览，再决定下一步沟通方式。",

      "chat.sectionTitle": "和咨询助手对话",
      "chat.sectionSub":
        "你可以自然描述自己的情况。助手会继续追问几个关键信息，并为律所整理结构化简报。",
      "chat.assistantTitle": "AI 咨询助手",
      "chat.status": "正在整理信息",
      "chat.miniDisclaimer":
        "本助手不提供法律建议，仅帮助整理初步咨询信息，供合格律师或律所工作人员进一步查看。",
      "chat.liveBriefTitle": "实时结构化整理",
      "chat.waiting": "等待客户输入…",
      "chat.progress": "咨询进度",
      "chat.examplesLabel": "体验示例",
      "chat.ex1": "H1B 被裁员",
      "chat.ex2": "离婚咨询",
      "chat.ex3": "合同审查",
      "chat.ex4": "车祸受伤",
      "chat.send": "发送",
      "chat.placeholder": "输入消息…",
      "chat.chip.immigration": "移民",
      "chat.chip.family": "婚姻家庭 / 离婚",
      "chat.chip.realestate": "房产",
      "chat.chip.business": "商业",
      "chat.chip.injury": "人身伤害",
      "chat.chip.estate": "遗产规划",
      "chat.chip.unsure": "不确定",
      "chat.greeting":
        "您好。我可以在正式咨询前帮助整理您的初步信息。我不会提供法律建议，但可以为律师查看准备一份清晰摘要。\n\n您今天主要想咨询什么问题？",
      "chat.askArea": "这件事主要属于哪一类法律事务？",
      "chat.qName": "谢谢。请问本次咨询记录使用什么姓名？",
      "chat.qLang": "您希望后续沟通使用中文、英文，还是中英双语？",
      "chat.qContact": "律所通过哪种方式联系您最方便：电话、邮件、短信还是微信？",
      "chat.qDetail": "请留下具体联系方式（号码、邮箱或微信号）。",
      "chat.qSituation": "请简要描述当前情况，包括重要日期或收到的通知。",
      "chat.qDates": "是否还有需要单独标注的截止日期或其他重要日期？",
      "chat.qDocs": "您是否已有相关资料，例如通知、身份证件、合同、法庭文件或移民表格？请列出。",
      "chat.qUrgency": "这件事的紧急程度如何：低、中、高，还是非常紧急？",
      "chat.qNext": "您希望下一步采取哪种方式：电话咨询、视频、面谈，还是邮件跟进？",
      "chat.ackArea": "了解，我会把这些信息整理给律师查看。",
      "chat.done":
        "谢谢。信息已足够生成咨询简报。您可以在右侧查看实时简报，准备好后点击生成律师简报。",
      "chat.ackExtra": "已记录——我已把补充说明写入咨询备注，供律所查看。",
      "chat.generate": "生成律师简报",
      "chat.briefTitle": "律师咨询简报",
      "chat.disclaimer":
        "本助手不提供法律建议，仅帮助整理初步咨询信息，供合格律师或律所工作人员进一步查看。",
      "chat.restart": "重新开始演示",
      "chat.restartInline": "重新开始",
      "chat.afterAdmin": "查看后台预览",
      "chat.afterEmail": "邮件联系 BoniStudio",

      "product.name": "律师事务所 AI 咨询系统",
      "product.tagline":
        "为现代律师事务所提供 AI 聊天式咨询收集、结构化律师简报、安全后台查看与可定制问题流程。",
      "products.title": "你的律所会获得什么",
      "products.c1t": "AI 聊天式咨询助手",
      "products.c1d":
        "客户可以自然描述情况。AI 助手会继续追问关键信息，并自动整理重点事实，而不是让客户填写冗长表单。",
      "products.c2t": "结构化律师简报",
      "products.c2d":
        "每次对话都会转化为清晰的内部简报，包含法律服务领域、紧急程度、关键事实、资料状态、缺失信息与建议跟进方式。",
      "products.c3t": "邮件提醒 + 安全后台",
      "products.c3d":
        "团队会收到低敏邮件提醒，并在安全后台查看完整客户资料，而不是把隐私信息直接暴露在邮件正文中。",
      "products.c4t": "法律领域定制问题",
      "products.c4d": "每个法律服务领域都可以配置专属问题、必需资料和咨询流程逻辑。",

      "delivery.title": "你的团队如何收到咨询资料",
      "delivery.s1t": "客户与 AI 咨询助手对话",
      "delivery.s1d": "客户通过引导式对话完成咨询，并按业务领域回答后续问题，而不是填写冗长表单。",
      "delivery.s2t": "AI 提取关键信息并生成内部简报",
      "delivery.s2d": "对话同时映射到结构化字段，并在右侧实时结构化整理面板中更新。",
      "delivery.s3t": "律所收到只包含低敏摘要的邮件提醒",
      "delivery.s3d": "邮件仅含简短摘要与链接，正文不包含完整叙述、文件细节或联系方式。",
      "delivery.s4t": "完整资料在安全后台中查看",
      "delivery.s4d": "已登录的工作人员在安全后台查看完整简报、备注与对话摘要预览。",
      "delivery.note":
        "当前 Demo 是静态演示。真实版本会使用登录验证、安全数据库存储与权限管理。",

      "upload.title": "资料上传预览",
      "upload.sub": "真实版本中，客户可以安全上传资料。本 Demo 仅展示流程。",

      "pkg.title": "可购买的实施方案",
      "pkg.includes": "包含：",
      "pkg.p1t": "官网现代化",
      "pkg.p1d": "适合网站老旧或缺少清晰线上咨询流程的律师事务所。",
      "pkg.p1i1": "现代化律所官网改版",
      "pkg.p1i2": "移动端优先布局",
      "pkg.p1i3": "法律服务领域页面",
      "pkg.p1i4": "律师介绍区域",
      "pkg.p1i5": "中英双语支持",
      "pkg.p1i6": "联系与咨询入口",
      "pkg.p1i7": "基础 SEO 设置",
      "pkg.p2t": "AI 咨询附加模块",
      "pkg.p2d": "适合已有官网，但希望加入 AI 咨询收集能力的律师事务所。",
      "pkg.p2i1": "嵌入式 AI 聊天咨询助手",
      "pkg.p2i2": "结构化律师简报",
      "pkg.p2i3": "法律领域问题集",
      "pkg.p2i4": "邮件提醒流程",
      "pkg.p2i5": "安全后台预览",
      "pkg.p2i6": "文件清单",
      "pkg.p2i7": "中英双语摘要",
      "pkg.p3t": "律所完整系统",
      "pkg.p3d": "适合希望同时升级官网与 AI 咨询流程的律师事务所。",
      "pkg.p3i1": "包含官网现代化与 AI 咨询模块的全部内容",
      "pkg.p3i2": "自定义法律服务领域配置",
      "pkg.p3i3": "咨询流程定制",
      "pkg.p3i4": "上线支持",
      "pkg.p3i5": "可选月度维护",
      "pkg.cta": "咨询此方案",
      "pkg.pay500": "支付 $500 定金",
      "pkg.pay800": "支付 $800 定金",
      "pkg.pay1500": "支付 $1,500 定金",

      "live.extractTitle": "实时结构化整理",
      "live.nextq": "建议下一问",
      "chip.collected": "已收集",
      "chip.missing": "缺失",
      "chip.review": "需查看",

      "follow.immigration.f0": "你目前的移民身份是什么？",
      "follow.immigration.f1": "是否收到任何通知或截止日期？",
      "follow.immigration.f2": "是否已有申请、批准或收据？",
      "follow.immigration.f3": "是否涉及雇主、担保人或亲属申请人？",
      "follow.family.f0": "是否涉及子女？",
      "follow.family.f1": "是否已有法院命令？",
      "follow.family.f2": "是否存在紧急安全或抚养权问题？",
      "follow.family.f3": "希望通过什么方式沟通？",
      "follow.realestate.f0": "你是买方、卖方、房东还是租客？",
      "follow.realestate.f1": "是否已经签署合同或租约？",
      "follow.realestate.f2": "是否有交割日期或截止日期？",
      "follow.realestate.f3": "目前有哪些资料？",
      "follow.business.f0": "这是关于合同、公司设立、合伙关系还是纠纷？",
      "follow.business.f1": "是否已有签署协议？",
      "follow.business.f2": "是否有截止日期或正在发生的争议？",
      "follow.business.f3": "希望律师重点了解什么？",
      "follow.injury.f0": "事故发生在什么时候？",
      "follow.injury.f1": "是否有警方报告或医疗记录？",
      "follow.injury.f2": "是否涉及保险？",
      "follow.injury.f3": "是否有照片、记录或其他证据？",
      "follow.estate.f0": "这是关于遗嘱、信托、遗产认证还是继承？",
      "follow.estate.f1": "是否已有相关文件？",
      "follow.estate.f2": "是否有截止日期或家庭纠纷？",
      "follow.estate.f3": "律师应该联系谁？",
      "follow.other.f0": "请用一句话说明主要问题？",
      "follow.other.f1": "是否有需要注意的截止日期？",
      "follow.other.f2": "目前已有哪些资料？",
      "follow.other.f3": "希望律所优先协助什么？",

      "admin.secureBanner": "安全后台预览",
      "admin.secureText":
        "真实版本中，完整客户资料需要登录后才能查看。邮件通知应只包含低敏摘要，并链接回安全后台。",
      "admin.emailCardTitle": "邮件提醒预览",
      "admin.emailSubjLabel": "主题",
      "admin.emailBodyLabel": "正文",
      "admin.emailSubj": "收到新咨询 — {area} / {urgency}",
      "admin.emailBodyIntro": "有一条新的客户咨询已提交。",
      "admin.emailOpen": "打开咨询",
      "admin.emailFooter": "请在安全后台查看完整资料：",
      "admin.qsetTitle": "法律领域问题集",
      "admin.qsetHint": "各业务领域可按律所需求定制。",
      "admin.qset.q": "示例问题",
      "admin.qset.docs": "建议必备资料",
      "admin.qset.logic": "缺失信息逻辑",

      "qs.immigration.q":
        "• 当前移民身份\n• 通知或截止日期\n• 已有申请、批准或收据\n• 雇主、担保人或亲属申请人",
      "qs.immigration.d": "• 护照 / 身份证件\n• USCIS 通知\n• I-94 / 签证记录\n• 如有批准通知书",
      "qs.immigration.l": "若提到截止日期但未提供具体日期，标记为「重要日期缺失」。",
      "qs.family.q": "• 是否涉及子女\n• 是否已有法院命令\n• 安全或抚养权关切\n• 偏好沟通方式",
      "qs.family.d": "• 法院命令\n• 抚养方案草稿\n• 如有财务资料",
      "qs.family.l": "若提到子女但未列年龄，提示工作人员跟进。",
      "qs.realestate.q": "• 买方 / 卖方 / 房东 / 租客\n• 已签合同或租约\n• 交割或关键截止日\n• 现有资料",
      "qs.realestate.d": "• 买卖协议或租约\n• 产权 / 调查报告（如有）\n• 与对方沟通记录",
      "qs.realestate.l": "若提到交割但未给日期，标记时间线不完整。",
      "qs.business.q": "• 合同 / 设立 / 合伙 / 纠纷\n• 已签协议\n• 截止日或进行中争议\n• 希望讨论的重点",
      "qs.business.d": "• 已签署合同\n• 公司文件\n• 律师函或递交材料",
      "qs.business.l": "若称有争议但未说明相对方，标记相对方信息缺失。",
      "qs.injury.q": "• 事发时间\n• 警方或医疗记录\n• 保险\n• 照片或证据",
      "qs.injury.d": "• 医疗记录\n• 警方报告\n• 保险往来\n• 照片",
      "qs.injury.l": "若描述受伤但未提供事发日期，标记需补充日期。",
      "qs.estate.q": "• 遗嘱 / 信托 / 认证 / 继承\n• 已有遗产文件\n• 截止日或家庭纠纷\n• 律师首要联系人",
      "qs.estate.d": "• 现有遗嘱或信托\n• 如涉及认证需死亡证明\n• 资产清单（如有）",
      "qs.estate.l": "若提到认证但未说明法院，标记待核实。",

      "brief.source": "咨询来源",
      "brief.sourceChat": "AI 聊天咨询",
      "brief.snapshot": "客户摘要",
      "brief.transcript": "对话摘要预览",
      "brief.followup": "领域跟进问答",

      "form.doc.passport": "护照 / 身份证件",
      "form.doc.uscis": "USCIS 通知",
      "form.doc.court": "法庭文件",
      "form.doc.contract": "合同",
      "form.doc.police": "警方报告",
      "form.doc.medical": "医疗记录",
      "form.doc.photos": "照片 / 证据",

      "brief.s1": "客户概况",
      "brief.s2": "事项类型",
      "brief.s3": "情况概述",
      "brief.s4": "关键事实",
      "brief.s5": "重要日期",
      "brief.s6": "已有资料",
      "brief.s7": "缺失信息",
      "brief.s8": "紧急程度",
      "brief.s9": "建议内部下一步",
      "brief.s10": "法律免责声明",
      "brief.miss1": "完整时间线待确认",
      "brief.miss2": "相关通知或文件副本",
      "brief.miss3": "希望预约咨询的时间段",
      "brief.rec":
        "工作人员应核对时间线、索取相关通知副本，并在合适时安排初次咨询。",

      "live.practice": "法律服务领域",
      "live.urgency": "紧急程度",
      "live.lang": "偏好语言",
      "live.contact": "联系方式",
      "live.facts": "关键事实",
      "live.dates": "重要日期",
      "live.docs": "提及的资料",
      "live.missing": "缺失信息",
      "live.rec": "建议下一步",

      "form.lang.zh": "中文",
      "form.lang.en": "英文",
      "form.lang.bi": "中英双语",
      "form.lang.chinese": "中文",
      "form.lang.english": "英文",
      "form.lang.bilingual": "中英双语",
      "form.cm.phone": "电话",
      "form.cm.wechat": "微信",
      "form.cm.email": "邮件",
      "form.cm.sms": "短信",
      "form.ar.immigration": "移民",
      "form.ar.family": "婚姻家庭 / 离婚",
      "form.ar.realestate": "房产",
      "form.ar.business": "商业",
      "form.ar.injury": "人身伤害",
      "form.ar.estate": "遗产规划",
      "form.ar.other": "其他",
      "form.ug.low": "低",
      "form.ug.med": "中",
      "form.ug.high": "高",
      "form.ug.urgent": "紧急",
      "form.nx.phone": "电话咨询",
      "form.nx.video": "视频咨询",
      "form.nx.inperson": "线下面谈",
      "form.nx.email": "邮件跟进",
      "form.nx.unsure": "不确定",

      "opt.title": "两种使用方式",
      "opt.at": "完整律所官网升级 + AI 咨询系统",
      "opt.ad": "适合网站老旧、移动端体验差，或缺少结构化线上咨询流程的律师事务所。",
      "opt.ali1": "现代化律所官网改版",
      "opt.ali2": "移动端优先体验",
      "opt.ali3": "中英双语页面",
      "opt.ali4": "法律服务领域页面",
      "opt.ali5": "律师介绍区域",
      "opt.ali6": "AI 聊天式咨询助手",
      "opt.ali7": "联系 / 预约流程",
      "opt.ali8": "基础 SEO 设置",
      "opt.ali9": "上线支持",
      "opt.acta": "咨询网站升级",

      "opt.bt": "现有网站 AI 咨询模块",
      "opt.bd":
        "适合已有官网，但希望在不完全重做网站的情况下加入结构化客户咨询能力的律师事务所。",
      "opt.bli1": "AI 聊天咨询模块",
      "opt.bli2": "结构化律师简报",
      "opt.bli3": "后台预览",
      "opt.bli4": "邮件通知流程",
      "opt.bli5": "文件清单",
      "opt.bli6": "现有网站嵌入支持",
      "opt.bli7": "最小化改动",
      "opt.bcta": "咨询 AI 模块",

      "risk.title": "本助手不提供法律建议。",
      "risk.body":
        "助手不会回答法律问题、预测结果，也不能代替律师独立专业判断。它只负责整理初步咨询信息，便于律所团队查看潜在客户情况。",

      "final.title": "想看看这套系统如何用于你的律师事务所吗？",
      "final.sub":
        "把你当前的网站或咨询流程发给我们，我们可以判断你更适合完整网站升级，还是只嵌入 AI 咨询模块。",
      "final.cta": "邮件联系 BoniStudio",
      "final.pricing": "查看定价",
      "final.contact": "联系我们",
      "final.payCompleteDeposit": "支付完整系统定金",

      "admin.hero.title": "客户在聊天结束后，律所看到的内容。",
      "admin.hero.sub":
        "结构化简报、字段摘要与对话预览——在正式咨询前即可开始评估。",

      "dash.s1": "新咨询",
      "dash.s2": "高优先级",
      "dash.s3": "缺失资料",
      "dash.s4": "可安排咨询",

      "lead.badgeChat": "来自 AI 咨询助手",
      "lead.status.needs": "待查看",
      "lead.status.missing": "资料不全",
      "lead.status.ready": "可跟进",

      "panel.info": "客户信息",
      "panel.contact": "联系偏好",
      "panel.area": "法律服务领域",
      "panel.urgency": "紧急程度",
      "panel.ai": "律师简报",
      "panel.facts": "关键事实",
      "panel.transcript": "对话摘要预览",
      "panel.dates": "重要日期",
      "panel.docs": "提及的资料",
      "panel.missing": "待补充",
      "panel.rec": "建议跟进",
      "panel.followup": "法律领域跟进问答",
      "panel.addclient": "客户补充说明",
      "panel.notes": "内部备注",

      "act.reviewed": "标记已查看",
      "act.request": "请求补充资料",
      "act.schedule": "安排咨询",
      "act.email": "发送跟进邮件",

      "toast.demo": "Demo 演示操作。",

      "strip": "客户对话 → 字段整理 → 查看简报 → 律师跟进 → 正式咨询",

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
    if (typeof window.__lfdRefreshChatChrome === "function") window.__lfdRefreshChatChrome(lang);
  }

  function mapKey(lang, prefix, value) {
    if (!value) return "—";
    return t(lang, prefix + value) || value;
  }

  function detectPracticeArea(text) {
    var s = (text || "").toLowerCase();
    var checks = [
      { keys: ["immigration", "visa", "uscis", "h1b", "h-1b", "green card", "asylum", "i-140", "ead"], v: "immigration" },
      { keys: ["离婚", "抚养权", "婚姻", "custody", "divorce", "marriage", "family law"], v: "family" },
      { keys: ["移民", "签证", "绿卡", "工卡"], v: "immigration" },
      { keys: ["house", "real estate", "closing", "lease", "landlord", "房产", "买房", "租约"], v: "realestate" },
      { keys: ["business", "llc", "partnership", "公司", "商业", "合伙"], v: "business" },
      { keys: ["accident", "injury", "insurance", "medical", "车祸", "受伤"], v: "injury" },
      { keys: ["will", "trust", "estate", "inheritance", "遗嘱", "信托", "遗产"], v: "estate" },
    ];
    for (var i = 0; i < checks.length; i++) {
      for (var j = 0; j < checks[i].keys.length; j++) {
        if (s.indexOf(checks[i].keys[j]) !== -1) return checks[i].v;
      }
    }
    return null;
  }

  function areaFromChipLabel(lang, label) {
    var chipMap = [
      { k: "immigration", en: "Immigration", zh: "移民" },
      { k: "family", en: "Family / Divorce", zh: "婚姻家庭 / 离婚" },
      { k: "realestate", en: "Real Estate", zh: "房产" },
      { k: "business", en: "Business", zh: "商业" },
      { k: "injury", en: "Personal Injury", zh: "人身伤害" },
      { k: "estate", en: "Estate Planning", zh: "遗产规划" },
    ];
    var trimmed = (label || "").trim();
    for (var i = 0; i < chipMap.length; i++) {
      if (trimmed === chipMap[i].en || trimmed === chipMap[i].zh) return chipMap[i].k;
    }
    return detectPracticeArea(trimmed) || null;
  }

  function normalizeLanguage(text) {
    var s = (text || "").toLowerCase();
    if (/中文|chinese|简体|繁体/.test(s) && !/bilingual|双语/.test(s)) return "chinese";
    if (/双语|bilingual|both/.test(s)) return "bilingual";
    if (/english|英文/.test(s)) return "english";
    return null;
  }

  function normalizeContact(text) {
    var s = (text || "").toLowerCase();
    if (/wechat|微信|weixin/.test(s)) return "wechat";
    if (/sms|text message|短信/.test(s)) return "sms";
    if (/email|邮件|@/.test(s)) return "email";
    if (/phone|call|电话|手机/.test(s)) return "phone";
    return null;
  }

  function normalizeUrgency(text) {
    var s = (text || "").toLowerCase();
    if (/urgent|非常|紧急|asap/.test(s)) return "urgent";
    if (/high|高|紧迫/.test(s)) return "high";
    if (/medium|中|一般/.test(s)) return "medium";
    if (/low|低/.test(s)) return "low";
    return null;
  }

  function normalizeNextStep(text) {
    var s = (text || "").toLowerCase();
    if (/video|视频/.test(s)) return "video";
    if (/in[\s-]?person|面谈|线下|见面/.test(s)) return "inperson";
    if (/email|邮件/.test(s)) return "email";
    if (/phone|电话|语音/.test(s)) return "phone";
    if (/不确定|not sure|unsure/.test(s)) return "unsure";
    return null;
  }

  function filledCount(collected) {
    var n = 0;
    for (var i = 0; i < FIELD_ORDER.length; i++) {
      if (collected[FIELD_ORDER[i]]) n++;
    }
    return n;
  }

  function totalProgressUnits(collected) {
    var area = collected.serviceArea || "other";
    return FIELD_ORDER.length + getFollowKeys(area).length;
  }

  function doneProgressUnits(collected) {
    var base = filledCount(collected);
    var ex = (collected.extraAnswers && collected.extraAnswers.length) || 0;
    return base + ex;
  }

  function docLabelsFromKeys(lang, keys) {
    if (!keys || !keys.length) return "";
    return keys
      .map(function (k) {
        return t(lang, "form.doc." + k);
      })
      .join(", ");
  }

  function fieldChipStatus(lang, key, collected, step, awaitingArea, phase) {
    var c = collected;
    var has = function (v) {
      return v != null && String(v).trim().length > 0;
    };
    var st = function (ok) {
      return { kind: ok ? "collected" : "missing", label: ok ? t(lang, "chip.collected") : t(lang, "chip.missing") };
    };
    var rev = { kind: "review", label: t(lang, "chip.review") };
    if (key === "practice") return has(c.serviceArea) ? st(true) : st(false);
    if (key === "urgency") return has(c.urgency) ? st(true) : st(false);
    if (key === "lang") return has(c.preferredLanguage) ? st(true) : st(false);
    if (key === "contact") return has(c.contactMethod) && has(c.contactDetail) ? st(true) : st(false);
    if (key === "facts") return has(c.situation) ? st(true) : st(false);
    if (key === "dates") {
      if (/deadline|notice|date|day|by |before|uscis|court|closing|grace|截止|日期|通知/i.test(c.situation || "") && !has(c.importantDates))
        return rev;
      return has(c.importantDates) ? st(true) : st(false);
    }
    if (key === "docs") {
      var up = (c.uploadedDocs && c.uploadedDocs.length) || 0;
      if (has(c.documents) || up) return st(true);
      return st(false);
    }
    if (key === "missing") return rev;
    if (key === "rec") {
      var doneFollow =
        (c.extraAnswers && c.extraAnswers.length) >= getFollowKeys(c.serviceArea || "other").length;
      var baseDone = filledCount(c) >= FIELD_ORDER.length;
      var ok = baseDone && doneFollow && (phase === "ready" || phase === "generated");
      return ok ? st(true) : st(false);
    }
    if (key === "nextq") {
      if (phase === "generated") return st(true);
      if (phase === "ready") return rev;
      return st(false);
    }
    return st(false);
  }

  function botQuestionT(lang, step) {
    var keys = ["askArea", "qName", "qLang", "qContact", "qDetail", "qSituation", "qDates", "qDocs", "qUrgency", "qNext"];
    return t(lang, "chat." + keys[step]);
  }

  function nextQuestionPreview(lang, collected, step, awaitingArea, phase) {
    if (awaitingArea) return t(lang, "chat.askArea");
    if (step < FIELD_ORDER.length) return botQuestionT(lang, step);
    var area = collected.serviceArea || "other";
    var ex = getFollowKeys(area);
    var ea = (collected.extraAnswers && collected.extraAnswers.length) || 0;
    if (phase === "followup" && ea < ex.length) return followQuestion(lang, area, ea);
    if (phase === "ready" || phase === "generated") return t(lang, "chat.waiting");
    return t(lang, "chat.waiting");
  }

  function liveBriefValue(lang, key, collected, step, awaitingArea, phase) {
    var c = collected;
    switch (key) {
      case "practice":
        return c.serviceArea ? mapKey(lang, "form.ar.", c.serviceArea) : "";
      case "urgency":
        return c.urgency ? mapKey(lang, "form.ug.", c.urgency) : "";
      case "lang":
        return c.preferredLanguage ? mapKey(lang, "form.lang.", c.preferredLanguage) : "";
      case "contact":
        if (!c.contactMethod) return "";
        return (
          mapKey(lang, "form.cm.", c.contactMethod) + (c.contactDetail ? " · " + c.contactDetail : "")
        );
      case "facts":
        return c.situation || "";
      case "dates":
        return c.importantDates || "";
      case "docs": {
        var parts = [];
        if (c.documents) parts.push(c.documents);
        var up = docLabelsFromKeys(lang, c.uploadedDocs);
        if (up) parts.push(up);
        return parts.join(parts.length > 1 ? "\n" : "");
      }
      case "missing":
        return computeMissingLines(lang, c)
          .map(function (l) {
            return "• " + l;
          })
          .join("\n");
      case "rec":
        return filledCount(c) >= FIELD_ORDER.length &&
          (c.extraAnswers || []).length >= getFollowKeys(c.serviceArea || "other").length
          ? t(lang, "brief.rec")
          : "";
      case "nextq":
        return nextQuestionPreview(lang, c, step, awaitingArea, phase);
      default:
        return "";
    }
  }

  function computeMissingLines(lang, c) {
    var lines = [];
    var id = c.importantDates;
    if (!id || String(id).trim().length < 2) lines.push(t(lang, "brief.miss1"));
    var hasDocText = c.documents && String(c.documents).trim().length >= 2;
    var hasUpload = c.uploadedDocs && c.uploadedDocs.length;
    if (!hasDocText && !hasUpload) lines.push(t(lang, "brief.miss2"));
    lines.push(t(lang, "brief.miss3"));
    return lines;
  }

  function buildFollowupSummary(collected, lang) {
    var c = collected;
    var area = c.serviceArea || "other";
    var keys = getFollowKeys(area);
    var ans = c.extraAnswers || [];
    var lines = [];
    for (var i = 0; i < keys.length; i++) {
      var q = followQuestion(lang, area, i);
      var a = ans[i] || "—";
      lines.push("• " + q + "\n  → " + a);
    }
    return lines.join("\n");
  }

  function buildAttorneyBrief(collected, lang) {
    var isZh = lang === "zh";
    var c = collected;
    var missLines = computeMissingLines(lang, c);
    var matter = c.serviceArea ? mapKey(lang, "form.ar.", c.serviceArea) : "—";
    var summary =
      c.situation ||
      (isZh ? "客户已通过对话提供初步情况说明。" : "The client provided an initial narrative through the chat intake.");
    var facts =
      c.clientName &&
      matter &&
      (isZh
        ? "客户姓名为 " + c.clientName + "，咨询方向为「" + matter + "」。助手仅整理描述，不作法律结论。"
        : "The client is identified as " +
          c.clientName +
          ". The matter is described as related to " +
          matter +
          ". This summary organizes the client narrative and does not state legal conclusions.");
    var dates = c.importantDates || (isZh ? "未单独列出" : "Not separately listed");
    var docParts = [];
    if (c.documents) docParts.push(c.documents);
    var upLab = docLabelsFromKeys(lang, c.uploadedDocs);
    if (upLab) docParts.push((isZh ? "所选资料（演示）：" : "Selected documents (demo): ") + upLab);
    var docs = docParts.length ? docParts.join("\n") : isZh ? "未说明" : "Not specified";
    var urg = c.urgency ? mapKey(lang, "form.ug.", c.urgency) : "—";
    var nextPref = c.nextStep ? mapKey(lang, "form.nx.", c.nextStep) : "—";
    var rec = t(lang, "brief.rec");
    var followBlock = buildFollowupSummary(c, lang);
    var notes = (c.additionalNotes || "").trim();
    var snap =
      (isZh ? "姓名：" : "Name: ") +
      (c.clientName || "—") +
      "\n" +
      (isZh ? "偏好语言：" : "Preferred language: ") +
      (c.preferredLanguage ? mapKey(lang, "form.lang.", c.preferredLanguage) : "—") +
      "\n" +
      (isZh ? "联系方式：" : "Contact: ") +
      (c.contactMethod ? mapKey(lang, "form.cm.", c.contactMethod) : "—") +
      (c.contactDetail ? " · " + c.contactDetail : "");

    var out = [];
    out.push("═══ " + t(lang, "brief.source") + " ═══");
    out.push(t(lang, "brief.sourceChat"));
    out.push("");
    out.push("═══ " + t(lang, "brief.snapshot") + " ═══");
    out.push(snap);
    out.push("");
    out.push("═══ " + t(lang, "brief.s2") + " ═══");
    out.push(matter);
    out.push("");
    out.push("═══ " + t(lang, "brief.s8") + " ═══");
    out.push(urg);
    out.push("");
    out.push("═══ " + t(lang, "brief.s4") + " ═══");
    out.push(facts);
    out.push("");
    out.push("═══ " + t(lang, "brief.s3") + " ═══");
    out.push(summary);
    out.push("");
    out.push("═══ " + t(lang, "brief.s5") + " ═══");
    out.push(dates);
    out.push("");
    out.push("═══ " + t(lang, "brief.s6") + " ═══");
    out.push(docs);
    out.push("");
    out.push("═══ " + t(lang, "brief.s7") + " ═══");
    out.push(missLines.map(function (l) {
      return "• " + l;
    }).join("\n"));
    out.push("");
    out.push("═══ " + t(lang, "brief.s9") + " ═══");
    out.push(rec);
    out.push((isZh ? "客户偏好下一步：" : "Preferred next step (client): ") + nextPref);
    out.push("");
    out.push("═══ " + t(lang, "brief.followup") + " ═══");
    out.push(followBlock || "—");
    if (notes) {
      out.push("");
      out.push("═══ " + (isZh ? "补充说明" : "Additional notes (client)") + " ═══");
      out.push(notes);
    }
    out.push("");
    out.push("═══ " + t(lang, "brief.transcript") + " ═══");
    out.push(isZh ? "（完整对话可在后台查看；此处为演示摘要。）" : "(Full thread in dashboard; preview truncated in demo.)");
    out.push("");
    out.push("═══ " + t(lang, "brief.s10") + " ═══");
    out.push(t(lang, "chat.disclaimer"));
    return out.join("\n");
  }

  function collectedToForm(collected) {
    return {
      filler: "client",
      clientName: collected.clientName || "",
      preferredLanguage: collected.preferredLanguage || "",
      contactMethod: collected.contactMethod || "",
      contactDetail: collected.contactDetail || "",
      serviceArea: collected.serviceArea || "",
      urgency: collected.urgency || "",
      situation: collected.situation || "",
      importantDates: collected.importantDates || "",
      documents: (collected.uploadedDocs && collected.uploadedDocs.slice()) || [],
      intakeDocumentsNote: collected.documents || "",
      nextStep: collected.nextStep || "",
      extraAnswers: (collected.extraAnswers && collected.extraAnswers.slice()) || [],
      additionalNotes: collected.additionalNotes || "",
    };
  }

  function saveChatPayload(collected, transcript, briefEn, briefZh) {
    var form = collectedToForm(collected);
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          savedAt: new Date().toISOString(),
          source: "chat",
          transcript: transcript,
          form: form,
          attorneyBriefEn: briefEn,
          attorneyBriefZh: briefZh,
          summaryEn: briefEn,
          summaryZh: briefZh,
        })
      );
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

  function transcriptPreview(transcript, lang, maxLines) {
    if (!transcript || !transcript.length) return "—";
    var lines = transcript.slice(-(maxLines || 8)).map(function (m) {
      var who = m.role === "assistant" ? (lang === "zh" ? "助手" : "Assistant") : lang === "zh" ? "客户" : "Client";
      return who + ": " + m.text.split("\n")[0];
    });
    return lines.join("\n");
  }

  function submissionToLead(sub) {
    var d = sub.form || {};
    var status = "needs_review";
    if (sub.source === "chat") {
      if (!d.situation || String(d.situation).length < 5) status = "missing";
    } else if (!d.intakeDocumentsNote && (!d.documents || !d.documents.length)) status = "missing";
    if (d.urgency === "low" || d.urgency === "medium") status = "ready";

    return {
      id: "live-" + (sub.savedAt || Date.now()),
      isLive: true,
      fromChat: sub.source === "chat",
      filler: d.filler,
      name: d.clientName || (sub.source === "chat" ? "Chat intake" : "New client"),
      preferredLanguage: d.preferredLanguage || "",
      serviceArea: d.serviceArea,
      urgency: d.urgency,
      status: status,
      contactMethod: d.contactMethod,
      contactDetail: d.contactDetail,
      situation: d.situation,
      importantDates: d.importantDates,
      documents: d.documents || [],
      intakeDocumentsNote: d.intakeDocumentsNote || "",
      extraAnswers: d.extraAnswers || [],
      additionalNotes: d.additionalNotes || "",
      summaryEn: sub.attorneyBriefEn || sub.summaryEn,
      summaryZh: sub.attorneyBriefZh || sub.summaryZh,
      transcript: sub.transcript || [],
      missingStatic: null,
      recStatic: null,
    };
  }

  function leadDisplayName(lead, lang) {
    return lead.name;
  }

  function leadSummaryText(lead, lang) {
    if (lead.summaryEn) return lang === "zh" ? lead.summaryZh : lead.summaryEn;
    return t(lang, lead.summaryKey);
  }

  function leadMissingText(lead, lang) {
    if (lead.missingStatic != null) return lead.missingStatic;
    if (!lead.missingKey) {
      if (lead.fromChat) {
        return computeMissingLines(lang, {
          importantDates: lead.importantDates,
          documents: lead.intakeDocumentsNote,
          uploadedDocs: lead.documents,
        })
          .map(function (l) {
            return "• " + l;
          })
          .join("\n");
      }
      return "—";
    }
    return t(lang, lead.missingKey);
  }

  function leadRecText(lead, lang) {
    if (lead.recStatic != null) return lead.recStatic;
    if (!lead.recKey) return t(lang, "brief.rec");
    return t(lang, lead.recKey);
  }

  function statusLabel(lang, st) {
    if (st === "needs_review") return t(lang, "lead.status.needs");
    if (st === "missing") return t(lang, "lead.status.missing");
    return t(lang, "lead.status.ready");
  }

  function initIntakePage() {
    var msgsEl = document.getElementById("lfd-chat-msgs");
    if (!msgsEl) return;

    var collected = {};
    var transcript = [];
    var step = 0;
    var awaitingArea = true;
    var phase = "chat";
    var typingEl = document.getElementById("lfd-chat-typing");
    var inputEl = document.getElementById("lfd-chat-input");
    var sendBtn = document.getElementById("lfd-chat-send");
    var chipsWrap = document.getElementById("lfd-chat-chips");
    var examplesWrap = document.getElementById("lfd-chat-examples");
    var progressEl = document.getElementById("lfd-chat-progress");
    var briefOut = document.getElementById("lfd-attorney-brief-wrap");
    var briefBody = document.getElementById("lfd-attorney-brief-body");
    var genBtn = document.getElementById("lfd-generate-brief");
    var examplesBlock = document.getElementById("lfd-chat-examples-block");
    var chipsBlock = document.getElementById("lfd-chat-chips-block");
    var restartInlineBtn = document.getElementById("lfd-chat-restart-inline");

    var examplesBlockVisible = true;
    var practiceChipsVisible = true;
    var inputLocked = false;

    function hideExamplesBlock() {
      if (!examplesBlockVisible) return;
      examplesBlockVisible = false;
      if (examplesBlock) examplesBlock.hidden = true;
    }

    function hidePracticeChipsBlock() {
      if (!practiceChipsVisible) return;
      practiceChipsVisible = false;
      if (chipsBlock) chipsBlock.hidden = true;
    }

    function onPracticeAreaCollected() {
      hidePracticeChipsBlock();
      updateLiveBrief();
    }

    function showStarterBlocks() {
      examplesBlockVisible = true;
      practiceChipsVisible = true;
      if (examplesBlock) examplesBlock.hidden = false;
      if (chipsBlock) chipsBlock.hidden = false;
    }

    function scrollChat() {
      var wrap = document.getElementById("lfd-chat-scroll");
      if (wrap) wrap.scrollTop = wrap.scrollHeight;
    }

    function setTyping(on) {
      if (!typingEl) return;
      typingEl.hidden = !on;
      if (on) typingEl.setAttribute("aria-busy", "true");
      else typingEl.removeAttribute("aria-busy");
      scrollChat();
    }

    function appendMessage(role, text, skipTranscript) {
      var div = document.createElement("div");
      div.className = "lfd-msg lfd-msg--" + role;
      div.setAttribute("role", "article");
      var p = document.createElement("p");
      p.textContent = text;
      div.appendChild(p);
      msgsEl.appendChild(div);
      requestAnimationFrame(function () {
        div.classList.add("is-in");
      });
      if (!skipTranscript) transcript.push({ role: role, text: text, at: new Date().toISOString() });
      scrollChat();
    }

    function updateProgress() {
      if (!progressEl) return;
      var total = Math.max(1, totalProgressUnits(collected));
      var done = Math.min(doneProgressUnits(collected), total);
      progressEl.style.setProperty("--lfd-progress", String(done / total));
      var bar = progressEl.querySelector(".lfd-chat-progress__bar");
      if (bar) bar.style.width = Math.min(100, Math.round((done / total) * 100)) + "%";
      var label = progressEl.querySelector(".lfd-chat-progress__text");
      if (label) {
        var lang = window.__lfdLang || "en";
        label.textContent = t(lang, "chat.progress") + ": " + done + " / " + total;
      }
    }

    function updateLiveBrief() {
      var lang = window.__lfdLang || "en";
      var wait = t(lang, "chat.waiting");
      var keys = ["practice", "urgency", "lang", "contact", "facts", "dates", "docs", "missing", "rec", "nextq"];
      keys.forEach(function (k) {
        var fieldEl = document.querySelector('[data-brief-field="' + k + '"]');
        var chipEl = document.querySelector('[data-brief-chip="' + k + '"]');
        if (chipEl) {
          var st = fieldChipStatus(lang, k, collected, step, awaitingArea, phase);
          chipEl.textContent = st.label;
          chipEl.setAttribute("data-state", st.kind);
        }
        if (!fieldEl) return;
        var v = liveBriefValue(lang, k, collected, step, awaitingArea, phase);
        if (k === "missing") {
          fieldEl.textContent = v && v.length > 2 ? v : wait;
          return;
        }
        fieldEl.textContent = v && String(v).trim().length ? v : wait;
      });
      updateProgress();
    }

    function botQuestionForStep(s) {
      var lang = window.__lfdLang || "en";
      var keys = ["askArea", "qName", "qLang", "qContact", "qDetail", "qSituation", "qDates", "qDocs", "qUrgency", "qNext"];
      return t(lang, "chat." + keys[s]);
    }

    function scheduleBot(text, delay) {
      setTyping(true);
      setTimeout(function () {
        setTyping(false);
        appendMessage("assistant", text);
        updateLiveBrief();
        inputLocked = false;
        if ((phase === "chat" || phase === "followup" || phase === "ready") && inputEl && !inputEl.disabled) {
          try {
            inputEl.focus();
          } catch (e) {}
        }
      }, delay || 520);
    }

    function processUserMessage(raw) {
      if ((phase !== "chat" && phase !== "followup" && phase !== "ready") || inputLocked) return;
      var text = (raw || "").trim();
      if (!text) return;

      inputLocked = true;
      appendMessage("user", text);
      var lang = window.__lfdLang || "en";

      if (awaitingArea) {
        var area = areaFromChipLabel(lang, text) || detectPracticeArea(text);
        if (!area && text === t(lang, "chat.chip.unsure")) area = "other";
        if (!area) {
          scheduleBot(t(lang, "chat.askArea"), 480);
          return;
        }
        collected.serviceArea = area;
        awaitingArea = false;
        step = 1;
        onPracticeAreaCollected();
        scheduleBot(t(lang, "chat.ackArea") + "\n\n" + botQuestionForStep(1), 550);
        return;
      }

      if (phase === "ready") {
        collected.additionalNotes = (collected.additionalNotes ? collected.additionalNotes + "\n" : "") + text;
        updateLiveBrief();
        scheduleBot(t(lang, "chat.ackExtra"), 450);
        return;
      }

      if (phase === "followup") {
        if (!collected.extraAnswers) collected.extraAnswers = [];
        collected.extraAnswers.push(text);
        var areaF = collected.serviceArea || "other";
        var ex = getFollowKeys(areaF);
        updateLiveBrief();
        if (collected.extraAnswers.length < ex.length) {
          scheduleBot(followQuestion(lang, areaF, collected.extraAnswers.length), 520);
          return;
        }
        phase = "ready";
        if (genBtn) genBtn.hidden = false;
        scheduleBot(t(lang, "chat.done"), 600);
        return;
      }

      var field = FIELD_ORDER[step];
      if (field === "clientName") collected.clientName = text;
      else if (field === "preferredLanguage") {
        collected.preferredLanguage = normalizeLanguage(text) || (lang === "zh" ? "chinese" : "english");
      } else if (field === "contactMethod") {
        collected.contactMethod = normalizeContact(text) || "email";
      } else if (field === "contactDetail") collected.contactDetail = text;
      else if (field === "situation") collected.situation = text;
      else if (field === "importantDates") collected.importantDates = text;
      else if (field === "documents") collected.documents = text;
      else if (field === "urgency") {
        collected.urgency = normalizeUrgency(text) || "medium";
      } else if (field === "nextStep") {
        collected.nextStep = normalizeNextStep(text) || "phone";
      }

      var det = detectPracticeArea(text);
      if (det && !collected.serviceArea) collected.serviceArea = det;

      step++;
      updateLiveBrief();

      if (step >= FIELD_ORDER.length) {
        phase = "followup";
        collected.extraAnswers = [];
        var area2 = collected.serviceArea || "other";
        scheduleBot(followQuestion(lang, area2, 0), 550);
        return;
      }

      scheduleBot(botQuestionForStep(step), 520);
    }

    function resetDemo() {
      msgsEl.innerHTML = "";
      collected = {};
      transcript = [];
      step = 0;
      awaitingArea = true;
      phase = "chat";
      inputLocked = false;
      showStarterBlocks();
      setInputEnabled(true);
      buildUploadChips();
      if (genBtn) genBtn.hidden = true;
      if (briefOut) briefOut.hidden = true;
      if (briefBody) briefBody.textContent = "";
      if (inputEl) inputEl.value = "";
      var lang = window.__lfdLang || "en";
      appendMessage("assistant", t(lang, "chat.greeting"), true);
      transcript.push({ role: "assistant", text: t(lang, "chat.greeting"), at: new Date().toISOString() });
      buildChips();
      buildExamples();
      updateLiveBrief();
      scrollChat();
      if (inputEl) inputEl.focus();
    }

    function buildChips() {
      if (!chipsWrap) return;
      chipsWrap.innerHTML = "";
      var lang = window.__lfdLang || "en";
      var ids = ["immigration", "family", "realestate", "business", "injury", "estate", "unsure"];
      ids.forEach(function (id) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "lfd-chip";
        b.textContent = t(lang, "chat.chip." + id);
        b.addEventListener("click", function () {
          hideExamplesBlock();
          processUserMessage(b.textContent);
        });
        chipsWrap.appendChild(b);
      });
    }

    function buildExamples() {
      if (!examplesWrap) return;
      examplesWrap.innerHTML = "";
      var lang = window.__lfdLang || "en";
      var ex = [
        { k: "ex1", en: "I lost my H1B job and have about 35 days left in grace period. I have an approved I-140.", zh: "我 H1B 被裁员了，grace period 还剩大约 35 天，我有已批准的 I-140。" },
        { k: "ex2", en: "I need advice on divorce and child custody.", zh: "我想咨询离婚和抚养权问题。" },
        { k: "ex3", en: "I need a commercial contract reviewed before signing.", zh: "我有一份商业合同想签约前审阅。" },
        { k: "ex4", en: "I was injured in a car accident last week.", zh: "我上周在车祸中受伤了。" },
      ];
      ex.forEach(function (item) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "lfd-chip lfd-chip--example";
        b.textContent = t(lang, "chat." + item.k);
        var preload = lang === "zh" ? item.zh : item.en;
        b.addEventListener("click", function () {
          hideExamplesBlock();
          if (inputEl) inputEl.value = "";
          processUserMessage(preload);
        });
        examplesWrap.appendChild(b);
      });
      var lab = document.getElementById("lfd-chat-examples-label");
      if (lab) lab.textContent = t(lang, "chat.examplesLabel");
    }

    window.__lfdRefreshChatChrome = function () {
      if (practiceChipsVisible && chipsBlock && !chipsBlock.hidden) buildChips();
      if (examplesBlockVisible && examplesBlock && !examplesBlock.hidden) buildExamples();
      buildUploadChips();
      updateLiveBrief();
      var lang = window.__lfdLang || "en";
      var bt = document.querySelector(".lfd-brief-panel__title");
      if (bt) bt.textContent = t(lang, "chat.liveBriefTitle");
    };

    function setInputEnabled(on) {
      if (inputEl) {
        inputEl.disabled = !on;
        inputEl.classList.toggle("is-disabled", !on);
      }
      if (sendBtn) sendBtn.disabled = !on;
    }

    function onSend() {
      if (!inputEl || (phase !== "chat" && phase !== "followup" && phase !== "ready") || inputLocked) return;
      var raw = inputEl.value;
      var v = raw.trim();
      if (!v) return;
      inputEl.value = "";
      hideExamplesBlock();
      processUserMessage(v);
    }

    function buildUploadChips() {
      var wrap = document.getElementById("lfd-upload-chips");
      if (!wrap) return;
      wrap.innerHTML = "";
      if (!collected.uploadedDocs) collected.uploadedDocs = [];
      var lang = window.__lfdLang || "en";
      UPLOAD_DOC_KEYS.forEach(function (key) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "lfd-upload-chip";
        b.setAttribute("data-doc-key", key);
        b.textContent = t(lang, "form.doc." + key);
        if (collected.uploadedDocs.indexOf(key) !== -1) b.classList.add("is-selected");
        b.addEventListener("click", function () {
          var i = collected.uploadedDocs.indexOf(key);
          if (i === -1) collected.uploadedDocs.push(key);
          else collected.uploadedDocs.splice(i, 1);
          b.classList.toggle("is-selected", collected.uploadedDocs.indexOf(key) !== -1);
          updateLiveBrief();
        });
        wrap.appendChild(b);
      });
    }

    if (sendBtn) sendBtn.addEventListener("click", onSend);
    if (inputEl)
      inputEl.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
          e.preventDefault();
          onSend();
        }
      });

    if (genBtn) {
      genBtn.addEventListener("click", function () {
        var lang = window.__lfdLang || "en";
        var briefEn = buildAttorneyBrief(collected, "en");
        var briefZh = buildAttorneyBrief(collected, "zh");
        saveChatPayload(collected, transcript, briefEn, briefZh);
        if (briefBody) briefBody.textContent = lang === "zh" ? briefZh : briefEn;
        if (briefOut) {
          briefOut.hidden = false;
          briefOut.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        phase = "generated";
        updateLiveBrief();
        setInputEnabled(false);
      });
    }

    function bindRestart(btn) {
      if (!btn) return;
      btn.addEventListener("click", function () {
        resetDemo();
        var sec = document.getElementById("chat-demo");
        if (sec) sec.scrollIntoView({ behavior: "smooth" });
      });
    }

    bindRestart(document.getElementById("lfd-chat-restart"));
    bindRestart(restartInlineBtn);

    var adminLink = document.getElementById("lfd-after-admin");
    if (adminLink) {
      adminLink.addEventListener("click", function (e) {
        var lang = window.__lfdLang || "en";
        var briefEn = buildAttorneyBrief(collected, "en");
        var briefZh = buildAttorneyBrief(collected, "zh");
        saveChatPayload(collected, transcript, briefEn, briefZh);
      });
    }

    resetDemo();

    var langBtn = document.getElementById("lfdLangToggle");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        var next = window.__lfdLang === "zh" ? "en" : "zh";
        applyLanguage(next);
        if (briefBody && briefBody.textContent && phase === "generated") {
          briefBody.textContent = next === "zh" ? buildAttorneyBrief(collected, "zh") : buildAttorneyBrief(collected, "en");
        }
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

  function renderBriefSections(container, text) {
    if (!container) return;
    if (!text || !String(text).trim()) {
      container.textContent = "—";
      return;
    }
    var chunks = text.split(/\n(?=═══ )/);
    container.innerHTML = "";
    chunks.forEach(function (chunk) {
      var c = chunk.trim();
      if (!c) return;
      var m = c.match(/^═══\s*(.+?)\s*═══\s*([\s\S]*)$/);
      var title = m ? m[1].trim() : "";
      var body = m ? m[2].trim() : c;
      var card = document.createElement("div");
      card.className = "lfd-brief-card";
      var h = document.createElement("h4");
      h.className = "lfd-brief-card__title";
      h.textContent = title || "—";
      var p = document.createElement("p");
      p.className = "lfd-brief-card__body";
      p.style.whiteSpace = "pre-wrap";
      p.textContent = body;
      card.appendChild(h);
      card.appendChild(p);
      container.appendChild(card);
    });
  }

  function formatLeadDocuments(lead, lang) {
    var parts = [];
    if (lead.intakeDocumentsNote && String(lead.intakeDocumentsNote).trim()) parts.push(lead.intakeDocumentsNote);
    if (lead.documents && lead.documents.length) parts.push(docLabelsFromKeys(lang, lead.documents));
    return parts.length ? parts.join("\n\n") : "";
  }

  function buildMockLeads() {
    return [
      {
        id: "mock-1",
        name: "Zhang Wei",
        preferredLanguage: "chinese",
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
        fromChat: false,
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
        fromChat: false,
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
        fromChat: false,
      },
    ];
  }

  function initAdminPage() {
    var root = document.getElementById("lfd-admin-root");
    if (!root) return;

    var leads = buildMockLeads();
    var sub = loadSubmission();
    if (sub && sub.form) {
      leads.unshift(submissionToLead(sub));
    }

    var qsetArea = "immigration";

    function sampleLeadForEmail() {
      var chatLead = null;
      for (var i = 0; i < leads.length; i++) {
        if (leads[i].fromChat) {
          chatLead = leads[i];
          break;
        }
      }
      return chatLead || leads[0] || null;
    }

    function renderEmailPreview() {
      var lang = window.__lfdLang || "en";
      var isZh = lang === "zh";
      var subjEl = document.getElementById("lfd-email-subject");
      var bodyEl = document.getElementById("lfd-email-body");
      if (!subjEl || !bodyEl) return;
      var sl = sampleLeadForEmail();
      var area = sl && sl.serviceArea ? mapKey(lang, "form.ar.", sl.serviceArea) : isZh ? "移民" : "Immigration";
      var urg = sl && sl.urgency ? mapKey(lang, "form.ug.", sl.urgency) : isZh ? "高" : "High";
      var pref =
        sl && sl.preferredLanguage
          ? mapKey(lang, "form.lang.", sl.preferredLanguage)
          : isZh
            ? "中文"
            : "Chinese";
      subjEl.textContent = t(lang, "admin.emailSubj").replace(/\{area\}/g, area).replace(/\{urgency\}/g, urg);
      var lines = [
        t(lang, "admin.emailBodyIntro"),
        "",
        (isZh ? "法律服务领域：" : "Practice Area: ") + area,
        (isZh ? "紧急程度：" : "Urgency: ") + urg,
        (isZh ? "偏好语言：" : "Preferred Language: ") + pref,
        "",
        t(lang, "admin.emailFooter"),
        "[" + t(lang, "admin.emailOpen") + "]",
      ];
      bodyEl.textContent = lines.join("\n");
    }

    function bindQuestionSetTabs() {
      var tabs = document.getElementById("lfd-qset-tabs");
      if (!tabs || tabs.getAttribute("data-bound") === "1") return;
      tabs.setAttribute("data-bound", "1");
      var areas = ["immigration", "family", "realestate", "business", "injury", "estate"];
      areas.forEach(function (area) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "lfd-qset-tab" + (area === qsetArea ? " is-active" : "");
        b.setAttribute("data-area", area);
        b.addEventListener("click", function () {
          qsetArea = area;
          tabs.querySelectorAll(".lfd-qset-tab").forEach(function (x) {
            x.classList.toggle("is-active", x.getAttribute("data-area") === area);
          });
          renderQsetPanel();
        });
        tabs.appendChild(b);
      });
    }

    function renderQsetPanel() {
      var lang = window.__lfdLang || "en";
      var area = qsetArea;
      var tabs = document.getElementById("lfd-qset-tabs");
      if (tabs) {
        tabs.querySelectorAll(".lfd-qset-tab").forEach(function (b) {
          var a = b.getAttribute("data-area");
          b.textContent = mapKey(lang, "form.ar.", a);
        });
      }
      var pq = document.getElementById("lfd-qset-q");
      var pd = document.getElementById("lfd-qset-d");
      var pl = document.getElementById("lfd-qset-l");
      if (pq) pq.textContent = t(lang, "qs." + area + ".q");
      if (pd) pd.textContent = t(lang, "qs." + area + ".d");
      if (pl) pl.textContent = t(lang, "qs." + area + ".l");
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
        btn.className = "lfd-lead-card" + (idx === 0 ? " is-active" : "") + (lead.fromChat ? " lfd-lead-card--chat" : "");
        btn.dataset.idx = String(idx);
        var badges =
          (lead.fromChat
            ? '<span class="lfd-badge lfd-badge--chat">' + t(lang, "lead.badgeChat") + "</span> "
            : "") + '<span class="lfd-badge lfd-badge--status"></span>';
        btn.innerHTML =
          '<p class="lfd-lead-card__name"></p><p class="lfd-lead-card__meta"></p><div class="lfd-lead-card__badges">' +
          badges +
          '</div><p class="lfd-lead-card__preview"></p>';
        btn.querySelector(".lfd-lead-card__name").textContent = leadDisplayName(lead, lang);
        btn.querySelector(".lfd-lead-card__meta").textContent =
          mapKey(lang, "form.ar.", lead.serviceArea) + " · " + mapKey(lang, "form.ug.", lead.urgency);
        btn.querySelector(".lfd-badge--status").textContent = statusLabel(lang, lead.status);
        btn.querySelector(".lfd-lead-card__preview").textContent = leadSummaryText(lead, lang).split("\n")[0];
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
        (lang === "zh" ? "姓名" : "Name") +
        ": " +
        leadDisplayName(lead, lang) +
        (lead.preferredLanguage
          ? "\n" +
            (lang === "zh" ? "偏好语言" : "Preferred language") +
            ": " +
            mapKey(lang, "form.lang.", lead.preferredLanguage)
          : "");
      document.getElementById("lfd-p-contact").textContent =
        mapKey(lang, "form.cm.", lead.contactMethod) + (lead.contactDetail ? "\n" + lead.contactDetail : "");
      document.getElementById("lfd-p-area").textContent = mapKey(lang, "form.ar.", lead.serviceArea);
      document.getElementById("lfd-p-urgency").textContent = mapKey(lang, "form.ug.", lead.urgency);
      var briefEl = document.getElementById("lfd-p-ai-brief");
      if (briefEl) renderBriefSections(briefEl, leadSummaryText(lead, lang));
      document.getElementById("lfd-p-facts").textContent = lead.situation || "—";
      document.getElementById("lfd-p-transcript").textContent =
        lead.fromChat && lead.transcript
          ? transcriptPreview(lead.transcript, lang, 10)
          : lang === "zh"
            ? "（演示）无对话记录。"
            : "(Demo) No chat transcript.";
      document.getElementById("lfd-p-dates").textContent = lead.importantDates || "—";
      var docsComb = formatLeadDocuments(lead, lang);
      document.getElementById("lfd-p-docs").textContent = docsComb || "—";
      document.getElementById("lfd-p-missing").textContent = leadMissingText(lead, lang);
      document.getElementById("lfd-p-rec").textContent = leadRecText(lead, lang);
      var fuEl = document.getElementById("lfd-p-followup");
      if (fuEl) {
        fuEl.textContent =
          lead.fromChat && lead.extraAnswers && lead.extraAnswers.length
            ? buildFollowupSummary({ serviceArea: lead.serviceArea, extraAnswers: lead.extraAnswers }, lang)
            : "—";
      }
      var addEl = document.getElementById("lfd-p-addclient");
      if (addEl) {
        addEl.textContent =
          lead.additionalNotes && String(lead.additionalNotes).trim() ? lead.additionalNotes : "—";
      }
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
      renderEmailPreview();
      renderQsetPanel();
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

    bindQuestionSetTabs();
  }

  function boot() {
    initIntakePage();
    initAdminPage();
    applyLanguage(getLang());
    applyStripePaymentLinksDemo();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
