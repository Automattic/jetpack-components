import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './style.module.scss';
/**
 * Actions pinned to the bottom of a sidebar, with the content scrolling under them.
 *
 * Render it last inside a flex column that fills the sidebar. Use `@wordpress/ui` buttons at
 * their default size, which is 40px tall.
 *
 * @param {SidebarFooterProps} props - Component props.
 * @return {JSX.Element} The footer.
 */
export default function SidebarFooter({ children, description, className, }) {
    return (_jsxs("div", { className: clsx(styles.footer, className), children: [description, _jsx("div", { className: styles.actions, children: children })] }));
}
