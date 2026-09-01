import uPlot from 'uplot';
import { type Annotation, Period } from './index.tsx';
import 'uplot/dist/uPlot.min.css';
import type { RefObject } from 'react';
interface UplotChartProps {
    periods: Period[];
    annotations?: Annotation[];
    options?: Partial<uPlot.Options>;
    legendContainer?: RefObject<HTMLDivElement>;
    solidFill?: boolean;
    period?: string;
    range?: {
        startDate: number;
        endDate: number;
    };
}
/**
 * UplotLineChart component.
 *
 * @param {object}                                 props             - The props object for the UplotLineChart component.
 * @param {{ startDate: number, endDate: number }} props.range       - The date range of the chart.
 * @param {Period[]}                               props.periods     - The periods to display in the chart.
 * @param {Annotation[]}                           props.annotations - The annotations to display in the chart.
 * @return {ReactElement} The JSX element representing the UplotLineChart component.
 */
export default function UplotLineChart({ range, periods, annotations }: UplotChartProps): import("react").JSX.Element;
export {};
