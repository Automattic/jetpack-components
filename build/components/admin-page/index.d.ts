import type { AdminPageProps } from './types.ts';
import type React from 'react';
/**
 * This is the base structure for any admin page. It comes with Header and Footer.
 *
 * All content must be passed as children wrapped in as many <AdminSection> elements as needed.
 *
 * @param {AdminPageProps} props - Component properties.
 * @return {React.ReactNode} AdminPage component.
 */
declare const AdminPage: React.FC<AdminPageProps>;
export default AdminPage;
