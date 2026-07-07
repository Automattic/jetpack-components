import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';
import Text from '../text/index.js';
import styles from './style.module.scss';
/**
 * Status component.
 *
 * @deprecated Inline the equivalent JSX using `Text` from `@wordpress/ui` and a small color-coded indicator span. The wrapper renders a flex container at `body-sm` size with `font-weight: 600` and a `0.666em` round indicator coloured by status using WPDS design tokens (`var(--wpds-color-foreground-content-success-weak)` for `active`, `--wpds-color-foreground-content-error-weak` for `error`, `--wpds-color-foreground-content-neutral-weak` for `inactive`, `--wpds-color-foreground-content-warning-weak` for `action`, `--wpds-color-foreground-content-info-weak` for `initializing`). Include a fallback hex for surfaces that don't load `@wordpress/theme/design-tokens.css` (e.g. the legacy Jetpack settings dashboard).
 *
 * @param {StatusProps} props           - The component properties.
 * @param {string}      props.className - Optional className forwarded to the outer element.
 * @param {string}      props.label     - Status label. Defaults to a status-derived string.
 * @param {string}      props.status    - Status key: `active | error | inactive | action | initializing`.
 * @return {JSX.Element} The `Status` component.
 */
const Status = ({ className, label, status = 'inactive' }) => {
    const defaultLabels = {
        active: __('Active', 'jetpack-components'),
        error: __('Error', 'jetpack-components'),
        action: __('Action needed', 'jetpack-components'),
        inactive: __('Inactive', 'jetpack-components'),
        initializing: __('Setting up', 'jetpack-components'),
    };
    return (_jsxs(Text, { variant: "body-extra-small", className: clsx(styles.status, {
            [styles[`is-${status}`]]: status,
        }, className), children: [
            _jsx("span", { className: styles.status__indicator }), _jsx("span", { className: styles.status__label, children: label || label === '' ? label : defaultLabels[status] })
        ] }));
};
export default Status;
