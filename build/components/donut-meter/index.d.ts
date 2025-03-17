import React from 'react';
import './style.scss';
export type DonutMeterProps = {
    /**
     * Total number of items for the donut meter.
     */
    totalCount: number;
    /**
     * Count for the given item
     */
    segmentCount: number;
    /**
     * Dictates the segment color of the donut meter. Defaults to 'success' and overrides useAdaptiveColors.
     * Possible values:
     * - 'warning': yellow donut
     * - 'error': red donut
     * - 'success': green donut
     */
    type?: string;
    /**
     * thickness for the chart border
     * If not provided, defaults to 3.5
     */
    thickness?: string;
    /**
     * width for the full chart size
     * If not provided, defaults to 64px
     */
    donutWidth?: string;
    /**
     * Localized title for meter.
     * Not visible. Used for a11y support.
     * If not provided, defaults to an empty string.
     */
    title?: string;
    /**
     * Localized description for meter.
     * Not visible. Used for a11y support.
     * If not provided, defaults to an empty string.
     */
    description?: string;
    /**
     * Changes colors according to the fullness of the meter.
     */
    useAdaptiveColors?: boolean;
    /**
     * Class name to append to the topmost container.
     */
    className?: string;
};
/**
 * Generate record meter donut bar
 *
 * @param {DonutMeterProps} props - Props
 * @return {React.ReactElement} - JSX element
 */
declare const DonutMeter: React.FC<DonutMeterProps>;
export default DonutMeter;
