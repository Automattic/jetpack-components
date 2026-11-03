import type { SidebarFooterProps } from './types.ts';
import type { JSX } from 'react';
/**
 * Actions pinned to the bottom of a sidebar, with the content scrolling under them.
 *
 * Render it last inside a flex column that fills the sidebar. Use `@wordpress/ui` buttons at
 * their default size, which is 40px tall.
 *
 * @param {SidebarFooterProps} props - Component props.
 * @return {JSX.Element} The footer.
 */
export default function SidebarFooter({ children, description, className, }: SidebarFooterProps): JSX.Element;
