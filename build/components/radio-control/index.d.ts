import type { FC, ReactNode } from 'react';
interface RadioControlProps {
    /** The current value. */
    selected: string;
    /** Custom class name to append to the component. */
    className?: string;
    /** Whether or not the radio control is currently disabled. */
    disabled?: boolean;
    /** Additional information to display below the radio control. */
    help?: ReactNode;
    /** The label for the radio control. */
    label?: ReactNode;
    /** If true, the label will only be visible to screen readers. */
    hideLabelFromVision?: boolean;
    /** A list of options to show. */
    options: {
        label: string;
        value: string;
    }[];
    /** A callback function invoked when the value is changed. */
    onChange: (value: string) => void;
}
declare const RadioControl: FC<RadioControlProps>;
export default RadioControl;
