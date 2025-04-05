import NextImage, {type ImageProps} from 'next/image';

const imageCache = new Set<string>();

function useSuspenseImage(src: string) {
  try {
    if (!imageCache.has(src)) {
      const {promise, resolve, reject} = Promise.withResolvers();
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.add(src);
        resolve(null);
      };
      img.onerror = () => {
        imageCache.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      throw promise;
    }
  } catch (e) {
    // Image constructor throws a ReferenceError in the server environment
    if (e instanceof ReferenceError) {
      return;
    } else {
      throw e;
    }
  }
}

export function SuspenseImage({src, ...props}: ImageProps) {
  useSuspenseImage(resolveImageSource(src));
  return <NextImage src={src} {...props} />;
}

function resolveImageSource(src: ImageProps['src']) {
  if (typeof src !== 'string') {
    if ('default' in src) {
      return src.default.src;
    } else {
      return src.src;
    }
  }
  return src;
}
