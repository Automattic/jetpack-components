export type HeaderProps = {
    /**
     * The title of the header.
     */
    title: string;
    /**
     * Whether the screen is locked, in which case to hide the back button.
     */
    isScreenLocked?: boolean;
    /**
     * Optional icon to display in the header.
     */
    icon?: React.ReactNode;
};
/**
 * Renders a header for the NavigatorModal.
 * @param {HeaderProps} props - Props
 *
 * @return component
 */
export declare function Header({ icon, title, isScreenLocked }: HeaderProps): import("react/jsx-runtime").JSX.Element;
