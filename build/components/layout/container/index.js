import clsx from 'clsx';
import { createElement, forwardRef, useMemo } from 'react';
import styles from './style.module.scss';
/**
 * JP Container
 *
 * @param {ContainerProps}   props - Component properties.
 * @param {MutableRefObject} ref   - Ref to the component
 * @return {ReactElement}   Container component.
 */
const Container = ({ children, fluid = false, tagName = 'div', className, horizontalGap = 1, horizontalSpacing = 1, }, ref) => {
    const containerStyle = useMemo(() => {
        const padding = `calc( var(--horizontal-spacing) * ${horizontalSpacing} )`;
        const rowGap = `calc( var(--horizontal-spacing) * ${horizontalGap} )`;
        return {
            paddingTop: padding,
            paddingBottom: padding,
            rowGap,
        };
    }, [horizontalGap, horizontalSpacing]);
    const containerClassName = clsx(className, styles.container, {
        [styles.fluid]: fluid,
    });
    return createElement(tagName, {
        className: containerClassName,
        style: containerStyle,
        ref,
    }, children);
};
export default forwardRef(Container);
