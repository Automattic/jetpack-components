import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { __, _x } from '@wordpress/i18n';
import { Icon, external } from '@wordpress/icons';
import clsx from 'clsx';
import { getRedirectUrl } from '../../index.js';
import getSiteAdminUrl from '../../tools/get-site-admin-url/index.js';
import AutomatticBylineLogo from '../automattic-byline-logo/index.js';
import './style.scss';
import JetpackLogo from '../jetpack-logo/index.js';
import useBreakpointMatch from '../layout/use-breakpoint-match/index.js';
const JetpackIcon = () => (_jsx(JetpackLogo, { logoColor: "#000", showText: false, height: 16, "aria-hidden": "true" }));
const ExternalIcon = () => (_jsxs(_Fragment, { children: [
        _jsx(Icon, { icon: external, size: 16 }), _jsx("span", { className: "jp-dashboard-footer__accessible-external-link", children: 
            /* translators: accessibility text */
            __('(opens in a new tab)', 'jetpack-components') })
    ] }));
/**
 * JetpackFooter component displays a tiny Jetpack logo with the product name on the left and the Automattic Airline "by line" on the right.
 *
 * @param {JetpackFooterProps} props - Component properties.
 * @return {ReactNode} JetpackFooter component.
 */
const JetpackFooter = ({ moduleName = 'Jetpack' /** "Jetpack" is a product name, do not translate. */, className, moduleNameHref = 'https://jetpack.com', menu, useInternalLinks, onAboutClick, onPrivacyClick, onTermsClick, ...otherProps }) => {
    const [isSm] = useBreakpointMatch('sm', '<=');
    const [isMd] = useBreakpointMatch('md', '<=');
    const [isLg] = useBreakpointMatch('lg', '>');
    const siteAdminUrl = getSiteAdminUrl();
    let items = [
        {
            label: _x('About', 'Link to learn more about Jetpack.', 'jetpack-components'),
            title: __('About Jetpack', 'jetpack-components'),
            href: useInternalLinks
                ? new URL('admin.php?page=jetpack_about', siteAdminUrl).href
                : getRedirectUrl('jetpack-about'),
            target: useInternalLinks ? '_self' : '_blank',
            onClick: onAboutClick,
        },
        {
            label: _x('Privacy', 'Shorthand for Privacy Policy.', 'jetpack-components'),
            title: __("Automattic's Privacy Policy", 'jetpack-components'),
            href: useInternalLinks
                ? new URL('admin.php?page=jetpack#/privacy', siteAdminUrl).href
                : getRedirectUrl('a8c-privacy'),
            target: useInternalLinks ? '_self' : '_blank',
            onClick: onPrivacyClick,
        },
        {
            label: _x('Terms', 'Shorthand for Terms of Service.', 'jetpack-components'),
            title: __('WordPress.com Terms of Service', 'jetpack-components'),
            href: getRedirectUrl('wpcom-tos'),
            target: '_blank',
            onClick: onTermsClick,
        },
    ];
    if (menu) {
        items = [...items, ...menu];
    }
    const jetpackItemContent = (_jsxs(_Fragment, { children: [
            _jsx(JetpackIcon, {}), moduleName] }));
    return (_jsx("footer", { className: clsx('jp-dashboard-footer', {
            'is-sm': isSm,
            'is-md': isMd,
            'is-lg': isLg,
        }, className), "aria-label": __('Jetpack', 'jetpack-components'), role: "contentinfo", ...otherProps, children: _jsxs("ul", { children: [
                _jsx("li", { className: "jp-dashboard-footer__jp-item", children: moduleNameHref ? (_jsx("a", { href: moduleNameHref, children: jetpackItemContent })) : (jetpackItemContent) }), items.map(item => {
                    const isButton = item.role === 'button';
                    const isExternalLink = !isButton && item.target === '_blank';
                    return (_jsx("li", { children: _jsxs("a", { href: item.href, title: item.title, target: item.target, onClick: item.onClick, onKeyDown: item.onKeyDown, className: clsx('jp-dashboard-footer__menu-item', {
                                'is-external': isExternalLink,
                            }), role: item.role, rel: isExternalLink ? 'noopener noreferrer' : undefined, tabIndex: isButton ? 0 : undefined, children: [item.label, isExternalLink && _jsx(ExternalIcon, {})] }) }, item.label));
                }), _jsx("li", { className: "jp-dashboard-footer__a8c-item", children: _jsx("a", { href: useInternalLinks
                            ? new URL('admin.php?page=jetpack_about', siteAdminUrl).href
                            : getRedirectUrl('a8c-about'), "aria-label": __('An Automattic Airline', 'jetpack-components'), children: _jsx(AutomatticBylineLogo, { "aria-hidden": "true" }) }) })
            ] }) }));
};
export default JetpackFooter;
