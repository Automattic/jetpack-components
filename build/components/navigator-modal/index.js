import { jsx as _jsx } from "react/jsx-runtime";
import { Modal, Navigator } from '@wordpress/components';
import clsx from 'clsx';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { NavigatorModalContext } from './context.js';
import { Screen } from './screen.js';
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
    const overlayRef = useRef(null);
    const isUserInteracting = useRef(false);
    /*
     * Track pointer interaction on the overlay so we can distinguish
     * user-initiated overlay (backdrop) clicks from the WP Modal dismisser
     * mechanism, which also calls onRequestClose() without an event argument.
     *
     * Only a pointerdown on the overlay element itself counts as a backdrop
     * interaction — mirroring WP Modal's own `event.target === event.currentTarget`
     * check. Without this target guard, a pointerdown on any control inside the
     * modal (e.g. the "Generate image" button) would bubble up and set the flag,
     * so when that control opens an external Modal (Image Studio) the resulting
     * dismisser call would be misread as an overlay click and wrongly close us.
     */
    useEffect(() => {
        const overlay = overlayRef.current;
        if (!overlay) {
            return;
        }
        const handler = (event) => {
            if (event.target === overlay) {
                isUserInteracting.current = true;
            }
        };
        overlay.addEventListener('pointerdown', handler);
        return () => overlay.removeEventListener('pointerdown', handler);
    }, []);
    // WordPress Modal's dismisser mechanism (ModalContext) calls onRequestClose()
    // without arguments when another non-nested Modal mounts. We guard against
    // this so that external modals (e.g. Image Studio) don't destroy this one.
    // User-initiated closes (Escape, close button) always pass an event.
    // Overlay clicks don't pass an event but are identified by the
    // isUserInteracting flag set via the pointerdown listener above.
    // The NavigatorModal's own Header/Footer close buttons call context.onClose
    // directly and are unaffected by this guard.
    const onRequestClose = useCallback((event) => {
        if (event || isUserInteracting.current) {
            isUserInteracting.current = false;
            onClose?.();
        }
    }, [onClose]);
    return (_jsx(Modal, { ref: overlayRef, __experimentalHideHeader: true, onRequestClose: onRequestClose, className: clsx('jp-navigator-modal', className), ...props, children: _jsx(Navigator, { initialPath: initialPath, className: "jp-navigator-modal__navigator", children: children }) }));
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
