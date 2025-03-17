import React from 'react';
type AlertProps = {
    /** The severity of the alert. */
    level: 'error' | 'warning' | 'info' | 'success';
    /** Show/Hide icon */
    showIcon?: boolean;
    /** Children to be rendered inside the alert. */
    children: React.ReactNode;
    /** Wrapper class name */
    className?: string;
};
/**
 * Alert component
 *
 * @param {object}          props           - The component properties.
 * @param {string}          props.level     - The alert level: error, warning, info, success.
 * @param {boolean}         props.showIcon  - Whether to show the alert icon.
 * @param {string}          props.className - The wrapper class name.
 * @param {React.Component} props.children  - The alert content.
 * @return {React.ReactElement}             The `Alert` component.
 */
declare const Alert: React.FC<AlertProps>;
export default Alert;
