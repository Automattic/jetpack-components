import React from 'react';
import type { H3Props, TextProps, TitleProps } from './types.js';
/**
 * Text component.
 *
 * @param {TextProps} props - Component props.
 * @return {React.ReactElement} - JSX.Element
 */
declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLElement>>;
export default Text;
/**
 * Heading component - Medium size.
 *
 * @param {TextProps} props - Component props.
 * @return {React.ReactElement} - JSX.Element
 */
export declare const H2: React.FC<TextProps>;
/**
 * Heading component - Small size,
 *
 * @param {H3Props} props - Component props.
 * @return {React.ReactElement} - JSX.Element
 */
export declare const H3: React.FC<H3Props>;
/**
 * Title component, based on Text component.
 *
 * @param {TitleProps} props - Component props.
 * @return {React.ReactElement} - JSX.Element
 */
export declare const Title: React.FC<TitleProps>;
export * from './constants.js';
