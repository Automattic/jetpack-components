import { Period } from './index.tsx';
type ScoreGraphAlignedData = [
    number[],
    number[],
    number[]
];
/**
 * Transforms an array of periods into an array of arrays, where the first array is the timestamps, and the rest are the values for each key
 *
 * @param {Period[]} periods - Array of periods to transform
 * @return {ScoreGraphAlignedData | []} - Array of arrays, where the first array is the timestamps, and the rest are the values for each key
 */
export declare function useBoostScoreTransform(periods: Period[]): ScoreGraphAlignedData | [];
export {};
