import React from 'react';
import './style.scss';
type RecordMeterBarItem = {
    /**
     * Count for the given item
     */
    count: number;
    /**
     * Label to be used for the given item
     */
    label: string;
    /**
     * Color code for the background color for the item
     */
    backgroundColor: string;
};
export type RecordMeterBarProps = {
    /**
     * Total number of items for the record meter. If not provided, its is the sum of item.count of all items.
     */
    totalCount?: number;
    /**
     * The items to display in Record meter.
     */
    items: Array<RecordMeterBarItem>;
    /**
     * The formatting style for legend item display. If not provided, it defaults to showing legend label after count
     */
    showLegendLabelBeforeCount?: boolean;
    /**
     * The sort style for legend item. If not provided, it defaults to no sorting.
     */
    sortByCount?: 'ascending' | 'descending';
    /**
     * Additional class name to be added to the component
     */
    className?: string;
    /**
     * Table caption
     */
    tableCaption?: string;
    /**
     * Title/label for the legend
     */
    legendTitle?: string;
    /**
     * Recorc type label for screen readers
     */
    recordTypeLabel?: string;
    /**
     * Record count label for screen readers
     */
    recordCountLabel?: string;
};
/**
 * Generate Record Meter bar
 *
 * @param {RecordMeterBarProps} props - Props
 * @return {React.ReactElement} - JSX element
 */
declare const RecordMeterBar: React.FC<RecordMeterBarProps>;
export default RecordMeterBar;
