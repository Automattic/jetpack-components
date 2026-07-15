import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import parseFilename from './parse-filename.js';
import parsePatch from './parse-patch.js';
import styles from './styles.module.scss';
const filename = ({ oldFileName, newFileName, }) => {
    const { prev, next } = parseFilename(oldFileName, newFileName);
    if (prev.prefix + prev.path === next.prefix + next.path) {
        return (_jsxs(Fragment, { children: [prev.prefix && (_jsx("span", { className: styles['diff-viewer__path-prefix'], children: prev.prefix })), _jsx("span", { className: styles['diff-viewer__path'], children: prev.path })] }));
    }
    return (_jsxs(Fragment, { children: [!!prev.prefix && (_jsx("span", { className: styles['diff-viewer__path-prefix'], children: prev.prefix })), _jsx("span", { className: styles['diff-viewer__path'], children: prev.path }), ' → ', !!next.prefix && (_jsx("span", { className: styles['diff-viewer__path-prefix'], children: next.prefix })), _jsx("span", { className: styles['diff-viewer__path'], children: next.path })] }));
};
export const DiffViewer = ({ diff }) => (_jsx("div", { className: styles['diff-viewer'], children: parsePatch(diff).map((file, fileIndex) => (_jsxs(Fragment, { children: [_jsx("div", { className: styles['diff-viewer__filename'], children: filename(file) }, `file-${fileIndex}`), _jsxs("div", { className: styles['diff-viewer__file'], children: [_jsx("div", { className: styles['diff-viewer__line-numbers'], children: file.hunks.map((hunk, hunkIndex) => {
                            let lineOffset = 0;
                            return hunk.lines.map((line, index) => (_jsx("div", { children: line[0] === '+' ? '\u00a0' : hunk.oldStart + lineOffset++ }, `${hunkIndex}-${index}`)));
                        }) }, "left-numbers"), _jsx("div", { className: styles['diff-viewer__line-numbers'], children: file.hunks.map((hunk, hunkIndex) => {
                            let lineOffset = 0;
                            return hunk.lines.map((line, index) => (_jsx("div", { children: line[0] === '-' ? '\u00a0' : hunk.newStart + lineOffset++ }, `${hunkIndex}-${index}`)));
                        }) }, "right-numbers"), _jsx("div", { className: styles['diff-viewer__lines'], children: file.hunks.map((hunk, hunkIndex) => hunk.lines.map((line, index) => {
                            const output = line.slice(1).replace(/^\s*$/, '\u00a0');
                            const key = `${hunkIndex}-${index}`;
                            switch (line[0]) {
                                case ' ':
                                    return _jsx("div", { children: output }, key);
                                case '-':
                                    return _jsx("del", { children: output }, key);
                                case '+':
                                    return _jsx("ins", { children: output }, key);
                                default:
                                    return undefined;
                            }
                        })) })] }, `diff-${fileIndex}`)] }, fileIndex))) }));
export default DiffViewer;
