import type { JSX } from 'react';
export interface StatusProps {
    status?: 'active' | 'error' | 'inactive' | 'action' | 'initializing';
    label?: string;
    className?: string;
}
/**
 * Status component.
 *
 * @deprecated Inline the equivalent JSX using `Text` from `@wordpress/ui` and a small color-coded indicator span. The wrapper renders a flex container at `body-sm` size with `font-weight: 600` and a `0.666em` round indicator coloured by status using WPDS design tokens (`var(--wpds-color-fg-content-success-weak)` for `active`, `--wpds-color-fg-content-error-weak` for `error`, `--wpds-color-fg-content-neutral-weak` for `inactive`, `--wpds-color-fg-content-warning-weak` for `action`, `--wpds-color-fg-content-info-weak` for `initializing`). Include a fallback hex for surfaces that don't load `@wordpress/theme/design-tokens.css` (e.g. the legacy Jetpack settings dashboard).
 *
 * @param {StatusProps} props           - The component properties.
 * @param {string}      props.className - Optional className forwarded to the outer element.
 * @param {string}      props.label     - Status label. Defaults to a status-derived string.
 * @param {string}      props.status    - Status key: `active | error | inactive | action | initializing`.
 * @return {JSX.Element} The `Status` component.
 */
declare const Status: ({ className, label, status }: StatusProps) => JSX.Element;
export default Status;
