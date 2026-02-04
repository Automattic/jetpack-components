import type { ComponentType, InputHTMLAttributes, ReactNode } from 'react';
export type NumberControlProps = {
    /**
     * Matches common `@wordpress/components` control props without importing their internal types.
     */
    label?: ReactNode;
    help?: ReactNode;
    className?: string;
    hideLabelFromVision?: boolean;
    __nextHasNoMarginBottom?: boolean;
    /**
     * TextControl-style signature. (The experimental NumberControl can accept this too.)
     */
    onChange: (value: string) => void;
    value: string | number;
    __next40pxDefaultSize?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'className' | 'type' | 'children'>;
/**
 * This uses the experimental NumberControl from the block
 * editor where available, otherwise it falls back to a
 * standard TextControl, limited to numbers.
 * @type {ComponentType<NumberControlProps>}
 *
 * @param {NumberControlProps} props - the NumberControl component props
 * @return {ReactNode} - NumberControl component
 */
declare const NumberControl: ComponentType<NumberControlProps>;
export default NumberControl;
