import { jsx as _jsx } from "react/jsx-runtime";
import { ToggleControl as WPToggleControl } from '@wordpress/components';
import clsx from 'clsx';
import { useCallback } from 'react';
import styles from './styles.module.scss';
const ToggleControl = ({ checked, className, disabled, help, toggling, label, 'aria-label': ariaLabel, size = 'normal', onChange, }) => {
    const showChecked = toggling !== undefined ? (checked && !toggling) || (!checked && toggling) : checked;
    const handleOnChange = useCallback((value) => {
        // Don't toggle if the toggle is already toggling.
        if (toggling) {
            return;
        }
        onChange(value);
    }, [toggling, onChange]);
    return (_jsx(WPToggleControl, { __nextHasNoMarginBottom: true, checked: showChecked, className: clsx(styles.toggle, className, {
            [styles['is-toggling']]: toggling,
            [styles['is-small']]: size === 'small',
            [styles['no-label']]: !label,
        }), disabled: disabled, help: help, label: label, "aria-label": ariaLabel, onChange: handleOnChange }));
};
export default ToggleControl;
