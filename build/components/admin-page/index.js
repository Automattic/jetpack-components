import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import restApi from '@automattic/jetpack-api';
import { __, sprintf } from '@wordpress/i18n';
import clsx from 'clsx';
import { useEffect, useCallback } from 'react';
import JetpackFooter from "../jetpack-footer/index.js";
import JetpackLogo from "../jetpack-logo/index.js";
import Col from "../layout/col/index.js";
import Container from "../layout/container/index.js";
import styles from './style.module.scss';
/**
 * This is the base structure for any admin page. It comes with Header and Footer.
 *
 * All content must be passed as children wrapped in as many <AdminSection> elements as needed.
 *
 * @param {AdminPageProps} props - Component properties.
 * @return {React.ReactNode} AdminPage component.
 */
const AdminPage = ({ children, moduleName = __('Jetpack', 'jetpack-components'), moduleNameHref, showHeader = true, showFooter = true, useInternalLinks = false, showBackground = true, sandboxedDomain = '', apiRoot = '', apiNonce = '', optionalMenuItems, header, }) => {
    useEffect(() => {
        restApi.setApiRoot(apiRoot);
        restApi.setApiNonce(apiNonce);
    }, [apiRoot, apiNonce]);
    const rootClassName = clsx(styles['admin-page'], {
        [styles.background]: showBackground,
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
            /* translators: placeholder is an error message. */
            __('There was an error testing Jetpack. Error: %s', 'jetpack-components'), error.message));
        }
    }, []);
    return (_jsxs("div", { className: rootClassName, children: [showHeader && (_jsx(Container, { horizontalSpacing: 5, children: _jsxs(Col, { className: clsx(styles['admin-page-header'], 'jp-admin-page-header'), children: [header ? header : _jsx(JetpackLogo, {}), sandboxedDomain && (_jsx("code", { className: styles['sandbox-domain-badge'], onClick: testConnection, onKeyDown: testConnection, 
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                            role: "button", tabIndex: 0, title: `Sandboxing via ${sandboxedDomain}. Click to test connection.`, children: "API Sandboxed" }))] }) })), _jsx(Container, { fluid: true, horizontalSpacing: 0, children: _jsx(Col, { children: children }) }), showFooter && (_jsx(Container, { horizontalSpacing: 5, children: _jsx(Col, { children: _jsx(JetpackFooter, { moduleName: moduleName, moduleNameHref: moduleNameHref, menu: optionalMenuItems, useInternalLinks: useInternalLinks }) }) }))] }));
};
export default AdminPage;
