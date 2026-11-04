import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { formatNumber, formatNumberCompact } from '@automattic/number-formatters';
import { Tooltip } from '@wordpress/ui';
import clsx from 'clsx';
/**
 * Internal dependencies
 */
import Text from '../text/index.js';
import styles from './style.module.scss';
/**
 * StatCard component
 *
 * @param {StatCardProps} props - Component props.
 * @return {ReactNode} - StatCard react component.
 */
const StatCard = ({ className, hideValue, icon, label, value, variant = 'square', }) => {
    const formattedValue = formatNumber(value);
    const compactValue = formatNumberCompact(value);
    return (_jsxs("div", { className: clsx(className, styles.wrapper, styles[variant]), children: [_jsx("div", { className: clsx(styles.icon), children: icon }), _jsxs("div", { className: clsx(styles.info), children: [_jsx(Text, { className: styles.label, children: label }), variant === 'square' ? (_jsxs(Tooltip.Root, { children: [_jsx(Tooltip.Trigger, { render: _jsx(Text, { variant: "headline-small", className: clsx(styles.value), children: hideValue ? '-' : compactValue }) }), _jsx(Tooltip.Popup, { children: formattedValue })] })) : (_jsx(Text, { variant: "title-medium-semi-bold", className: clsx(styles.value), children: hideValue ? '-' : formattedValue }))] })] }));
};
export default StatCard;
