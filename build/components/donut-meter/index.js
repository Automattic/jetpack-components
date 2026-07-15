import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style.scss';
const getAdaptiveType = (percentage) => {
    if (percentage < 70) {
        return 'success';
    }
    if (percentage < 100) {
        return 'warning';
    }
    return 'danger';
};
/**
 * Generate record meter donut bar
 *
 * @param {DonutMeterProps} props - Props
 * @return {ReactElement} - JSX element
 */
const DonutMeter = ({ className = '', description = '', donutWidth = '64px', segmentCount, thickness = '3.5', title = '', totalCount, type, useAdaptiveColors, }) => {
    const validDivisor = totalCount === 0 ? 1 : totalCount;
    const percentage = (segmentCount / validDivisor) * 100;
    // If we don't have a title or description, hide the meter from screen readers.
    const isHidden = typeof title === 'string' &&
        title.length === 0 &&
        typeof description === 'string' &&
        description.length === 0
        ? 'true'
        : 'false';
    const finalClassName = `donut-meter ${className ? className + ' ' : ''}${type ? 'is-' + type + ' ' : ''} ${!type && useAdaptiveColors ? 'is-' + getAdaptiveType(percentage) + ' ' : ''}`.trim();
    return (_jsx("div", { className: finalClassName, "aria-hidden": isHidden, "data-testid": "donut-meter", children: _jsxs("svg", { width: donutWidth, height: donutWidth, viewBox: "0 0 40 40", className: "donut-meter_svg", role: "img", children: [_jsx("title", { id: "donut-meter-title", children: title }), _jsx("desc", { id: "donut-meter-description", children: description }), _jsx("circle", { className: "donut-meter-hole", cx: "20" // center x value of circle
                    , cy: "20" // center y value of circle
                    , r: "15.91549430918954" // radius based on the circumference r = 100/(2π)
                    , fill: "transparent" }), _jsx("circle", { className: "donut-meter-ring", cx: "20", cy: "20", r: "15.91549430918954", fill: "transparent", strokeWidth: thickness, stroke: "#ebebeb" }), _jsx("circle", { className: "donut-meter-segment", cx: "20", cy: "20", r: "15.91549430918954", fill: "transparent", "transform-origin": "center" // eslint-disable-line react/no-unknown-property -- @todo Switch to transformOrigin when we use React 19.
                    , strokeWidth: thickness, strokeDasharray: `${percentage} ${100 - percentage}`, strokeDashoffset: "-25" // this ensures the segment begins at the bottom of the donut instead of the top
                 })] }) }));
};
export default DonutMeter;
