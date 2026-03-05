import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import restApi from '@automattic/jetpack-api';
import { Page } from '@wordpress/admin-ui';
import '@wordpress/admin-ui/build-style/style.css';
import { __experimentalHeading as Heading, // eslint-disable-line @wordpress/no-unsafe-wp-apis
__experimentalHStack as HStack, // eslint-disable-line @wordpress/no-unsafe-wp-apis
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
const AdminPage = ({ children, className, moduleName = 'Jetpack' /** "Jetpack" is a product name, do not translate. */, moduleNameHref, showHeader = true, showFooter = true, useInternalLinks = false, showBackground = true, sandboxedDomain = '', apiRoot = '', apiNonce = '', optionalMenuItems, header, title, subTitle, logo, actions, tabs, showBottomBorder = true, }) => {
    useEffect(() => {
        restApi.setApiRoot(apiRoot);
        restApi.setApiNonce(apiNonce);
    }, [apiRoot, apiNonce]);
    const rootClassName = clsx(styles['admin-page'], className, {
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
    // Note: The inner Heading causes a double h2 wrapping because Page's Header
    // also wraps title in a Heading. This is a known issue — the inner Heading is
    // needed until https://github.com/WordPress/gutenberg/pull/75899 fixes
    // non-string title rendering in admin-ui. Once that lands, remove the Heading
    // here and pass the plain HStack with a string child.
    const composedTitle = title ? (_jsxs(HStack, { spacing: 2, justify: "left", children: [logo || _jsx(JetpackLogo, { showText: false, height: 20 }), _jsx(Heading, { as: "h2", level: 3, weight: 500, truncate: true, children: title })
        ] })) : undefined;
    const footer = showFooter && (_jsx(Container, { horizontalSpacing: 5, children: _jsx(Col, { children: _jsx(JetpackFooter, { moduleName: moduleName, moduleNameHref: moduleNameHref, menu: optionalMenuItems, useInternalLinks: useInternalLinks }) }) }));
    // When title is provided, use admin-ui Page for the full page layout.
    if (showHeader && composedTitle) {
        return (_jsx("div", { className: rootClassName, children: _jsxs(Page, { ariaLabel: title, title: composedTitle, subTitle: subTitle, actions: actions, showSidebarToggle: false, children: [tabs, _jsx(Container, { fluid: true, horizontalSpacing: 0, children: _jsx(Col, { children: children }) }), footer] }) }));
    }
    // Legacy path: no title provided, render the classic header.
    return (_jsxs("div", { className: rootClassName, children: [showHeader && (_jsx(Container, { horizontalSpacing: 5, children: _jsxs(Col, { className: clsx(styles['admin-page-header'], 'jp-admin-page-header'), children: [header ? header : _jsx(JetpackLogo, {}), sandboxedDomain && (_jsx("code", { className: styles['sandbox-domain-badge'], onClick: testConnection, onKeyDown: testConnection, 
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                            role: "button", tabIndex: 0, title: `Sandboxing via ${sandboxedDomain}. Click to test connection.`, children: "API Sandboxed" }))] }) })), _jsx(Container, { fluid: true, horizontalSpacing: 0, children: _jsx(Col, { children: children }) }), footer] }));
};
export default AdminPage;
