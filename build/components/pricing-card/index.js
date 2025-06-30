import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { getCurrencyObject } from '@automattic/number-formatters';
import { Button } from '@wordpress/components';
import { sprintf, __ } from '@wordpress/i18n';
import { LoadingPlaceholder } from '@automattic/jetpack-components';
import TermsOfService from "../terms-of-service/index.js";
import './style.scss';
/**
 * Whether or not to display a price's decimal part in the UI.
 * Needed as `getCurrencyObject` will always return the decimal part populated even if it
 * doesn't exist.
 *
 * @param {CurrencyObject} currencyObject -- A currency object returned from `getCurrencyObject`.
 * @return {boolean} Whether or not to display the price decimal part.
 */
const showPriceDecimals = (currencyObject) => {
    return currencyObject.fraction.indexOf('00') === -1;
};
/**
 * The Pricing card component.
 *
 * @param {PricingCardProps} props -- The component props.
 * @return {ReactNode} The rendered component.
 */
const PricingCard = ({ currencyCode = 'USD', priceDetails = __('/month, paid yearly', 'jetpack-components'), ...props }) => {
    const currencyObjectBefore = getCurrencyObject(props.priceBefore, currencyCode);
    const currencyObjectAfter = getCurrencyObject(props.priceAfter, currencyCode);
    return (_jsxs("div", { className: "jp-components__pricing-card", children: [props.icon && (_jsx("div", { className: "jp-components__pricing-card__icon", children: 'string' === typeof props.icon ? (_jsx("img", { src: props.icon, alt: sprintf(
                    /* translators: placeholder is a product name */
                    __('Icon for the product %s', 'jetpack-components'), props.title) })) : (props.icon) })), _jsx("h1", { className: "jp-components__pricing-card__title", children: props.title }), _jsxs("div", { className: "jp-components__pricing-card__pricing", children: [props.priceAfter === 0 && _jsx(LoadingPlaceholder, { width: "100%", height: 48 }), props.priceBefore !== props.priceAfter && props.priceAfter > 0 && (_jsxs("div", { className: "jp-components__pricing-card__price-before", children: [_jsx("span", { className: "jp-components__pricing-card__currency", children: currencyObjectBefore.symbol }), _jsx("span", { className: "jp-components__pricing-card__price", children: currencyObjectBefore.integer }), showPriceDecimals(currencyObjectBefore) && (_jsxs("span", { className: "jp-components__pricing-card__price-decimal", children: [' ', currencyObjectBefore.fraction] })), _jsx("div", { className: "jp-components__pricing-card__price-strikethrough" })] })), props.priceAfter > 0 && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "jp-components__pricing-card__price-after", children: [_jsx("span", { className: "jp-components__pricing-card__currency", children: currencyObjectAfter.symbol }), _jsx("span", { className: "jp-components__pricing-card__price", children: currencyObjectAfter.integer }), showPriceDecimals(currencyObjectAfter) && (_jsx("span", { className: "jp-components__pricing-card__price-decimal", children: currencyObjectAfter.fraction }))] }), _jsx("span", { className: "jp-components__pricing-card__price-details", children: priceDetails })] }))] }), props.children && (_jsx("div", { className: "jp-components__pricing-card__extra-content-wrapper", children: props.children })), props.tosText && _jsx("div", { className: "jp-components__pricing-card__tos", children: props.tosText }), props.ctaText && (_jsxs(_Fragment, { children: [!props.tosText && (_jsx("div", { className: "jp-components__pricing-card__tos", children: _jsx(TermsOfService, { agreeButtonLabel: props.ctaText }) })), _jsx("div", { className: "jp-components__pricing-card__cta", children: _jsx(Button, { className: "jp-components__pricing-card__button", label: props.ctaText, onClick: props.onCtaClick, children: props.ctaText }) })] })), props.infoText && (_jsx("div", { className: "jp-components__pricing-card__info", children: props.infoText }))] }));
};
export default PricingCard;
