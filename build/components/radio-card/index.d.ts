import './style.scss';
import type { RadioCardGridProps, RadioCardProps } from './types.ts';
import type { JSX } from 'react';
/**
 * Lays out radio cards in two columns, or one on narrow screens.
 *
 * @param {RadioCardGridProps} props - Component props.
 * @return {JSX.Element} The grid.
 */
export declare function RadioCardGrid({ children, className }: RadioCardGridProps): JSX.Element;
/**
 * A card with a radio, picked by a click on its illustration. Render it in a `RadioGroup` inside a `Field.Root`.
 *
 * @param {RadioCardProps} props - Component props.
 * @return {JSX.Element} The card.
 */
export default function RadioCard({ id, value, title, illustration, previewUrl, onPreviewClick, disabled, }: RadioCardProps): JSX.Element;
export { RadioCard };
export type { RadioCardProps, RadioCardGridProps };
