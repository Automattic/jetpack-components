import { jsx as _jsx } from "react/jsx-runtime";
import { Modal, Navigator } from '@wordpress/components';
import clsx from 'clsx';
import { useContext } from 'react';
import { NavigatorModalContext } from "./context.js";
import { Screen } from "./screen.js";
import styles from './styles.module.scss';
/**
 * Renders the internal NavigatorModal component.
 *
 * @param { SharedProps } props - Props
 *
 * @return Component
 */
function InternalNavigatorModal({ children, className }) {
    const context = useContext(NavigatorModalContext);
    return (_jsx(Modal, { __experimentalHideHeader: true, onRequestClose: context.onClose, className: clsx(styles.modal, className), children: _jsx(Navigator, { initialPath: context.initialPath, className: styles.navigator, children: children }) }));
}
/**
 * Renders a modal with navigator capabilities.
 *
 * @param {SharedProps & TNavigatorModalContext} props - Props
 *
 * @return Component
 */
function NavigatorModalMain({ children, className, initialPath = '/', onClose, isDismissible = true, }) {
    return (_jsx(NavigatorModalContext.Provider, { value: { onClose, initialPath, isDismissible }, children: _jsx(InternalNavigatorModal, { className: className, children: children }) }));
}
export const NavigatorModal = Object.assign(NavigatorModalMain, {
    Screen: Object.assign(Screen, {
        displayName: 'NavigatorModal.Screen',
    }),
});
