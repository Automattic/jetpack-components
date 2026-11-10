import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { closeSmall } from '@wordpress/icons';
import clsx from 'clsx';
import './style.scss';
/**
 * Jetpack's dark green banner with gradient orbs, for announcing or explaining what a page offers.
 *
 * @param {HighlightBannerProps} props - Component props.
 * @return The rendered banner.
 */
const HighlightBanner = ({ className, title, description, actions, onDismiss, dismissLabel, }) => (_jsxs("div", { className: clsx('jp-highlight-banner', className), children: [_jsxs("div", { className: "jp-highlight-banner__content", children: [_jsx("h2", { className: "jp-highlight-banner__title", children: title }), description && _jsx("p", { className: "jp-highlight-banner__description", children: description }), actions && _jsx("div", { className: "jp-highlight-banner__actions", children: actions })] }), onDismiss && (_jsx(Button, { className: "jp-highlight-banner__close", icon: closeSmall, label: dismissLabel ?? __('Dismiss banner', 'jetpack-components'), size: "small", onClick: onDismiss })), _jsx("div", { className: "jp-highlight-banner__orb jp-highlight-banner__orb--top", "aria-hidden": "true" }), _jsx("div", { className: "jp-highlight-banner__orb jp-highlight-banner__orb--bottom", "aria-hidden": "true" })] }));
export default HighlightBanner;
