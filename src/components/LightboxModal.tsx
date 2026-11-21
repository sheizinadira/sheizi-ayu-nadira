import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ScrapbookImage } from './ScrapbookImage';

export interface LightboxItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  projectTitle: string;
  year: string;
  story: string;
}

interface LightboxModalProps {
  item: LightboxItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasNavigation?: boolean;
}

export function LightboxModal({
  item,
  onClose,
  onPrev,
  onNext,
  hasNavigation = false,
}: LightboxModalProps) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (hasNavigation && e.key === 'ArrowLeft' && onPrev) onPrev();
      if (hasNavigation && e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onPrev, onNext, hasNavigation]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-denim-950/85 backdrop-blur-sm p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-4 sm:p-6 border-4 border-sunny-400 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-bubble font-bold text-denim-800">
            <span className="bg-sunny-400 text-denim-950 px-2.5 py-0.5 rounded-full border border-denim-950">
              {item.projectTitle}
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{item.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pratinjau foto"
            className="w-10 h-10 rounded-full bg-denim-900 hover:bg-sunny-400 text-white hover:text-denim-950 border-2 border-denim-950 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunny-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-denim-900 border-2 border-denim-950">
          <ScrapbookImage
            src={item.src}
            alt={item.alt}
            fallbackLabel={item.title}
            className="w-full h-full object-contain bg-denim-950"
          />

          {hasNavigation && onPrev && onNext && (
            <>
              <button
                type="button"
                onClick={onPrev}
                aria-label="Foto sebelumnya"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-sunny-400 text-denim-950 border-2 border-denim-950 shadow-lg flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunny-500"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Foto berikutnya"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-sunny-400 text-denim-950 border-2 border-denim-950 shadow-lg flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunny-500"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        <div className="pt-4 space-y-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 id="lightbox-title" className="font-hand text-3xl font-bold text-denim-950">
              {item.title}
            </h3>
            <span className="font-bubble text-xs font-bold text-denim-700">
              {item.subtitle}
            </span>
          </div>
          <p className="font-sans text-sm text-slate-700 font-medium leading-relaxed">
            {item.story}
          </p>
        </div>
      </div>
    </div>
  );
}
