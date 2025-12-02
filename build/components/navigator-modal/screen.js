import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Navigator } from '@wordpress/components';
import clsx from 'clsx';
import { Footer } from "./footer.js";
import { Header } from "./header.js";
import styles from './styles.module.scss';
/**
 * Renders a screen.
 *
 * @param {ScreenProps} props - Props
 *
 * @return The rendered screen.
 */
export function Screen({ path, className, title, sidebar, isScreenLocked, footerContent, footerActions, ...props }) {
    const hasFooter = Boolean(footerContent || (footerActions && footerActions.length));
    return (_jsx(Navigator.Screen, { path: path, className: clsx(styles.screen, className), children: _jsxs(Flex, { direction: "column", gap: 0, children: [_jsx(Header, { title: title, isScreenLocked: isScreenLocked }), _jsxs(Flex, { gap: 0, align: "start", className: styles.body, children: [sidebar ? _jsx("div", { className: styles.sidebar, children: sidebar }) : null, _jsx("div", { className: styles.content, children: ('children' in props && props.children) || ('content' in props && props.content) })] }), hasFooter ? (_jsx(Footer, { actions: footerActions, isScreenLocked: isScreenLocked, children: footerContent })) : null] }) }));
}
