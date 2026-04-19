import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import restApi from '@automattic/jetpack-api';
import { Page } from '@wordpress/admin-ui';
import '@wordpress/admin-ui/build-style/style.css';
import { __experimentalHStack as HStack, // eslint-disable-line @wordpress/no-unsafe-wp-apis
 } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import clsx from 'clsx';
import { useEffect, useCallback } from 'react';
import JetpackFooter from '../jetpack-footer/index.js';
import JetpackLogo from '../jetpack-logo/index.js';
import Col from '../layout/col/index.js';
import Container from '../layout/container/index.js';
import styles from './style.module.scss';
/**
 * This is the base structure for any admin page. It comes with Header and Footer.
 *
 * All content must be passed as children wrapped in as many <AdminSection> elements as needed.
 *
 * @param {AdminPageProps} props - Component properties.
 * @return {ReactNode} AdminPage component.
 */
const AdminPage = ({ children, className, showHeader = true, showFooter = true, showBackground = true, sandboxedDomain = '', apiRoot = '', apiNonce = '', optionalMenuItems, header, title, subTitle, logo, actions, breadcrumbs, tabs, showBottomBorder = true, }) => {
    useEffect(() => {
        restApi.setApiRoot(apiRoot);
        restApi.setApiNonce(apiNonce);
    }, [apiRoot, apiNonce]);
    // `jp-admin-page` is a stable, non-hashed hook for global stylesheets and
    // shared SCSS mixins (notably `jetpack-admin-page-layout` in
    // @automattic/jetpack-base-styles). Do not rename.
    const rootClassName = clsx(styles['admin-page'], 'jp-admin-page', className, {
        [styles.background]: showBackground,
        [styles['without-bottom-border']]: tabs || !showBottomBorder,
    });
    const testConnection = useCallback(async () => {
        try {
            const connectionTest = await restApi.fetchSiteConnectionTest();
            // eslint-disable-next-line no-alert
            window.alert(connectionTest.message);
        }
        catch (error) {
            // eslint-disable-next-line no-alert
            window.alert(sprintf(
            /* translators: %s: an error message. */
            __('There was an error testing Jetpack. Error: %s', 'jetpack-components'), error.message));
        }
    }, []);
    // Compose the title with logo for the admin-ui Page header.
    // Page's Header wraps this in an <h2> tag, so we just pass the content directly.
    const composedTitle = title ? (_jsxs(HStack, { spacing: 2, justify: "left", children: [logo || _jsx(JetpackLogo, { showText: false, height: 20 }), _jsx("span", { children: title })
        ] })) : undefined;
    // When title or breadcrumbs are provided, use admin-ui Page for the full page layout.
    if (showHeader && (composedTitle || breadcrumbs)) {
        return (_jsx("div", { className: rootClassName, children: _jsxs(Page, { ariaLabel: title, breadcrumbs: breadcrumbs, title: composedTitle, subTitle: subTitle, actions: actions, showSidebarToggle: false, children: [tabs, _jsx(Container, { fluid: true, horizontalSpacing: 0, children: _jsx(Col, { children: children }) }), showFooter && _jsx(JetpackFooter, { menu: optionalMenuItems })] }) }));
    }
    // Legacy path: no title provided, render the classic header.
    return (_jsxs("div", { className: rootClassName, children: [showHeader && (_jsx(Container, { horizontalSpacing: 5, children: _jsxs(Col, { className: clsx(styles['admin-page-header'], 'jp-admin-page-header'), children: [header ? header : _jsx(JetpackLogo, {}), sandboxedDomain && (_jsx("code", { className: styles['sandbox-domain-badge'], onClick: testConnection, onKeyDown: testConnection, 
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                            role: "button", tabIndex: 0, title: `Sandboxing via ${sandboxedDomain}. Click to test connection.`, children: "API Sandboxed" }))] }) })), _jsx(Container, { fluid: true, horizontalSpacing: 0, children: _jsx(Col, { children: children }) }), showFooter && _jsx(JetpackFooter, { menu: optionalMenuItems })] }));
};
export default AdminPage;
