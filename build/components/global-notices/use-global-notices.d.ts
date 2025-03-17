import { store as noticesStore } from '@wordpress/notices';
type NoticesStore = ReturnType<(typeof noticesStore)['instantiate']>;
export type TGlobalNotices = ReturnType<NoticesStore['getActions']> & ReturnType<NoticesStore['getSelectors']>;
/**
 * The global notices hook.
 *
 * @return {TGlobalNotices} The global notices selectors and actions.
 */
export declare function useGlobalNotices(): TGlobalNotices;
export {};
