import React, { useState, useRef } from 'react';
import { ReportItem } from '../types';
import { X, Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

interface ReportUploadModalProps {
  isOpen: boolean;
  defaultType: 'accomplishment' | 'financial';
  onClose: () => void;
  onAddReport: (report: ReportItem) => void;
}

export const ReportUploadModal: React.FC<ReportUploadModalProps> = ({
  isOpen,
  defaultType,
  onClose,
  onAddReport
}) => {
  const [type, setType] = useState<'accomplishment' | 'financial'>(defaultType);
  const [academicYear, setAcademicYear] = useState('2026–2027');
  const [term, setTerm] = useState('First Semester');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      if (selected.type !== 'application/pdf' && !selected.name.toLowerCase().endsWith('.pdf')) {
        setError('Please select an actual PDF (.pdf) document file.');
        setFile(null);
        return;
      }
      setError(null);
      setFile(selected);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Please choose a PDF report file to upload.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create a Blob URL so the PDF can be immediately viewed in browser and downloaded
      const blobUrl = URL.createObjectURL(file);
      const fileSizeKb = Math.round(file.size / 1024);
      const formattedSize = fileSizeKb > 1024 ? `${(fileSizeKb / 1024).toFixed(1)} MB` : `${fileSizeKb} KB`;

      const newReport: ReportItem = {
        id: `upload-${Date.now()}`,
        type,
        title: type === 'accomplishment' ? 'Accomplishment Report' : 'Financial Report',
        academicYear,
        term,
        fileName: file.name,
        fileUrl: blobUrl,
        fileSize: formattedSize,
        datePublished: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        status: 'Official',
        description: description.trim() || `Official ${type} report for Academic Year ${academicYear} submitted by council officers.`,
        isCustom: true
      };

      onAddReport(newReport);
      setIsSubmitting(false);
      onClose();
    } catch {
      setError('Failed to process document file. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0D274F] text-white px-5 py-4 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 bg-blue-900 rounded text-amber-300">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold font-serif text-base text-white">
                Upload Council Report File
              </h3>
              <p className="text-xs text-slate-300">
                Add an official PDF document for students and stakeholders
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Report Type */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Report Category <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setType('accomplishment')}
                className={`py-2 px-3 rounded text-left border font-medium cursor-pointer transition-colors ${
                  type === 'accomplishment'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                    : 'border-slate-300 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Accomplishment Report
              </button>
              <button
                type="button"
                onClick={() => setType('financial')}
                className={`py-2 px-3 rounded text-left border font-medium cursor-pointer transition-colors ${
                  type === 'financial'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-semibold'
                    : 'border-slate-300 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Financial Report
              </button>
            </div>
          </div>

          {/* Academic Year */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="ay-select" className="block font-semibold text-slate-700 mb-1">
                Academic Year <span className="text-red-500">*</span>
              </label>
              <select
                id="ay-select"
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-600 focus:outline-none bg-white"
              >
                <option value="2026–2027">2026–2027</option>
                <option value="2025–2026">2025–2026</option>
                <option value="2024–2025">2024–2025</option>
                <option value="2023–2024">2023–2024</option>
              </select>
            </div>

            <div>
              <label htmlFor="term-input" className="block font-semibold text-slate-700 mb-1">
                Term / Coverage
              </label>
              <input
                id="term-input"
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="e.g. First Semester / Annual"
                className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-600 focus:outline-none"
              />
            </div>
          </div>

          {/* File Picker */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Select Actual PDF Document (.pdf) <span className="text-red-500">*</span>
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-lg p-5 text-center cursor-pointer bg-slate-50/70 hover:bg-slate-50 transition-colors"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />
              {file ? (
                <div className="flex items-center justify-center space-x-2 text-slate-800">
                  <FileText className="w-6 h-6 text-blue-700" />
                  <div className="text-left">
                    <div className="font-semibold text-xs truncate max-w-xs">{file.name}</div>
                    <div className="text-[11px] text-slate-500">{(file.size / 1024).toFixed(1)} KB • Click to change file</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <FileText className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="font-medium text-slate-700 text-xs">Click here to browse your computer for a PDF report</p>
                  <p className="text-[11px] text-slate-500">Supports official .pdf document files</p>
                </div>
              )}
            </div>
          </div>

          {/* Brief Description */}
          <div>
            <label htmlFor="desc-input" className="block font-semibold text-slate-700 mb-1">
              Brief Description / Summary (Optional)
            </label>
            <textarea
              id="desc-input"
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short statement explaining the activities or funds covered in this report."
              className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-600 focus:outline-none text-xs"
            />
          </div>

          {/* Notice */}
          <div className="p-2.5 bg-blue-50/80 rounded border border-blue-100 text-[11px] text-blue-900 flex items-start space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
            <span>
              Once added, students will immediately be able to click <strong>View Report</strong> to read the PDF and <strong>Download</strong> to save the file.
            </span>
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 rounded font-medium text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded font-semibold cursor-pointer transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Uploading...' : 'Save & Publish Report'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
