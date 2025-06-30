import uPlot from 'uplot';
import type { RefObject } from 'react';
/**
 * Custom hook to handle resizing of uPlot charts.
 *
 * @param {RefObject<uPlot>}          uplotRef     - The ref object for the uPlot instance.
 * @param {RefObject<HTMLDivElement>} containerRef - The ref object for the container div.
 */
export default function useResize(uplotRef: RefObject<uPlot>, containerRef: RefObject<HTMLDivElement>): void;
