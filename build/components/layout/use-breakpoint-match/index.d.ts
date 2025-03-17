declare const BREAKPOINTS: readonly ["sm", "md", "lg"];
type Breakpoints = (typeof BREAKPOINTS)[number];
type Operators = '<' | '<=' | '>' | '>=';
/**
 * Hook to match if current viewport is equal, greater or less than expected breakpoint
 *
 * @param {(Breakpoints | Array< Breakpoints >)} breakpointToMatch - An single breakpoint or list of breakpoints to match.
 * @param {(Operators | Array< Operators >)}     operatorToMatch   - An single operator or list of them. It should follow the same sequence than breakpoints.
 * @return {Array<boolean>} - List of matches, following breakpoints sequence.
 * @example
 *
 * ```es6
 * useBreakpointMatch('sm')
 * useBreakpointMatch('lg', '<')
 * useBreakpointMatch([ 'lg', 'sm' ], [ '<', null ])
 * ```
 */
declare const useBreakpointMatch: (breakpointToMatch: Breakpoints | Array<Breakpoints>, operatorToMatch?: Operators | Array<Operators>) => boolean[];
export default useBreakpointMatch;
