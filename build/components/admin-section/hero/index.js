import { jsx as _jsx } from "react/jsx-runtime";
import styles from './style.module.scss';
/**
 * The wrapper component for a Hero Section to be used in admin pages.
 *
 * @param {AdminSectionBaseProps} props - Component properties.
 * @return {React.Component} AdminSectionHero component.
 */
const AdminSectionHero = ({ children }) => {
    return _jsx("div", { className: styles['section-hero'], children: children });
};
export default AdminSectionHero;
