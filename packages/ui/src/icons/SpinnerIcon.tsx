import {ComponentProps} from 'react';

import {baseColors} from '../variables/colors.stylex';

export function SpinnerIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox="0 0 20 20"
      preserveAspectRatio="xMidYMid meet"
      fill={baseColors.icon}
      {...props}>
      <g clipPath="url(#clip0_1809_24780)">
        <path d="M20 10C20 15.5231 15.5231 20 10 20C4.47688 20 0 15.5231 0 10C0 4.47688 4.47688 0 10 0V1.25C5.1675 1.25 1.25 5.1675 1.25 10C1.25 14.8325 5.1675 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10H20Z" />
      </g>
      <defs>
        <clipPath id="clip0_1809_24780">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
