import { ThemeProviderProps } from './types.ts';
import type { FC } from 'react';
export declare const typography: {
    '--font-headline-medium': string;
    '--font-headline-small': string;
    '--font-title-medium': string;
    '--font-title-small': string;
    '--font-body': string;
    '--font-body-small': string;
    '--font-body-extra-small': string;
    '--font-title-large': string;
    '--font-label': string;
};
export declare const colors: {
    '--jp-black': string;
    '--jp-black-80': string;
    '--jp-white': string;
    '--jp-white-off': string;
    '--jp-gray': string;
    '--jp-gray-0': string;
    '--jp-gray-5': string;
    '--jp-gray-10': string;
    '--jp-gray-20': string;
    '--jp-gray-40': string;
    '--jp-gray-50': string;
    '--jp-gray-60': string;
    '--jp-gray-70': string;
    '--jp-gray-80': string;
    '--jp-gray-90': string;
    '--jp-gray-off': string;
    '--jp-red-0': string;
    '--jp-red-5': string;
    '--jp-red-40': string;
    '--jp-red-50': string;
    '--jp-red-60': string;
    '--jp-red-70': string;
    '--jp-red-80': string;
    '--jp-red': string;
    '--jp-yellow-5': string;
    '--jp-yellow-10': string;
    '--jp-yellow-20': string;
    '--jp-yellow-30': string;
    '--jp-yellow-40': string;
    '--jp-yellow-50': string;
    '--jp-yellow-60': string;
    '--jp-blue-20': string;
    '--jp-blue-40': string;
    '--jp-pink': string;
    '--jp-green-0': string;
    '--jp-green-5': string;
    '--jp-green-10': string;
    '--jp-green-20': string;
    '--jp-green-30': string;
    '--jp-green-40': string;
    '--jp-green-50': string;
    '--jp-green-60': string;
    '--jp-green-70': string;
    '--jp-green-80': string;
    '--jp-green-90': string;
    '--jp-green-100': string;
    '--jp-green': string;
    '--jp-green-primary': string;
    '--jp-green-secondary': string;
};
export declare const borders: {
    '--jp-border-radius': string;
    '--jp-menu-border-height': string;
    '--jp-underline-thickness': string;
};
export declare const spacing: {
    '--spacing-base': string;
};
/**
 * ThemeProvider React component.
 *
 * @param {ThemeProviderProps} props - Component properties.
 * @return {ReactNode}        ThemeProvider component.
 */
declare const ThemeProvider: FC<ThemeProviderProps>;
export default ThemeProvider;
