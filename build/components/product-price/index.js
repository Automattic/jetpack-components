import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';
/*
 * Internal dependencies
 */
import Text from '../text/index.js';
import { Price } from './price.js';
import styles from './style.module.scss';
/**
 * React component to render the price.
 *
 * @param {ProductPriceProps} props - Component props.
 * @return {ReactNode} Price react component.
 */
const ProductPrice = ({ price, offPrice, currency = '', showNotOffPrice = true, hideDiscountLabel = true, promoLabel = '', legend = __('/month, paid yearly', 'jetpack-components'), isNotConvenientPrice = false, hidePriceFraction = false, children, variant = 'default', }) => {
    if ((price == null && offPrice == null) || !currency) {
        return null;
    }
    showNotOffPrice = showNotOffPrice && offPrice != null;
    const discount = typeof price === 'number' && typeof offPrice === 'number'
        ? Math.floor(((price - offPrice) / price) * 100)
        : 0;
    const showDiscountLabel = !hideDiscountLabel && discount && discount > 0;
    const discountElt = showDiscountLabel ? discount + __('% off', 'jetpack-components') : null;
    if (variant === 'simple') {
        return (_jsxs("div", { className: styles.simple, children: [
                _jsxs("div", { className: styles.currentPrice, children: [
                        _jsx(Price, { value: offPrice ?? price, currency: currency, isOff: !isNotConvenientPrice, hidePriceFraction: hidePriceFraction, inline: true }), _jsx("div", { children: legend })
                    ] }), showNotOffPrice && (_jsxs("div", { className: styles.originalPrice, children: [
                        _jsx(Price, { value: price, currency: currency, isOff: false, hidePriceFraction: hidePriceFraction, inline: true }), _jsx("div", { children: discount &&
                                discount > 0 &&
                                discount + __('% off the first year', 'jetpack-components') })
                    ] }))] }));
    }
    return (_jsxs(_Fragment, { children: [
            _jsx("div", { className: styles.container, children: _jsxs("div", { className: clsx(styles['price-container'], 'product-price_container'), children: [
                        _jsx(Price, { value: offPrice ?? price, currency: currency, isOff: !isNotConvenientPrice, hidePriceFraction: hidePriceFraction }), showNotOffPrice && (_jsx(Price, { value: price, currency: currency, isOff: false, hidePriceFraction: hidePriceFraction })), discountElt && (_jsx(Text, { className: clsx(styles['promo-label'], 'product-price_promo_label'), children: discountElt }))] }) }), _jsxs("div", { className: styles.footer, children: [children ? (children) : (_jsx(Text, { className: clsx(styles.legend, 'product-price_legend'), children: legend })), promoLabel && (_jsx(Text, { className: clsx(styles['promo-label'], 'product-price_promo_label'), children: promoLabel }))] })
        ] }));
};
export default ProductPrice;
export * from './price.js';
