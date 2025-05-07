import {baseColors} from '../variables/colors.stylex';

export function ReturnIcon(props: React.ComponentProps<'svg'>) {
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
        d="M16.2 5.39565L14.5654 2.96616C14.4531 2.79929 14.2651 2.69922 14.064 2.69922H9.00005M16.2 5.39565H9.00005M16.2 5.39565V10.2492M1.80005 5.39565V14.6949C1.80005 15.0287 2.0706 15.2992 2.40433 15.2992H15.5958C15.9295 15.2992 16.2 15.0287 16.2 14.6949V10.2492M1.80005 5.39565L3.43472 2.96616C3.547 2.79929 3.73495 2.69922 3.93608 2.69922H9.00005M1.80005 5.39565H9.00005M9.00005 5.39565V2.69922M16.2 10.2492H9.00005M9.00005 10.2492L11.375 7.87422M9.00005 10.2492L11.375 12.6242"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
