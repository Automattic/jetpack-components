import { jsx as _jsx } from "react/jsx-runtime";
import styles from './style.module.scss';
/**
 * This is the wrapper component to build sections within your admin page.
 *
 * @param {AdminSectionBaseProps} props - Component properties.
 * @return {ReactNode} AdminSection component.
 */
const AdminSection = ({ children }) => {
    return _jsx("div", { className: styles.section, children: children });
};
export default AdminSection;
