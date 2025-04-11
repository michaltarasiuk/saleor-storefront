import {isBrowserEnvironment} from '@repo/utils/execution-environment';
import NextImage, {
  type ImageLoaderProps,
  type ImageProps,
  type StaticImageData,
} from 'next/image';

const imageCache = new Set<string>();

const DefaultWidth = 640 satisfies ImageLoaderProps['width'];
const DefaultQuality = 75 satisfies ImageLoaderProps['quality'];

export function SuspenseImage(props: ImageProps) {
  useSuspenseImage(props);
  return (
    <NextImage
      loader={imageLoaderProps =>
        imageLoader({...imageLoaderProps, width: DefaultWidth})
      }
      {...props}
    />
  );
}

function useSuspenseImage(props: Pick<ImageProps, 'src' | 'quality'>) {
  if (!isBrowserEnvironment) {
    throw new Error('SuspenseImage can only be used in the browser.');
  }
  const src = resolveImageSrc(props.src);
  if (!imageCache.has(src)) {
    const {promise, resolve, reject} = Promise.withResolvers();
    const img = new Image();
    img.src = imageLoader({
      src,
      width: DefaultWidth,
      ...(props.quality && {quality: Number(props.quality)}),
    });
    img.onload = () => {
      imageCache.add(src);
      resolve(null);
    };
    img.onerror = () => {
      imageCache.add(src);
      reject(new Error(`Failed to load image: ${src}`));
    };
    throw promise;
  }
}

function imageLoader({src, width, quality = DefaultQuality}: ImageLoaderProps) {
  const url = new URL('/_next/image', window.location.origin);
  url.searchParams.set('url', src);
  url.searchParams.set('w', String(width));
  url.searchParams.set('q', String(quality));
  return String(url);
}

function resolveImageSrc(src: ImageProps['src']) {
  if (typeof src === 'string') {
    return src;
  }
  let staticImageData: StaticImageData;
  if ('default' in src) {
    staticImageData = src.default;
  } else {
    staticImageData = src;
  }
  return staticImageData.src;
}
