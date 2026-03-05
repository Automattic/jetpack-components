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
declare const useBreakpointMatch: (breakpointToMatch: "lg" | "md" | "sm" | ("lg" | "md" | "sm")[], operatorToMatch?: Operators[] | Operators) => boolean[];
export default useBreakpointMatch;
