import React, { useState } from 'react';
import { ReportItem } from '../types';
import { FileText, Download, Eye, Upload, CheckCircle2, Calendar, FileCheck2 } from 'lucide-react';

interface AccomplishmentReportsPageProps {
  reports: ReportItem[];
  onViewReport: (report: ReportItem) => void;
  onOpenUploadModal: () => void;
}

export const AccomplishmentReportsPage: React.FC<AccomplishmentReportsPageProps> = ({
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
            Accomplishment Reports
          </h1>
          <p className="text-sm text-slate-700 mt-2 max-w-2xl leading-relaxed">
            This section contains the accomplishment reports of the College of Teacher Education Council. These reports provide information about the activities, projects, and accomplishments of the council.
          </p>
        </div>

        {/* Upload Button for Council Officers */}
        <button
          onClick={onOpenUploadModal}
          className="inline-flex items-center px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer self-start sm:self-auto shrink-0 shadow-xs"
        >
          <Upload className="w-4 h-4 mr-2" />
          Add / Upload PDF Report
        </button>
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
            <option value="all">All Academic Years ({reports.length})</option>
            {uniqueAYs.map((ay) => (
              <option key={ay} value={ay}>Academic Year {ay}</option>
            ))}
          </select>
        </div>

        <div className="text-slate-500 flex items-center space-x-1.5 text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Real PDF files available for viewing and direct download</span>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReports.map((report) => {
          const isHistorical = report.academicYear === '2025–2026';
          const isCurrent = report.academicYear === '2026–2027';

          return (
            <div
              key={report.id}
              className={`bg-white rounded-lg p-6 shadow-xs flex flex-col justify-between transition-all hover:shadow-sm border ${
                isCurrent
                  ? 'border-blue-300 ring-1 ring-blue-100'
                  : 'border-amber-200/80 bg-amber-50/10'
              }`}
            >
              <div>
                {/* Card Meta & Year Badge */}
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-bold text-blue-900 uppercase tracking-wide">
                    Accomplishment Report
                  </span>
                  <span
                    className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                      isCurrent
                        ? 'bg-blue-100 text-blue-900'
                        : 'bg-amber-100 text-amber-900 border border-amber-300/60'
                    }`}
                  >
                    {isCurrent ? 'Current AY 2026–2027' : 'Historical Archive AY 2025–2026'}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold font-serif text-slate-900 mb-1">
                  {report.title}
                </h2>

                <div className="text-xs text-slate-500 mb-3 flex items-center space-x-2">
                  <span>Academic Year: <strong className="text-slate-800 font-semibold">{report.academicYear}</strong></span>
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
                      {isHistorical ? 'AY 2025–2026 Accomplishments:' : 'Report Highlights:'}
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      {report.highlights.map((h, i) => (
                        <li key={i} className="line-clamp-1">{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Signatories */}
                {report.signatories && report.signatories.length > 0 && (
                  <div className="mb-4 p-2.5 bg-slate-50 rounded border border-slate-100 text-[11px] text-slate-600">
                    <span className="font-semibold text-slate-700">
                      {isHistorical ? 'Historical Signatories (AY 2025–2026): ' : 'Council Signatories: '}
                    </span>
                    <span>{report.signatories.join(' • ')}</span>
                  </div>
                )}

                {/* File Info */}
                <div className="p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-600 mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 min-w-0">
                    <FileText className="w-4 h-4 text-blue-700 shrink-0" />
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
                  className="flex-1 inline-flex items-center justify-center py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded text-xs font-semibold transition-colors cursor-pointer"
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
          );
        })}
      </div>

      {/* Summary of 2026–2027 Flagship Planned & Executed Activities */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center space-x-2.5 mb-2">
          <Calendar className="w-5 h-5 text-[#0D274F]" />
          <h2 className="text-lg sm:text-xl font-bold font-serif text-[#0D274F]">
            Council Activity Schedule &amp; Execution Highlights
          </h2>
        </div>
        <p className="text-xs text-slate-600 mb-6">
          Official planned activities submitted and approved in the CTEC renewal documentation:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                <th className="py-2.5 px-3">Activity / Project Title</th>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3">Beneficiary</th>
                <th className="py-2.5 px-3">Core Values</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">PAGTATAG: Teach &amp; Inspire</td>
                <td className="py-2.5 px-3">Aug 17, 2026</td>
                <td className="py-2.5 px-3">CTE Students &amp; Faculty</td>
                <td className="py-2.5 px-3">Excellence, Resilience</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">Turn-Over Ceremony of Key Responsibility</td>
                <td className="py-2.5 px-3">Aug 22, 2026</td>
                <td className="py-2.5 px-3">Incoming &amp; Outgoing Officers</td>
                <td className="py-2.5 px-3">Integrity, Patriotism</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">Pencil of Hope for Future Teachers</td>
                <td className="py-2.5 px-3">Aug 24, 2026</td>
                <td className="py-2.5 px-3">Graduating LET Examinees</td>
                <td className="py-2.5 px-3">Service, Faith</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">CTE Freshmen Orientation</td>
                <td className="py-2.5 px-3">Aug 29, 2026</td>
                <td className="py-2.5 px-3">241 Freshmen Students</td>
                <td className="py-2.5 px-3">Patriotism, Resilience</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">PANANALIKSIK: Academic Research Strategies</td>
                <td className="py-2.5 px-3">Aug 30, 2026</td>
                <td className="py-2.5 px-3">3rd &amp; 4th Year Students</td>
                <td className="py-2.5 px-3">Excellence, Resilience</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">Tanda ng Apresasyon (Teachers&apos; Day Interactive Board)</td>
                <td className="py-2.5 px-3">Sep 6, 2026</td>
                <td className="py-2.5 px-3">CTE Faculty Mentors</td>
                <td className="py-2.5 px-3">Service, Loyalty</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">GABAY: Holy Mass for LET Takers</td>
                <td className="py-2.5 px-3">Sep 12, 2026</td>
                <td className="py-2.5 px-3">September 2026 LET Takers</td>
                <td className="py-2.5 px-3">Faith, Service</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">A.L.A.Y. 2026: Spoken Poetry for Mentors</td>
                <td className="py-2.5 px-3">Sep 19, 2026</td>
                <td className="py-2.5 px-3">CTE Students &amp; Mentors</td>
                <td className="py-2.5 px-3">Service, Creativity</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">AGAPAY 2.0: Peer Tutoring Program</td>
                <td className="py-2.5 px-3">Nov 23 – Dec 4, 2026</td>
                <td className="py-2.5 px-3">Freshmen &amp; Peer Tutors</td>
                <td className="py-2.5 px-3">Service, Excellence</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">CTE Henyo: Batanguenyo, Batang Henyo Quiz Bee</td>
                <td className="py-2.5 px-3">Nov 28, 2026</td>
                <td className="py-2.5 px-3">Inter-Program Majors</td>
                <td className="py-2.5 px-3">Excellence, Faith</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-slate-900">Community Outreach: Project BIGKIS</td>
                <td className="py-2.5 px-3">Dec 4, 2026</td>
                <td className="py-2.5 px-3">Orphaned Children</td>
                <td className="py-2.5 px-3">Service, Faith</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Note on Updating Documents */}
      <div className="p-4 bg-slate-100 rounded-md border border-slate-200 text-xs text-slate-600 flex items-start space-x-2">
        <FileCheck2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <p>
          Council officers may upload updated accomplishment summaries at the end of each grading term or upon completion of major university milestones. All uploaded documents are archived in conformance with Batangas State University student organization guidelines.
        </p>
      </div>

    </div>
  );
};
