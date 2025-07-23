
'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

// Fallback SVG as base64 (small placeholder image)
const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4=';

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = ERROR_IMG_SRC,
  ...rest
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...rest}
      src={hasError ? fallbackSrc : src}
      alt={alt}
      onError={() => setHasError(true)}
      unoptimized={hasError} // allow base64 fallback without optimization
    />
  );
}
