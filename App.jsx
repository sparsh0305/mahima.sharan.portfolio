import React, { useState, useEffect, useMemo } from 'react';
import { 
  User, 
  Briefcase, 
  Award, 
  FolderRoot, 
  Code, 
  Mail, 
  Linkedin, 
  FileText, 
  ExternalLink, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ChevronRight, 
  Target, 
  BarChart3, 
  Globe, 
  TrendingUp,
  Cpu,
  ShieldCheck,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Theme & Configuration ---
const theme = {
  light: {
    bg: 'bg-rose-50',
    card: 'bg-white/40 border-rose-200/50 backdrop-blur-xl',
    text: 'text-rose-950',
    textMuted: 'text-rose-700/80',
    accent: 'from-pink-500 to-rose-600',
    accentText: 'text-pink-600',
    // Frosted Ice Nav specific
    nav: 'bg-white/40 border-white/60 backdrop-blur-[24px] shadow-[inset_0_0_20px_rgba(255,255,255,0.5),0_10px_30px_rgba(255,182,193,0.2)]',
    orb1: 'bg-pink-300/30',
    orb2: 'bg-rose-200/40',
  },
  dark: {
    bg: 'bg-zinc-950',
    card: 'bg-zinc-900/40 border-zinc-800/50 backdrop-blur-xl',
    text: 'text-zinc-100',
    textMuted: 'text-zinc-400',
    accent: 'from-pink-500 to-rose-500',
    accentText: 'text-pink-400',
    // Frosted Ice Nav specific
    nav: 'bg-white/10 border-white/20 backdrop-blur-[24px] shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_10px_40px_rgba(0,0,0,0.4)]',
    orb1: 'bg-pink-900/20',
    orb2: 'bg-rose-900/20',
  }
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const GlassCard = ({ children, className = "", hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      className={`rounded-3xl border p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const AnimatedBackground = ({ isDark }) => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] ${isDark ? 'bg-pink-900/20' : 'bg-pink-200/40'}`}
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -40, 0],
        y: [0, 60, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className={`absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full blur-[120px] ${isDark ? 'bg-rose-900/20' : 'bg-rose-200/40'}`}
    />
    <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(#ffffff0a_1px,transparent_1px)]' : 'bg-[radial-gradient(#0000000a_1px,transparent_1px)]'} [background-size:24px_24px] opacity-50`} />
  </div>
);

// --- Content Sections ---

const Hero = ({ isDark }) => {
  const t = isDark ? theme.dark : theme.light;
  return (
    <Section id="home" className="min-h-screen flex items-center pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${t.card} border-pink-500/20`}
          >
            <span className={`w-2 h-2 rounded-full animate-pulse bg-pink-500`} />
            <span className={`text-sm font-medium ${t.accentText}`}>IIM Bangalore × Amity University</span>
          </motion.div>
          <h1 className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 ${t.text}`}>
            Mahima <span className={`bg-clip-text text-transparent bg-gradient-to-r ${t.accent}`}>Sharan</span>
          </h1>
          <p className={`text-lg md:text-xl leading-relaxed mb-8 max-w-xl ${t.textMuted}`}>
            Dual-degree business student specializing in <span className="font-semibold text-pink-500">Business Analysis, ESG Research,</span> and <span className="font-semibold text-pink-500">Strategic Problem Solving</span>. Delivering data-driven impact for global brands.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl bg-gradient-to-r ${t.accent} text-white font-bold shadow-lg shadow-pink-500/20 flex items-center gap-2`}
            >
              <FileText size={20} /> View Resume
            </motion.button>
            <motion.a 
              href="https://linkedin.com/in/mahimasharan"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl border ${t.card} ${t.text} font-bold flex items-center gap-2 hover:bg-pink-500/10 transition-colors`}
            >
              <Linkedin size={20} /> LinkedIn
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Visual Placeholder for Portrait */}
            <div className={`absolute inset-0 rounded-[40px] bg-gradient-to-br ${t.accent} opacity-10 animate-pulse`} />
            <div className={`absolute inset-4 rounded-[32px] border-2 border-dashed ${isDark ? 'border-zinc-700' : 'border-rose-200'} flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm`}>
               <User size={64} className={`mb-4 ${t.accentText} opacity-50`} />
               <p className={`text-sm ${t.textMuted}`}>Premium Professional Portfolio</p>
               <div className={`mt-4 grid grid-cols-2 gap-4 w-full`}>
                 {[TrendingUp, BarChart3, Globe, ShieldCheck].map((Icon, i) => (
                   <motion.div 
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    className={`p-3 rounded-2xl ${t.card} flex items-center justify-center`}
                   >
                     <Icon size={24} className={t.accentText} />
                   </motion.div>
                 ))}
               </div>
            </div>
            {/* Floating Decorative Elements */}
            <motion.div 
              animate={{ y: [-15, 15] }} 
              transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse' }}
              className={`absolute -top-6 -right-6 p-4 rounded-2xl shadow-xl ${t.card} flex items-center gap-3`}
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Target size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-500 uppercase">Strategy</p>
                <p className={`text-sm font-semibold ${t.text}`}>Focused</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

const Experience = ({ isDark }) => {
  const t = isDark ? theme.dark : theme.light;
  return (
    <Section id="experience">
      <div className="mb-12">
        <h2 className={`text-4xl font-bold ${t.text} mb-4`}>Professional Journey</h2>
        <div className={`w-20 h-1.5 bg-gradient-to-r ${t.accent} rounded-full`} />
      </div>

      <div className="space-y-12">
        <div className="relative pl-8 border-l-2 border-pink-500/30">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 ring-4 ring-pink-500/20" />
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <div>
              <h3 className={`text-2xl font-bold ${t.text}`}>Project Intern, Infosys Springboard</h3>
              <p className={`text-pink-500 font-semibold`}>Infosys Limited (Remote)</p>
            </div>
            <span className={`px-4 py-1 rounded-full text-sm font-medium ${t.card}`}>Aug - Nov 2025</span>
          </div>
          <GlassCard className={t.card}>
            <ul className={`space-y-4 ${t.textMuted}`}>
              <li className="flex gap-3">
                <ChevronRight size={20} className="shrink-0 text-pink-500" />
                <p>Led a 7-member team in designing and developing a <span className="font-semibold text-pink-500">Power BI-based F&B analytics dashboard</span> using 4,000+ customer records.</p>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="shrink-0 text-pink-500" />
                <p>Built a five-page interactive dashboard with KPI tracking, customer segmentation, and sustainability insights.</p>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="shrink-0 text-pink-500" />
                <p>Applied Power Query, data modelling, and <span className="font-semibold text-pink-500">DAX functions</span> to optimise performance and deliver actionable business insights.</p>
              </li>
            </ul>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className={t.card} hover={false}>
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-2xl bg-pink-500/10 ${t.accentText}`}>
                <Star size={24} />
              </div>
              <h4 className={`text-xl font-bold ${t.text}`}>IIM Bangalore</h4>
            </div>
            <p className={`text-lg font-bold ${t.text}`}>BBA - Digital Business & Entrepreneurship</p>
            <p className={t.textMuted}>2024 - 2027 | CGPA: 8.2/10</p>
          </GlassCard>
          <GlassCard className={t.card} hover={false}>
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-2xl bg-rose-500/10 ${t.accentText}`}>
                <Star size={24} />
              </div>
              <h4 className={`text-xl font-bold ${t.text}`}>Amity University</h4>
            </div>
            <p className={`text-lg font-bold ${t.text}`}>BA (Hons) Business Economics</p>
            <p className={t.textMuted}>2023 - 2026 | CGPA: 8.5/10</p>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
};

const Projects = ({ isDark }) => {
  const t = isDark ? theme.dark : theme.light;
  const projectList = [
    {
      title: "ESG Analysis, Plentitude Fragrances",
      desc: "Conducted field-based ESG assessment of a Greater Noida perfume SME; mapped operational sustainability gaps via stakeholder interviews.",
      tag: "ESG & Sustainability",
      kpis: ["5+ Risks Identified", "Proposed Packaging Interventions"],
      year: "2026",
      icon: <Cpu className="text-pink-500" />
    },
    {
      title: "Exchange Rate Impact on Defence PSU",
      desc: "Analysed 24-year macroeconomic data (2000-2024) to quantify currency risk exposure for HAL, BEL, and BEML.",
      tag: "Finance Research",
      kpis: ["24Y Data Analysis", "Policy Recommendations"],
      year: "2026",
      icon: <TrendingUp className="text-pink-500" />
    },
    {
      title: "C.N.V.R.T Sustainable Fashion",
      desc: "Led 90+ surveys and 12 interviews to identify style vs sustainability drivers; built full unit economics for investor pitch.",
      tag: "Entrepreneurship",
      kpis: ["33% Profit Margin", "INR 25L Seed Target"],
      year: "2026",
      icon: <Target className="text-pink-500" />
    },
    {
      title: "Climate Finance & Growth Study",
      desc: "Applied panel data analysis across G20 economies to assess green growth vs development trade-offs.",
      tag: "Economics",
      kpis: ["G20 Framework Alignment", "Panel Data Analysis"],
      year: "2025",
      icon: <Globe className="text-pink-500" />
    }
  ];

  return (
    <Section id="projects">
      <div className="mb-12">
        <h2 className={`text-4xl font-bold ${t.text} mb-4`}>Strategic Projects</h2>
        <div className={`w-20 h-1.5 bg-gradient-to-r ${t.accent} rounded-full`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((proj, i) => (
          <GlassCard key={i} className={`${t.card} relative group`}>
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl bg-white/5 border border-white/10`}>
                {proj.icon}
              </div>
              <span className={`text-xs font-bold uppercase tracking-widest ${t.textMuted}`}>{proj.year}</span>
            </div>
            <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold bg-pink-500/10 ${t.accentText} mb-3`}>
              {proj.tag}
            </span>
            <h3 className={`text-2xl font-bold ${t.text} mb-4 group-hover:text-pink-500 transition-colors`}>{proj.title}</h3>
            <p className={`${t.textMuted} mb-6 leading-relaxed`}>{proj.desc}</p>
            <div className="flex flex-wrap gap-3">
              {proj.kpis.map((kpi, j) => (
                <div key={j} className={`px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-white/5 text-sm font-semibold ${t.text}`}>
                  {kpi}
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};

const Skills = ({ isDark }) => {
  const t = isDark ? theme.dark : theme.light;
  const skillCategories = [
    {
      name: "Technical & Analytics",
      skills: ["MS Excel", "Advanced Excel", "Power BI", "Data Analysis", "Business Analytics", "Financial Analysis", "Data Visualization", "KPI Tracking"]
    },
    {
      name: "Business & Strategy",
      skills: ["Strategic Analysis", "Strategic Planning", "ESG Analysis", "Process Optimisation", "Stakeholder Management", "Competitive Analysis", "Market Research"]
    }
  ];

  return (
    <Section id="skills">
       <div className="mb-12">
        <h2 className={`text-4xl font-bold ${t.text} mb-4`}>Expertise</h2>
        <div className={`w-20 h-1.5 bg-gradient-to-r ${t.accent} rounded-full`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((cat, i) => (
          <div key={i}>
            <h3 className={`text-xl font-bold ${t.text} mb-8 flex items-center gap-3`}>
              <span className={`w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 text-sm`}>{i+1}</span>
              {cat.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-5 py-3 rounded-2xl ${t.card} border-pink-500/20 text-sm font-semibold ${t.text} cursor-default`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Leadership = ({ isDark }) => {
  const t = isDark ? theme.dark : theme.light;
  const roles = [
    {
      title: "Vice President, DRACHMA Finance Society",
      org: "Amity University",
      impact: "Increased student outreach by 40% and negotiated 3+ institutional tie-ups.",
      date: "2025 - 2026"
    },
    {
      title: "Head of Content, Institution's Innovation Council",
      org: "Amity University",
      impact: "Produced 20+ content assets for Ministry of Education initiatives.",
      date: "2024 - 2025"
    },
    {
      title: "Conference Track Head, 9th National Conference",
      org: "Amity University",
      impact: "Led Track 3 coordination for a national SDG-oriented academic conference.",
      date: "Feb 2026"
    }
  ];

  return (
    <Section id="leadership">
      <div className="mb-12">
        <h2 className={`text-4xl font-bold ${t.text} mb-4`}>Leadership</h2>
        <div className={`w-20 h-1.5 bg-gradient-to-r ${t.accent} rounded-full`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((role, i) => (
          <GlassCard key={i} className={t.card}>
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.accent} flex items-center justify-center text-white mb-6`}>
              <Award size={24} />
            </div>
            <h3 className={`text-xl font-bold ${t.text} mb-2`}>{role.title}</h3>
            <p className={`text-pink-500 font-bold mb-4`}>{role.org}</p>
            <p className={`${t.textMuted} mb-6`}>{role.impact}</p>
            <span className={`text-xs font-bold uppercase tracking-widest ${t.textMuted}`}>{role.date}</span>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};

const Contact = ({ isDark }) => {
  const t = isDark ? theme.dark : theme.light;
  return (
    <Section id="contact">
      <div className={`rounded-[40px] p-8 md:p-16 relative overflow-hidden bg-gradient-to-br ${isDark ? 'from-zinc-900 to-black' : 'from-rose-100 to-white'} border ${isDark ? 'border-zinc-800' : 'border-rose-100'}`}>
        <div className={`absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full`} />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold ${t.text} mb-6`}>Let's collaborate on the <span className={`text-transparent bg-clip-text bg-gradient-to-r ${t.accent}`}>next big idea</span>.</h2>
            <p className={`${t.textMuted} text-lg mb-10`}>Open for business analysis, strategy consulting, and ESG research opportunities.</p>
            
            <div className="space-y-6">
              <a href="mailto:1301.mahimasharan@gmail.com" className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-pink-500/10 transition-colors group`}>
                <div className={`p-4 rounded-xl ${t.card} group-hover:bg-pink-500 group-hover:text-white transition-all`}>
                  <Mail size={24} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${t.textMuted}`}>Email</p>
                  <p className={`text-lg font-bold ${t.text}`}>1301.mahimasharan@gmail.com</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/mahimasharan" className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-pink-500/10 transition-colors group`}>
                <div className={`p-4 rounded-xl ${t.card} group-hover:bg-pink-500 group-hover:text-white transition-all`}>
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${t.textMuted}`}>LinkedIn</p>
                  <p className={`text-lg font-bold ${t.text}`}>mahimasharan</p>
                </div>
              </a>
            </div>
          </div>

          <div className={`p-8 rounded-3xl ${t.card} border-white/10`}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-bold ${t.text} mb-2`}>Your Name</label>
                  <input type="text" className={`w-full p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-pink-500 transition-all ${t.text}`} placeholder="John Doe" />
                </div>
                <div>
                  <label className={`block text-sm font-bold ${t.text} mb-2`}>Email Address</label>
                  <input type="email" className={`w-full p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-pink-500 transition-all ${t.text}`} placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-bold ${t.text} mb-2`}>Message</label>
                <textarea className={`w-full p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-pink-500 transition-all min-h-[150px] ${t.text}`} placeholder="How can I help you?"></textarea>
              </div>
              <button className={`w-full py-5 rounded-xl bg-gradient-to-r ${t.accent} text-white font-bold text-lg shadow-xl shadow-pink-500/20`}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// --- Navbar ---
const Navbar = ({ isDark, setIsDark }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = isDark ? theme.dark : theme.light;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-5xl rounded-full border px-8 py-4 flex items-center justify-between transition-all duration-500 ease-out ${t.nav} ${scrolled ? 'py-3' : 'py-5'}`}
      >
        <div className={`text-xl font-black tracking-tighter ${t.text} flex items-center gap-1`}>
          <span className="w-8 h-8 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 text-xs">M</span>
          MS<span className="text-pink-500">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-bold ${t.text} hover:text-pink-500 transition-all relative group`}>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className={`w-[1px] h-6 bg-current opacity-10`}></div>
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full hover:bg-pink-500/10 transition-colors text-pink-500`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full hover:bg-pink-500/10 text-pink-500`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl bg-white/5 border border-white/10 ${t.text}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className={`fixed inset-0 z-40 p-6 pt-32 md:hidden ${isDark ? 'bg-black/80' : 'bg-rose-50/80'}`}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.a 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold ${t.text} hover:text-pink-500 transition-colors`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Footer ---
const Footer = ({ isDark }) => {
  const t = isDark ? theme.dark : theme.light;
  return (
    <footer className={`py-12 px-6 border-t ${isDark ? 'border-zinc-800' : 'border-rose-100'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className={`text-2xl font-black tracking-tighter ${t.text} mb-2`}>
            Mahima Sharan<span className="text-pink-500">.</span>
          </div>
          <p className={t.textMuted}>© 2026. Designed for Strategy & Impact.</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className={`${t.textMuted} hover:text-pink-500 transition-colors`}>Privacy Policy</a>
          <a href="#" className={`${t.textMuted} hover:text-pink-500 transition-colors`}>Terms of Use</a>
          <a href="#contact" className={`${t.textMuted} hover:text-pink-500 transition-colors`}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---
export default function App() {
  const [isDark, setIsDark] = useState(true);
  const t = isDark ? theme.dark : theme.light;

  return (
    <div className={`${t.bg} transition-colors duration-500 selection:bg-pink-500/30 selection:text-pink-500 min-h-screen font-sans`}>
      <AnimatedBackground isDark={isDark} />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      <main>
        <Hero isDark={isDark} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Experience isDark={isDark} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Projects isDark={isDark} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Skills isDark={isDark} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Leadership isDark={isDark} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Contact isDark={isDark} />
        </motion.div>
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}
