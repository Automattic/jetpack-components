import './style.scss';
declare function Spinner({ color, className, size }: {
    className?: string;
    color?: string;
    size?: number;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Spinner {
    var propTypes: {
        /** The spinner color. */
        color: any;
        /** CSS class names. */
        className: any;
        /** The spinner size. */
        size: any;
    };
}
export default Spinner;
