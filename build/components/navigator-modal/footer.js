import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex, FlexBlock, FlexItem, useNavigator } from '@wordpress/components';
import clsx from 'clsx';
import { useCallback, useContext } from 'react';
import { NavigatorModalContext } from './context.js';
/**
 * Renders a footer.
 *
 * @param {FooterProps} props - Props
 *
 * @return The rendered footer.
 */
export function Footer({ children, actions, isScreenLocked, className, ...props }) {
    const navigator = useNavigator();
    const context = useContext(NavigatorModalContext);
    const navigate = useCallback(() => {
        if (!isScreenLocked) {
            navigator.goBack();
        }
        else {
            context.onClose?.();
        }
    }, [isScreenLocked, navigator, context]);
    return (_jsxs(Flex, { className: clsx('jp-navigator-modal__footer', className), ...props, children: [
            _jsx(FlexBlock, { children: children }), actions ? (_jsx(FlexItem, { children: _jsx(Flex, { children: actions.map((action, index) => {
                        if (typeof action === 'function') {
                            return action({ navigate });
                        }
                        return (_jsx(Button, { ...action, 
                            // eslint-disable-next-line react/jsx-no-bind
                            onClick: event => {
                                action.onClick?.(event);
                                navigate();
                            } }, index));
                    }) }) })) : null] }));
}
