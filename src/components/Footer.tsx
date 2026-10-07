import React from 'react';
import { ActiveTab } from '../types';
import { CtecLogo } from './CtecLogo';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { COUNCIL_INFO } from '../data/councilData';

interface FooterProps {
  onTabChange: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  return (
    <footer className="bg-[#091D3C] text-slate-300 border-t-4 border-[#C89B3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-700/60">
          
          {/* Column 1: Council Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CtecLogo size="md" />
              <div>
                <div className="text-white font-serif font-bold text-base leading-snug">
                  College of Teacher Education Council (CTEC)
                </div>
                <div className="text-xs text-amber-300 font-medium">
                  BatStateU The NEU – ARASOF-Nasugbu
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Official student council transparency repository providing full public access to 
              accomplishment reports, verified financial statements, and organizational records.
            </p>
            <div className="inline-block px-3 py-1 bg-slate-800/80 rounded text-[11px] font-semibold text-amber-300 border border-amber-500/30">
              Transparency • Accountability • Student Service
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white tracking-wide uppercase font-serif border-b border-slate-700 pb-1.5 inline-block">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { onTabChange('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onTabChange('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  About CTEC (Vision, Mission &amp; Officers)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onTabChange('accomplishments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Accomplishment Reports
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onTabChange('financial'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Financial Reports &amp; Statements
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onTabChange('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Council Contact &amp; Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Campus */}
          <div className="space-y-3 text-xs">
            <div className="text-sm font-semibold text-white tracking-wide uppercase font-serif border-b border-slate-700 pb-1.5 inline-block">
              Official Contact
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{COUNCIL_INFO.campusAddress}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a
                href={`mailto:${COUNCIL_INFO.email}`}
                className="hover:text-amber-300 underline decoration-slate-600 underline-offset-2 break-all"
              >
                {COUNCIL_INFO.email}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-slate-400 pt-1">
              <ExternalLink className="w-3.5 h-3.5" />
              <a
                href={COUNCIL_INFO.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-300"
              >
                Batangas State University Official Portal
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} College of Teacher Education Council (CTEC). Batangas State University – The National Engineering University.
          </div>
          <div className="mt-2 sm:mt-0 text-slate-400">
            ARASOF-Nasugbu Campus • Student Council Transparency
          </div>
        </div>
      </div>
    </footer>
  );
};
