import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ButtonGroup, Button, DropdownMenu } from '@wordpress/components';
import styles from './style.module.scss';
const DownIcon = () => (_jsx("svg", { width: "15", height: "9", fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "10 9 4 7", children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m18.004 10.555-6.005 5.459-6.004-5.459 1.009-1.11 4.995 4.542 4.996-4.542 1.009 1.11Z" }) }));
const SplitButton = ({ variant, controls, popoverProps, toggleProps, label, ...buttonProps }) => {
    return (_jsxs(ButtonGroup, { className: styles['split-button'], children: [_jsx(Button, { variant: variant, ...buttonProps, className: styles.button }), _jsx(DropdownMenu, { toggleProps: { variant, className: styles.button, ...toggleProps }, popoverProps: { noArrow: false, ...popoverProps }, icon: _jsx(DownIcon, {}), disableOpenOnArrowDown: true, controls: controls, label: label })] }));
};
export default SplitButton;
