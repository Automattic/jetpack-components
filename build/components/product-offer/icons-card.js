import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon, plus } from '@wordpress/icons';
import { Fragment } from 'react';
import { getIconBySlug } from '../icons/index.js';
import styles from './style.module.scss';
/**
 * Icons composition for a bundle product,
 * based on the list of supported products.
 *
 * @param {IconsCardProps} props - Component props.
 * @return {React.ReactNode}      Bundle product icons react component.
 */
export const IconsCard = ({ products, icon, size = 24 }) => {
    if (icon) {
        const CustomIcon = getIconBySlug(icon);
        return (_jsx("div", { className: styles['product-bundle-icons'], children: _jsx(CustomIcon, { size: size }) }));
    }
    return (_jsx("div", { className: styles['product-bundle-icons'], children: products.map((product, index) => {
            const ProductIcon = getIconBySlug(product);
            const ProIcon = ProductIcon ? ProductIcon : () => null;
            return (_jsxs(Fragment, { children: [_jsx(ProIcon, { size: size }), index !== products.length - 1 && (_jsx(Icon, { className: styles['plus-icon'], icon: plus, size: 16 }, `icon-plugs${index * 2 + 1}`))] }, index));
        }) }));
};
