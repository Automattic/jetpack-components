interface StatusProps {
    status?: 'active' | 'error' | 'inactive' | 'action' | 'initializing';
    label?: string;
    className?: string;
}
declare const Status: ({ className, label, status }: StatusProps) => React.JSX.Element;
export default Status;
