import React from 'react';
type ChipProps = {
    text?: string;
    type?: 'new' | 'info';
};
/**
 * Chip component
 *
 * @param {object} props      - The component properties.
 * @param {string} props.type - The type new or info
 * @param {string} props.text - Chip text
 * @return {React.ReactElement} The `Chip` component.
 */
declare const Chip: React.FC<ChipProps>;
export default Chip;
