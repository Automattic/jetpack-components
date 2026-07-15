import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { isWpcomPlatformSite, getAdminUrl } from '@automattic/jetpack-script-data';
import { __ } from '@wordpress/i18n';
import { Stack, Text, Link } from '@wordpress/ui';
import clsx from 'clsx';
import { getRedirectUrl } from '../../index.js';
import AutomatticBylineLogo from '../automattic-byline-logo/index.js';
import './style.scss';
import JetpackLogo from '../jetpack-logo/index.js';
/**
 * JetpackFooter component displays a tiny Jetpack logo with the product name on the left and the Automattic Airline "by line" on the right.
 *
 * @param {JetpackFooterProps} props - Component properties.
 * @return {ReactNode} JetpackFooter component.
 */
const JetpackFooter = ({ className, menu, ...otherProps }) => {
    let items = [];
    if (!isWpcomPlatformSite() && !window?.JetpackNetworkAdminData) {
        items = [
            {
                label: __('Products', 'jetpack-components'),
                href: getAdminUrl('admin.php?page=my-jetpack#/products'),
            },
            {
                label: __('Help', 'jetpack-components'),
                href: getAdminUrl('admin.php?page=my-jetpack#/help'),
            },
            ...items,
        ];
    }
    if (menu) {
        items = [...items, ...menu];
    }
    return (_jsxs(Stack, { render: _jsx("footer", {}), className: clsx('jetpack-footer', className), "aria-label": __('Jetpack', 'jetpack-components'), role: "contentinfo", direction: "row", justify: "flex-start", align: "center", wrap: "wrap", gap: "xl", ...otherProps, children: [_jsxs(Stack, { className: "jetpack-footer__logo", direction: "row", gap: "sm", align: "center", children: [_jsx(JetpackLogo, { showText: false, height: 16, "aria-hidden": "true" }), _jsx(Text, { variant: "body-md", children: "Jetpack" })] }), _jsx(Stack, { render: _jsx("ul", {}), direction: "row", gap: "lg", wrap: "wrap", children: items.map(item => {
                    return (_jsx("li", { children: _jsx(Text, { variant: "body-md", className: "jetpack-footer__menu-item", render: !item.href ? (_jsx(Link, { render: _jsx("span", {}), tabIndex: 0, title: item.title || '', onClick: item.onClick || undefined, onKeyDown: item.onKeyDown || undefined, role: "button" })) : (_jsx(Link, { href: item.href, title: item.title || '', onClick: item.onClick || undefined, onKeyDown: item.onKeyDown || undefined })), children: item.label }) }, item.label));
                }) }), _jsx("a", { className: "jetpack-footer__a8c", href: getRedirectUrl('a8c-about'), rel: "noopener noreferrer", target: "_blank", children: _jsx(AutomatticBylineLogo, { height: 8 }) })] }));
};
export default JetpackFooter;
