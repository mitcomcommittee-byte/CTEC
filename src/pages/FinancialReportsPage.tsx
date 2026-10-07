import React, { useState } from 'react';
import { ReportItem } from '../types';
import { DollarSign, Download, Eye, Upload, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

interface FinancialReportsPageProps {
  reports: ReportItem[];
  onViewReport: (report: ReportItem) => void;
  onOpenUploadModal: () => void;
}

export const FinancialReportsPage: React.FC<FinancialReportsPageProps> = ({
  reports,
  onViewReport,
  onOpenUploadModal
}) => {
  const [selectedAY, setSelectedAY] = useState<string>('all');

  const filteredReports = reports.filter((rep) => {
    if (selectedAY === 'all') return true;
    return rep.academicYear === selectedAY;
  });

  const uniqueAYs = Array.from(new Set(reports.map((r) => r.academicYear)));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#0D274F]">
            Financial Reports
          </h1>
          <p className="text-sm text-slate-700 mt-2 max-w-2xl leading-relaxed">
            This section provides access to the financial reports of the College of Teacher Education Council. The reports are published to promote transparency and accountability in the management of council funds.
          </p>
        </div>

        {/* Upload Button for Council Officers */}
        <button
          onClick={onOpenUploadModal}
          className="inline-flex items-center px-4 py-2.5 bg-[#0D274F] hover:bg-[#153464] text-white rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer self-start sm:self-auto shrink-0 border border-amber-400/40 shadow-xs"
        >
          <Upload className="w-4 h-4 mr-2 text-amber-300" />
          Add / Upload Financial PDF
        </button>
      </div>

      {/* Official Revolving Fund Declaration Highlight (Verbatim Attachment F) */}
      <div className="bg-white border-2 border-slate-200 rounded-lg p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-4">
          <div>
            <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              Attachment F • Official University Filing
            </span>
            <h2 className="text-lg font-bold font-serif text-slate-900 mt-1.5">
              Declaration of the Organization&apos;s Revolving Fund (AY 2026–2027)
            </h2>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Status: Certified &amp; Audited
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <div className="text-xs text-slate-500 mb-1">Remaining Fund (Last Semester)</div>
            <div className="text-xl font-bold font-serif text-slate-900 tabular-nums">
              Php 51,500.85
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Carried forward to AY 2026–2027</div>
          </div>

          <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <div className="text-xs text-slate-500 mb-1">Receivables (Dues / Others)</div>
            <div className="text-xl font-bold font-serif text-slate-900 tabular-nums">
              Php 0.00
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Zero unliquidated receivables</div>
          </div>

          <div className="bg-blue-50/70 p-4 rounded border border-blue-200">
            <div className="text-xs text-blue-900 font-semibold mb-1">Total Verified Fund Balance</div>
            <div className="text-xl font-bold font-serif text-blue-950 tabular-nums">
              Php 51,500.85
            </div>
            <div className="text-[11px] text-blue-800 mt-0.5">Audited by Roland F. Rivera</div>
          </div>
        </div>

        {/* Verification Signatories */}
        <div className="bg-slate-50 p-3.5 rounded border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-semibold text-slate-800">Prepared by: </span>
            Ronald F. Rivera Jr. (Treasurer) •{' '}
            <span className="font-semibold text-slate-800">Audited by: </span>
            Roland F. Rivera (Auditor)
          </div>
          <div className="text-slate-500">
            Noted by President Prince Eljohn L. Ayo &amp; Adviser Asst. Prof. Michael John V. Francisco
          </div>
        </div>
      </div>

      {/* Filter and Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-lg border border-slate-200 text-xs">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-slate-700">Filter Academic Year:</span>
          <select
            value={selectedAY}
            onChange={(e) => setSelectedAY(e.target.value)}
            className="px-2.5 py-1.5 border border-slate-300 rounded bg-white text-slate-800 font-medium focus:outline-none"
          >
            <option value="all">All Financial Statements ({reports.length})</option>
            {uniqueAYs.map((ay) => (
              <option key={ay} value={ay}>Academic Year {ay}</option>
            ))}
          </select>
        </div>

        <div className="text-slate-500 flex items-center space-x-1.5 text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Complete audited PDFs available for inspection</span>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-all hover:shadow-sm"
          >
            <div>
              {/* Card Meta */}
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-emerald-800 uppercase tracking-wide">
                  Financial Report
                </span>
                <span className="text-slate-500 font-medium">
                  AY {report.academicYear}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-bold font-serif text-slate-900 mb-1">
                {report.title}
              </h2>

              <div className="text-xs text-slate-500 mb-3 flex items-center space-x-2">
                <span>Academic Year: <strong className="text-slate-700">{report.academicYear}</strong></span>
                {report.term && <span>• {report.term}</span>}
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {report.description}
              </p>

              {/* Highlights (if any) */}
              {report.highlights && report.highlights.length > 0 && (
                <div className="mb-4">
                  <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Financial Summary:
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    {report.highlights.map((h, i) => (
                      <li key={i} className="line-clamp-1">{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* File Info */}
              <div className="p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-600 mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 min-w-0">
                  <DollarSign className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="font-mono text-[11px] text-slate-700 truncate">{report.fileName}</span>
                </div>
                {report.fileSize && (
                  <span className="text-[11px] text-slate-500 shrink-0 ml-2">{report.fileSize}</span>
                )}
              </div>
            </div>

            {/* Action Buttons: View Report & Download */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => onViewReport(report)}
                className="flex-1 inline-flex items-center justify-center py-2.5 px-4 bg-[#0D274F] hover:bg-[#153464] text-white rounded text-xs font-semibold transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4 mr-1.5" />
                View Report
              </button>

              <a
                href={report.fileUrl}
                download={report.fileName}
                className="inline-flex items-center justify-center py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-semibold border border-slate-300 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 mr-1.5" />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Official Membership Fee Policy Notice */}
      <section className="bg-slate-50 rounded-lg border border-slate-200 p-6 text-xs text-slate-700 space-y-3">
        <div className="flex items-center space-x-2 text-slate-900 font-bold font-serif text-sm">
          <HelpCircle className="w-4 h-4 text-blue-700" />
          <span>Membership Fee Regulations (Ratified Constitution Article III)</span>
        </div>
        <div className="space-y-2 leading-relaxed text-slate-600">
          <p>
            • <strong>Section 1:</strong> All bonafide students enrolled in the College of Teacher Education are members of the organization regardless of religion or nationality.
          </p>
          <p>
            • <strong>Section 2:</strong> The collection of membership fees officially commences on the fourth (4th) week of classes of each semester.
          </p>
          <p>
            • <strong>Section 4:</strong> The council collects <strong>fifty pesos only (Php 50.00)</strong> per semester, totaling <strong>one hundred pesos only (Php 100.00)</strong> for the entire academic year from CTE students, deposited and accounted by the Council Treasurer.
          </p>
        </div>
        <div className="pt-2 text-slate-500 flex items-center space-x-1.5 text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Every disbursement requires joint authorization by the Council President, Treasurer, and verification by the Auditor and Adviser.</span>
        </div>
      </section>

    </div>
  );
};
