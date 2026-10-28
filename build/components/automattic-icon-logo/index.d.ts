import type { ReactElement } from 'react';
/**
 * Automattic Icon Logo component
 *
 * The Automattic logo is black or white only: pass white for both colors on dark backgrounds.
 *
 * @param {object} props            - Component props
 * @param {string} props.innerColor - Color code for the logo's ring.
 * @param {string} props.outerColor - Color code for the slash inside the ring.
 * @return {ReactElement} Component template
 */
export default function AutomatticIconLogo({ innerColor, outerColor, }: {
    innerColor: string;
    outerColor: string;
}): ReactElement;
