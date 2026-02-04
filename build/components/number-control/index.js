import { jsx as _jsx } from "react/jsx-runtime";
import { __experimentalNumberControl as ExperimentalNumberControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
TextControl, } from '@wordpress/components';
/**
 * This uses the experimental NumberControl from the block
 * editor where available, otherwise it falls back to a
 * standard TextControl, limited to numbers.
 * @type {ComponentType<NumberControlProps>}
 *
 * @param {NumberControlProps} props - the NumberControl component props
 * @return {ReactNode} - NumberControl component
 */
const NumberControl = ExperimentalNumberControl ||
    function CustomNumberControl(props) {
        return (_jsx(TextControl, { type: "number", inputMode: "numeric", ...props, __next40pxDefaultSize: true }));
    };
export default NumberControl;
