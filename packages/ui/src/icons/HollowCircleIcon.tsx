import {baseColors} from '../variables/colors.stylex';

export function HollowCircleIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox="0 0 18 18"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      stroke={baseColors.icon}
      {...props}>
      <circle cx="9.00005" cy="8.9998" r="7.2" strokeWidth="1.4" />
    </svg>
  );
}
