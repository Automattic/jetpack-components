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
    /**
     * Optional callback to run before navigating back.
     */
    onGoBack?: VoidFunction;
    /**
     * Optional callback to run before closing the modal.
     */
    onClose?: VoidFunction;
};
/**
 * Renders a header for the NavigatorModal.
 * @param {HeaderProps} props - Props
 *
 * @return component
 */
export declare function Header({ icon, title, isScreenLocked, onGoBack: onGoBackProp, onClose: onCloseProp }: HeaderProps): import("react/jsx-runtime").JSX.Element;
