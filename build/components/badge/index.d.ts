import type { ReactNode, FC } from 'react';
type BadgeProps = {
    children?: ReactNode;
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
 * @return {ReactElement} The `Badge` component.
 */
declare const Badge: FC<BadgeProps>;
export default Badge;
