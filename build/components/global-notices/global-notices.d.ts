export type GlobalNoticesProps = {
    maxVisibleNotices?: number;
};
/**
 * Renders the global notices.
 *
 * @deprecated Use `SnackbarNotices` from `@wordpress/notices` instead. Pages
 * rendered by `@wordpress/boot` already mount one, so mounting this as well
 * shows every notice twice.
 *
 * @param {GlobalNoticesProps} props - Component props.
 *
 * @return {import('react').ReactNode} The rendered notices list.
 */
export declare function GlobalNotices({ maxVisibleNotices }: GlobalNoticesProps): import("react").JSX.Element;
