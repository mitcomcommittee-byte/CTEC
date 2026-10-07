import React, { useState, useRef } from 'react';
import { useLogo } from '../context/LogoContext';
import { X, Upload, RotateCcw, Check, HelpCircle, AlertCircle, FileImage } from 'lucide-react';

interface LogoChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoChangeModal: React.FC<LogoChangeModalProps> = ({
  isOpen,
  onClose
}) => {
  const { logoUrl, isCustom, updateLogoFromFile, resetToDefault } = useLogo();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIsProcessing(true);
      setErrorMessage(null);
      setSuccessMessage(null);

      const result = await updateLogoFromFile(file);
      setIsProcessing(false);

      if (result.success) {
        setSuccessMessage(`Successfully updated logo from "${file.name}"! The new logo is now active across the site.`);
      } else {
        setErrorMessage(result.error || 'Failed to update logo.');
      }
    }
  };

  const handleReset = () => {
    resetToDefault();
    setSuccessMessage('Reset to the official CTEC default seal.');
    setErrorMessage(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden text-xs">
        
        {/* Header */}
        <div className="bg-[#0D274F] text-white px-5 py-4 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 bg-blue-900 rounded text-amber-300">
              <FileImage className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold font-serif text-base text-white">
                Change Council Logo
              </h3>
              <p className="text-[11px] text-slate-300">
                Upload your council seal image or replace the project file
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

        <div className="p-5 space-y-5">
          {/* Status Messages */}
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded flex items-center space-x-2">
              <Check className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Current Logo Preview */}
          <div className="flex items-center space-x-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="w-20 h-20 rounded-full border-2 border-slate-300 bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
              <img
                src={logoUrl}
                alt="Current Active Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="space-y-1">
              <div className="font-bold text-slate-900 text-sm">Active Logo Preview</div>
              <div className="text-[11px] text-slate-600">
                {isCustom ? (
                  <span className="text-blue-700 font-semibold">• Custom uploaded image active</span>
                ) : (
                  <span className="text-slate-600">• Official CTEC vector seal active</span>
                )}
              </div>
              {isCustom && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-1 inline-flex items-center text-[11px] text-red-600 hover:text-red-800 font-medium underline cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 mr-1" />
                  Restore default official seal
                </button>
              )}
            </div>
          </div>

          {/* Direct File Upload Control */}
          <div className="space-y-2">
            <div className="font-bold text-slate-800 uppercase tracking-wide text-[11px]">
              Upload New Logo Image (Instant)
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/svg+xml,image/webp"
              className="hidden"
              onChange={handleFileSelected}
            />

            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-blue-400 hover:border-blue-600 bg-blue-50/40 hover:bg-blue-50 rounded-lg p-5 text-center cursor-pointer transition-colors"
            >
              <Upload className="w-8 h-8 text-blue-700 mx-auto mb-2" />
              <div className="font-semibold text-slate-900 text-xs">
                {isProcessing ? 'Processing image...' : 'Click to select logo image from your device'}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Supports .png, .jpg, .jpeg, or .svg files
              </div>
            </div>
          </div>

          {/* Permanent File Replacement Instructions */}
          <div className="p-3.5 bg-slate-100 rounded-lg border border-slate-200 space-y-1.5 text-slate-600 text-[11px]">
            <div className="font-semibold text-slate-800 flex items-center">
              <HelpCircle className="w-3.5 h-3.5 mr-1 text-slate-600" />
              Permanent Codebase File Location:
            </div>
            <p>
              You can also permanently replace the logo file inside the project&apos;s <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-800 border border-slate-200">public/</code> directory:
            </p>
            <div className="font-mono bg-white p-2 rounded border border-slate-200 text-slate-800 text-[11px]">
              public/ctec-logo.svg
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end pt-1">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#0D274F] hover:bg-[#153464] text-white rounded font-medium cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
