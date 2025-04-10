import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';
import PropTypes from 'prop-types';
/**
 * Internal dependencies
 */
import React from 'react';
import Button from "../button/index.js";
import styles from './style.module.scss';
/**
 * The Jetpack Action button.
 *
 * This component extends the regular `Button` component and adds a `isLoading` prop that will disable and display a spinner, giving the user the feedback that some action is happening. It also provides a generic error message.
 *
 * It is useful to async actions when the user has to wait the result of a request or process.
 *
 * @param {object} props - The properties.
 * @return {React.ReactNode} The `ActionButton` component.
 */
const ActionButton = props => {
    const { label, onClick, isLoading = false, loadingText, isDisabled, displayError = false, errorMessage = __('An error occurred. Please try again.', 'jetpack-components'), variant = 'primary', isExternalLink = false, customClass, } = props;
    const loadingContent = loadingText || _jsx(Spinner, {});
    return (_jsxs(_Fragment, { children: [_jsx(Button, { className: clsx(styles.button, 'jp-action-button--button', customClass), label: label, onClick: onClick, variant: isExternalLink ? 'link' : variant, isExternalLink: isExternalLink, disabled: isLoading || isDisabled, children: isLoading ? loadingContent : label }), displayError && (_jsx("p", { className: clsx(styles.error, 'jp-action-button__error'), children: errorMessage }))] }));
};
ActionButton.propTypes = {
    /** The button label. */
    label: PropTypes.string.isRequired,
    /** The callback to be called on click. */
    onClick: PropTypes.func,
    /** Will disable the button and display a spinner if set to true. */
    isLoading: PropTypes.bool,
    /** Will disable the button with no spinner. */
    isDisabled: PropTypes.bool,
    /** Displays an error message */
    displayError: PropTypes.bool,
    /** The error message string */
    errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /** The type/variant of button */
    variant: PropTypes.arrayOf(PropTypes.oneOf(['primary', 'secondary', 'link'])),
    /** Will display the button as a link with an external icon. */
    isExternalLink: PropTypes.bool,
};
export default ActionButton;
