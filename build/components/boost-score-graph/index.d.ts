import { type FunctionComponent } from 'react';
import './style.scss';
export interface Period {
    timestamp: number;
    dimensions: {
        desktop_overall_score: number;
        desktop_lcp: number;
        desktop_cls: number;
        desktop_tbt: number;
        mobile_overall_score: number;
        mobile_lcp: number;
        mobile_cls: number;
        mobile_tbt: number;
    };
}
export interface Annotation {
    timestamp: number;
    text: string;
    line?: HTMLElement;
}
export interface BoostScoreGraphProps {
    periods?: Period[];
    annotations?: Annotation[];
    startDate?: number;
    endDate?: number;
    title?: string;
    isPlaceholder?: boolean;
}
export type ScoreGraphAlignedData = [
    number[],
    number[],
    number[]
];
/**
 * BoostScoreGraph component composed by the chart and the legend.
 *
 * @param {BoostScoreGraphProps} props                   - The props object for the BoostScoreGraph component.
 * @param {string}               props.title             - Title for the chart.
 * @param {Period[]}             props.periods           - The periods to display in the chart.
 * @param {boolean}              [props.isLoading=false] - Whether the component is in a loading state.
 * @return {React.ReactElement} The JSX element representing the BoostScoreGraph component, or null if loading.
 */
export declare const BoostScoreGraph: FunctionComponent<BoostScoreGraphProps>;
export default BoostScoreGraph;
