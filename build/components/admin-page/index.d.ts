import '@wordpress/admin-ui/build-style/style.css';
import type { AdminPageProps } from './types.ts';
import type { FC } from 'react';
/**
 * This is the base structure for any admin page. It comes with Header and Footer.
 *
 * All content must be passed as children wrapped in as many <AdminSection> elements as needed.
 *
 * @param {AdminPageProps} props - Component properties.
 * @return {ReactNode} AdminPage component.
 */
declare const AdminPage: FC<AdminPageProps>;
export default AdminPage;
