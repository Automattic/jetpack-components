import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import { forwardRef, useMemo } from 'react';
import { BOX_MODEL_VALUES, VARIANTS_MAPPING } from "./constants.js";
import styles from './style.module.scss';
/**
 * Text component.
 *
 * @param {TextProps} props - Component props.
 * @return {React.ReactElement} - JSX.Element
 */
const Text = forwardRef(({ variant = 'body', children, component, className, ...componentProps }, ref) => {
    const Component = component || VARIANTS_MAPPING[variant] || 'span';
    // Build Styles module CSS classnames.
    const boxModelClasses = useMemo(() => {
        return BOX_MODEL_VALUES.reduce((acc, value) => {
            if (typeof componentProps[value] !== 'undefined') {
                acc += styles[`${value}-${componentProps[value]}`] + ' ';
                // pick spacing prop. Do not pass down to Component.
                delete componentProps[value];
            }
            return acc;
        }, '');
    }, [componentProps]);
    return (_jsx(Component, { className: clsx(styles.reset, styles[variant], className, boxModelClasses), ...componentProps, ref: ref, children: children }));
});
Text.displayName = 'Text';
export default Text;
/**
 * Heading component - Medium size.
 *
 * @param {TextProps} props - Component props.
 * @return {React.ReactElement} - JSX.Element
 */
export const H2 = ({ children, ...componentProps }) => (_jsx(Text, { variant: "headline-medium", mb: 3, ...componentProps, children: children }));
/**
 * Heading component - Small size,
 *
 * @param {H3Props} props - Component props.
 * @return {React.ReactElement} - JSX.Element
 */
export const H3 = ({ children, weight = 'bold', ...componentProps }) => {
    const variant = `headline-small${weight === 'bold' ? '' : `-${weight}`}`;
    return (_jsx(Text, { variant: variant, mb: 3, ...componentProps, children: children }));
};
/**
 * Title component, based on Text component.
 *
 * @param {TitleProps} props - Component props.
 * @return {React.ReactElement} - JSX.Element
 */
export const Title = ({ children, size = 'medium', ...componentProps }) => (_jsx(Text, { variant: `title-${size}`, mb: 1, ...componentProps, children: children }));
export * from "./constants.js";
