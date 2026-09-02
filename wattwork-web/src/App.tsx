import React, { useState, useEffect } from 'react';
import { Footer } from './footer';
import { NavBar } from './navBar';
import { 
  Zap, 
  Cpu, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Mail, 
  MapPin, 
  Award, 
  Briefcase, 
  UserCheck 
} from 'lucide-react';
import Akin from './assets/Akintunde.jpeg';
import Abdul from './assets/Olajide.jpeg';
import mayor from './assets/Mayor1.png';
import Temple from './assets/Havoc.png';
import McD from './assets/McD.jpeg';
import Abd from './assets/Abd-R.jpeg';
import Mub from './assets/Mubby.jpeg';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <AboutView />}
        {activeTab === 'curriculum' && <CurriculumView />}
        {activeTab === 'sponsorship' && <SponsorshipView />}
        {activeTab === 'contact' && <ContactView />}
      </main>

      <Footer />      
    </div>
  );
}

/* =========================================================
   1. HOME VIEW
========================================================= */
const HomeView: React.FC<{ setActiveTab: (tab: string) => void }> = ({ setActiveTab }) => {
  return (
    <div className="space-y-16 py-6 animate-in fade-in duration-500">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" /> Launching November
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Empowering Nigeria's Next Generation of <span className="text-amber-500">Hardware Engineers</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Bridging the gap between theory and practical application in Electrical & Solar Engineering. Building 12V–220V transformers, and designing custom inverters from scratch.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button 
            onClick={() => {
              setActiveTab('sponsorship');
              window.scrollTo(0, 0);
            }}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            Become a Sponsor
          </button>
          <button 
            onClick={() => {
              setActiveTab('curriculum');
              window.scrollTo(0, 0);
            }}
            className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer"
          >
            Explore 9-Weeks Scheme For the simultaneous tranning
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl hover:border-amber-500/50 transition-colors">
          <Cpu className="w-8 h-8 text-amber-500 mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">Hands-On Construction</h3>
          <p className="text-slate-400 text-sm">Students recoil DC armatures, calculate turns per volt, and build transformers directly from raw materials.</p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl hover:border-amber-500/50 transition-colors">
          <Zap className="w-8 h-8 text-amber-500 mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">Solar Micro-Grids</h3>
          <p className="text-slate-400 text-sm">Real-world energy audits, battery bank configurations, and end-to-end solar system installation.</p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl hover:border-amber-500/50 transition-colors">
          <ShieldCheck className="w-8 h-8 text-amber-500 mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">Zero-Cost Intern Pipeline</h3>
          <p className="text-slate-400 text-sm">Providing corporate partners with job-ready engineers trained on IEE wiring compliance and power electronics.</p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   2. ABOUT VIEW
========================================================= */
const AboutView: React.FC = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
      title: 'Solar PV & Inverter Hardware',
      subtitle: 'From energy audits to sizing arrays and breadboarding oscillator stages.'
    },
    {
      url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80',
      title: 'Machine & Armature Winding',
      subtitle: 'Calculating turns per volt and winding custom 12V–220V transformers from scratch.'
    },
    {
      url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80',
      title: 'Hands-On Electrical Infrastructure',
      subtitle: 'Conduit piping, load balancing, and Nigerian/IEE wiring compliance.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const leaders = [
    {
      name: 'Nzeakor Temple Chukwuebuka', 
      role: 'Founder & Lead Coordinator', 
      department: 'Executive Board',
      qualifications: 'B.Sc. (in view) Electrical & Electronics Engineering | IEEE Reg Certified', 
      experience: '3+ Years Field Experience in Commercial Electrical Installation & Leadership roles (Course Rep for SEES 29, Millelium Fellowship Ambassador class of 2026)',
      certificationLink: '#',
      doings: 'Founded the initiative. Manages strategic project roadmaps.',
      bio: 'Obesses with leadership and providing scalable solution to engineering problem', 
      image: Temple
    },
    {
      name: "Ayeni Mayowa Boluwatife", 
      role: 'Co-Founder, Chief Supervisor & Innovative Head', 
      department: 'Executive Board',
      qualifications: 'B.Sc. (in view) EEE | Renewable Energy Systems | IEEE Reg Certified', 
      experience: '4 Years Practical Hardware Assembly & Micro-Grid Deployment | 7+ years in Electrical Installation, Repairs and Maintenance |.',
      certificationLink: '#',
      doings: 'Architected the 18-week dual-track curriculum, drafted the Master BOM, Designed practical training modules',
      bio: 'Transitioned from hands-on artisan electrical work to formal EEE education. Committed to bridging textbook theory with actual physical fabrication for university peers. Dedicated to decentralizing engineering education in Nigerian institutions by providing peer-led hardware access.', 
      image: mayor
    },
    {
      name: 'Olajide Abdullah', 
      role: 'Director of Operations', 
      department: 'Operations & Strategy',
      qualifications: 'Project Management Specialist', 
      experience: 'Certified Lab Safety & Logistics Coordinator.',
      certificationLink: '#',
      doings: 'Coordinates multi-cohort logistics, resource allocation, and lab space infrastructure.',
      bio: 'Oversees operational standards, safety compliance, and execution timelines across all WattWork divisions.', 
      image: Abdul
    },
    {
      name: 'Lawal Mubarak Omogbolahan', 
      role: 'Solar Sector Tutor Head', 
      department: 'Solar Infrastructure',
      qualifications: 'B.Sc. (in view) EEE | Certified PV Installer', 
      experience: '5+ Years in Commercial Solar Stringing & Off-Grid Battery Sizing.',
      certificationLink: '#',
      doings: 'Leads PV system sizing, inverter design stages, and live roof stringing modules.',
      bio: 'Specializes in solar micro-grids, deep-cycle battery management, and oscillator PWM circuits.', 
      image: Mub
    },
    {
      name: 'Tijani Akintunde Uthman', 
      role: 'Electrical Sector Tutor Head', 
      department: 'Electrical Installation',
      qualifications: 'B.Sc. (in view) EEE | Certified EE artisan', 
      experience: '4 Years Artisan Experience: Conduit Layouts & Motor Disassembly.',
      certificationLink: '#',
      doings: 'Oversees domestic wiring layouts, transformer winding calculations, and armature recoiling.',
      bio: 'Hardware engineer with hands-on mastery in hand-wound transformers and distribution board installations.', 
      image: Akin
    },
    {
      name: 'Olowu McDaniels', 
      role: 'CAD Sector Head', 
      department: 'Engineering Design',
      qualifications: 'AutoCAD Electrical & SolidWorks Certified', 
      experience: '3 Years Industrial Schematics & PCB Layout Design.',
      certificationLink: '#',
      doings: 'Leads technical drafting of conduit plans and mechanical inverter enclosures.',
      bio: 'Ensures all electrical layouts and circuit diagrams meet global engineering standards.', 
      image: McD
    },
    {
      name: 'AbdulRahmon', 
      role: 'Assistant Electrical Installation', 
      department: 'Electrical Installation',
      qualifications: 'Certified Electrical Artisan', 
      experience: '5+ Years Experience in Electrical Installation | 4+ years Experience in Machine Winding',
      certificationLink: '#',
      doings: 'Leads Electrical Installation teaching logistics and Inspects students work',
      bio: 'Ensures all settings for Electrical installation is available and smooth training session', 
      image: Abd
    }
  ];

  return (
    <div className="space-y-16 py-6 animate-in fade-in duration-500">
      {/* Slideshow */}
      <div className="relative w-full h-[380px] md:h-[480px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
        {slides.map((slide, index) => (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex flex-col justify-end p-8">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 rounded-full w-fit">
                Practical Engineering
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1">{slide.title}</h2>
              <p className="text-slate-300 text-sm md:text-base">{slide.subtitle}</p>
            </div>
          </div>
        ))}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-900 p-2 rounded-full text-white border border-slate-700 cursor-pointer transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-900 p-2 rounded-full text-white border border-slate-700 cursor-pointer transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Mission</h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          WattWork is a standardized, decentralized body founded to transform Electrical/Electronic Engineering education. We move beyond textbooks by constructing 12V–220V transformers, recoiling DC armatures, building inverters, and deploying full solar installations from the ground up.
        </p>
      </div>

      {/* 100% Width Leadership Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Executive Board & Sector Heads</h2>
          <p className="text-slate-400 text-sm mt-1">Our decentralized technical body driving hands-on execution.</p>
        </div>

        <div className="flex flex-col gap-6">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-slate-800/80 border border-slate-700 hover:border-amber-500/50 transition-colors rounded-xl overflow-hidden flex flex-col md:flex-row shadow-lg shadow-black/20 w-full">
              
              {/* Left Column: Image & Basic Info */}
              <div className="p-6 md:w-1/3 border-b md:border-b-0 md:border-r border-slate-700/60 flex flex-col items-center md:items-start text-center md:text-left bg-slate-900/40">
                <img src={leader.image} alt={leader.name} className="w-24 h-24 rounded-full object-cover border-2 border-amber-500 mb-4 shadow-md" />
                <h3 className="text-xl font-black text-white">{leader.name}</h3>
                <p className="text-xs font-bold text-amber-500 uppercase tracking-wide mt-1">{leader.role}</p>
                <span className="text-[11px] font-mono text-slate-400 mt-1 bg-slate-800 px-2 py-0.5 rounded">{leader.department}</span>
                
                <a href={leader.certificationLink} className="mt-4 flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-400 transition-colors border border-slate-700 rounded-lg px-3 py-1.5 w-full justify-center md:justify-start">
                  <UserCheck className="w-4 h-4 text-amber-500" />
                  View Certifications & Portfolio
                </a>
              </div>
              
              {/* Right Column: Detailed Bio & Experience */}
              <div className="p-6 md:w-2/3 flex flex-col justify-center space-y-4">
                <p className="text-slate-200 text-sm italic leading-relaxed border-l-4 border-amber-500 pl-4">"{leader.bio}"</p>
                
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-200 block">Academic Profile:</span>
                      {leader.qualifications}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-200 block">Field / Artisan Experience:</span>
                      {leader.experience}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <Briefcase className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-200 block">WattWork Direct Impact:</span>
                      {leader.doings}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
/* =========================================================
   3. CURRICULUM VIEW
========================================================= */
const CurriculumView: React.FC = () => {
  return (
    <div className="space-y-12 py-6 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-black text-white">9-Week Scheme of Work (Separated)</h1>
        <p className="text-slate-400 text-sm mt-2">
          High-level curriculum overview validating our technical rigor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="border-b border-slate-700 pb-4">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Track 1 (9 Weeks)</span>
            <h2 className="text-2xl font-bold text-white mt-1">Electrical Installation & Machine Winding</h2>
          </div>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W1:</span> IEE/Nigerian Wiring Regulations & Safe Tool Usage</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W2:</span> Cable Sizing & Voltage Drop Calculations</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W3:</span> Surface, Conduit Piping & Lighting Circuits</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W4:</span> Distribution Boards, Load Balancing & Earth Testing</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W5:</span> Electromagnetism & Turns-Per-Volt Core Math</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W6:</span> Construction of 12V–220V Transformers from Scratch</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W7:</span> DC Motor Disassembly & Commutator Slot Analysis</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W8:</span> Hand-Winding & Recoiling DC Armatures</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W9:</span> Megger Insulation Testing & Machine Fault Finding</li>
          </ul>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="border-b border-slate-700 pb-4">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Track 2 (9 Weeks)</span>
            <h2 className="text-2xl font-bold text-white mt-1">Solar Infrastructure & Power Electronics</h2>
          </div>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W1:</span> PV Cell Characteristics & Open-Circuit Voltage</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W2:</span> Building Energy Audits & Daily Watt-Hour Profiling</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W3:</span> Sizing PV Arrays, Charge Controllers & Inverter Loads</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W4:</span> Battery Bank Configurations & Depth-of-Discharge</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W5:</span> MOSFET Switching & Breadboarding Oscillators</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W6:</span> Soldering H-Bridge & Gate Driving Circuits</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W7:</span> Integrating Custom Transformer with Inverter Stage</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W8:</span> Mounting Solar Panels, DC Breakers & Rooftop Stringing</li>
            <li className="flex gap-3"><span className="font-bold text-amber-400 min-w-[2rem]">W9:</span> Live Solar Commissioning & Load Testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   4. SPONSORSHIP VIEW
========================================================= */
const SponsorshipView: React.FC = () => {
  return (
    <div className="space-y-12 py-6 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Partner With WattWork</h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Raising <span className="text-amber-400 font-bold">4,500,000 NGN</span> to equip our upcoming cohort near the UNILAG axis with essential lab materials.
        </p>
      </div>

      <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <UserCheck className="text-amber-500" /> Corporate ROI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
            <h3 className="font-bold text-amber-500 text-lg mb-2">Zero-Cost Talent Pipeline</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              First-choice access to hire our graduates for free internships. Receive engineers who can size arrays, wind transformers, and troubleshoot circuits from day one.
            </p>
          </div>
          <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
            <h3 className="font-bold text-amber-500 text-lg mb-2">Digital Brand Visibility</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Extensive digital campaigns, corporate logo placement on lab coats, workshop banners, and recognition across our technical hardware showcases.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white px-2">Sponsorship Tiers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/60 border border-amber-500/50 p-6 rounded-xl shadow-lg shadow-amber-500/5 flex flex-col gap-2">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest">Platinum</span>
            <div className="text-2xl font-black text-white">2,000,000 ₦</div>
            <p className="text-xs text-slate-400 mt-2">Title partner branding on lab coats, banners, and VIP talent recruitment access.</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-xl flex flex-col gap-2">
            <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Gold</span>
            <div className="text-2xl font-black text-white">1,000,000 ₦</div>
            <p className="text-xs text-slate-400 mt-2">Prominent logo placement on rigs, social jams, and workshop tools.</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-xl flex flex-col gap-2">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Silver</span>
            <div className="text-2xl font-black text-white">500,000 ₦</div>
            <p className="text-xs text-slate-400 mt-2">Logo display on official web platforms and cohort releases.</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-xl flex flex-col gap-2">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">In-Kind</span>
            <div className="text-2xl font-black text-white">Materials</div>
            <p className="text-xs text-slate-400 mt-2">Direct component donations (copper wires, batteries, multimeters).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   5. CONTACT VIEW (Live Email Forwarding)
========================================================= */
const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'bf6e62a2-485d-47e7-ae23-c7a2714750aa', 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New WattWork Inquiry from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Revert the button back to default after 4 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="space-y-10 py-6 max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Contact WattWork</h1>
        <p className="text-slate-400 text-base">
          Reach out for corporate sponsorships, material donations, or student inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800/60 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-amber-500/50 transition-colors">
          <div className="p-4 bg-amber-500/10 rounded-full">
            <Mail className="w-8 h-8 text-amber-500" />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">Official Email</h3>
            <p className="text-sm text-slate-400 mt-1">wattwork.partner@gmail.com</p>
          </div>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-amber-500/50 transition-colors">
          <div className="p-4 bg-amber-500/10 rounded-full">
            <MapPin className="w-8 h-8 text-amber-500" />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">Lab Location</h3>
            <p className="text-sm text-slate-400 mt-1">UNILAG / Yaba Axis, Lagos State, Nigeria</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl">
        <h3 className="font-bold text-white text-xl mb-6">Send an Inquiry</h3>
        
        {status === 'success' && (
          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm font-semibold text-center">
            Thank you! Your message has been sent to the WattWork team. We will respond shortly.
          </div>
        )}

        {status === 'error' && (
          <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-sm font-semibold text-center">
            Failed to send message. Please reach out directly to wattwork.partner@gmail.com.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Organization / Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Coleman Wires" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Email Address</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="contact@company.com" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" 
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Message</label>
            <textarea 
              rows={4} 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us how you would like to partner with WattWork..." 
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={status === 'submitting' || status === 'success'}
            className={`w-full font-black py-4 rounded-xl transition-all shadow-lg cursor-pointer text-base disabled:opacity-90 ${
              status === 'success'
                ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                : 'bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/50 text-slate-950 shadow-amber-500/20'
            }`}
          >
            {status === 'submitting' && 'Sending Message...'}
            {status === 'success' && 'Message Sent Successfully ✓'}
            {(status === 'idle' || status === 'error') && 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};