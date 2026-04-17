import { jsx as _jsx } from "react/jsx-runtime";
import { RadioControl as WPRadioControl } from '@wordpress/components';
import clsx from 'clsx';
const RadioControl = ({ selected, className, disabled, help, label, hideLabelFromVision, options, onChange, }) => {
    return (_jsx(WPRadioControl, { selected: selected, className: clsx('radio', className), disabled: disabled, help: help, label: label, hideLabelFromVision: hideLabelFromVision, options: options, onChange: onChange }));
};
export default RadioControl;
