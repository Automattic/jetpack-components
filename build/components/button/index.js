import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button as WPButton, Spinner, VisuallyHidden } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Icon, external } from '@wordpress/icons';
import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './style.module.scss';
/**
 * Button component
 *
 * @param {ButtonProps} props - Component Props
 * @return {ReactNode} Rendered button
 */
const Button = forwardRef((props, ref) => {
    const { children, variant = 'primary', size = 'normal', weight = 'bold', icon, iconSize, disabled, isDestructive, isLoading, isExternalLink, className: propsClassName, text, fullWidth, ...componentProps } = props;
    const className = clsx(styles.button, propsClassName, {
        [styles.normal]: size === 'normal',
        [styles.small]: size === 'small',
        [styles.icon]: Boolean(icon),
        [styles.loading]: isLoading,
        [styles.regular]: weight === 'regular',
        [styles['full-width']]: fullWidth,
        [styles['is-icon-button']]: Boolean(icon) && !children,
    });
    componentProps.ref = ref;
    const externalIconSize = size === 'normal' ? 20 : 16;
    const externalIcon = isExternalLink && (_jsxs(_Fragment, { children: [_jsx(Icon, { size: externalIconSize, icon: external, className: styles['external-icon'] }), _jsx(VisuallyHidden, { as: "span", children: 
                /* translators: accessibility text */
                __('(opens in a new tab)', 'jetpack-components') })] }));
    const externalTarget = isExternalLink ? '_blank' : undefined;
    // ref https://github.com/WordPress/gutenberg/pull/44198
    const hasChildren = children?.[0] &&
        children[0] !== null &&
        // Tooltip should not considered as a child
        children?.[0]?.props?.className !== 'components-tooltip';
    return (_jsxs(WPButton, { target: externalTarget, variant: variant, className: clsx(className, { 'has-text': !!icon && hasChildren }), icon: !isExternalLink ? icon : undefined, iconSize: iconSize, disabled: disabled, "aria-disabled": disabled, isDestructive: isDestructive, text: text, ...componentProps, children: [isLoading && _jsx(Spinner, {}), _jsx("span", { children: children }), externalIcon] }));
});
Button.displayName = 'Button';
export default Button;
