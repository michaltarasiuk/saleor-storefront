import {baseColors} from '../variables/colors.stylex';

export function CheckmarkIcon(props: React.ComponentProps<'svg'>) {
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
        d="M15.5572 3.59961L8.00072 14.9696C7.84324 15.2066 7.50812 15.2398 7.30725 15.0383L1.80005 9.5139"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
