import React, { useState, useEffect } from 'react';
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

      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8 px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} WattWork Initiative. Bridging the theory-to-practice gap in Nigerian engineering.</p>
      </footer>
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
          Bridging the gap between theory and practical application in Electrical & Solar Engineering. Building 12V–220V transformers, recoiling DC armatures, and designing custom inverters from scratch.
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
            Explore 18-Week Scheme
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
      name: '[Founder Name]', role: 'Founder & Lead Coordinator', department: 'Executive Board',
      qualifications: 'B.Sc. (in view) Electrical & Electronics Engineering', doings: 'Authored the 18-week dual track curriculum and founded the initiative.',
      bio: 'Committed to bridging textbook theory with actual physical fabrication for EEE peers.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '[Co-Founder Name]', role: 'Co-Founder', department: 'Executive Board',
      qualifications: 'B.Sc. (in view) EEE | Renewable Energy Systems', doings: 'Co-designed practical training modules and manages strategic project roadmaps.',
      bio: 'Dedicated to decentralizing engineering education in Nigerian institutions.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '[Director Name]', role: 'Director of Operations', department: 'Operations & Strategy',
      qualifications: 'Project Management Specialist', doings: 'Coordinates logistics, resource allocation, and lab space infrastructure.',
      bio: 'Oversees operational standards and safety compliance across all divisions.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '[Solar Head]', role: 'Solar Sector Tutor Head', department: 'Solar Infrastructure',
      qualifications: 'Certified PV Installer', doings: 'Leads PV system sizing, inverter design, and live roof stringing.',
      bio: 'Specializes in micro-grids, deep-cycle battery management, and PWM circuits.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '[Asst. Solar Head]', role: 'Assistant Solar Head', department: 'Solar Infrastructure',
      qualifications: 'CleanTech Advocate', doings: 'Supervises bench tests and battery bank safety audits.',
      bio: 'Provides hands-on guidance for solar array and inverter assembly.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '[Electrical Head]', role: 'Electrical Sector Tutor Head', department: 'Electrical Installation',
      qualifications: 'Machine Winding Specialist', doings: 'Oversees domestic wiring layouts and armature recoiling.',
      bio: 'Hardware engineer with hands-on mastery in hand-wound transformers.', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '[Asst. Electrical Head]', role: 'Assistant Electrical Head', department: 'Electrical Installation',
      qualifications: 'Circuit Protection Technician', doings: 'Guides students through conduit piping and megger testing.',
      bio: 'Focuses on rigorous electrical safety protocols and step-by-step execution.', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '[CAD Head]', role: 'CAD Sector Head', department: 'Engineering Design',
      qualifications: 'AutoCAD Electrical Certified', doings: 'Leads technical drafting of conduit plans and schematics.',
      bio: 'Ensures all electrical layouts meet global engineering standards.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: '[Asst. CAD Head]', role: 'Assistant CAD Head', department: 'Engineering Design',
      qualifications: 'PCB Layout Designer', doings: 'Assists with PCB routing for inverter oscillator boards.',
      bio: 'Translates breadboarded hardware circuits into manufacturable schematics.', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80'
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

      {/* Leadership Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Executive Board & Sector Heads</h2>
          <p className="text-slate-400 text-sm mt-1">Our decentralized technical body driving hands-on execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-slate-800/80 border border-slate-700 hover:border-amber-500/50 transition-colors rounded-xl overflow-hidden flex flex-col p-6 space-y-4 shadow-lg shadow-black/20">
              <div className="flex items-center gap-4">
                <img src={leader.image} alt={leader.name} className="w-14 h-14 rounded-full object-cover border-2 border-amber-500" />
                <div>
                  <h3 className="text-base font-bold text-white">{leader.name}</h3>
                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-wide">{leader.role}</p>
                  <span className="text-[11px] text-slate-400">{leader.department}</span>
                </div>
              </div>
              <p className="text-slate-300 text-xs italic flex-1">"{leader.bio}"</p>
              
              <div className="space-y-3 pt-4 border-t border-slate-700/60">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div><span className="font-bold text-slate-200">Qualifications: </span>{leader.qualifications}</div>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <Briefcase className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div><span className="font-bold text-slate-200">Doings: </span>{leader.doings}</div>
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
        <h1 className="text-3xl sm:text-4xl font-black text-white">18-Week Scheme of Work</h1>
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
   5. CONTACT VIEW
========================================================= */
const ContactView: React.FC = () => {
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
            <p className="text-sm text-slate-400 mt-1">partnerships@wattwork.org</p>
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
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Organization / Name</label>
              <input type="text" placeholder="e.g. Coleman Wires" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Email Address</label>
              <input type="email" placeholder="contact@company.com" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Message</label>
            <textarea rows={4} placeholder="Tell us how you would like to partner with WattWork..." className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"></textarea>
          </div>
          <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 cursor-pointer text-base">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};