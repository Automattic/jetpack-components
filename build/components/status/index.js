import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';
import Text from '../text/index.js';
import styles from './style.module.scss';
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
        }, className), children: [_jsx("span", { className: styles.status__indicator }), _jsx("span", { className: styles.status__label, children: label || label === '' ? label : defaultLabels[status] })] }));
};
export default Status;
