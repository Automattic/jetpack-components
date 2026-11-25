import type { H3Props, TextProps, TitleProps } from './types.ts';
import type { FC } from 'react';
/**
 * Text component.
 *
 * @deprecated Use `Text` from `@wordpress/ui` instead.
 *
 * @param {TextProps} props - Component props.
 * @return {ReactElement} - JSX.Element
 */
declare const Text: import("react").ForwardRefExoticComponent<TextProps & import("react").RefAttributes<HTMLElement>>;
export default Text;
/**
 * Heading component - Small size,
 *
 * @deprecated Use `Text` from `@wordpress/ui` instead.
 *
 * @param {H3Props} props - Component props.
 * @return {ReactElement} - JSX.Element
 */
export declare const H3: FC<H3Props>;
/**
 * Title component, based on Text component.
 *
 * @deprecated Use `Text` from `@wordpress/ui` instead.
 *
 * @param {TitleProps} props - Component props.
 * @return {ReactElement} - JSX.Element
 */
export declare const Title: FC<TitleProps>;
export * from './constants.ts';
