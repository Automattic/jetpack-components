import type { JSX } from 'react';
interface StatusProps {
    status?: 'active' | 'error' | 'inactive' | 'action' | 'initializing';
    label?: string;
    className?: string;
}
declare const Status: ({ className, label, status }: StatusProps) => JSX.Element;
export default Status;
