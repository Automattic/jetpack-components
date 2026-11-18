/**
 * Load the media library once. Resolves when `wp.media` and its templates are ready.
 *
 * Rejects when it can't be loaded; a later call tries again.
 *
 * @return A promise that resolves when `wp.media` can open a frame.
 */
export declare function loadMediaLibrary(): Promise<void>;
