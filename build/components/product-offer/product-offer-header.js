import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { __ } from '@wordpress/i18n';
import { Icon, starFilled as star } from '@wordpress/icons';
import Text from '../text/index.js';
import styles from './style.module.scss';
/**
 * Product Detail Card Header component.
 *
 * @param {ProductOfferHeaderProps} props - Component props.
 * @return {React.ReactNode}  ProductOfferHeader react component.
 */
export const ProductOfferHeader = ({ title = __('Popular upgrade', 'jetpack-components'), }) => {
    return (_jsxs("div", { className: styles['card-header'], children: [_jsx(Icon, { icon: star, className: styles['product-bundle-icon'], size: 24 }), _jsx(Text, { variant: "label", children: title })] }));
};
