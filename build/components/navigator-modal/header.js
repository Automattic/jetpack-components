import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, useNavigator } from '@wordpress/components';
import { __, isRTL } from '@wordpress/i18n';
import { chevronLeft, chevronRight, close } from '@wordpress/icons';
import { useCallback, useContext } from 'react';
import { NavigatorModalContext } from './context.js';
/**
 * Renders a header for the NavigatorModal.
 * @param {HeaderProps} props - Props
 *
 * @return component
 */
export function Header({ icon, title, isScreenLocked, onGoBack: onGoBackProp, onClose: onCloseProp, }) {
    const context = useContext(NavigatorModalContext);
    const navigator = useNavigator();
    const onGoBack = useCallback(() => {
        onGoBackProp?.();
        navigator.goBack();
    }, [navigator, onGoBackProp]);
    const onCloseModal = useCallback(() => {
        onCloseProp?.();
        context.onClose?.();
    }, [onCloseProp, context]);
    return (_jsxs("div", { className: "jp-navigator-modal__header", children: [
            _jsxs("div", { className: "jp-navigator-modal__title-wrap", children: [!isScreenLocked ? (_jsx(Button, { label: __('Go back', 'jetpack-components'), icon: isRTL() ? chevronRight : chevronLeft, onClick: onGoBack, variant: "tertiary", size: "compact" })) : null, icon, _jsx("h1", { children: title })
                ] }), context.isDismissible ? (_jsx(Button, { size: "compact", onClick: onCloseModal, icon: close, label: __('Close', 'jetpack-components'), variant: "tertiary" })) : null] }));
}
