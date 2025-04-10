import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { Tooltip } from '@wordpress/components';
import clsx from 'clsx';
/**
 * Internal dependencies
 */
import numberFormat from "../number-format/index.js";
import Text from "../text/index.js";
import styles from './style.module.scss';
/**
 * StatCard component
 *
 * @param {StatCardProps} props - Component props.
 * @return {React.ReactNode} - StatCard react component.
 */
const StatCard = ({ className, hideValue, icon, label, value, variant = 'square', }) => {
    const formattedValue = numberFormat(value);
    const compactValue = numberFormat(value, {
        notation: 'compact',
        compactDisplay: 'short',
    });
    return (_jsxs("div", { className: clsx(className, styles.wrapper, styles[variant]), children: [_jsx("div", { className: clsx(styles.icon), children: icon }), _jsxs("div", { className: clsx(styles.info), children: [_jsx(Text, { className: styles.label, children: label }), variant === 'square' ? (_jsx(Tooltip, { text: formattedValue, placement: "top", children: _jsx(Text, { variant: "headline-small", className: clsx(styles.value), children: hideValue ? '-' : compactValue }) })) : (_jsx(Text, { variant: "title-medium-semi-bold", className: clsx(styles.value), children: hideValue ? '-' : formattedValue }))] })] }));
};
export default StatCard;
