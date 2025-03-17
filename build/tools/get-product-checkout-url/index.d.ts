/**
 * Return the checkout URL for the given product.
 *
 * @param {string}  productSlug     - wpcom product slug.
 * @param {string}  siteSuffix      - Site suffix
 * @param {string}  redirectUrl     - Redirect URL used to define redirect_to
 * @param {boolean} isUserConnected - True when the user is connected Jetpack
 * @return {string}                  The Calypso checkout URL
 */
export default function getProductCheckoutUrl(productSlug: string, siteSuffix: string, redirectUrl: string, isUserConnected: boolean): string;
