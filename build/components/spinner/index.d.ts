import './style.scss';
declare const Spinner: {
    ({ color, className, size }: {
        color?: string;
        className?: string;
        size?: number;
    }): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        /** The spinner color. */
        color: any;
        /** CSS class names. */
        className: any;
        /** The spinner size. */
        size: any;
    };
};
export default Spinner;
