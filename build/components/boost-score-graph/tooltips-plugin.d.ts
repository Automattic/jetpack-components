import uPlot from 'uplot';
import { Period } from './index.js';
/**
 * Custom tooltips plugin for uPlot.
 *
 * @param periods - The periods to display in the tooltip.
 * @return The uPlot plugin object with hooks.
 */
export declare function tooltipsPlugin(periods: Period[]): {
    hooks: {
        init: (u: uPlot) => void;
        setCursor: (u: any) => void;
        setSize: (u: uPlot) => void;
    };
};
