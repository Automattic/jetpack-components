import { jsx as _jsx } from "react/jsx-runtime";
import { Modal, Navigator } from '@wordpress/components';
import clsx from 'clsx';
import { useContext } from 'react';
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
    const context = useContext(NavigatorModalContext);
    return (_jsx(Modal, { __experimentalHideHeader: true, onRequestClose: context.onClose, className: clsx('jp-navigator-modal', className), ...props, children: _jsx(Navigator, { initialPath: context.initialPath, className: "jp-navigator-modal__navigator", children: children }) }));
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
