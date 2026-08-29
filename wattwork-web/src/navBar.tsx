import React, { useState } from 'react';

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handles switching tabs and automatically closing the mobile menu
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'sponsorship', label: 'Sponsorship' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <button 
            onClick={() => handleTabChange('home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-9 h-9">
              <circle cx="50" cy="50" r="45" fill="#facc15" />
              <path d="M50 5 L50 15 M95 50 L85 50 M50 95 L50 85 M5 50 L15 50 M18 18 L25 25 M82 18 L75 25 M82 82 L75 75 M18 82 L25 75" stroke="#ca8a04" strokeWidth="6" strokeLinecap="round"/>
              <circle cx="50" cy="50" r="35" fill="#ffffff" />
              <polygon points="55,20 35,55 50,55 45,80 70,45 50,45" fill="#1e3a8a" />
            </svg>
            <span className="text-xl font-black text-white tracking-wider">
              WATT<span className="text-amber-500">WORK</span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-amber-500 border-b-2 border-amber-500 pb-1'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Desktop Action CTA */}
          <button
            onClick={() => handleTabChange('sponsorship')}
            className="hidden md:block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-md shadow-amber-500/20 cursor-pointer"
          >
            Partner With Us
          </button>

          {/* Animated Mobile Menu Toggle (UNILAG Crossing Style) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none cursor-pointer z-50 relative"
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-white absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`} />
            <span className={`block w-6 h-0.5 bg-white absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-0.5 bg-white absolute transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-slate-950/95 border-b border-slate-800 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-4 shadow-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`text-left text-base font-bold tracking-wide transition-colors ${
                activeTab === tab.id ? 'text-amber-500' : 'text-slate-300 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <button
            onClick={() => handleTabChange('sponsorship')}
            className="bg-amber-500 text-slate-950 font-bold px-4 py-3 rounded-xl text-sm mt-4 shadow-lg shadow-amber-500/20"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </nav>
  );
};