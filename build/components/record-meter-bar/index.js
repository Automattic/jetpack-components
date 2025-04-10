import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';
import { useMemo } from 'react';
import numberFormat from "../number-format/index.js";
import './style.scss';
/**
 * Generate Record Meter bar
 *
 * @param {RecordMeterBarProps} props - Props
 * @return {React.ReactElement} - JSX element
 */
const RecordMeterBar = ({ totalCount, items = [], showLegendLabelBeforeCount = false, sortByCount, className, tableCaption, legendTitle, recordTypeLabel, recordCountLabel, }) => {
    const total = useMemo(() => {
        // If total count is not given, then compute it from items' count
        return (totalCount ||
            items.reduce((currentTotal, { count }) => {
                return currentTotal + count;
            }, 0));
    }, [items, totalCount]);
    const itemsToRender = useMemo(() => {
        if (sortByCount) {
            // create a new array because .sort() updates the array in place.
            return [...items].sort((a, z) => {
                return 'ascending' === sortByCount ? a.count - z.count : z.count - a.count;
            });
        }
        return items;
    }, [items, sortByCount]);
    return (_jsxs("div", { className: clsx('record-meter-bar', className), children: [_jsx("div", { className: "record-meter-bar__items", "aria-hidden": "true", children: itemsToRender.map(({ count, label, backgroundColor }) => {
                    const widthPercent = ((count / total) * 100).toPrecision(2);
                    return (_jsx("div", { style: { backgroundColor, flexBasis: `${widthPercent}%` } }, label));
                }) }), _jsxs("div", { className: "record-meter-bar__legend", "aria-hidden": "true", children: [legendTitle && _jsx("div", { className: "record-meter-bar__legend--title", children: legendTitle }), _jsx("ul", { className: "record-meter-bar__legend--items", children: itemsToRender.map(({ count, label, backgroundColor }) => {
                            const formattedCount = numberFormat(count);
                            return (_jsxs("li", { className: "record-meter-bar__legend--item", children: [_jsx("div", { className: "record-meter-bar__legend--item-circle", style: { backgroundColor } }), !showLegendLabelBeforeCount && (_jsxs("span", { children: [_jsx("span", { className: "record-meter-bar__legend--item-count", children: formattedCount }), _jsx("span", { className: "record-meter-bar__legend--item-label", children: label })] })), showLegendLabelBeforeCount && (_jsxs("span", { children: [_jsx("span", { className: "record-meter-bar__legend--item-label record-meter-bar__legend--item-label-first", children: label }), _jsxs("span", { className: "record-meter-bar__legend--item-count", children: ["(", formattedCount, ")"] })] }))] }, label));
                        }) })] }), _jsxs("table", { className: "screen-reader-text", children: [_jsx("caption", { children: tableCaption || __('Summary of the records', 'jetpack-components') }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("th", { scope: "col", children: recordTypeLabel || __('Record type', 'jetpack-components') }), _jsx("th", { scope: "col", children: recordCountLabel || __('Record count', 'jetpack-components') })] }), itemsToRender.map(({ label, count }) => {
                                return (_jsxs("tr", { children: [_jsx("td", { children: label }), _jsx("td", { children: count })] }, label));
                            })] })] })] }));
};
export default RecordMeterBar;
