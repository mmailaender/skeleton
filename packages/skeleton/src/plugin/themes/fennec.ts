import type { Theme } from './index.js';

const fennec = {
	name: 'fennec',
	properties: {
		'--type-scale-factor': '1.0',
		'--type-scale-1': 'calc(0.75rem * var(--type-scale-factor))',
		'--type-scale-2': 'calc(0.875rem * var(--type-scale-factor))',
		'--type-scale-3': 'calc(1rem * var(--type-scale-factor))',
		'--type-scale-4': 'calc(1.125rem * var(--type-scale-factor))',
		'--type-scale-5': 'calc(1.25rem * var(--type-scale-factor))',
		'--type-scale-6': 'calc(1.5rem * var(--type-scale-factor))',
		'--type-scale-7': 'calc(1.875rem * var(--type-scale-factor))',
		'--type-scale-8': 'calc(2.25rem * var(--type-scale-factor))',
		'--type-scale-9': 'calc(3rem * var(--type-scale-factor))',
		'--type-scale-10': 'calc(3.75rem * var(--type-scale-factor))',
		'--type-scale-11': 'calc(4.5rem * var(--type-scale-factor))',
		'--type-scale-12': 'calc(6rem * var(--type-scale-factor))',
		'--type-scale-13': 'calc(8rem * var(--type-scale-factor))',
		'--base-font-color': '0 0 0',
		'--base-font-color-dark': '255 255 255',
		'--base-font-family': 'Bahnschrift, DIN Alternate, Franklin Gothic Medium, Nimbus Sans Narrow, sans-serif-condensed, sans-serif',
		'--base-font-size': '20px',
		'--base-line-height': 'inherit',
		'--base-font-weight': 'normal',
		'--base-font-style': 'normal',
		'--base-letter-spacing': '0em',
		'--heading-font-color': '0 0 0',
		'--heading-font-color-dark': 'var(--color-secondary-50)',
		'--heading-font-family': 'Bahnschrift, DIN Alternate, Franklin Gothic Medium, Nimbus Sans Narrow, sans-serif-condensed, sans-serif',
		'--heading-font-weight': 'normal',
		'--heading-font-style': 'normal',
		'--heading-letter-spacing': 'inherit',
		'--anchor-font-color': 'var(--color-primary-600)',
		'--anchor-font-color-dark': 'var(--color-primary-500)',
		'--anchor-font-family': 'inherit',
		'--anchor-font-size': 'inherit',
		'--anchor-line-height': 'inherit',
		'--anchor-font-weight': 'inherit',
		'--anchor-font-style': 'inherit',
		'--anchor-letter-spacing': 'inherit',
		'--anchor-text-decoration': 'none',
		'--anchor-text-decoration-hover': 'underline',
		'--anchor-text-decoration-active': 'none',
		'--anchor-text-decoration-focus': 'none',
		'--space-scale-factor': '1.05',
		'--radii-default': '6px',
		'--radii-container': '6px',
		'--border-width-default': '2px',
		'--divide-width-default': '1px',
		'--outline-width-default': '1px',
		'--ring-width-default': '1px',
		'--body-background-color': 'var(--color-surface-50)',
		'--body-background-color-dark': 'var(--color-surface-950)',
		'--color-primary-50': '251 226 182',
		'--color-primary-100': '250 197 147',
		'--color-primary-200': '249 168 111',
		'--color-primary-300': '249 139 76',
		'--color-primary-400': '248 110 40',
		'--color-primary-500': '247 81 5',
		'--color-primary-600': '221 70 12',
		'--color-primary-700': '195 59 19',
		'--color-primary-800': '170 47 25',
		'--color-primary-900': '144 36 32',
		'--color-primary-950': '118 25 39',
		'--color-primary-contrast-dark': 'var(--color-primary-950)',
		'--color-primary-contrast-light': 'var(--color-primary-50)',
		'--color-primary-contrast-50': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-100': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-200': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-300': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-400': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-500': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-600': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-700': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-800': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-900': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-950': 'var(--color-primary-contrast-light)',
		'--color-secondary-50': '255 242 219',
		'--color-secondary-100': '254 235 204',
		'--color-secondary-200': '254 227 188',
		'--color-secondary-300': '253 220 173',
		'--color-secondary-400': '253 212 157',
		'--color-secondary-500': '252 205 142',
		'--color-secondary-600': '226 184 120',
		'--color-secondary-700': '200 162 98',
		'--color-secondary-800': '174 141 75',
		'--color-secondary-900': '148 119 53',
		'--color-secondary-950': '122 98 31',
		'--color-secondary-contrast-dark': 'var(--color-secondary-950)',
		'--color-secondary-contrast-light': 'var(--color-secondary-50)',
		'--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-300': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-400': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-500': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-600': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-700': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',
		'--color-tertiary-50': '233 255 255',
		'--color-tertiary-100': '203 230 229',
		'--color-tertiary-200': '174 205 203',
		'--color-tertiary-300': '144 180 176',
		'--color-tertiary-400': '115 155 150',
		'--color-tertiary-500': '85 130 124',
		'--color-tertiary-600': '73 116 113',
		'--color-tertiary-700': '62 102 102',
		'--color-tertiary-800': '50 87 92',
		'--color-tertiary-900': '39 73 81',
		'--color-tertiary-950': '27 59 70',
		'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
		'--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
		'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',
		'--color-success-50': '212 255 209',
		'--color-success-100': '200 245 192',
		'--color-success-200': '188 235 175',
		'--color-success-300': '175 224 157',
		'--color-success-400': '163 214 140',
		'--color-success-500': '151 204 123',
		'--color-success-600': '127 180 101',
		'--color-success-700': '104 157 78',
		'--color-success-800': '80 133 56',
		'--color-success-900': '57 110 33',
		'--color-success-950': '33 86 11',
		'--color-success-contrast-dark': 'var(--color-success-950)',
		'--color-success-contrast-light': 'var(--color-success-50)',
		'--color-success-contrast-50': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-100': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-200': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-300': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-400': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-500': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-600': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-700': 'var(--color-success-contrast-light)',
		'--color-success-contrast-800': 'var(--color-success-contrast-light)',
		'--color-success-contrast-900': 'var(--color-success-contrast-light)',
		'--color-success-contrast-950': 'var(--color-success-contrast-light)',
		'--color-warning-50': '248 251 223',
		'--color-warning-100': '240 241 201',
		'--color-warning-200': '233 231 179',
		'--color-warning-300': '225 222 156',
		'--color-warning-400': '218 212 134',
		'--color-warning-500': '210 202 112',
		'--color-warning-600': '185 179 90',
		'--color-warning-700': '161 156 67',
		'--color-warning-800': '136 132 45',
		'--color-warning-900': '112 109 22',
		'--color-warning-950': '87 86 0',
		'--color-warning-contrast-dark': 'var(--color-warning-950)',
		'--color-warning-contrast-light': 'var(--color-warning-50)',
		'--color-warning-contrast-50': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-100': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-200': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-300': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-400': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-500': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-600': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-700': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-800': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-950': 'var(--color-warning-contrast-light)',
		'--color-error-50': '255 255 255',
		'--color-error-100': '247 236 240',
		'--color-error-200': '240 217 225',
		'--color-error-300': '232 198 210',
		'--color-error-400': '225 179 195',
		'--color-error-500': '217 160 180',
		'--color-error-600': '193 138 157',
		'--color-error-700': '169 115 135',
		'--color-error-800': '144 93 112',
		'--color-error-900': '120 70 90',
		'--color-error-950': '96 48 67',
		'--color-error-contrast-dark': 'var(--color-error-950)',
		'--color-error-contrast-light': 'var(--color-error-50)',
		'--color-error-contrast-50': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-100': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-200': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-300': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-400': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-500': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-600': 'var(--color-error-contrast-light)',
		'--color-error-contrast-700': 'var(--color-error-contrast-light)',
		'--color-error-contrast-800': 'var(--color-error-contrast-light)',
		'--color-error-contrast-900': 'var(--color-error-contrast-light)',
		'--color-error-contrast-950': 'var(--color-error-contrast-light)',
		'--color-surface-50': '185 192 188',
		'--color-surface-100': '165 171 168',
		'--color-surface-200': '144 151 149',
		'--color-surface-300': '124 130 129',
		'--color-surface-400': '103 110 110',
		'--color-surface-500': '83 89 90',
		'--color-surface-600': '73 78 80',
		'--color-surface-700': '63 67 70',
		'--color-surface-800': '53 56 61',
		'--color-surface-900': '43 45 51',
		'--color-surface-950': '33 34 41',
		'--color-surface-contrast-dark': '0 0 0',
		'--color-surface-contrast-light': '255 255 255',
		'--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-400': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-500': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-950': 'var(--color-surface-contrast-light)'
	},
	metadata: { version: '3.0.0', emoji: '🦊' }
} satisfies Theme;

export default fennec;
