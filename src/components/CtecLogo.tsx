import React, { useState } from 'react';
import { useLogo } from '../context/LogoContext';

interface CtecLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CtecLogo: React.FC<CtecLogoProps> = ({ className = '', size = 'md' }) => {
  const { logoUrl } = useLogo();
  const [loadFailed, setLoadFailed] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24 md:w-28 md:h-28',
    xl: 'w-32 h-32 md:w-40 md:h-40'
  };

  const dimension = sizeClasses[size];

  // If loading current logo URL fails, try default svg or fallback
  const handleError = () => {
    setLoadFailed(true);
  };

  if (!loadFailed) {
    return (
      <img
        key={logoUrl} // re-mounts on new URL to trigger clean image load
        src={logoUrl}
        alt="College of Teacher Education Council Official Seal"
        className={`rounded-full shadow-sm object-contain ${dimension} ${className}`}
        onError={handleError}
      />
    );
  }

  // Graceful fallback to inline vector seal if image fails
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-[#0D274F] border-2 border-[#DFAC42] shadow-sm text-amber-300 font-serif font-bold text-center select-none ${dimension} ${className}`}>
      <span className="text-xs uppercase tracking-tighter">CTEC</span>
    </div>
  );
};
