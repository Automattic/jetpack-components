import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './style.module.scss';
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
const Badge = ({ children, className, variant, ...props }) => {
    const classes = clsx(styles.badge, {
        [styles['is-success']]: variant === 'success',
        [styles['is-warning']]: variant === 'warning',
        [styles['is-danger']]: variant === 'danger',
    }, className);
    return (_jsx("span", { className: classes, ...props, children: children }));
};
export default Badge;
