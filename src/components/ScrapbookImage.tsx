import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ScrapbookImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ScrapbookImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel,
}: ScrapbookImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-denim-800 via-denim-900 to-denim-950 flex flex-col items-center justify-center p-4 text-center text-sunny-300">
        <ImageOff className="w-8 h-8 mb-2 opacity-80" aria-hidden="true" />
        <span className="font-bubble text-xs font-bold leading-snug text-white">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
