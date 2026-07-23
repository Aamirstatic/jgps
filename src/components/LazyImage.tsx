import NextImage, { ImageProps } from 'next/image';

/**
 * Drop-in replacement for next/image.
 * - If `priority` is passed, loads eagerly (no lazy loading).
 * - Otherwise, defaults to lazy loading.
 */
export default function Image({ priority, loading = 'lazy', ...props }: ImageProps) {
  if (priority) {
    return <NextImage {...props} priority />;
  }
  return <NextImage {...props} loading={loading} />;
}

export type { ImageProps };
