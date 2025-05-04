'use client';
import type {
  ImageLoaderProps,
  ImageProps,
  StaticImageData,
} from 'next/image';
import {useIsSSR} from 'react-aria';

import {Image} from './Image';

const DefaultWidth = 640 satisfies ImageLoaderProps['width'];
const DefaultQuality = 75 satisfies ImageLoaderProps['quality'];

const imageCache = new Set<string>();

export function SuspenseImage(props: ImageProps) {
  const isSSR = useIsSSR();
  if (isSSR) {
    throw new Error('SuspenseImage can only be used in the browser.');
  }
  const src = getImageSrc(props.src);
  if (!imageCache.has(src)) {
    const {promise, resolve, reject} = Promise.withResolvers();
    const img = new window.Image();
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
  return (
    <Image
      loader={imageLoaderProps =>
        imageLoader({...imageLoaderProps, width: DefaultWidth})
      }
      {...props}
    />
  );
}

function imageLoader({src, width, quality = DefaultQuality}: ImageLoaderProps) {
  const url = new URL('/_next/image', window.location.origin);
  url.searchParams.set('url', src);
  url.searchParams.set('w', String(width));
  url.searchParams.set('q', String(quality));
  return String(url);
}

function getImageSrc(src: ImageProps['src']) {
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
