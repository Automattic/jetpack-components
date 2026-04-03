import './style.scss';
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
 * JetpackFooter component displays a tiny Jetpack logo with the product name on the left and the Automattic Airline "by line" on the right.
 *
 * @param {JetpackFooterProps} props - Component properties.
 * @return {ReactNode} JetpackFooter component.
 */
declare const JetpackFooter: FC<JetpackFooterProps>;
export default JetpackFooter;
