import {ComponentProps} from 'react';

import {baseColors} from '../tokens.stylex';

export function ProfileIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      {...props}>
      <path
        d="M9.67465 33.0023C12.8511 30.2128 17.2015 28.4929 22.0001 28.4929C26.7988 28.4929 31.1491 30.2128 34.3256 33.0023M39.3159 21.9995C39.3159 31.5628 31.5634 39.3153 22.0001 39.3153C12.4369 39.3153 4.68433 31.5628 4.68433 21.9995C4.68433 12.4363 12.4369 4.68374 22.0001 4.68374C31.5634 4.68374 39.3159 12.4363 39.3159 21.9995ZM26.3291 17.6706C26.3291 20.0614 24.3909 21.9995 22.0001 21.9995C19.6093 21.9995 17.6712 20.0614 17.6712 17.6706C17.6712 15.2798 19.6093 13.3416 22.0001 13.3416C24.3909 13.3416 26.3291 15.2798 26.3291 17.6706Z"
        stroke={baseColors.textSubdued}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
