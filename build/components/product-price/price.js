import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getCurrencyObject } from '@automattic/number-formatters';
import clsx from 'clsx';
import Text from '../text/index.js';
import styles from './style.module.scss';
/**
 * React component to render a Price composition.
 *
 * @param {PriceProps} props - Component props.
 * @return {ReactNode} -Price react component.
 */
export const Price = ({ value, currency, isOff, hidePriceFraction, inline = false, }) => {
    const classNames = clsx(styles.price, 'product-price_price', {
        [styles['is-not-off-price']]: !isOff,
        [styles['price-inline']]: inline,
    });
    const { symbol, integer, fraction } = getCurrencyObject(value, currency);
    const showPriceFraction = !hidePriceFraction || !fraction.endsWith('00');
    return (_jsxs(Text, { className: classNames, variant: "headline-medium", component: "p", children: [inline ? (_jsxs(_Fragment, { children: [symbol, integer] })) : (_jsxs(_Fragment, { children: [
                    _jsx(Text, { className: styles.symbol, component: "sup", variant: "title-medium", children: symbol }), integer] })), showPriceFraction && (_jsx(Text, { component: "sup", variant: "body-small", "data-testid": "PriceFraction", children: _jsx("strong", { children: fraction }) }))] }));
};
