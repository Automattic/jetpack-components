export default ActionButton;
/**
 * The Jetpack Action button.
 *
 * This component extends the regular `Button` component and adds a `isLoading` prop that will disable and display a spinner, giving the user the feedback that some action is happening. It also provides a generic error message.
 *
 * It is useful to async actions when the user has to wait the result of a request or process.
 *
 * @param {object} props - The properties.
 * @return {React.Component} The `ActionButton` component.
 */
declare function ActionButton(props: object): React.Component;
declare namespace ActionButton {
    namespace propTypes {
        const label: any;
        const onClick: any;
        const isLoading: any;
        const isDisabled: any;
        const displayError: any;
        const errorMessage: any;
        const variant: any;
        const isExternalLink: any;
    }
}
import React from 'react';
