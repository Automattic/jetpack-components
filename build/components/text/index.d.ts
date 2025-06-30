import type { H3Props, TextProps, TitleProps } from './types.ts';
import type { FC } from 'react';
/**
 * Text component.
 *
 * @param {TextProps} props - Component props.
 * @return {ReactElement} - JSX.Element
 */
declare const Text: import("react").ForwardRefExoticComponent<TextProps & import("react").RefAttributes<HTMLElement>>;
export default Text;
/**
 * Heading component - Medium size.
 *
 * @param {TextProps} props - Component props.
 * @return {ReactElement} - JSX.Element
 */
export declare const H2: FC<TextProps>;
/**
 * Heading component - Small size,
 *
 * @param {H3Props} props - Component props.
 * @return {ReactElement} - JSX.Element
 */
export declare const H3: FC<H3Props>;
/**
 * Title component, based on Text component.
 *
 * @param {TitleProps} props - Component props.
 * @return {ReactElement} - JSX.Element
 */
export declare const Title: FC<TitleProps>;
export * from './constants.ts';
