import type { ComponentProps } from 'react';
import './style.scss';
export interface DecorativeCardProps extends Omit<ComponentProps<'div'>, 'children' | 'aria-hidden'> {
    /**
     * The format of the card (horizontal or vertical)
     */
    format?: 'horizontal' | 'vertical';
    /**
     * Show a glyph in a circle over the centre of the card.
     */
    icon?: 'unlink';
    /**
     * URL for an image to show in the card.
     */
    imageUrl?: string;
}
/**
 * A decorative card used in the disconnection flow.
 *
 * @param {DecorativeCardProps} props - The properties.
 * @return {import('react').ReactNode} - The DecorativeCard component.
 */
declare function DecorativeCard({ format, icon, imageUrl, className, ...rest }: DecorativeCardProps): import("react").JSX.Element;
export default DecorativeCard;
