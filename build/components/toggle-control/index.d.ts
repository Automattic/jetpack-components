import type { FC, ReactNode } from 'react';
export interface ToggleControlProps {
    /** Whether or not the toggle is currently enabled. */
    checked?: boolean;
    /** Custom class name to append to the component. */
    className?: string;
    /** Whether or not the toggle is currently disabled. */
    disabled?: boolean;
    /** Additional information to display below the toggle. */
    help?: ReactNode;
    /** Whether or not the toggling is currently toggling. */
    toggling?: boolean;
    /** The label for the toggle. */
    label?: ReactNode;
    /** Accessible name for the underlying checkbox. Use when no visible `label` is rendered. */
    'aria-label'?: string;
    /** The size of the toggle. */
    size?: 'small' | 'normal';
    /** A callback function invoked when the toggle is clicked. */
    onChange: (value: boolean) => void;
}
declare const ToggleControl: FC<ToggleControlProps>;
export default ToggleControl;
