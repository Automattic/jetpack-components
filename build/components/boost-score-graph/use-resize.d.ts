import React from 'react';
import uPlot from 'uplot';
/**
 * Custom hook to handle resizing of uPlot charts.
 *
 * @param {React.RefObject<uPlot>}          uplotRef     - The ref object for the uPlot instance.
 * @param {React.RefObject<HTMLDivElement>} containerRef - The ref object for the container div.
 */
export default function useResize(uplotRef: React.RefObject<uPlot>, containerRef: React.RefObject<HTMLDivElement>): void;
