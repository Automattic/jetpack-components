import { useMediaQuery } from '@wordpress/compose';
import breakpointsValues from '../breakpoints.module.scss';
const BREAKPOINTS = ['sm', 'md', 'lg'];
const getMediaByOperator = (breakpoint, operator, matches) => {
    const breakpointIndex = BREAKPOINTS.indexOf(breakpoint);
    const breakpointIndexPlusOne = breakpointIndex + 1;
    const isEqual = operator.includes('=');
    let allNeededBreakpoints = [];
    if (operator.startsWith('<')) {
        allNeededBreakpoints = BREAKPOINTS.slice(0, isEqual ? breakpointIndexPlusOne : breakpointIndex);
    }
    if (operator.startsWith('>')) {
        allNeededBreakpoints = BREAKPOINTS.slice(isEqual ? breakpointIndex : breakpointIndexPlusOne);
    }
    return allNeededBreakpoints?.length
        ? allNeededBreakpoints.some(brk => matches[brk])
        : matches[breakpoint];
};
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
const useBreakpointMatch = (breakpointToMatch, operatorToMatch) => {
    const breakpoints = Array.isArray(breakpointToMatch)
        ? breakpointToMatch
        : [breakpointToMatch];
    const operators = Array.isArray(operatorToMatch)
        ? operatorToMatch
        : [operatorToMatch];
    const [smKey, mdKey, lgKey] = BREAKPOINTS;
    const sm = useMediaQuery(breakpointsValues[smKey]);
    const md = useMediaQuery(breakpointsValues[mdKey]);
    const lg = useMediaQuery(breakpointsValues[lgKey]);
    const matches = { sm, md, lg };
    return breakpoints.map((breakpoint, idx) => {
        const operator = operators[idx];
        return operator ? getMediaByOperator(breakpoint, operator, matches) : matches[breakpoint];
    });
};
export default useBreakpointMatch;
