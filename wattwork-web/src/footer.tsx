import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { FaLinkedin, FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-white tracking-wider">
              WATT<span className="text-amber-500">WORK</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed pr-4">
            <strong className="text-amber-500 block mb-1">Theory Meets Execution.</strong>
            Bridging the critical gap between theoretical learning and practical hardware manufacturing for Nigeria's next generation of engineers.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold tracking-wide uppercase text-sm">Headquarters</h4>
          <div className="space-y-3">
            <p className="text-slate-400 text-sm flex items-start gap-3 leading-relaxed">
              <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <span>
                UNILAG / Yaba Axis,<br />
                Lagos State, Nigeria
              </span>
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-3">
              <Mail className="w-5 h-5 text-amber-500 shrink-0" />
              <span>wattwork.partner@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold tracking-wide uppercase text-sm">Connect With Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn" className="bg-slate-900 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-amber-500 transition-all shadow-md">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="X / Twitter" className="bg-slate-900 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-amber-500 transition-all shadow-md">
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="bg-slate-900 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-amber-500 transition-all shadow-md">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="bg-slate-900 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-amber-500 transition-all shadow-md">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
          WattWork Initiative. A Decentralized Standard Body.
        </p>
        <div className="flex gap-6 text-xs font-semibold text-slate-500">
          <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};