import type { JetpackFooterProps } from './types.ts';
import type { FC } from 'react';
declare global {
    interface Window {
        JetpackNetworkAdminData?: {
            sitesUrl: string;
            settingsUrl: string;
        };
    }
}
/**
 * UnstyledJetpackFooter displays a tiny Jetpack logo with the product name on the left and the Automattic Airline "by line" on the right, without loading its stylesheet.
 *
 * @param {JetpackFooterProps} props - Component properties.
 * @return {ReactNode} UnstyledJetpackFooter component.
 */
declare const UnstyledJetpackFooter: FC<JetpackFooterProps>;
export default UnstyledJetpackFooter;
