import type {Config} from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				ring: 'hsl(var(--ring))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				white: 'hsl(var(--white))',
				background: 'hsl(var(--background))',
				'faded-black': 'hsl(var(--faded-black))',
				grey: {
					DEFAULT: 'hsl(var(--grey))',
					light: 'hsl(var(--grey-light))',
					dark: 'hsl(var(--grey-dark))',
					foreground: 'hsl(var(--grey-foreground))',
				},
				subdued: {
					DEFAULT: 'hsl(var(--subdued))',
					foreground: 'hsl(var(--subdued-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				blue: {
					DEFAULT: 'hsl(var(--blue))',
					hovered: 'hsl(var(--blue-hovered))',
					foreground: 'hsl(var(--blue-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
			},
			borderRadius: {
				md: `calc(var(--radius) - 2px)`,
			},
			width: {
				'toast-dektop': 'var(--toast-desktop-width)',
				'toast-mobile': 'var(--toast-mobile-width)',
			},
			keyframes: {
				fadeIn: {
					from: {
						opacity: '0.3',
					},
					to: {
						opacity: '1',
					},
				},
			},
			animation: {
				fadeIn: 'fadeIn .4s ease-in-out',
			},
		},
		fontFamily: {
			sans: ['var(--font-sans)'],
		},
	},
	plugins: [require('tailwindcss-animate')],
};

export default config;
