import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex, FlexBlock, FlexItem, useNavigator } from '@wordpress/components';
import { useContext } from 'react';
import { NavigatorModalContext } from "./context.js";
import styles from './styles.module.scss';
/**
 * Renders a footer.
 *
 * @param {FooterProps} props - Props
 *
 * @return The rendered footer.
 */
export function Footer({ children, actions, isScreenLocked }) {
    const navigator = useNavigator();
    const context = useContext(NavigatorModalContext);
    return (_jsxs(Flex, { className: styles.footer, children: [_jsx(FlexBlock, { children: children }), actions ? (_jsx(FlexItem, { children: _jsx(Flex, { children: actions.map(({ onClick, ...actionProps }, index) => (_jsx(Button
                    // eslint-disable-next-line react/jsx-no-bind
                    , { 
                        // eslint-disable-next-line react/jsx-no-bind
                        onClick: event => {
                            onClick?.(event);
                            if (!isScreenLocked) {
                                navigator.goBack();
                            }
                            else {
                                context.onClose?.();
                            }
                        }, ...actionProps }, index))) }) })) : null] }));
}
