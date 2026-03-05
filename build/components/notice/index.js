import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon, cautionFilled as warning, info, check, close } from '@wordpress/icons';
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
 * Notice component
 *
 * @param {object}      props                 - The component properties.
 * @param {string}      props.level           - The notice level: error, warning, info, success.
 * @param {boolean}     props.hideCloseButton - Whether to hide the close button.
 * @param {Function}    props.onClose         - The function to call when the close button is clicked.
 * @param {string}      props.title           - The title of the notice.
 * @param {ReactNode[]} props.actions         - Actions to show across the bottom of the bar.
 * @param {Component}   props.children        - The notice content.
 * @return {ReactElement}              The `Notice` component.
 */
const Notice = ({ level = 'info', title, children, actions, hideCloseButton = false, onClose, }) => {
    const classes = clsx(styles.container, styles[`is-${level}`]);
    return (_jsxs("div", { className: classes, children: [
            _jsx("div", { className: styles['icon-wrapper'], children: _jsx(Icon, { icon: getIconByLevel(level), className: styles.icon }) }), _jsxs("div", { className: styles['main-content'], children: [title && _jsx("div", { className: styles.title, children: title }), children, actions && actions.length > 0 && (_jsx("div", { className: styles['action-bar'], children: actions.map((action, index) => (_jsx("div", { className: styles.action, children: action }, index))) }))] }), !hideCloseButton && (_jsx("button", { "aria-label": "close", className: styles['close-button'], onClick: onClose, children: _jsx(Icon, { icon: close }) }))] }));
};
export default Notice;
