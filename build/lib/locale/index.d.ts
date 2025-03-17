/**
 * Clean up WP locale so it matches the format expected by browsers.
 *
 * @param {string} locale - Locale given by WordPress.
 * @return {string} Browser-formatted locale.
 */
export declare const cleanLocale: (locale: string) => string;
/**
 * Current user locale, or browser locale as fallback.
 *
 * @return {string} Formatted user locale (e.g. `en-US` or `fr-FR`).
 */
export declare const getUserLocale: () => string;
