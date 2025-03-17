type ParsedFilename = {
    prefix: string;
    path: string;
};
/**
 * Parse the filename from a diff
 *
 * Uses a heuristic to return proper file name indicators
 *
 * It searches for the longest shared prefix and returns
 * whatever remains after that. If the paths are identical
 * it only returns a single filename as we have detected
 * that the diff compares changes to only one file.
 *
 * An exception is made for `a/` and `b/` prefixes often
 * added by `git` and other utilities to separate the left
 * from the right when looking at the contents of a single
 * file over time.
 *
 * @param {string} prev - filename of left contents
 * @param {string} next - filename of right contents
 *
 * @return {object} - parsed filename
 */
export default function (prev: string, next: string): {
    prev: ParsedFilename;
    next: ParsedFilename;
};
export {};
