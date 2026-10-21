import { jsx as _jsx } from "react/jsx-runtime";
import { useMergeRefs, useViewportMatch } from '@wordpress/compose';
import { Button, IconButton } from '@wordpress/ui';
import { forwardRef, useCallback, useRef } from 'react';
/**
 * A page action for `AdminPage`'s `actions`: a labelled button, or an icon button on narrow screens.
 *
 * The label stays the button's accessible name, and becomes its tooltip when only the icon shows.
 *
 * @param props            - Any `Button` prop, passed to whichever button renders, plus the ones below.
 * @param props.label      - The button's text, or its tooltip when only the icon shows.
 * @param props.icon       - The icon shown on narrow screens.
 * @param props.shortcut   - Shown in the icon button's tooltip, so on narrow screens only.
 * @param props.positioner - Positions the icon button's tooltip, so on narrow screens only.
 * @param ref              - Forwarded to the rendered button.
 * @return The button.
 */
function PageActionButton({ label, icon, shortcut, positioner, ...buttonProps }, ref) {
    // On phones, page actions show only their icon so the header's title keeps its room.
    const isNarrowScreen = useViewportMatch('mobile', '<');
    // Crossing the breakpoint swaps in a new button: move focus to it if the old one had it.
    const button = useRef(null);
    const hadFocus = useRef(false);
    const keepFocus = useCallback((node) => {
        const previous = button.current;
        if (node) {
            if (hadFocus.current) {
                node.focus();
            }
            hadFocus.current = false;
        }
        else {
            hadFocus.current = previous?.ownerDocument.activeElement === previous;
        }
        button.current = node;
    }, []);
    const mergedRef = useMergeRefs([ref, keepFocus]);
    if (isNarrowScreen) {
        return (_jsx(IconButton, { ref: mergedRef, label: label, icon: icon, shortcut: shortcut, positioner: positioner, ...buttonProps }));
    }
    return (_jsx(Button, { ref: mergedRef, ...buttonProps, children: label }));
}
const ForwardedPageActionButton = forwardRef(PageActionButton);
export default ForwardedPageActionButton;
