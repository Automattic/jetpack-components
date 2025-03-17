import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { __experimentalToggleGroupControl as ToggleGroupControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
__experimentalToggleGroupControlOption as ToggleGroupControlOption, // eslint-disable-line @wordpress/no-unsafe-wp-apis
 } from '@wordpress/components';
import { useMemo, useCallback } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import styles from './styles.module.scss';
/**
 * ToggleGroupControl component for filtering threats by status.
 * @param {object}     props              - Component props.
 * @param { Threat[]}  props.data         - Threats data.
 * @param { View }     props.view         - The current view.
 * @param { Function } props.onChangeView - Callback function to handle view changes.
 * @return {JSX.Element|null} The component or null.
 */
export default function ThreatsStatusToggleGroupControl({ data, view, onChangeView, }) {
    /**
     * Compute values from the provided threats data.
     *
     * @member {number} activeThreatsCount   - Count of active threats.
     * @member {number} historicThreatsCount - Count of historic threats.
     */
    const { activeThreatsCount, historicThreatsCount, } = useMemo(() => {
        return data.reduce((acc, threat) => {
            if (threat.status) {
                if (threat.status === 'current') {
                    acc.activeThreatsCount++;
                }
                else {
                    acc.historicThreatsCount++;
                }
            }
            return acc;
        }, {
            activeThreatsCount: 0,
            historicThreatsCount: 0,
        });
    }, [data]);
    /**
     * Callback function to handle the status change filter.
     *
     * @param {string} newStatus - The new status filter value.
     */
    const onStatusFilterChange = useCallback((newStatus) => {
        const updatedFilters = view.filters.filter(filter => filter.field !== 'status');
        if (newStatus === 'active') {
            updatedFilters.push({
                field: 'status',
                operator: 'isAny',
                value: ['current'],
            });
        }
        else if (newStatus === 'historic') {
            updatedFilters.push({
                field: 'status',
                operator: 'isAny',
                value: ['fixed', 'ignored'],
            });
        }
        onChangeView({
            ...view,
            filters: updatedFilters,
        });
    }, [view, onChangeView]);
    /**
     * Memoized function to determine if a status filter is selected.
     *
     * @param {Array} threatStatuses - List of threat statuses.
     */
    const isStatusFilterSelected = useMemo(() => (threatStatuses) => view.filters.some(filter => filter.field === 'status' &&
        Array.isArray(filter.value) &&
        filter.value.length === threatStatuses.length &&
        threatStatuses.every(threatStatus => filter.value.includes(threatStatus))), [view.filters]);
    const selectedValue = useMemo(() => {
        if (isStatusFilterSelected(['current'])) {
            return 'active';
        }
        if (isStatusFilterSelected(['fixed', 'ignored'])) {
            return 'historic';
        }
        return '';
    }, [isStatusFilterSelected]);
    if (!(activeThreatsCount + historicThreatsCount)) {
        return null;
    }
    try {
        return (_jsx("div", { children: _jsx("div", { className: styles['toggle-group-control'], children: _jsxs(ToggleGroupControl, { value: selectedValue, onChange: onStatusFilterChange, isBlock: true, hideLabelFromVision: true, __nextHasNoMarginBottom: true, __next40pxDefaultSize: true, children: [_jsx(ToggleGroupControlOption, { value: "active", label: sprintf(
                            /* translators: %d: number of active threats */ __('Active threats (%d)', 'jetpack-components'), activeThreatsCount) }), _jsx(ToggleGroupControlOption, { value: "historic", label: sprintf(
                            /* translators: %d: number of historic threats */
                            __('History (%d)', 'jetpack-components'), historicThreatsCount) })] }) }) }));
    }
    catch {
        return null;
    }
}
