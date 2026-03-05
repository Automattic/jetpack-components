import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon, cautionFilled as warning, info, check } from '@wordpress/icons';
import clsx from 'clsx';
import styles from './style.module.scss';
const getIconByLevel = (level) => {
    switch (level) {
        case 'error':
            return warning;
        case 'warning':
            return warning;
        case 'info':
            return info;
        case 'success':
            return check;
        default:
            return warning;
    }
};
/**
 * Alert component
 *
 * @param {object}    props           - The component properties.
 * @param {string}    props.level     - The alert level: error, warning, info, success.
 * @param {boolean}   props.showIcon  - Whether to show the alert icon.
 * @param {string}    props.className - The wrapper class name.
 * @param {Component} props.children  - The alert content.
 * @return {ReactElement}             The `Alert` component.
 */
const Alert = ({ level = 'warning', children, showIcon = true, className }) => {
    const classes = clsx(styles.container, styles[`is-${level}`], className);
    return (_jsxs("div", { className: classes, children: [showIcon && (_jsx("div", { className: styles['icon-wrapper'], children: _jsx(Icon, { icon: getIconByLevel(level), className: styles.icon }) })), _jsx("div", { children: children })
        ] }));
};
export default Alert;
