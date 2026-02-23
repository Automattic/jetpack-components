import { jsx as _jsx } from "react/jsx-runtime";
import { Modal, Navigator } from '@wordpress/components';
import clsx from 'clsx';
import { useCallback, useContext } from 'react';
import { NavigatorModalContext } from "./context.js";
import { Screen } from "./screen.js";
import './styles.scss';
/**
 * Renders the internal NavigatorModal component.
 *
 * @param { ModalProps } props - Props
 *
 * @return Component
 */
function InternalNavigatorModal({ children, className, ...props }) {
    const { onClose, initialPath } = useContext(NavigatorModalContext);
    // WordPress Modal's dismisser mechanism (ModalContext) calls onRequestClose()
    // without arguments when another non-nested Modal mounts. We guard against
    // this so that external modals (e.g. Image Studio) don't destroy this one.
    // User-initiated closes (Escape, close button) always pass an event.
    // The NavigatorModal's own Header/Footer close buttons call context.onClose
    // directly and are unaffected by this guard.
    const onRequestClose = useCallback((event) => {
        if (event) {
            onClose?.();
        }
    }, [onClose]);
    return (_jsx(Modal, { __experimentalHideHeader: true, onRequestClose: onRequestClose, className: clsx('jp-navigator-modal', className), ...props, children: _jsx(Navigator, { initialPath: initialPath, className: "jp-navigator-modal__navigator", children: children }) }));
}
/**
 * Renders a modal with navigator capabilities.
 *
 * @param {NavigatorModalProps} props - Props
 *
 * @return Component
 */
function NavigatorModalMain({ children, className, initialPath = '/', onClose, isDismissible = true, ...props }) {
    return (_jsx(NavigatorModalContext.Provider, { value: { onClose, initialPath, isDismissible }, children: _jsx(InternalNavigatorModal, { className: className, ...props, children: children }) }));
}
export const NavigatorModal = Object.assign(NavigatorModalMain, {
    Screen: Object.assign(Screen, {
        displayName: 'NavigatorModal.Screen',
    }),
});
