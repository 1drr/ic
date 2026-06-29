// =============================================================
// Intactic Innovations - Static Content Data
// সব স্ট্যাটিক ডাটা এখানে রাখা হয়েছে যাতে পেজ কম্পোনেন্ট
// শুধু UI রেন্ডারিং করে এবং ডাটা আলাদা থাকে।
// =============================================================

// =============================================================
// Hero Configuration — mirrors Betopia Group's hero layout:
// big mixed-weight headline, illustration stage, AI chat widget,
// and a row of ecosystem brand pills. Single, non-rotating panel.
// =============================================================
export const heroConfig = {
  pill: {
    icon: 'fa-solid fa-infinity',
    text: 'Intactic Ecosystem',
  },
  heading: {
    pre: 'Enterprise',
    highlight: 'Business Ecosystem',
    post: 'Built for Scalable Growth',
  },
  subheading:
    'We fuse deep tech with essential industries — providing the code behind modern products and the intelligence powering the vital needs of ambitious teams.',
  primaryCta: { label: 'Learn More', href: '#about' },
  secondaryCta: { label: 'Start a Project', href: '#contact' },
  metrics: [
    { num: '200+', label: 'Products Shipped' },
    { num: '98%', label: 'Client Satisfaction' },
    { num: '15+', label: 'Industries Served' },
  ],
  illustration: {
    // Static poster shown while the video buffers or for reduced-motion users
    poster:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=85',
    // Optimized, royalty-free, brand-relevant loop. Sources ordered by
    // size (mobile-first → desktop). Replace with a custom reel when ready.
    video: {
      mp4: 'https://cdn.coverr.co/videos/coverr-developer-working-on-code-7727/1080p.mp4',
      webm: 'https://cdn.coverr.co/videos/coverr-developer-working-on-code-7727/1080p.webm',
      // Lower-bitrate fallback for slow connections
      mp4Low: 'https://cdn.coverr.co/videos/coverr-developer-working-on-code-7727/720p.mp4',
    },
    caption: 'AI-powered product engineering',
  },
  chatWidget: {
    avatar:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80',
    name: 'Intactic AI',
    handle: 'Online',
    prompt: 'Welcome to Intactic AI. Ask me anything about our services.',
    cta: 'Ask Anything',
  },
};

export const trustLogos = [
  { icon: 'fa-brands fa-google', label: 'Google' },
  { icon: 'fa-brands fa-microsoft', label: 'Microsoft' },
  { icon: 'fa-brands fa-aws', label: 'AWS' },
  { icon: 'fa-brands fa-shopify', label: 'Shopify' },
  { icon: 'fa-brands fa-stripe', label: 'Stripe' },
  { icon: 'fa-solid fa-building-columns', label: 'IIITK' },
  { icon: 'fa-solid fa-landmark', label: 'GovTech' },
  { icon: 'fa-brands fa-docker', label: 'Docker' },
  { icon: 'fa-brands fa-github', label: 'GitHub' },
  { icon: 'fa-solid fa-cart-shopping', label: 'Shwapno' },
];

export const caseStudiesData = [
  {
    badge: 'PDF Toolkit',
    color: '#6C63FF',
    title: 'Pdfing Pro',
    logo: 'https://res.cloudinary.com/det1qnlrh/image/upload/v1782432829/bengaldesk_3_svpztz_rubzts.png',
    desc: 'Pdfing Pro is a free, browser-based PDF toolkit that puts complete document control in your hands — without ever asking you to upload a file. Built for privacy-first users, every tool runs locally inside your browser, meaning your documents stay on your device from start to finish.',
    longDesc: 'Whether you need to merge, split, compress, convert, watermark, redact, sign, or restructure PDFs, Pdfing Pro covers it all — across four core categories: Organize, Convert, Edit, and Security. With dozens of specialized tools available at zero cost and no account required, it\'s designed to be the only PDF utility you\'ll ever need.',
    link: '#contact',
    highlights: [
      { icon: 'fa-solid fa-shield-halved', label: '100% Client-Side Processing' },
      { icon: 'fa-solid fa-lock', label: 'Zero Uploads. Zero Tracking.' },
      { icon: 'fa-solid fa-toolbox', label: '100+ PDF Tools Available' },
      { icon: 'fa-solid fa-bolt', label: 'No Account Required' },
    ],
    stats: [
      { num: '100+', lbl: 'PDF Tools' },
      { num: '100%', lbl: 'Browser-Based' },
    ],
    img: 'https://res.cloudinary.com/det1qnlrh/image/upload/v1782432829/bengaldesk_3_svpztz_rubzts.png',
  },
  {
    badge: 'Hyperlocal App',
    color: '#E63B6F',
    title: 'The Chattala',
    logo: 'https://res.cloudinary.com/de759vbvh/image/upload/v1782453217/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6470356170333972362f696d6167652f75706c6f61642f76313737393734333133382f315f6d66733066662e706e67_g02o4y.png',
    desc: 'The Chattala is a comprehensive hyperlocal digital ecosystem designed specifically for the people, businesses, and vibrant community of Chittagong — bridging the gap between traditional local life and the digital future.',
    longDesc: 'A centralized hub simplifying how you interact with your city. Featuring a dedicated Hyperlocal Marketplace, community connectivity tools, and seamless modern web architecture — all built with a deep understanding of local needs.',
    link: '#contact',
    highlights: [
      { icon: 'fa-solid fa-store', label: 'Hyperlocal Marketplace' },
      { icon: 'fa-solid fa-people-group', label: 'Community Connectivity' },
      { icon: 'fa-solid fa-mobile-screen', label: 'Fast & Secure Platform' },
      { icon: 'fa-solid fa-location-dot', label: 'Chittagong-First Design' },
    ],
    stats: [
      { num: '1', lbl: 'City. Unified.' },
      { num: '∞', lbl: 'Local Connections' },
    ],
    img: 'https://res.cloudinary.com/de759vbvh/image/upload/v1782453217/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6470356170333972362f696d6167652f75706c6f61642f76313737393734333133382f315f6d66733066662e706e67_g02o4y.png',
  },
];

export const capabilitiesData = [
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Managed Services',
    desc: 'End-to-end support for your applications, infrastructure, and platforms—so you can focus on innovation.',
    tag: 'Operations',
    accent: '#6C63FF',
    highlights: ['24/7 Monitoring', 'SLA-backed', 'Auto-scaling'],
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'MVP Development',
    desc: 'Launch market-ready MVPs in 8–12 weeks. AI-accelerated builds with 40% faster iteration cycles.',
    tag: 'Fast Launch',
    accent: '#FBAF32',
    highlights: ['8–12 week delivery', 'Agile sprints', 'Investor-ready'],
  },
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'Technology Consulting',
    desc: 'Cut tech waste by 30% with our strategic audits. Align tools with business goals for maximum ROI.',
    tag: 'Strategy',
    accent: '#00C896',
    highlights: ['Architecture review', 'Cost optimization', 'Roadmapping'],
  },
  {
    icon: 'fa-solid fa-arrows-spin',
    title: 'Digital Transformation',
    desc: 'Modernize legacy systems with AI-driven automation. Achieve 50% operational efficiency gains.',
    tag: 'Modernization',
    accent: '#E63B6F',
    highlights: ['Legacy migration', 'Process automation', 'Cloud-native'],
  },
  {
    icon: 'fa-solid fa-brain',
    title: 'ML & AI Development',
    desc: 'Deploy custom neural models, optimize LLM token usage, and train conversational agents for deep analytics.',
    tag: 'AI/ML',
    accent: '#FF6B35',
    highlights: ['LLM fine-tuning', 'RAG pipelines', 'AI agents'],
  },
];

export const industriesData = [
  { icon: 'fa-solid fa-graduation-cap', label: 'EdTech', desc: 'LMS solutions built with Moodle: live classes, assessments, compliance & reporting to empower learners.' },
  { icon: 'fa-solid fa-cart-shopping', label: 'E-Commerce', desc: 'Transform your store with certified nopCommerce themes, plugins & custom apps for speed, UX & conversion.' },
  { icon: 'fa-solid fa-pills', label: 'Pharma', desc: 'Regulation-first pharma & healthcare software: compliant platforms supporting HCPs, education & analytics.' },
  { icon: 'fa-solid fa-user-tie', label: 'Professional Presence', desc: 'Bespoke web presence, personal branding & executive portfolios for consultants, leaders, and domain experts.' },
  { icon: 'fa-solid fa-house-chimney', label: 'Real Estate', desc: 'Custom property portals, IDX search systems & lead-generation tools for agencies and realtors.' },
  { icon: 'fa-solid fa-store', label: 'Retail', desc: 'Smart retail systems streamlining inventory, customer journeys & omnichannel sales for business growth.' },
  { icon: 'fa-solid fa-laptop-code', label: 'Software/ITES', desc: 'Cutting-edge custom software & IT-enabled solutions solving complex problems with innovation & agility.' },
  { icon: 'fa-solid fa-rocket', label: 'Start-Ups', desc: 'Lean, fast-moving digital builds for startups: MVPs, product-market fit & scalable tech from day one.' },
];

export const statsData = [
  { target: '5', suffix: '+', label: 'Years on service', icon: 'fa-solid fa-calendar-days' },
  { target: '100', suffix: '+', label: 'Projects running on internet', icon: 'fa-solid fa-globe' },
  { target: '4', suffix: '', label: 'Countries served', icon: 'fa-solid fa-earth-americas' },
  { target: '99', suffix: '%', label: 'Clients satisfaction', icon: 'fa-solid fa-face-smile' },
];

export const aiCardsData = [
  { icon: 'fa-solid fa-microchip', label: 'LLMs & Generative AI', sub: 'OpenAI, Claude, LLaMA' },
  { icon: 'fa-solid fa-diagram-project', label: 'LangChain & LlamaIndex', sub: 'RAG Pipelines' },
  { icon: 'fa-brands fa-python', label: 'Python ML Stack', sub: 'TensorFlow, PyTorch' },
  { icon: 'fa-solid fa-cloud', label: 'Cloud AI Services', sub: 'AWS SageMaker, GCP Vertex' },
  { icon: 'fa-solid fa-database', label: 'Vector Databases', sub: 'Pinecone, Chroma' },
  { icon: 'fa-solid fa-shield-halved', label: 'AI Safety & Ethics', sub: 'Responsible AI' },
];

export const aiFeaturesData = [
  { icon: 'fa-solid fa-robot', title: 'Conversational AI Agents', desc: 'Custom chatbots and voice assistants powered by GPT-4, Claude, and fine-tuned domain models.' },
  { icon: 'fa-solid fa-chart-line', title: 'Predictive Analytics', desc: 'ML pipelines that extract insights from historical data to drive business decisions in real-time.' },
  { icon: 'fa-solid fa-brain', title: 'Neural Network Solutions', desc: 'Deep learning models for image recognition, NLP, fraud detection, and recommendation systems.' },
];

export const techStackData = {
  'front-end': [
    { icon: 'fa-brands fa-react', label: 'React' },
    { icon: 'fa-brands fa-angular', label: 'Angular' },
    { icon: 'fa-brands fa-vuejs', label: 'Vue.js' },
    { icon: 'fa-brands fa-js', label: 'TypeScript' },
    { icon: 'fa-brands fa-sass', label: 'Next.js' },
    { icon: 'fa-brands fa-css3-alt', label: 'Tailwind CSS' },
    { icon: 'fa-solid fa-layer-group', label: 'Svelte' },
    { icon: 'fa-solid fa-code', label: 'Nuxt.js' },
  ],
  'back-end': [
    { icon: 'fa-brands fa-node-js', label: 'Node.js' },
    { icon: 'fa-brands fa-java', label: 'Java / Spring' },
    { icon: 'fa-brands fa-python', label: 'Python / Django' },
    { icon: 'fa-brands fa-php', label: 'PHP / Laravel' },
    { icon: 'fa-brands fa-microsoft', label: '.NET Core' },
    { icon: 'fa-solid fa-g', label: 'Golang' },
    { icon: 'fa-solid fa-gem', label: 'Ruby on Rails' },
    { icon: 'fa-solid fa-server', label: 'GraphQL' },
  ],
  'cloud-devops': [
    { icon: 'fa-brands fa-aws', label: 'AWS' },
    { icon: 'fa-brands fa-docker', label: 'Docker' },
    { icon: 'fa-solid fa-circle-nodes', label: 'Kubernetes' },
    { icon: 'fa-solid fa-cloud', label: 'Google Cloud' },
    { icon: 'fa-brands fa-microsoft', label: 'Azure' },
    { icon: 'fa-solid fa-gears', label: 'Terraform' },
    { icon: 'fa-brands fa-github', label: 'GitHub Actions' },
    { icon: 'fa-solid fa-infinity', label: 'CI/CD Pipelines' },
  ],
  'mobile-databases': [
    { icon: 'fa-brands fa-apple', label: 'iOS / Swift' },
    { icon: 'fa-brands fa-android', label: 'Android / Kotlin' },
    { icon: 'fa-solid fa-mobile-screen', label: 'React Native' },
    { icon: 'fa-solid fa-feather', label: 'Flutter' },
    { icon: 'fa-solid fa-database', label: 'PostgreSQL' },
    { icon: 'fa-solid fa-leaf', label: 'MongoDB' },
    { icon: 'fa-solid fa-fire', label: 'Firebase' },
    { icon: 'fa-solid fa-bolt', label: 'Redis' },
  ],
  'platforms-qa': [
    { icon: 'fa-solid fa-graduation-cap', label: 'Moodle LMS' },
    { icon: 'fa-solid fa-cube', label: 'Adobe Experience' },
    { icon: 'fa-brands fa-microsoft', label: 'SharePoint' },
    { icon: 'fa-solid fa-vial', label: 'Selenium QA' },
    { icon: 'fa-solid fa-spider', label: 'Playwright' },
    { icon: 'fa-solid fa-square-check', label: 'Cypress' },
    { icon: 'fa-solid fa-bug', label: 'Postman API' },
    { icon: 'fa-solid fa-magnifying-glass', label: 'Jira' },
  ],
};

export const processStepsData = [
  { num: '01', title: 'Discover & Map', desc: '1-week rapid alignment process mapping resource allocations, tech stacks, and delivery schedules before kickoff.', tag: '1-Week Alignment' },
  { num: '02', title: 'Assemble & Embed', desc: 'Rapid deployment of matching engineer profiles. Onboarding is completed and teams start sprints within 14 days.', tag: '2-Week Onboarding' },
  { num: '03', title: 'Iterate & QA', desc: 'Continuous building cycles with strict automated testing scripts, static security scanners, and weekly deployment updates.', tag: '99.9% Defect-Free Goal' },
  { num: '04', title: 'Scale with Confidence', desc: 'Smooth transition pipelines, comprehensive knowledge databases, and 24/7 server SLA maintenance for sustainable expansion.', tag: 'Growth Autopiloted' },
];

export const recognitionsData = [
  { icon: 'fa-solid fa-award', label: 'Clutch Top Developer', sub: '2024 Global Leader' },
  { icon: 'fa-solid fa-shield-halved', label: 'ISO 27001 Certified', sub: 'Information Security' },
  { icon: 'fa-solid fa-star', label: 'Moodle Certified Partner', sub: 'Bangladesh #1' },
  { icon: 'fa-brands fa-microsoft', label: 'Microsoft Partner', sub: 'Gold Cloud Platform' },
  { icon: 'fa-brands fa-aws', label: 'AWS Partner', sub: 'Advanced Consulting' },
  { icon: 'fa-solid fa-certificate', label: 'CMMI Level 3', sub: 'Process Maturity' },
];
