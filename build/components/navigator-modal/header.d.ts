export type HeaderProps = {
    /**
     * The title of the header.
     */
    title: string;
    /**
     * Whether the screen is locked, in which case to hide the back button.
     */
    isScreenLocked?: boolean;
};
/**
 * Renders a header for the NavigatorModal.
 * @param {HeaderProps} props - Props
 *
 * @return component
 */
export declare function Header({ title, isScreenLocked }: HeaderProps): import("react/jsx-runtime").JSX.Element;
