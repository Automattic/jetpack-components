import uPlot from 'uplot';
import { Annotation } from './index.tsx';
import './style-annotation.scss';
/**
 * Custom tooltips plugin for uPlot.
 *
 * @param annotations - The periods to display in the tooltip.
 *
 * @return The plugin object.
 */
export declare function annotationsPlugin(annotations: Annotation[]): {
    hooks: {
        init: (u: uPlot) => void;
        setSize: (u: uPlot) => void;
    };
};
