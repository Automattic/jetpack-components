import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { Popover } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { close } from '@wordpress/icons';
import Button from '../button/index.js';
import useBreakpointMatch from '../layout/use-breakpoint-match/index.js';
import Text from '../text/index.js';
/**
 * Internal dependencies
 */
import ThemeProvider from '../theme-provider/index.js';
import styles from './styles.module.scss';
const ActionPopover = ({ hideCloseButton = false, title, children, step = null, totalSteps = null, buttonContent = null, buttonDisabled = false, buttonHref = null, buttonExternalLink = false, offset = 32, onClose, onClick, ...otherPopoverProps }) => {
    const [isSm] = useBreakpointMatch('sm');
    if (!title || !children || !buttonContent) {
        return null;
    }
    if (!otherPopoverProps.position) {
        otherPopoverProps.position = isSm ? 'top center' : 'middle right';
    }
    const popoverProps = {
        ...otherPopoverProps,
        offset,
        onClose,
    };
    const showSteps = Number.isFinite(step) && Number.isFinite(totalSteps);
    let stepsText = null;
    if (showSteps) {
        stepsText = sprintf(
        /* translators: 1 Current step, 2 Total steps */
        __('%1$d of %2$d', 'jetpack-components'), step, totalSteps);
    }
    return (_jsx(Popover, { ...popoverProps, children: _jsx(ThemeProvider, { children: _jsxs("div", { className: styles.wrapper, children: [
                    _jsxs("div", { className: styles.header, children: [
                            _jsx(Text, { variant: "title-small", className: styles.title, children: title }), !hideCloseButton && (_jsx(_Fragment, { children: _jsx(Button, { size: "small", variant: "tertiary", "aria-label": "close", className: styles['close-button'], icon: close, iconSize: 16, onClick: onClose }) }))] }), children, _jsxs("div", { className: styles.footer, children: [showSteps && (_jsx(Text, { variant: "body", className: styles.steps, children: stepsText })), _jsx(Button, { variant: "primary", className: styles['action-button'], disabled: buttonDisabled, onClick: onClick, isExternalLink: buttonExternalLink, href: buttonHref, children: buttonContent })
                        ] })
                ] }) }) }));
};
export default ActionPopover;
