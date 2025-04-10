import {ComponentProps} from 'react';

import {baseColors} from '../variables/colors.stylex';

export function InfoIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      stroke={baseColors.textSubdued}
      {...props}>
      <g clipPath="url(#clip0_17465_45)">
        <path
          d="M5 3.41667V5.36111M9 5.5C9 7.70914 7.20914 9.5 5 9.5C2.79086 9.5 1 7.70914 1 5.5C1 3.29086 2.79086 1.5 5 1.5C7.20914 1.5 9 3.29086 9 5.5ZM5.14286 7.5C5.14286 7.5789 5.0789 7.64286 5 7.64286C4.9211 7.64286 4.85714 7.5789 4.85714 7.5C4.85714 7.4211 4.9211 7.35714 5 7.35714C5.0789 7.35714 5.14286 7.4211 5.14286 7.5ZM4.99821 7.49821H5.00155V7.50178H4.99821V7.49821Z"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_17465_45">
          <rect
            width="10"
            height="10"
            fill="none"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
