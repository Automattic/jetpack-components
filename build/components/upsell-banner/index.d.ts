import { UpsellBannerProps } from './types.ts';
import type { FC } from 'react';
import './style.scss';
/**
 * Upsell banner component.
 *
 * - The primary CTA is the second button, at the right position.
 * - The secondary CTA is the first button, at the left position.
 * - Passing `onDismiss` renders a close button in the top corner of the banner.
 *
 * @param {UpsellBannerProps} props - Component props.
 * @return {ReactNode} - UpsellBanner component.
 */
declare const UpsellBanner: FC<UpsellBannerProps>;
export default UpsellBanner;
