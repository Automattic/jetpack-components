import type { FC } from 'react';
type ChipProps = {
    text?: string;
    type?: 'new' | 'info';
};
/**
 * Chip component
 *
 * @deprecated Use `Badge` from `@wordpress/ui` instead. Map `type="new"` to `intent="stable"` and `type="info"` to the default `intent`.
 *
 * @param {object} props      - The component properties.
 * @param {string} props.type - The type new or info
 * @param {string} props.text - Chip text
 * @return {ReactElement} The `Chip` component.
 */
declare const Chip: FC<ChipProps>;
export default Chip;
