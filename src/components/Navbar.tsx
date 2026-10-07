import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { CtecLogo } from './CtecLogo';
import { Menu, X, FileText, DollarSign, Home, Info, Mail } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { tab: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { tab: 'home', label: 'Home', icon: <Home className="w-4 h-4 mr-1.5" /> },
    { tab: 'about', label: 'About CTEC', icon: <Info className="w-4 h-4 mr-1.5" /> },
    { tab: 'accomplishments', label: 'Accomplishment Reports', icon: <FileText className="w-4 h-4 mr-1.5" /> },
    { tab: 'financial', label: 'Financial Reports', icon: <DollarSign className="w-4 h-4 mr-1.5" /> },
    { tab: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4 mr-1.5" /> },
  ];

  const handleSelect = (tab: ActiveTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0D274F] text-white border-b border-amber-500/30 shadow-md">
      {/* Top University Identification Ribbon */}
      <div className="bg-[#091D3C] py-1 px-4 text-xs text-slate-300 border-b border-slate-700/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-slate-200">Batangas State University</span>
            <span>–</span>
            <span className="text-red-400 font-medium">The National Engineering University</span>
            <span>•</span>
            <span className="text-slate-300">ARASOF-Nasugbu Campus</span>
          </div>
          <div className="text-slate-400 text-[11px]">
            Academic Year 2026–2027
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Lockup */}
          <button
            onClick={() => handleSelect('home')}
            className="flex items-center space-x-3.5 text-left focus:outline-none group cursor-pointer"
            aria-label="Go to Homepage"
          >
            <CtecLogo size="md" className="shrink-0 transition-transform duration-150 group-hover:scale-105" />
            <div>
              <div className="text-base sm:text-lg font-bold font-serif tracking-tight text-white group-hover:text-amber-300 transition-colors">
                College of Teacher Education Council
              </div>
              <div className="text-xs text-slate-300 tracking-wide">
                Transparency &amp; Accountability Portal
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => handleSelect(item.tab)}
                  className={`inline-flex items-center px-3.5 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-800/80 text-amber-300 border-b-2 border-amber-400'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1F3F] border-b border-slate-700 px-4 pt-2 pb-4 space-y-1">
          <div className="text-xs text-slate-400 px-3 py-1 font-semibold uppercase tracking-wider">
            Menu Navigation
          </div>
          {navItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleSelect(item.tab)}
                className={`w-full flex items-center px-3 py-2.5 rounded-md text-sm font-medium text-left transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-900 text-amber-300 font-semibold'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
