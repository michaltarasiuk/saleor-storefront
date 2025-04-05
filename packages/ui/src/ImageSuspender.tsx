import NextImage, {type ImageProps} from 'next/image';

const imageCache = new Set<string>();

function useSuspenseImage(src: string) {
  try {
    if (!imageCache.has(src)) {
      const {promise, resolve} = Promise.withResolvers();
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.add(src);
        resolve(null);
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

export function ImageSuspender({src, ...props}: ImageProps) {
  useSuspenseImage(getImageSource(src));
  return <NextImage src={src} {...props} />;
}

function getImageSource(src: ImageProps['src']) {
  if (typeof src !== 'string') {
    if ('default' in src) {
      return src.default.src;
    } else {
      return src.src;
    }
  }
  return src;
}
