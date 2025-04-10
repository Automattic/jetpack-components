import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getCurrencyObject } from '@automattic/format-currency';
import clsx from 'clsx';
import Text from "../text/index.js";
import styles from './style.module.scss';
/**
 * React component to render a Price composition.
 *
 * @param {PriceProps} props - Component props.
 * @return {React.ReactNode} -Price react component.
 */
export const Price = ({ value, currency, isOff, hidePriceFraction }) => {
    const classNames = clsx(styles.price, 'product-price_price', {
        [styles['is-not-off-price']]: !isOff,
    });
    const { symbol, integer, fraction } = getCurrencyObject(value, currency);
    const showPriceFraction = !hidePriceFraction || !fraction.endsWith('00');
    return (_jsxs(Text, { className: classNames, variant: "headline-medium", component: "p", children: [_jsx(Text, { className: styles.symbol, component: "sup", variant: "title-medium", children: symbol }), integer, showPriceFraction && (_jsx(Text, { component: "sup", variant: "body-small", "data-testid": "PriceFraction", children: _jsx("strong", { children: fraction }) }))] }));
};
