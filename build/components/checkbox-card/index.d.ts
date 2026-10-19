import './style.scss';
import type { CheckboxCardGridProps, CheckboxCardProps } from './types.ts';
import type { JSX } from 'react';
/**
 * Lays out checkbox cards in two columns, or one on narrow screens.
 *
 * @param {CheckboxCardGridProps} props - Component props.
 * @return {JSX.Element} The grid.
 */
export declare function CheckboxCardGrid({ children, className }: CheckboxCardGridProps): JSX.Element;
/**
 * A card with a checkbox, toggled by a click on its illustration.
 *
 * @param {CheckboxCardProps} props - Component props.
 * @return {JSX.Element} The card.
 */
export default function CheckboxCard({ id, name, title, illustration, checked, onChange, previewUrl, onPreviewClick, disabled, }: CheckboxCardProps): JSX.Element;
export { CheckboxCard };
export type { CheckboxCardProps, CheckboxCardGridProps };
