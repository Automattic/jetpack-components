import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Navigator } from '@wordpress/components';
import clsx from 'clsx';
import { Footer } from './footer.js';
import { Header } from './header.js';
/**
 * Renders a screen.
 *
 * @param {ScreenProps} props - Props
 *
 * @return The rendered screen.
 */
export function Screen({ path, className, title, sidebar, headerIcon, isScreenLocked, onGoBack, onClose, footerContent, footerActions, children, content, ...props }) {
    const hasFooter = Boolean(footerContent || (footerActions && footerActions.length));
    return (_jsx(Navigator.Screen, { path: path, className: clsx('jp-navigator-modal__screen', className), ...props, children: _jsxs(Flex, { direction: "column", gap: 0, children: [_jsx(Header, { title: title, isScreenLocked: isScreenLocked, icon: headerIcon, onGoBack: onGoBack, onClose: onClose }), _jsxs(Flex, { gap: 0, align: "start", className: "jp-navigator-modal__body", children: [sidebar ? _jsx("div", { className: "jp-navigator-modal__sidebar", children: sidebar }) : null, _jsx("div", { className: "jp-navigator-modal__content", children: content ?? children })] }), hasFooter ? (_jsx(Footer, { actions: footerActions, isScreenLocked: isScreenLocked, children: footerContent })) : null] }) }));
}
