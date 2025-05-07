import {baseColors} from '../variables/colors.stylex';

export function ErrorIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox="0 0 18 18"
      fill="none"
      stroke={baseColors.icon}
      {...props}>
      <path
        d="M6.30005 6.2998L9.00005 8.9998M9.00005 8.9998L11.7 11.6998M9.00005 8.9998L11.7 6.2998M9.00005 8.9998L6.30005 11.6998M16.2 8.9998C16.2 12.9763 12.9765 16.1998 9.00005 16.1998C5.0236 16.1998 1.80005 12.9763 1.80005 8.9998C1.80005 5.02335 5.0236 1.7998 9.00005 1.7998C12.9765 1.7998 16.2 5.02335 16.2 8.9998Z"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
