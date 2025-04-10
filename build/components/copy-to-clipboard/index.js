import { jsx as _jsx } from "react/jsx-runtime";
import { useCopyToClipboard } from '@wordpress/compose';
import { useState, useRef, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Button from "../button/index.js";
import { ClipboardIcon, CheckmarkIcon } from "../icons/index.js";
export const CopyToClipboard = ({ buttonStyle = 'icon', textToCopy, onCopy, ...buttonProps }) => {
    const [hasCopied, setHasCopied] = useState(false);
    const copyTimer = useRef();
    const copyRef = useCopyToClipboard(textToCopy, () => {
        if (copyTimer.current) {
            clearTimeout(copyTimer.current);
        }
        setHasCopied(true);
        onCopy?.();
        copyTimer.current = setTimeout(() => {
            setHasCopied(false);
            copyTimer.current = undefined;
        }, 3000);
    });
    useEffect(() => {
        // Clear copyTimer on component unmount.
        return () => {
            if (copyTimer.current) {
                clearTimeout(copyTimer.current);
            }
        };
    }, []);
    let icon = null;
    let label = null;
    if ('text' !== buttonStyle) {
        icon = hasCopied ? _jsx(CheckmarkIcon, {}) : _jsx(ClipboardIcon, {});
    }
    const defaultLabel = __('Copy to clipboard', 'jetpack-components');
    if ('icon' !== buttonStyle) {
        label = hasCopied ? __('Copied!', 'jetpack-components') : defaultLabel;
    }
    return (_jsx(Button, { "aria-label": defaultLabel, icon: icon, children: label, ref: copyRef, ...buttonProps }));
};
export default CopyToClipboard;
