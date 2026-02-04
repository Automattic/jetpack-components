/**
 * The Jetpack Action button.
 *
 * This component extends the regular `Button` component and adds a `isLoading` prop that will disable and display a spinner, giving the user the feedback that some action is happening. It also provides a generic error message.
 *
 * It is useful to async actions when the user has to wait the result of a request or process.
 *
 * @param {object} props - The properties.
 * @return {import('react').ReactNode} The `ActionButton` component.
 */
declare const ActionButton: {
    (props: any): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        /** The button label. */
        label: any;
        /** The callback to be called on click. */
        onClick: any;
        /** Will disable the button and display a spinner if set to true. */
        isLoading: any;
        /** Will disable the button with no spinner. */
        isDisabled: any;
        /** Displays an error message */
        displayError: any;
        /** The error message string */
        errorMessage: any;
        /** The type/variant of button */
        variant: any;
        /** Will display the button as a link with an external icon. */
        isExternalLink: any;
        /** Custom CSS class to apply to the button */
        customClass: any;
        /** Text to display when loading */
        loadingText: any;
    };
};
export default ActionButton;
