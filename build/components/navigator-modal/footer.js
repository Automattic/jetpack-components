import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex, FlexBlock, FlexItem, useNavigator } from '@wordpress/components';
import { useCallback, useContext } from 'react';
import { NavigatorModalContext } from "./context.js";
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
    const navigate = useCallback(() => {
        if (!isScreenLocked) {
            navigator.goBack();
        }
        else {
            context.onClose?.();
        }
    }, [isScreenLocked, navigator, context]);
    return (_jsxs(Flex, { className: "jp-navigator-modal__footer", children: [_jsx(FlexBlock, { children: children }), actions ? (_jsx(FlexItem, { children: _jsx(Flex, { children: actions.map((props, index) => {
                        if (typeof props === 'function') {
                            return props({ navigate });
                        }
                        return (_jsx(Button, { ...props, 
                            // eslint-disable-next-line react/jsx-no-bind
                            onClick: event => {
                                props.onClick?.(event);
                                navigate();
                            } }, index));
                    }) }) })) : null] }));
}
