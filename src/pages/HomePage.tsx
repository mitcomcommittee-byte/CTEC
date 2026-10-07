import React from 'react';
import { ActiveTab, ReportItem } from '../types';
import { CtecLogo } from '../components/CtecLogo';
import { COUNCIL_INFO } from '../data/councilData';
import { FileText, DollarSign, ArrowRight, ShieldCheck, Users, Calendar, Award, Camera } from 'lucide-react';

interface HomePageProps {
  onTabChange: (tab: ActiveTab) => void;
  onViewReport: (report: ReportItem) => void;
  onOpenLogoModal?: () => void;
  accomplishmentReports: ReportItem[];
  financialReports: ReportItem[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onTabChange,
  onViewReport,
  onOpenLogoModal,
  accomplishmentReports,
  financialReports
}) => {
  const latestAccomplishment = accomplishmentReports[0];
  const latestFinancial = financialReports[0];

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. Official Header & Hero Introduction */}
      <section className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 sm:px-6 lg:px-8 text-center shadow-xs">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* CTEC Official Logo */}
          <div className="mb-5 flex flex-col items-center">
            <CtecLogo size="xl" className="mx-auto drop-shadow-md" />
            {onOpenLogoModal && (
              <button
                type="button"
                onClick={onOpenLogoModal}
                className="mt-2.5 inline-flex items-center text-[11px] text-slate-500 hover:text-blue-800 transition-colors cursor-pointer bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded border border-slate-200/90"
                title="Change or customize council logo"
              >
                <Camera className="w-3 h-3 mr-1 text-slate-500" />
                Change Logo
              </button>
            )}
          </div>

          {/* Council & University Hierarchy */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#0D274F] tracking-tight mb-2">
            College of Teacher Education Council
          </h1>
          
          <div className="space-y-1 mb-6">
            <p className="text-base sm:text-lg font-semibold text-slate-800">
              Batangas State University – <span className="text-[#C51E28]">The National Engineering University</span>
            </p>
            <p className="text-sm font-medium text-slate-600">
              ARASOF-Nasugbu Campus • R. Martinez St., Brgy. Bucana, Nasugbu, Batangas
            </p>
          </div>

          {/* Simple, Clear Introduction */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-5 sm:p-6 max-w-2xl mx-auto mb-8">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Welcome to the official transparency website of the College of Teacher Education Council. This website provides students and stakeholders with access to the council&apos;s accomplishment and financial reports.
            </p>
          </div>

          {/* Two Large but Simple Primary Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => {
                onTabChange('accomplishments');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md shadow-sm transition-colors text-sm sm:text-base cursor-pointer"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Accomplishment Reports
            </button>

            <button
              onClick={() => {
                onTabChange('financial');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-[#0D274F] hover:bg-[#133568] text-white font-semibold rounded-md shadow-sm transition-colors text-sm sm:text-base border border-amber-400/40 cursor-pointer"
            >
              <DollarSign className="w-5 h-5 mr-2 text-amber-400" />
              View Financial Reports
            </button>
          </div>

        </div>
      </section>

      {/* 2. Council Summary Box ("About CTEC") */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0D274F]">
                About CTEC
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Overview of the official student governing body of the College of Teacher Education
              </p>
            </div>
            <button
              onClick={() => {
                onTabChange('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center text-xs font-semibold text-blue-700 hover:text-blue-900 cursor-pointer"
            >
              Read full profile <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              The <strong>College of Teacher Education Council (CTEC)</strong> is the official college-based student organization of the College of Teacher Education at Batangas State University – The National Engineering University, ARASOF-Nasugbu Campus.
            </p>
            <p>
              Operating under the classification of <strong>Socio-Civic / Academic / Service-Oriented</strong>, the council serves <strong>1,078 enrolled pre-service teachers</strong> across seven academic programs and specializations. CTEC acts in direct support of the Supreme Student Council (SSC) to promote student welfare, academic excellence, transparent governance, and community leadership.
            </p>
            <p className="text-slate-600 text-xs italic bg-slate-50 p-3.5 rounded border border-slate-200">
              &quot;We aim to lead, serve and develop a sense of responsibility where needs of the students are acknowledged, concerted and fulfilled.&quot; — CTEC Official Mission
            </p>
          </div>

          {/* Quick Council Pillars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 text-center">
            <div className="p-3 bg-slate-50 rounded">
              <div className="flex items-center justify-center text-blue-700 mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-base font-bold font-serif">{COUNCIL_INFO.yearFounded}</span>
              </div>
              <div className="text-[11px] text-slate-600">Year Established</div>
            </div>

            <div className="p-3 bg-slate-50 rounded">
              <div className="flex items-center justify-center text-blue-700 mb-1">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-base font-bold font-serif">{COUNCIL_INFO.totalStudentsEnrolled}</span>
              </div>
              <div className="text-[11px] text-slate-600">Enrolled Students</div>
            </div>

            <div className="p-3 bg-slate-50 rounded">
              <div className="flex items-center justify-center text-blue-700 mb-1">
                <Award className="w-4 h-4 mr-1" />
                <span className="text-base font-bold font-serif">College-Based</span>
              </div>
              <div className="text-[11px] text-slate-600">Official Classification</div>
            </div>

            <div className="p-3 bg-slate-50 rounded">
              <div className="flex items-center justify-center text-blue-700 mb-1">
                <ShieldCheck className="w-4 h-4 mr-1" />
                <span className="text-base font-bold font-serif">100%</span>
              </div>
              <div className="text-[11px] text-slate-600">Public Reports Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Latest Transparency Documents */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-[#0D274F]">
            Current Published Reports
          </h2>
          <p className="text-xs text-slate-600">
            Click &apos;View Report&apos; to inspect the official PDF in your browser or &apos;Download&apos; to save a copy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Latest Accomplishment Card */}
          {latestAccomplishment && (
            <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-blue-800 uppercase tracking-wide">
                    Accomplishment Report
                  </span>
                  <span>AY {latestAccomplishment.academicYear}</span>
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900 mb-2">
                  {latestAccomplishment.title} ({latestAccomplishment.academicYear})
                </h3>
                <p className="text-xs text-slate-600 mb-4 line-clamp-3">
                  {latestAccomplishment.description}
                </p>
                <div className="text-[11px] text-slate-500 mb-4 bg-slate-50 p-2.5 rounded border border-slate-100">
                  <span className="font-semibold text-slate-700">Official File: </span>
                  {latestAccomplishment.fileName}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onViewReport(latestAccomplishment)}
                  className="flex-1 py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded text-xs font-semibold text-center transition-colors cursor-pointer"
                >
                  View Report
                </button>
                <a
                  href={latestAccomplishment.fileUrl}
                  download={latestAccomplishment.fileName}
                  className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-medium text-center border border-slate-200 transition-colors cursor-pointer"
                >
                  Download
                </a>
              </div>
            </div>
          )}

          {/* Latest Financial Card */}
          {latestFinancial && (
            <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-emerald-800 uppercase tracking-wide">
                    Financial Statement
                  </span>
                  <span>AY {latestFinancial.academicYear}</span>
                </div>
                <h3 className="text-base font-bold font-serif text-slate-900 mb-2">
                  {latestFinancial.title} ({latestFinancial.academicYear})
                </h3>
                <p className="text-xs text-slate-600 mb-4 line-clamp-3">
                  {latestFinancial.description}
                </p>
                <div className="text-[11px] text-slate-500 mb-4 bg-slate-50 p-2.5 rounded border border-slate-100">
                  <span className="font-semibold text-slate-700">Official File: </span>
                  {latestFinancial.fileName}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onViewReport(latestFinancial)}
                  className="flex-1 py-2 px-3 bg-[#0D274F] hover:bg-[#133568] text-white rounded text-xs font-semibold text-center transition-colors cursor-pointer"
                >
                  View Report
                </button>
                <a
                  href={latestFinancial.fileUrl}
                  download={latestFinancial.fileName}
                  className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-medium text-center border border-slate-200 transition-colors cursor-pointer"
                >
                  Download
                </a>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. Purpose and Commitment to Students */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D274F] text-white rounded-lg p-6 sm:p-8">
          <div className="max-w-3xl">
            <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-300 mb-2">
              Our Transparency Guarantee
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
              All students of the College of Teacher Education have the right to inspect how council funds are managed and what initiatives were executed during the academic year. Reports published on this website are verified and ratified by the council officers, faculty adviser, and campus student affairs administration.
            </p>
            <div className="flex items-center space-x-4 text-xs text-slate-300">
              <span>• No private student data published</span>
              <span>• Official PDF downloads supported</span>
              <span>• Updated annually</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
