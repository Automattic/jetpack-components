import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './styles.module.scss';
/**
 * Surrounds a text string in a <mark>
 * Just a small helper function
 *
 * @example
 * mark( 'be kind' ) =>
 *   <mark key="be kind" className={ styles[ 'marked-lines__mark' ] }>be kind</mark>
 * @param {string} text - the string to mark
 * @return {import('react').Element} React <mark> Element
 */
const mark = text => (_jsx("mark", { className: styles['marked-lines__mark'], children: text }, text));
/**
 * Translates marked-file context input
 * into React component output
 *
 * @example
 * const marks = [ [ 2, 4 ], [ 5, 9 ] ]
 * const content = '->^^-_____<--'
 * markup( marks, content ) === [ '->', <mark>{ '^^' }</mark>, '-', <mark>{ '_____' }</mark>, '<--' ]
 * @param {Array<Array<number>>} marks   - spanning indices of text to mark, values in UCS-2 code units
 * @param {string}               content - the plaintext content to mark
 * @return {Array|string} list of output text nodes and mark elements or plain string output
 */
const markup = (marks, content) => {
    const [finalOutput, finalLast] = marks.reduce(([output, lastIndex], [markStart, markEnd]) => {
        // slice of input text specified by current mark ranges
        const slice = content.slice(markStart, markEnd);
        // if we have text before the first index then prepend it as well
        const next = markStart > lastIndex
            ? [content.slice(lastIndex, markStart), mark(slice)]
            : [mark(slice)];
        return [[...output, ...next], markEnd];
    }, [[], 0]);
    // we may also have text after the last mark
    return finalLast < content.length ? [...finalOutput, content.slice(finalLast)] : finalOutput;
};
const MarkedLines = ({ context }) => {
    const { marks, ...lines } = context;
    return (_jsxs("div", { className: styles['marked-lines'], children: [
            _jsx("div", { className: styles['marked-lines__line-numbers'], children: Object.keys(lines).map(lineNumber => {
                    const hasMarks = Object.hasOwn(marks, lineNumber);
                    return (_jsx("div", { className: `${styles['marked-lines__line-number']} ${hasMarks ? styles['marked-lines__marked-line'] : ''}`, children: lineNumber }, lineNumber));
                }) }), _jsx("div", { className: styles['marked-lines__lines'], children: Object.keys(lines).map(lineNumber => {
                    const lineContent = lines[lineNumber] || ' ';
                    const hasMarks = Object.hasOwn(marks, lineNumber);
                    return (_jsx("div", { className: `${styles['marked-lines__line']} ${hasMarks ? styles['marked-lines__marked-line'] : ''} `, children: _jsx(_Fragment, { children: hasMarks ? markup(marks[lineNumber], lineContent) : lineContent }) }, lineNumber));
                }) })
        ] }));
};
export default MarkedLines;
