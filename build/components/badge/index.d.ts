import React from 'react';
type BadgeProps = {
    children?: React.ReactNode;
    className?: string;
    variant?: 'success' | 'warning' | 'danger';
    [key: string]: unknown;
};
/**
 * Badge component
 *
 * @param {object}      props           - The component properties.
 * @param {string}      props.variant   - The badge variant (i.e. 'success', 'warning', 'danger').
 * @param {JSX.Element} props.children  - Badge text or content.
 * @param {string}      props.className - Additional class name to pass to the Badge component.
 *
 * @return {React.ReactElement} The `Badge` component.
 */
declare const Badge: React.FC<BadgeProps>;
export default Badge;
