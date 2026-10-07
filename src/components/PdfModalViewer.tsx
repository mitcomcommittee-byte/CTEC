import React from 'react';
import { ReportItem } from '../types';
import { X, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';

interface PdfModalViewerProps {
  report: ReportItem | null;
  onClose: () => void;
}

export const PdfModalViewer: React.FC<PdfModalViewerProps> = ({ report, onClose }) => {
  if (!report) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = report.fileUrl;
    link.download = report.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(report.fileUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-report-title"
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full flex flex-col max-h-[92vh] border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#0D274F] text-white px-5 py-4 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center space-x-3 pr-4 min-w-0">
            <div className="p-2 bg-blue-900 rounded text-amber-300 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 id="modal-report-title" className="text-base sm:text-lg font-bold font-serif text-white truncate">
                {report.title} — {report.academicYear}
              </h2>
              <div className="text-xs text-slate-300 truncate">
                {report.fileName} {report.term ? `• ${report.term}` : ''}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handleOpenInNewTab}
              className="inline-flex items-center px-3 py-1.5 rounded text-xs font-medium bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              title="Open document in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1" />
              <span className="hidden sm:inline">New Tab</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-3 py-1.5 rounded text-xs font-medium bg-blue-700 text-white hover:bg-blue-600 transition-colors cursor-pointer"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Info Strip */}
        <div className="bg-slate-50 px-5 py-2.5 border-b border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
              Verified Council Document
            </span>
            <span>Published: <strong className="text-slate-800 font-medium">{report.datePublished}</strong></span>
            {report.fileSize && <span>Size: {report.fileSize}</span>}
          </div>
          <div className="text-slate-500 text-[11px]">
            College of Teacher Education Council • BatStateU ARASOF-Nasugbu
          </div>
        </div>

        {/* PDF Embedded Viewer Container */}
        <div className="flex-1 bg-slate-100 min-h-[460px] relative overflow-hidden flex flex-col">
          <object
            data={report.fileUrl}
            type="application/pdf"
            className="w-full h-full flex-1 min-h-[440px]"
            title={report.title}
          >
            {/* Fallback if browser PDF plugin is blocked or mobile browser doesn't inline objects */}
            <div className="p-8 text-center flex flex-col items-center justify-center h-full space-y-4">
              <div className="p-4 bg-blue-50 text-blue-900 rounded-full">
                <FileText className="w-12 h-12" />
              </div>
              <div className="max-w-md">
                <h3 className="text-base font-bold text-slate-900 mb-1">{report.fileName}</h3>
                <p className="text-xs text-slate-600 mb-4">
                  {report.description}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handleOpenInNewTab}
                    className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded text-xs font-semibold hover:bg-blue-800 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    Open PDF in Browser
                  </button>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center px-4 py-2 bg-slate-800 text-white rounded text-xs font-semibold hover:bg-slate-900 cursor-pointer"
                  >
                    <Download className="w-4 h-4 mr-1.5" />
                    Download File
                  </button>
                </div>
              </div>
            </div>
          </object>
        </div>

        {/* Modal Footer Summary */}
        <div className="bg-white px-5 py-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-2">
          <div className="truncate max-w-xl">
            <span className="font-semibold text-slate-700">Official Signatories: </span>
            {report.signatories && report.signatories.length > 0 ? (
              <span>{report.signatories.join(' • ')}</span>
            ) : (
              <span>CTEC Executive Board &amp; Faculty Adviser</span>
            )}
          </div>
          <div className="flex items-center space-x-2 self-end sm:self-auto">
            <button
              onClick={onClose}
              className="px-4 py-1.5 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close Viewer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
