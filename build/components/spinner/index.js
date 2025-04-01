import { jsx as _jsx } from "react/jsx-runtime";
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';
const Spinner = ({ color = '#FFFFFF', className = '', size = 20 }) => {
    const theClassName = className + ' jp-components-spinner';
    const styleOuter = {
        width: size,
        height: size,
        fontSize: size, // allows border-width to be specified in em units
        borderTopColor: color,
    };
    const styleInner = {
        borderTopColor: color,
        borderRightColor: color,
    };
    return (_jsx("div", { className: theClassName, children: _jsx("div", { className: "jp-components-spinner__outer", style: styleOuter, children: _jsx("div", { className: "jp-components-spinner__inner", style: styleInner }) }) }));
};
Spinner.propTypes = {
    /** The spinner color. */
    color: PropTypes.string,
    /** CSS class names. */
    className: PropTypes.string,
    /** The spinner size. */
    size: PropTypes.number,
};
export default Spinner;
