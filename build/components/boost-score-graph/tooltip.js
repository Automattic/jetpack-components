import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getScoreLetter } from '@automattic/jetpack-boost-score-api';
import { dateI18n } from '@wordpress/date';
import { __, sprintf } from '@wordpress/i18n';
import './style-tooltip.scss';
export const Tooltip = ({ period }) => {
    if (!period || !period.dimensions || !period.timestamp) {
        return null;
    }
    const { mobile_overall_score, desktop_overall_score, desktop_cls, desktop_lcp, desktop_tbt, mobile_cls, mobile_lcp, mobile_tbt, } = period.dimensions;
    const scoreLetter = getScoreLetter(mobile_overall_score, desktop_overall_score);
    const date = dateI18n('F j, Y', new Date(period.timestamp), false);
    // If any of the key properties are missing, don't render the tooltip.
    if (!scoreLetter || !mobile_overall_score || !desktop_overall_score || !date) {
        return null;
    }
    return (_jsxs("div", { className: "jb-score-tooltip", children: [_jsx("div", { className: "jb-score-tooltip__date", children: date }), _jsxs("div", { className: "jb-score-tooltip__row", children: [_jsx("div", { className: "jb-score-tooltip__column", children: __('Overall score', 'jetpack-components') }), _jsx("div", { className: "jb-score-tooltip__column", children: scoreLetter })] }), _jsx("hr", {}), _jsxs("div", { className: "jb-score-tooltip__row", children: [_jsx("div", { className: "jb-score-tooltip__column", children: __('Desktop score', 'jetpack-components') }), _jsx("div", { className: "jb-score-tooltip__column", children: 
                        /* translators: %d is the score */
                        sprintf(__('%d / 100', 'jetpack-components'), desktop_overall_score) })] }), typeof desktop_lcp === 'number' && (_jsxs("div", { className: "jb-score-tooltip__row jb-score-tooltip__row--secondary", children: [_jsx("div", { className: "jb-score-tooltip__column", children: __('Largest Contentful Paint', 'jetpack-components') }), _jsx("div", { className: "jb-score-tooltip__column", children: sprintf('%0.2fs', desktop_lcp) })] })), typeof desktop_tbt === 'number' && (_jsxs("div", { className: "jb-score-tooltip__row jb-score-tooltip__row--secondary", children: [_jsx("div", { className: "jb-score-tooltip__column", children: __('Total Blocking Time', 'jetpack-components') }), _jsx("div", { className: "jb-score-tooltip__column", children: sprintf('%0.2fs', desktop_tbt) })] })), typeof desktop_cls === 'number' && (_jsxs("div", { className: "jb-score-tooltip__row jb-score-tooltip__row--secondary", children: [_jsx("div", { className: "jb-score-tooltip__column", children: __('Cumulative Layout Shift', 'jetpack-components') }), _jsx("div", { className: "jb-score-tooltip__column", children: sprintf('%0.2f', desktop_cls) })] })), _jsx("hr", {}), _jsxs("div", { className: "jb-score-tooltip__row", children: [_jsx("div", { className: "jb-score-tooltip__column", children: __('Mobile score', 'jetpack-components') }), _jsx("div", { className: "jb-score-tooltip__column", children: 
                        /* translators: %d is the score */
                        sprintf(__('%d / 100', 'jetpack-components'), mobile_overall_score) })] }), typeof mobile_lcp === 'number' && (_jsxs("div", { className: "jb-score-tooltip__row jb-score-tooltip__row--secondary", children: [_jsx("div", { className: "jb-score-tooltip__column", children: __('Largest Contentful Paint', 'jetpack-components') }), _jsx("div", { className: "jb-score-tooltip__column", children: sprintf('%0.2fs', mobile_lcp) })] })), typeof mobile_tbt === 'number' && (_jsxs("div", { className: "jb-score-tooltip__row jb-score-tooltip__row--secondary", children: [_jsx("div", { className: "jb-score-tooltip__column", children: __('Total Blocking Time', 'jetpack-components') }), _jsx("div", { className: "jb-score-tooltip__column", children: sprintf('%0.2fs', mobile_tbt) })] })), typeof mobile_cls === 'number' && (_jsxs("div", { className: "jb-score-tooltip__row jb-score-tooltip__row--secondary", children: [_jsx("div", { className: "jb-score-tooltip__column", children: __('Cumulative Layout Shift', 'jetpack-components') }), _jsx("div", { className: "jb-score-tooltip__column", children: sprintf('%0.2f', mobile_cls) })] })), _jsx("div", { className: "jb-score-tooltip__pointer" })] }));
};
