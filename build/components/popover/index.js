import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style.scss';
const Popover = ({ icon, children, action }) => {
    return (_jsxs("div", { className: "jp-popover", children: [
            _jsx("div", { className: "jp-popover__icon", children: icon }), _jsx("div", { className: "jp-popover__body", children: children }), _jsx("div", { className: "jp-popover__action", children: action })
        ] }));
};
export default Popover;
