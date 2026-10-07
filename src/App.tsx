/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ActiveTab, ReportItem } from './types';
import {
  INITIAL_ACCOMPLISHMENT_REPORTS,
  INITIAL_FINANCIAL_REPORTS
} from './data/councilData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AccomplishmentReportsPage } from './pages/AccomplishmentReportsPage';
import { FinancialReportsPage } from './pages/FinancialReportsPage';
import { ContactPage } from './pages/ContactPage';
import { PdfModalViewer } from './components/PdfModalViewer';
import { ReportUploadModal } from './components/ReportUploadModal';
import { LogoChangeModal } from './components/LogoChangeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [logoModalOpen, setLogoModalOpen] = useState(false);
  const [accomplishmentReports, setAccomplishmentReports] = useState<ReportItem[]>(() => {
    try {
      const saved = localStorage.getItem('ctec_accomplishment_reports');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Combine initial reports with saved custom ones
        const customOnly = parsed.filter((r: ReportItem) => r.isCustom);
        return [...customOnly, ...INITIAL_ACCOMPLISHMENT_REPORTS];
      }
    } catch {
      // ignore
    }
    return INITIAL_ACCOMPLISHMENT_REPORTS;
  });

  const [financialReports, setFinancialReports] = useState<ReportItem[]>(() => {
    try {
      const saved = localStorage.getItem('ctec_financial_reports');
      if (saved) {
        const parsed = JSON.parse(saved);
        const customOnly = parsed.filter((r: ReportItem) => r.isCustom);
        return [...customOnly, ...INITIAL_FINANCIAL_REPORTS];
      }
    } catch {
      // ignore
    }
    return INITIAL_FINANCIAL_REPORTS;
  });

  const [selectedReport, setSelectedReport] = useState<ReportItem | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadModalType, setUploadModalType] = useState<'accomplishment' | 'financial'>('accomplishment');

  // Save custom reports to localStorage
  useEffect(() => {
    try {
      const customReports = accomplishmentReports.filter((r) => r.isCustom);
      localStorage.setItem('ctec_accomplishment_reports', JSON.stringify(customReports));
    } catch {
      // ignore
    }
  }, [accomplishmentReports]);

  useEffect(() => {
    try {
      const customReports = financialReports.filter((r) => r.isCustom);
      localStorage.setItem('ctec_financial_reports', JSON.stringify(customReports));
    } catch {
      // ignore
    }
  }, [financialReports]);

  const handleAddReport = (newReport: ReportItem) => {
    if (newReport.type === 'accomplishment') {
      setAccomplishmentReports((prev) => [newReport, ...prev]);
      setActiveTab('accomplishments');
    } else {
      setFinancialReports((prev) => [newReport, ...prev]);
      setActiveTab('financial');
    }
  };

  const openUploadModal = (type: 'accomplishment' | 'financial') => {
    setUploadModalType(type);
    setUploadModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Navigation */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onTabChange={setActiveTab}
            onViewReport={setSelectedReport}
            onOpenLogoModal={() => setLogoModalOpen(true)}
            accomplishmentReports={accomplishmentReports}
            financialReports={financialReports}
          />
        )}

        {activeTab === 'about' && <AboutPage />}

        {activeTab === 'accomplishments' && (
          <AccomplishmentReportsPage
            reports={accomplishmentReports}
            onViewReport={setSelectedReport}
            onOpenUploadModal={() => openUploadModal('accomplishment')}
          />
        )}

        {activeTab === 'financial' && (
          <FinancialReportsPage
            reports={financialReports}
            onViewReport={setSelectedReport}
            onOpenUploadModal={() => openUploadModal('financial')}
          />
        )}

        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onTabChange={setActiveTab} />

      {/* PDF Modal Viewer */}
      <PdfModalViewer
        report={selectedReport}
        onClose={() => setSelectedReport(null)}
      />

      {/* PDF Upload Modal */}
      <ReportUploadModal
        isOpen={uploadModalOpen}
        defaultType={uploadModalType}
        onClose={() => setUploadModalOpen(false)}
        onAddReport={handleAddReport}
      />

      {/* Logo Change Modal */}
      <LogoChangeModal
        isOpen={logoModalOpen}
        onClose={() => setLogoModalOpen(false)}
      />
    </div>
  );
}
