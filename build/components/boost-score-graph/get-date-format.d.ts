/**
 * Returns a formatted date based on the provided template and locale.
 *
 * @param {string} template      - The template used to format the date.
 * @param {Date}   date          - The date object to be formatted.
 * @param {string} [locale='en'] - The locale code specifying the language and region to be used for formatting. Default 'en'.
 * @return {string} The formatted date as a string.
 */
export default function getDateFormat(template: string, date: Date, locale?: string): string;
