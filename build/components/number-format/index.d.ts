/**
 * Format a number using the locale in use by the user viewing the page.
 *
 * @param {number}                   number  - The number to format.
 * @param {Intl.NumberFormatOptions} options - The format options
 * @return {string} Formatted number.
 */
declare const numberFormat: (number: number, options?: Intl.NumberFormatOptions) => string;
export default numberFormat;
