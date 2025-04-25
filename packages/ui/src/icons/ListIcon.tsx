import {baseColors} from '../variables/colors.stylex';

export function ListIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox="0 0 18 18"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      stroke={baseColors.icon}
      {...props}>
      <path
        d="M6.2998 9H15.2998M6.2998 4.5H15.2998M6.2998 13.5H15.2998"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.7062 4.5H2.7002V4.50643H2.7062V4.5Z"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.7062 9H2.7002V9.00643H2.7062V9Z"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.7062 13.5H2.7002V13.5064H2.7062V13.5Z"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="2.69986" cy="4.49967" r="0.128571" strokeWidth="1.4" />
      <circle cx="2.69986" cy="8.99967" r="0.128571" strokeWidth="1.4" />
      <circle cx="2.69986" cy="13.4997" r="0.128571" strokeWidth="1.4" />
    </svg>
  );
}
