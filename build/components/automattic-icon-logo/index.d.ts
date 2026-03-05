import type { ReactElement } from 'react';
/**
 * Automattic Icon Logo component
 *
 * @param {object} props            - Component props
 * @param {string} props.innerColor - Color code for the line in the middle of the logo.
 * @param {string} props.outerColor - Color code for the logo's outer
 * @return {ReactElement} Component template
 */
export default function AutomatticIconLogo({ innerColor, outerColor }: {
    innerColor: string;
    outerColor: string;
}): ReactElement;
