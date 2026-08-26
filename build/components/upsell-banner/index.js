import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardBody } from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { close } from '@wordpress/icons';
import Button from '../button/index.js';
import './style.scss';
/**
 * Upsell banner component.
 *
 * - The primary CTA is the second button, at the right position.
 * - The secondary CTA is the first button, at the left position.
 * - Passing `onDismiss` renders a close button in the top corner of the banner.
 *
 * @param {UpsellBannerProps} props - Component props.
 * @return {ReactNode} - UpsellBanner component.
 */
const UpsellBanner = props => {
    const { icon, title, description, primaryCtaLabel, primaryCtaURL, primaryCtaIsExternalLink, primaryCtaOnClick, secondaryCtaLabel, secondaryCtaURL, secondaryCtaIsExternalLink, secondaryCtaOnClick, onDismiss, dismissLabel, } = props;
    return (_jsx(Card, { isRounded: true, size: "large", children: _jsxs(CardBody, { className: "upsell-banner", size: "large", children: [onDismiss && (_jsx(Button, { className: "upsell-banner--dismiss", variant: "tertiary", size: "small", icon: close, iconSize: 16, 
                    // Button wraps its children in a span, so the tooltip an icon-only
                    // WPButton would show on its own has to be asked for explicitly.
                    showTooltip: true, label: dismissLabel || __('Dismiss', 'jetpack-components'), onClick: onDismiss })), icon && (_jsx("div", { className: "upsell-banner--icon", children: _jsx("img", { src: icon, alt: "" }) })), _jsxs("div", { className: "upsell-banner--content", children: [_jsxs("div", { className: "upsell-banner--content-info", children: [_jsx("h3", { children: title }), _jsx("p", { children: createInterpolateElement(description, {
                                        br: _jsx("br", {}),
                                    }) })] }), _jsxs("div", { className: "upsell-banner--content-cta", children: [secondaryCtaLabel && secondaryCtaURL && (_jsx(Button, { className: "upsell-banner--content-cta-button secondary", href: secondaryCtaURL, onClick: secondaryCtaOnClick ?? undefined, isExternalLink: secondaryCtaIsExternalLink, children: secondaryCtaLabel })), primaryCtaLabel && primaryCtaURL && (_jsx(Button, { className: "upsell-banner--content-cta-button primary", href: primaryCtaURL, onClick: primaryCtaOnClick ?? undefined, isExternalLink: primaryCtaIsExternalLink, children: primaryCtaLabel }))] })] })] }) }));
};
export default UpsellBanner;
