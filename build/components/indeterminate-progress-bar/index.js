import { jsx as _jsx } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';
/**
 * Internal dependencies
 */
import styles from './style.module.scss';
/**
 * Indeterminate Progress Bar component
 *
 * @param {IndeterminateProgressBarProps} props - Component props.
 * @return {React.ReactNode} - IndeterminateProgressBar react component.
 */
const IndeterminateProgressBar = ({ className }) => {
    return (_jsx("div", { className: clsx(className, styles['indeterminate-progress-bar']), "aria-label": __('Indeterminate Progress Bar', 'jetpack-components') }));
};
export default IndeterminateProgressBar;
