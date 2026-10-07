import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LogoContextType {
  logoUrl: string;
  isCustom: boolean;
  updateLogoFromFile: (file: File) => Promise<{ success: boolean; error?: string }>;
  resetToDefault: () => void;
}

const DEFAULT_LOGO_URL = '/ctec-logo.svg';
const STORAGE_KEY = 'ctec_custom_logo';

const LogoContext = createContext<LogoContextType>({
  logoUrl: DEFAULT_LOGO_URL,
  isCustom: false,
  updateLogoFromFile: async () => ({ success: false }),
  resetToDefault: () => {}
});

export const useLogo = () => useContext(LogoContext);

interface LogoProviderProps {
  children: ReactNode;
}

export const LogoProvider: React.FC<LogoProviderProps> = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    } catch {
      // ignore
    }
    return DEFAULT_LOGO_URL;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      return false;
    }
  });

  // Helper to optimize and convert an image file to a clean, lightweight PNG data URL
  const optimizeImageFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('Failed to read image file'));
      reader.onload = (e) => {
        const img = new Image();
        img.onerror = () => reject(new Error('Invalid or corrupted image format'));
        img.onload = () => {
          try {
            // Target max dimension 512px for crisp display and optimal storage size
            const maxDim = 512;
            let width = img.width;
            let height = img.height;

            if (width > height) {
              if (width > maxDim) {
                height = Math.round((height * maxDim) / width);
                width = maxDim;
              }
            } else {
              if (height > maxDim) {
                width = Math.round((width * maxDim) / height);
                height = maxDim;
              }
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
              // Fallback to raw data url if canvas is unavailable
              resolve(e.target?.result as string);
              return;
            }

            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(img, 0, 0, width, height);

            // Export as PNG
            const optimizedDataUrl = canvas.toDataURL('image/png', 0.95);
            resolve(optimizedDataUrl);
          } catch {
            // Fallback to original read result
            resolve(e.target?.result as string);
          }
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  const updateLogoFromFile = async (file: File): Promise<{ success: boolean; error?: string }> => {
    try {
      if (!file.type.startsWith('image/') && !file.name.match(/\.(jpg|jpeg|png|svg|webp)$/i)) {
        return { success: false, error: 'Please choose an image file (.png, .jpg, .jpeg, or .svg).' };
      }

      const dataUrl = await optimizeImageFile(file);

      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, dataUrl);
      } catch (storageError) {
        console.warn('Could not persist to localStorage:', storageError);
      }

      setLogoUrl(dataUrl);
      setIsCustom(true);
      return { success: true };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to process logo image.';
      return { success: false, error: message };
    }
  };

  const resetToDefault = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setLogoUrl(DEFAULT_LOGO_URL);
    setIsCustom(false);
  };

  return (
    <LogoContext.Provider
      value={{
        logoUrl,
        isCustom,
        updateLogoFromFile,
        resetToDefault
      }}
    >
      {children}
    </LogoContext.Provider>
  );
};
