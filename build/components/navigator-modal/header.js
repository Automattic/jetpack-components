import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, useNavigator } from '@wordpress/components';
import { __, isRTL } from '@wordpress/i18n';
import { chevronLeft, chevronRight, close } from '@wordpress/icons';
import { useCallback, useContext } from 'react';
import { NavigatorModalContext } from "./context.js";
import styles from './styles.module.scss';
/**
 * Renders a header for the NavigatorModal.
 * @param {HeaderProps} props - Props
 *
 * @return component
 */
export function Header({ icon, title, isScreenLocked }) {
    const context = useContext(NavigatorModalContext);
    const navigator = useNavigator();
    const onGoBack = useCallback(() => {
        navigator.goBack();
    }, [navigator]);
    return (_jsxs("div", { className: styles.header, children: [_jsxs("div", { className: styles['title-wrap'], children: [!isScreenLocked ? (_jsx(Button, { label: __('Go back', 'jetpack-components'), icon: isRTL() ? chevronRight : chevronLeft, onClick: onGoBack, variant: "tertiary", size: "compact" })) : null, icon, _jsx("h1", { children: title })] }), context.isDismissible ? (_jsx(Button, { size: "compact", onClick: context.onClose, icon: close, label: __('Close', 'jetpack-components'), variant: "tertiary" })) : null] }));
}
