export default ActionButton;
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
declare function ActionButton(props: object): import("react").ReactNode;
declare namespace ActionButton {
    namespace propTypes {
        let label: any;
        let onClick: any;
        let isLoading: any;
        let isDisabled: any;
        let displayError: any;
        let errorMessage: any;
        let variant: any;
        let isExternalLink: any;
    }
}
