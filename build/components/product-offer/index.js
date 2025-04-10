import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { __, sprintf } from '@wordpress/i18n';
import { Icon, check } from '@wordpress/icons';
import clsx from 'clsx';
import Alert from "../alert/index.js";
import Button from "../button/index.js";
import { CheckmarkIcon } from "../icons/index.js";
import ProductPrice from "../product-price/index.js";
import Text, { H3, Title } from "../text/index.js";
import { IconsCard } from "./icons-card.js";
import { ProductOfferHeader } from "./product-offer-header.js";
import styles from './style.module.scss';
/**
 * Product Detail component.
 *
 * @param {ProductOfferProps} props - Component props.
 * @return {React.ReactNode} - ProductOffer react component.
 */
const ProductOffer = ({ addProductUrl, buttonDisclaimer, buttonText = '', className, description, error = '', features, hasRequiredPlan, icon, isBundle = false, isCard, isLoading, onAdd, pricing = {}, slug, subTitle = '', supportedProducts, title = '', }) => {
    const { isFree, price, currency, offPrice } = pricing;
    const needsPurchase = !isFree && !hasRequiredPlan;
    const defautlButtonText = sprintf(
    /* translators: placeholder is product name. */
    __('Add %s', 'jetpack-components'), title);
    return (_jsxs("div", { className: clsx(styles.wrapper, className, {
            [styles['is-bundle-card']]: isBundle,
            [styles['is-card']]: isCard || isBundle, // is card when is bundle.
        }), children: [isBundle && _jsx(ProductOfferHeader, {}), _jsxs("div", { className: styles['card-container'], children: [_jsx(IconsCard, { icon: icon, products: supportedProducts?.length ? supportedProducts : [slug], size: 32 }), _jsx(H3, { children: title }), subTitle && _jsx(Title, { mb: 3, children: subTitle }), description && _jsx(Text, { mb: 3, children: description }), _jsx("ul", { className: styles.features, children: features.map((feature, id) => (_jsxs(Text, { component: "li", variant: "body", children: [_jsx(Icon, { icon: check, size: 24, className: styles.check }), feature] }, `feature-${id}`))) }), needsPurchase && (_jsx(ProductPrice, { price: price, offPrice: offPrice, currency: currency })), isFree && _jsx(H3, { children: __('Free', 'jetpack-components') }), _jsx(Alert, { level: "error", showIcon: !!error, children: error }), buttonDisclaimer, (!isBundle || (isBundle && !hasRequiredPlan)) && (_jsx(Button, { onClick: addProductUrl ? null : onAdd, isLoading: isLoading, disabled: isLoading, variant: isLoading || !isBundle ? 'primary' : 'secondary', className: styles['add-button'], ...(addProductUrl ? { href: addProductUrl } : {}), children: buttonText || defautlButtonText })), isBundle && hasRequiredPlan && (_jsxs("div", { className: styles['product-has-required-plan'], children: [_jsx(CheckmarkIcon, { size: 36 }), _jsx(Text, { children: __('Active on your site', 'jetpack-components') })] }))] })] }));
};
export default ProductOffer;
export * from "./icons-card.js";
