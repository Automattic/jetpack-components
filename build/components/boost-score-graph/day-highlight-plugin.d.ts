import uPlot from 'uplot';
/**
 * Definition of the column highlight plugin.
 *
 * @return {object} The uPlot plugin object with hooks.
 */
export declare function dayHighlightPlugin(): {
    opts: (u: any, opts: any) => void;
    hooks: {
        init: (u: uPlot) => void;
        setCursor: (u: any) => void;
    };
};
