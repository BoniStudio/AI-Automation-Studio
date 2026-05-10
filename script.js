/**
 * BoniStudio — static site i18n + light interactions
 * All user-facing copy lives in I18N below.
 */

(function () {
  "use strict";

  var STORAGE_KEY = "bonistudio_lang";
  var DEFAULT_LANG = "en";

  /** Stripe Payment Links only — no secret keys, no API. Update URLs here if links rotate. */
  var STRIPE_LINKS = {
    websiteDeposit: "https://buy.stripe.com/14A4gs5WB1Y2cRp4F6bAs02",
    aiIntakeDeposit: "https://buy.stripe.com/9B68wI84JgSWdVtdbCbAs01",
    completeSystemDeposit: "https://buy.stripe.com/aFa6oA70FbyC9Fdb3ubAs00",
  };

  var I18N = {
    en: {
      "meta.siteTitle": "BoniStudio — AI Automation Studio",
      "meta.siteDesc":
        "AI-powered websites, intake systems, and automation tools for modern businesses, creators, and professional service teams.",
      "meta.pricingTitle": "Pricing — BoniStudio",
      "meta.pricingDesc":
        "Starting prices and deposits for website modernization, AI intake systems, and complete firm automation. Stripe Payment Links.",
      "meta.contactTitle": "Contact — BoniStudio",
      "meta.contactDesc":
        "Contact BoniStudio for website modernization, AI intake systems, and automation for professional service businesses.",
      "meta.privacyTitle": "Privacy Policy — BoniStudio",
      "meta.privacyDesc": "How BoniStudio handles information on this static website and demos.",
      "meta.termsTitle": "Terms of Service — BoniStudio",
      "meta.termsDesc": "Terms of service for BoniStudio project work and use of this website.",

      "nav.brand": "BoniStudio",
      "nav.tagline": "AI Automation Studio",
      "nav.services": "Services",
      "nav.demo": "Demo",
      "nav.pricing": "Pricing",
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
      "systems.law.f1": "AI chat intake assistant",
      "systems.law.f2": "Structured attorney brief",
      "systems.law.f3": "Secure dashboard preview",
      "systems.law.f4": "Practice area question sets",
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
      "footer.tagline":
        "Modern websites and AI-assisted intake systems for professional service businesses.",
      "footer.location": "Seattle, WA",
      "footer.email": "bonistudio.core@gmail.com",
      "footer.navTitle": "Navigate",
      "footer.linkHome": "Home",
      "footer.linkPricing": "Pricing",
      "footer.linkContact": "Contact",
      "footer.linkPrivacy": "Privacy Policy",
      "footer.linkTerms": "Terms of Service",
      "footer.linkDemo": "Law Firm Demo",

      "trust.title": "Built with privacy in mind",
      "trust.lead":
        "The demo does not collect real client information. A production version would use authenticated access, secure database storage, controlled document access, and email alerts that avoid exposing sensitive details.",
      "trust.b1": "No legal advice from AI",
      "trust.b2": "Attorney review required",
      "trust.b3": "Secure dashboard model",
      "trust.b4": "Stripe handles payments",
      "trust.b5": "Demo data stays local in browser",

      "home.pricingTeaser.title": "Simple project-based pricing",
      "home.pricingTeaser.lead":
        "Starting project totals and deposits — see pricing for full scope and what is included.",
      "home.pricingTeaser.c1t": "Website Modernization",
      "home.pricingTeaser.c1p": "Starting at $1,000",
      "home.pricingTeaser.c1d": "$500 deposit to start",
      "home.pricingTeaser.c2t": "AI Intake System",
      "home.pricingTeaser.c2p": "Starting at $2,000",
      "home.pricingTeaser.c2d": "$800 deposit to start",
      "home.pricingTeaser.c3t": "Complete Firm Automation",
      "home.pricingTeaser.c3p": "Starting at $3,500",
      "home.pricingTeaser.c3d": "$1,500 deposit to start",
      "home.pricingTeaser.payDeposit": "Pay Deposit",
      "home.pricingTeaser.cta": "View Pricing",

      "pricing.title": "Pricing",
      "pricing.subtitle":
        "Starting prices show typical project totals; deposits reserve your place and kick off discovery. Final scope and balance are confirmed after we review your site and workflow.",
      "pricing.paymentNote":
        "Deposits secure project kickoff and are credited toward the final project total. After reviewing your website and workflow, we provide a final project scope and remaining balance invoice through Stripe.",
      "pricing.notIncluded": "Not included:",
      "pricing.flowTitle": "How payment works",
      "pricing.flow1": "Choose a package and pay the deposit",
      "pricing.flow2": "We review your current website and workflow",
      "pricing.flow3": "You receive a final scope and timeline",
      "pricing.flow4": "Remaining balance is paid before launch or delivery",
      "pricing.includes": "Includes:",
      "pricing.pay500": "Pay $500 Deposit",
      "pricing.pay800": "Pay $800 Deposit",
      "pricing.pay1500": "Pay $1,500 Deposit",
      "pricing.maintenance.title": "Monthly Maintenance",
      "pricing.maintenance.price": "$99–$299 / month",
      "pricing.maintenance.cta": "Request Monthly Plan",
      "pricing.p1.title": "Website Modernization",
      "pricing.p1.start": "Starting at $1,000",
      "pricing.p1.deposit": "$500 deposit required to start",
      "pricing.p1.i1": "Modern website redesign",
      "pricing.p1.i2": "Mobile responsive layout",
      "pricing.p1.i3": "Practice area pages",
      "pricing.p1.i4": "Attorney profile section",
      "pricing.p1.i5": "Contact / consultation CTA",
      "pricing.p1.i6": "Basic SEO setup",
      "pricing.p1.i7": "Launch support",
      "pricing.p1.n1": "AI intake system",
      "pricing.p1.n2": "Secure dashboard",
      "pricing.p1.n3": "Custom backend automation",
      "pricing.p2.title": "AI Intake System",
      "pricing.p2.start": "Starting at $2,000",
      "pricing.p2.deposit": "$800 deposit required to start",
      "pricing.p2.i1": "AI chat intake assistant",
      "pricing.p2.i2": "Structured attorney brief",
      "pricing.p2.i3": "Practice area question sets",
      "pricing.p2.i4": "Email alert workflow",
      "pricing.p2.i5": "Secure dashboard preview",
      "pricing.p2.i6": "Document checklist",
      "pricing.p2.i7": "Bilingual summaries",
      "pricing.p2.n1": "Full website redesign",
      "pricing.p2.n2": "Advanced CRM integration",
      "pricing.p2.n3": "Custom multi-user backend",
      "pricing.p3.title": "Complete Firm Automation System",
      "pricing.p3.start": "Starting at $3,500",
      "pricing.p3.deposit": "$1,500 deposit required to start",
      "pricing.p3.i1": "Full website modernization",
      "pricing.p3.i2": "AI intake assistant",
      "pricing.p3.i3": "Attorney dashboard preview",
      "pricing.p3.i4": "Email notification workflow",
      "pricing.p3.i5": "Practice area customization",
      "pricing.p3.i6": "Intake flow customization",
      "pricing.p3.i7": "Launch support",
      "pricing.p3.i8": "Optional monthly maintenance",
      "pricing.maint.i1": "Small content updates",
      "pricing.maint.i2": "Intake prompt adjustments",
      "pricing.maint.i3": "Question set updates",
      "pricing.maint.i4": "Basic monitoring",
      "pricing.maint.i5": "Support",

      "contactPage.title": "Contact BoniStudio",
      "contactPage.subtitle":
        "Send your current website, business workflow, or project idea. We will recommend whether you need website modernization, an AI intake system, or complete firm automation.",
      "contactPage.location": "Seattle, WA",
      "contactPage.emailUs": "Email Us",
      "contactPage.viewPricing": "View Pricing",
      "contactPage.viewDemo": "View Law Firm Demo",
      "contactPage.formTitle": "Project inquiry",
      "contactPage.formHint": "Submit opens your email app with a draft — no data is sent to a server.",
      "contactPage.name": "Name",
      "contactPage.email": "Email",
      "contactPage.company": "Company",
      "contactPage.website": "Website",
      "contactPage.package": "Package",
      "contactPage.typeHint": "Select a package",
      "contactPage.message": "Message",
      "contactPage.submit": "Send via email",
      "contactPage.opt.web": "Website Modernization",
      "contactPage.opt.ai": "AI Intake System",
      "contactPage.opt.complete": "Complete Firm Automation",
      "contactPage.opt.other": "Other",
      "contactPage.readyTitle": "Ready to start?",
      "contactPage.payWebsiteDeposit": "Pay Website Deposit",
      "contactPage.payAiDeposit": "Pay AI Intake Deposit",
      "contactPage.payCompleteDeposit": "Pay Complete System Deposit",

      "privacy.title": "Privacy Policy",
      "privacy.updated": "Last updated: May 2026",
      "privacy.s1h": "1. Information we collect",
      "privacy.s1p":
        "When you email us, we receive the information you choose to send (such as your name, email address, and message). This website does not require an account to browse.",
      "privacy.s2h": "2. How we use information",
      "privacy.s2p":
        "We use contact information to respond to inquiries, provide estimates, and deliver agreed services. We do not sell your personal information.",
      "privacy.demoBan":
        "This website demo is not intended for submitting real sensitive legal, financial, medical, or personal information.",
      "privacy.s3h": "3. Demo limitations",
      "privacy.s3p":
        "This website and demo do not collect sensitive client information for production use. The demo may store temporary example data in your browser localStorage only for demonstration purposes.",
      "privacy.s4h": "4. No legal advice",
      "privacy.s4p":
        "Content on this site describes workflow tools and is not legal, financial, medical, or other professional advice.",
      "privacy.s5h": "5. Payment processing through Stripe",
      "privacy.s5p":
        "Payments are processed by Stripe. BoniStudio does not store credit card information. Stripe’s terms and privacy policy apply to payment transactions.",
      "privacy.s6h": "6. Third-party services",
      "privacy.s6p":
        "We may use third-party services (for example, email or payment links). Those services have their own policies governing data they process.",
      "privacy.s7h": "7. Data security",
      "privacy.s7p":
        "We follow reasonable practices to protect information shared with us. No method of transmission over the Internet is completely secure.",
      "privacy.s8h": "8. Contact",
      "privacy.s8p": "Questions about this policy: bonistudio.core@gmail.com",

      "terms.title": "Terms of Service",
      "terms.updated": "Last updated: May 2026",
      "terms.s1h": "1. Services",
      "terms.s1p":
        "BoniStudio provides creative and technical services such as website work, AI-assisted intake demos, and related automation consulting, as described in project proposals or statements of work.",
      "terms.s2h": "2. Project estimates",
      "terms.s2p":
        "Estimates and timelines are planning tools and may change if scope, dependencies, or requirements change. Confirmed scope should be documented in writing.",
      "terms.s3h": "3. Payments",
      "terms.s3p":
        "Payments may be processed through Stripe Payment Links or other agreed methods. You agree to pay fees described in your invoice or agreement.",
      "terms.s4h": "4. Deposits and final payment",
      "terms.s4p":
        "Unless otherwise agreed, projects may begin with a deposit. Final files, launch, or production deployment may be withheld until final payment is received.",
      "terms.s5h": "5. Client responsibilities",
      "terms.s5p":
        "You agree to provide timely feedback, lawful content, and any assets or access reasonably needed to complete the work.",
      "terms.s6h": "6. Demo limitations",
      "terms.s6p":
        "Demonstrations illustrate workflows and are not production systems unless separately contracted. Demo data may be stored locally in your browser for illustration.",
      "terms.s7h": "7. No legal advice",
      "terms.s7p":
        "AI-assisted features are for organizing information only and do not provide legal advice or professional judgment.",
      "terms.s8h": "8. Intellectual property",
      "terms.s8p":
        "Unless otherwise agreed in writing, deliverables and license terms will be defined in your project agreement. Third-party materials may remain subject to their licensors.",
      "terms.s9h": "9. Limitation of liability",
      "terms.s9p":
        "To the fullest extent permitted by law, BoniStudio is not liable for indirect or consequential damages. Total liability for a project is limited to fees paid for that project unless otherwise agreed.",
      "terms.s10h": "10. Contact",
      "terms.s10p": "Questions about these terms: bonistudio.core@gmail.com",

      _metaTitle: "BoniStudio — AI Automation Studio",
      _metaDesc:
        "AI-powered websites, intake systems, and automation tools for modern businesses, creators, and professional service teams.",
    },

    zh: {
      "meta.siteTitle": "BoniStudio — AI 自动化工作室",
      "meta.siteDesc":
        "面向现代企业、创作者与专业团队的 AI 官网、咨询收集系统与自动化工具。",
      "meta.pricingTitle": "定价方案 — BoniStudio",
      "meta.pricingDesc":
        "官网现代化、AI 咨询接待系统与完整律所自动化方案的起价与定金说明。通过 Stripe Payment Links 支付定金。",
      "meta.contactTitle": "联系我们 — BoniStudio",
      "meta.contactDesc":
        "联系 BoniStudio，获取官网现代化、AI 咨询收集系统与自动化方案。",
      "meta.privacyTitle": "隐私政策 — BoniStudio",
      "meta.privacyDesc": "BoniStudio 静态网站与 Demo 的信息处理方式说明。",
      "meta.termsTitle": "服务条款 — BoniStudio",
      "meta.termsDesc": "BoniStudio 项目服务与本网站使用条款。",

      "nav.brand": "BoniStudio",
      "nav.tagline": "AI Automation Studio",
      "nav.services": "服务",
      "nav.demo": "Demo",
      "nav.pricing": "定价",
      "nav.contact": "联系我们",
      "nav.bookDemo": "预约演示",

      "hero.eyebrow": "AI 自动化工作室",
      "hero.title": "为现代商业打造 AI 系统。",
      "hero.subtitle":
        "我们为小型团队、专业服务机构和创作者打造 AI 网站、咨询收集系统与自动化工具，帮助你获取客户、减少重复沟通，并更快上线。",
      "hero.ctaPrimary": "预约演示",
      "hero.ctaSecondary": "查看示例系统",
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
      "systems.law.f1": "AI 聊天式咨询助手",
      "systems.law.f2": "结构化律师简报",
      "systems.law.f3": "安全后台预览",
      "systems.law.f4": "法律领域问题集",
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
      "systems.viewDemo": "查看 Demo",

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
      "footer.tagline":
        "为专业服务机构打造现代化网站与 AI 辅助咨询接待系统。",
      "footer.location": "西雅图，华盛顿州",
      "footer.email": "bonistudio.core@gmail.com",
      "footer.navTitle": "导航",
      "footer.linkHome": "首页",
      "footer.linkPricing": "定价",
      "footer.linkContact": "联系我们",
      "footer.linkPrivacy": "隐私政策",
      "footer.linkTerms": "服务条款",
      "footer.linkDemo": "律所 Demo",

      "trust.title": "以隐私与安全为前提设计",
      "trust.lead":
        "当前 Demo 不用于收集真实客户资料。真实版本会使用登录验证、安全数据库存储、受控文件访问，以及避免暴露敏感细节的邮件提醒。",
      "trust.b1": "AI 不提供法律建议",
      "trust.b2": "需要律师审阅",
      "trust.b3": "安全后台模型",
      "trust.b4": "付款由 Stripe 处理",
      "trust.b5": "演示数据仅保存在浏览器本地",

      "home.pricingTeaser.title": "清晰的项目制价格",
      "home.pricingTeaser.lead":
        "项目总价与定金起步说明 — 详见定价页了解包含与不包含项。",
      "home.pricingTeaser.c1t": "官网现代化升级",
      "home.pricingTeaser.c1p": "起价 $1,000",
      "home.pricingTeaser.c1d": "启动项目需支付 $500 定金",
      "home.pricingTeaser.c2t": "AI 咨询接待系统",
      "home.pricingTeaser.c2p": "起价 $2,000",
      "home.pricingTeaser.c2d": "启动项目需支付 $800 定金",
      "home.pricingTeaser.c3t": "完整律所自动化系统",
      "home.pricingTeaser.c3p": "起价 $3,500",
      "home.pricingTeaser.c3d": "启动项目需支付 $1,500 定金",
      "home.pricingTeaser.payDeposit": "支付定金",
      "home.pricingTeaser.cta": "查看定价",

      "pricing.title": "定价方案",
      "pricing.subtitle":
        "起价为常见项目总价区间；定金用于预留档期并启动沟通。我们会在查看你的网站与业务流程后确认最终范围与尾款。",
      "pricing.paymentNote":
        "定金用于启动项目，并会计入最终项目总价。我们会在查看你的网站与业务流程后，提供最终项目范围与剩余尾款发票。",
      "pricing.notIncluded": "不包含：",
      "pricing.flowTitle": "付款流程",
      "pricing.flow1": "选择方案并支付定金",
      "pricing.flow2": "我们查看你当前的网站与业务流程",
      "pricing.flow3": "你会收到最终项目范围与时间安排",
      "pricing.flow4": "尾款在上线或交付前支付",
      "pricing.includes": "包含：",
      "pricing.pay500": "支付 $500 定金",
      "pricing.pay800": "支付 $800 定金",
      "pricing.pay1500": "支付 $1,500 定金",
      "pricing.maintenance.title": "月度维护",
      "pricing.maintenance.price": "$99–$299 / 月",
      "pricing.maintenance.cta": "咨询月度方案",
      "pricing.p1.title": "官网现代化升级",
      "pricing.p1.start": "起价 $1,000",
      "pricing.p1.deposit": "启动项目需支付 $500 定金",
      "pricing.p1.i1": "现代化官网改版",
      "pricing.p1.i2": "移动端适配布局",
      "pricing.p1.i3": "法律服务领域页面",
      "pricing.p1.i4": "律师介绍区域",
      "pricing.p1.i5": "联系 / 咨询入口",
      "pricing.p1.i6": "基础 SEO 设置",
      "pricing.p1.i7": "上线支持",
      "pricing.p1.n1": "AI 咨询接待系统",
      "pricing.p1.n2": "安全后台",
      "pricing.p1.n3": "自定义后端自动化",
      "pricing.p2.title": "AI 咨询接待系统",
      "pricing.p2.start": "起价 $2,000",
      "pricing.p2.deposit": "启动项目需支付 $800 定金",
      "pricing.p2.i1": "AI 聊天咨询接待助手",
      "pricing.p2.i2": "结构化律师简报",
      "pricing.p2.i3": "法律领域问题集",
      "pricing.p2.i4": "邮件提醒流程",
      "pricing.p2.i5": "安全后台预览",
      "pricing.p2.i6": "文件清单",
      "pricing.p2.i7": "中英双语摘要",
      "pricing.p2.n1": "完整官网改版",
      "pricing.p2.n2": "高级 CRM 集成",
      "pricing.p2.n3": "自定义多用户后端",
      "pricing.p3.title": "完整律所自动化系统",
      "pricing.p3.start": "起价 $3,500",
      "pricing.p3.deposit": "启动项目需支付 $1,500 定金",
      "pricing.p3.i1": "完整官网现代化升级",
      "pricing.p3.i2": "AI 咨询接待助手",
      "pricing.p3.i3": "律师后台预览",
      "pricing.p3.i4": "邮件通知流程",
      "pricing.p3.i5": "法律服务领域定制",
      "pricing.p3.i6": "咨询流程定制",
      "pricing.p3.i7": "上线支持",
      "pricing.p3.i8": "可选月度维护",
      "pricing.maint.i1": "小型内容更新",
      "pricing.maint.i2": "咨询提示词调整",
      "pricing.maint.i3": "问题集更新",
      "pricing.maint.i4": "基础监控",
      "pricing.maint.i5": "支持服务",

      "contactPage.title": "联系 BoniStudio",
      "contactPage.subtitle":
        "发送你当前的网站、业务流程或项目想法。我们会判断你更适合官网现代化、AI 咨询接待系统，还是完整律所自动化方案。",
      "contactPage.location": "西雅图，华盛顿州",
      "contactPage.emailUs": "发送邮件",
      "contactPage.viewPricing": "查看定价",
      "contactPage.viewDemo": "查看律所 Demo",
      "contactPage.formTitle": "项目咨询",
      "contactPage.formHint": "提交后将打开邮件客户端并填入草稿 — 无服务器接收数据。",
      "contactPage.name": "姓名",
      "contactPage.email": "邮箱",
      "contactPage.company": "公司",
      "contactPage.website": "网站",
      "contactPage.package": "方案",
      "contactPage.typeHint": "请选择方案",
      "contactPage.message": "留言",
      "contactPage.submit": "通过邮件发送",
      "contactPage.opt.web": "官网现代化升级",
      "contactPage.opt.ai": "AI 咨询接待系统",
      "contactPage.opt.complete": "完整律所自动化系统",
      "contactPage.opt.other": "其他",
      "contactPage.readyTitle": "准备开始？",
      "contactPage.payWebsiteDeposit": "支付官网定金",
      "contactPage.payAiDeposit": "支付 AI 咨询定金",
      "contactPage.payCompleteDeposit": "支付完整系统定金",

      "privacy.title": "隐私政策",
      "privacy.updated": "最近更新：2026 年 5 月",
      "privacy.s1h": "1. 我们收集的信息",
      "privacy.s1p":
        "当你发送邮件时，我们会收到你主动提供的信息（如姓名、邮箱与留言内容）。浏览本网站无需注册账户。",
      "privacy.s2h": "2. 我们如何使用信息",
      "privacy.s2p":
        "我们使用联系信息用于回复咨询、提供报价与履行约定服务。我们不会出售你的个人信息。",
      "privacy.demoBan":
        "本网站 Demo 不应用于提交真实敏感法律、财务、医疗或个人信息。",
      "privacy.s3h": "3. Demo 说明",
      "privacy.s3p":
        "本网站与 Demo 不用于收集真实敏感客户资料。Demo 可能仅在你的浏览器 localStorage 中临时保存示例数据，用于演示。",
      "privacy.s4h": "4. 不提供法律等专业建议",
      "privacy.s4p":
        "本站内容描述工作流工具，不构成法律、财务、医疗或其他专业建议。",
      "privacy.s5h": "5. 通过 Stripe 处理付款",
      "privacy.s5p":
        "付款由 Stripe 处理。BoniStudio 不存储信用卡信息。支付环节适用 Stripe 的条款与隐私政策。",
      "privacy.s6h": "6. 第三方服务",
      "privacy.s6p":
        "我们可能使用第三方服务（例如邮件或支付链接），相关服务商对其处理的数据适用各自政策。",
      "privacy.s7h": "7. 数据安全",
      "privacy.s7p":
        "我们采取合理措施保护你分享的信息，但互联网传输无法保证绝对安全。",
      "privacy.s8h": "8. 联系方式",
      "privacy.s8p": "如对本政策有疑问：bonistudio.core@gmail.com",

      "terms.title": "服务条款",
      "terms.updated": "最近更新：2026 年 5 月",
      "terms.s1h": "1. 服务范围",
      "terms.s1p":
        "BoniStudio 提供网站制作、AI 辅助咨询 Demo 与相关自动化咨询等创意与技术服务，具体以项目提案或工作说明书为准。",
      "terms.s2h": "2. 项目估算",
      "terms.s2p":
        "报价与周期为规划参考，若范围、依赖或需求变化可能调整。确认范围建议以书面约定为准。",
      "terms.s3h": "3. 付款",
      "terms.s3p":
        "付款可通过 Stripe Payment Links 或其他约定方式进行。你同意按发票或协议支付费用。",
      "terms.s4h": "4. 定金与尾款",
      "terms.s4p":
        "除非另有约定，项目可由定金启动。最终文件、上线或生产部署可在收到尾款后完成。",
      "terms.s5h": "5. 客户责任",
      "terms.s5p":
        "你应及时反馈、提供合法内容及完成工作所需的合理资料与访问权限。",
      "terms.s6h": "6. Demo 说明",
      "terms.s6p":
        "演示用于展示流程，除非另行签约，不构成生产系统。演示数据可仅保存在你的浏览器中用于说明。",
      "terms.s7h": "7. 不提供法律等专业建议",
      "terms.s7p":
        "AI 辅助功能仅用于整理信息，不提供法律建议或专业判断。",
      "terms.s8h": "8. 知识产权",
      "terms.s8p":
        "除非另行书面约定，交付物与许可范围以项目协议为准。第三方素材可能仍受其许可方约束。",
      "terms.s9h": "9. 责任限制",
      "terms.s9p":
        "在法律允许范围内，BoniStudio 不对间接或后果性损害承担责任；除非另有约定，单个项目的责任上限以该项目已付费用为限。",
      "terms.s10h": "10. 联系方式",
      "terms.s10p": "如对本条款有疑问：bonistudio.core@gmail.com",

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
    var titleFromData = false;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key || key.indexOf("_") === 0) return;
      var val = t(lang, key);
      if (typeof val !== "string") return;
      var tag = el.tagName;
      if (tag === "TITLE") {
        document.title = val;
        titleFromData = true;
        return;
      }
      if (tag === "META") {
        el.setAttribute("content", val);
        return;
      }
      el.textContent = val;
    });

    if (!titleFromData && d._metaTitle) document.title = d._metaTitle;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && !metaDesc.getAttribute("data-i18n") && d._metaDesc) {
      metaDesc.setAttribute("content", d._metaDesc);
    }

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(lang, key));
    });

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
      bookDemoLink.setAttribute("href", "contact.html");
    }

    setStoredLang(lang);
    window.__bonistudioLang = lang;
  }

  function isLiveStripeUrl(url) {
    return typeof url === "string" && /^https:\/\//i.test(url) && url.indexOf("PASTE_STRIPE") === -1;
  }

  function initStripePaymentLinks() {
    document.querySelectorAll("[data-stripe]").forEach(function (el) {
      var key = el.getAttribute("data-stripe");
      if (!key || !STRIPE_LINKS[key]) return;
      var url = STRIPE_LINKS[key];
      if (isLiveStripeUrl(url)) {
        el.setAttribute("href", url);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      } else {
        el.setAttribute("href", "#stripe-deposit");
        el.addEventListener("click", function (e) {
          e.preventDefault();
        });
      }
    });
  }

  function initContactFormMailto() {
    var form = document.getElementById("siteContactForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var lang = window.__bonistudioLang || DEFAULT_LANG;
      var get = function (name) {
        var field = form.querySelector('[name="' + name + '"]');
        return field ? String(field.value || "").trim() : "";
      };
      var name = get("name");
      var email = get("email");
      var company = get("company");
      var website = get("website");
      var typeSel = form.querySelector('[name="package"]');
      var pkgLabel = "";
      if (typeSel && typeSel.options && typeSel.selectedIndex >= 0) {
        pkgLabel = String(typeSel.options[typeSel.selectedIndex].textContent || "").trim();
      }
      var message = get("message");
      var subject =
        lang === "zh"
          ? "项目咨询 — " + (name || "BoniStudio")
          : "Project Inquiry — " + (name || "BoniStudio");
      var nl = lang === "zh" ? "\n" : "\n";
      var body =
        (lang === "zh" ? "姓名：" : "Name: ") +
        name +
        nl +
        (lang === "zh" ? "邮箱：" : "Email: ") +
        email +
        nl +
        (lang === "zh" ? "公司：" : "Company: ") +
        company +
        nl +
        (lang === "zh" ? "网站：" : "Website: ") +
        website +
        nl +
        (lang === "zh" ? "方案：" : "Package: ") +
        pkgLabel +
        nl +
        nl +
        (lang === "zh" ? "留言：" : "Message:") +
        nl +
        message;
      window.location.href =
        "mailto:bonistudio.core@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
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

    nav.querySelectorAll("a").forEach(function (a) {
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
  initStripePaymentLinks();
  initContactFormMailto();

  window.__BoniStudioStripeLinks = STRIPE_LINKS;
})();
