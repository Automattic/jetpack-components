import { jsx as _jsx } from "react/jsx-runtime";
import { getThreatType } from '@automattic/jetpack-scan';
import { DataViews, filterSortAndPaginate, } from '@wordpress/dataviews';
import { dateI18n } from '@wordpress/date';
import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/icons';
import { useCallback, useMemo, useState } from 'react';
import Badge from '../badge/index.js';
import ThreatFixerButton from '../threat-fixer-button/index.js';
import ThreatSeverityBadge from '../threat-severity-badge/index.js';
import { THREAT_ACTION_FIX, THREAT_ACTION_IGNORE, THREAT_ACTION_UNIGNORE, THREAT_FIELD_AUTO_FIX, THREAT_FIELD_DESCRIPTION, THREAT_FIELD_EXTENSION, THREAT_FIELD_FIRST_DETECTED, THREAT_FIELD_FIXED_ON, THREAT_FIELD_ICON, THREAT_FIELD_PLUGIN, THREAT_FIELD_SEVERITY, THREAT_FIELD_SIGNATURE, THREAT_FIELD_STATUS, THREAT_FIELD_THEME, THREAT_FIELD_TITLE, THREAT_FIELD_TYPE, THREAT_ICONS, THREAT_STATUSES, THREAT_TYPES, } from './constants.js';
import styles from './styles.module.scss';
import ThreatsStatusToggleGroupControl from './threats-status-toggle-group-control.js';
/**
 * DataViews component for displaying security threats.
 *
 * @param {object}   props                             - Component props.
 * @param {Array}    props.data                        - Threats data.
 * @param {Array}    props.filters                     - Initial DataView filters.
 * @param {Function} props.onChangeSelection           - Callback function run when an item is selected.
 * @param {Function} props.onFixThreats                - Threat fix action callback.
 * @param {Function} props.onIgnoreThreats             - Threat ignore action callback.
 * @param {Function} props.onUnignoreThreats           - Threat unignore action callback.
 * @param {Function} props.isThreatEligibleForFix      - Function to determine if a threat is eligible for fixing.
 * @param {Function} props.isThreatEligibleForIgnore   - Function to determine if a threat is eligible for ignoring.
 * @param {Function} props.isThreatEligibleForUnignore - Function to determine if a threat is eligible for unignoring.
 *
 * @return {JSX.Element} The ThreatsDataViews component.
 */
export default function ThreatsDataViews({ data, filters, onChangeSelection, isThreatEligibleForFix, isThreatEligibleForIgnore, isThreatEligibleForUnignore, onFixThreats, onIgnoreThreats, onUnignoreThreats, }) {
    const baseView = {
        sort: {
            field: 'severity',
            direction: 'desc',
        },
        search: '',
        filters: filters || [],
        page: 1,
        perPage: 20,
    };
    /**
     * DataView default layouts.
     *
     * This property provides layout information about the view types that are active. If empty, enables all layout types (see “Layout Types”) with empty layout data.
     *
     * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dataviews/#defaultlayouts-record-string-view
     */
    const defaultLayouts = {
        table: {
            ...baseView,
            fields: [THREAT_FIELD_SEVERITY, THREAT_FIELD_TYPE, THREAT_FIELD_AUTO_FIX],
            titleField: THREAT_FIELD_TITLE,
            descriptionField: THREAT_FIELD_DESCRIPTION,
            showMedia: false,
        },
        list: {
            ...baseView,
            fields: [
                THREAT_FIELD_SEVERITY,
                THREAT_FIELD_TYPE,
                THREAT_FIELD_EXTENSION,
                THREAT_FIELD_SIGNATURE,
            ],
            titleField: THREAT_FIELD_TITLE,
            mediaField: THREAT_FIELD_ICON,
            showMedia: true,
        },
    };
    /**
     * DataView view object - configures how the dataset is visible to the user.
     *
     * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dataviews/#view-object
     */
    const [view, setView] = useState({
        type: 'table',
        ...defaultLayouts.table,
    });
    /**
     * Compute values from the provided threats data.
     *
     * @member {object[]} themes    - List of unique themes included in the threats data.
     * @member {object[]} plugins   - plugins included in the threats data.
     * @member {object[]} signatures - List of unique threat signatures.
     * @member {string[]}    dataFields - List of unique fields.
     */
    const { themes, plugins, signatures, dataFields, } = useMemo(() => {
        return data.reduce((acc, threat) => {
            // Extensions (Themes and Plugins)
            if (threat.extension) {
                switch (threat.extension.type) {
                    case 'themes':
                        if (!acc.themes.find(({ value }) => value === threat.extension.slug)) {
                            acc.themes.push({ value: threat.extension.slug, label: threat.extension.name });
                        }
                        break;
                    case 'plugins':
                        if (!acc.plugins.find(({ value }) => value === threat.extension.slug)) {
                            acc.plugins.push({ value: threat.extension.slug, label: threat.extension.name });
                        }
                        break;
                    default:
                        break;
                }
            }
            // Signatures
            if (threat.signature) {
                if (!acc.signatures.find(({ value }) => value === threat.signature)) {
                    acc.signatures.push({ value: threat.signature, label: threat.signature });
                }
            }
            // Fields
            const fields = Object.keys(threat);
            fields.forEach(field => {
                if (!acc.dataFields.includes(field) &&
                    threat[field] !== null &&
                    threat[field] !== undefined) {
                    acc.dataFields.push(field);
                }
            });
            return acc;
        }, {
            themes: [],
            plugins: [],
            signatures: [],
            dataFields: [],
        });
    }, [data]);
    /**
     * DataView fields - describes the visible items for each record in the dataset.
     *
     * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dataviews/#fields-object
     */
    const fields = useMemo(() => {
        const result = [
            {
                id: THREAT_FIELD_TITLE,
                label: __('Threat', 'jetpack-components'),
                enableGlobalSearch: true,
                enableHiding: false,
                render: ({ item }) => (_jsx("div", { className: styles.threat__title, children: item.title })),
            },
            {
                id: THREAT_FIELD_DESCRIPTION,
                label: __('Description', 'jetpack-components'),
                enableGlobalSearch: true,
                enableHiding: false,
                render: ({ item }) => (_jsx("div", { className: styles.threat__description, children: item.description })),
            },
            {
                id: THREAT_FIELD_ICON,
                label: __('Icon', 'jetpack-components'),
                enableHiding: false,
                getValue({ item }) {
                    return getThreatType(item);
                },
                render({ item }) {
                    return (_jsx("div", { className: styles.threat__media, children: _jsx(Icon, { icon: THREAT_ICONS[getThreatType(item)], size: 20 }) }));
                },
            },
            {
                id: THREAT_FIELD_STATUS,
                label: __('Status', 'jetpack-components'),
                elements: THREAT_STATUSES,
                getValue({ item }) {
                    if (!item.status) {
                        return 'current';
                    }
                    return (THREAT_STATUSES.find(({ value }) => value === item.status)?.value ?? item.status);
                },
                render({ item }) {
                    if (item.status) {
                        const status = THREAT_STATUSES.find(({ value }) => value === item.status);
                        if (status) {
                            return _jsx(Badge, { variant: status?.variant, children: status.label });
                        }
                    }
                    return _jsx(Badge, { variant: "warning", children: __('Active', 'jetpack-components') });
                },
            },
            {
                id: THREAT_FIELD_TYPE,
                label: __('Type', 'jetpack-components'),
                elements: THREAT_TYPES,
                getValue({ item }) {
                    switch (getThreatType(item)) {
                        case 'core':
                            return __('WordPress', 'jetpack-components');
                        case 'plugins':
                            return __('Plugin', 'jetpack-components');
                        case 'themes':
                            return __('Theme', 'jetpack-components');
                        case 'file':
                            return __('File', 'jetpack-components');
                        default:
                            return __('Unknown', 'jetpack-components');
                    }
                },
            },
            {
                id: THREAT_FIELD_EXTENSION,
                label: __('Extension', 'jetpack-components'),
                enableGlobalSearch: true,
                enableHiding: true,
                getValue({ item }) {
                    return item.extension ? item.extension.slug : '';
                },
                render({ item }) {
                    return item.extension ? item.extension.name : '';
                },
            },
            {
                id: THREAT_FIELD_PLUGIN,
                label: __('Plugin', 'jetpack-components'),
                enableGlobalSearch: true,
                enableHiding: false,
                elements: plugins,
                getValue({ item }) {
                    return item.extension ? item.extension.slug : '';
                },
            },
            {
                id: THREAT_FIELD_THEME,
                label: __('Theme', 'jetpack-components'),
                enableGlobalSearch: true,
                enableHiding: false,
                elements: themes,
                getValue({ item }) {
                    return item.extension ? item.extension.slug : '';
                },
            },
            ...(dataFields.includes('severity')
                ? [
                    {
                        id: THREAT_FIELD_SEVERITY,
                        label: __('Severity', 'jetpack-components'),
                        type: 'integer',
                        getValue({ item }) {
                            return item.severity ?? 0;
                        },
                        render({ item }) {
                            return _jsx(ThreatSeverityBadge, { severity: item.severity });
                        },
                    },
                ]
                : []),
            ...(dataFields.includes('signature')
                ? [
                    {
                        id: THREAT_FIELD_SIGNATURE,
                        label: __('Signature', 'jetpack-components'),
                        elements: signatures,
                        enableGlobalSearch: true,
                        getValue({ item }) {
                            return item.signature || '';
                        },
                    },
                ]
                : []),
            ...(dataFields.includes('firstDetected')
                ? [
                    {
                        id: THREAT_FIELD_FIRST_DETECTED,
                        label: __('First Detected', 'jetpack-components'),
                        type: 'datetime',
                        getValue({ item }) {
                            return item.firstDetected ? new Date(item.firstDetected) : null;
                        },
                        render({ item }) {
                            return item.firstDetected ? (_jsx("span", { className: styles.threat__firstDetected, children: dateI18n('F j Y', item.firstDetected, false) })) : null;
                        },
                    },
                ]
                : []),
            ...(dataFields.includes('fixedOn')
                ? [
                    {
                        id: THREAT_FIELD_FIXED_ON,
                        label: __('Fixed On', 'jetpack-components'),
                        type: 'datetime',
                        getValue({ item }) {
                            return item.fixedOn ? new Date(item.fixedOn) : null;
                        },
                        render({ item }) {
                            return item.fixedOn ? (_jsx("span", { className: styles.threat__fixedOn, children: dateI18n('F j Y', item.fixedOn, false) })) : null;
                        },
                    },
                ]
                : []),
            ...(dataFields.includes('fixable')
                ? [
                    {
                        id: THREAT_FIELD_AUTO_FIX,
                        label: __('Auto-fix', 'jetpack-components'),
                        enableHiding: false,
                        elements: [
                            {
                                value: 'yes',
                                label: __('Yes', 'jetpack-components'),
                            },
                            {
                                value: 'no',
                                label: __('No', 'jetpack-components'),
                            },
                        ],
                        getValue({ item }) {
                            return item.fixable ? 'yes' : 'no';
                        },
                        render({ item }) {
                            if (!item.fixable) {
                                return null;
                            }
                            return _jsx(ThreatFixerButton, { threat: item, onClick: onFixThreats });
                        },
                    },
                ]
                : []),
        ];
        return result;
    }, [dataFields, plugins, themes, signatures, onFixThreats]);
    /**
     * DataView actions - collection of operations that can be performed upon each record.
     *
     * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dataviews/#actions-object
     */
    const actions = useMemo(() => {
        const result = [];
        if (dataFields.includes('fixable')) {
            result.push({
                id: THREAT_ACTION_FIX,
                label: __('Auto-fix', 'jetpack-components'),
                isPrimary: true,
                callback: onFixThreats,
                isEligible(item) {
                    if (!onFixThreats) {
                        return false;
                    }
                    if (isThreatEligibleForFix) {
                        return isThreatEligibleForFix(item);
                    }
                    return !!item.fixable;
                },
            });
        }
        if (dataFields.includes('status')) {
            result.push({
                id: THREAT_ACTION_IGNORE,
                label: __('Ignore', 'jetpack-components'),
                isPrimary: true,
                isDestructive: true,
                callback: onIgnoreThreats,
                isEligible(item) {
                    if (!onIgnoreThreats) {
                        return false;
                    }
                    if (isThreatEligibleForIgnore) {
                        return isThreatEligibleForIgnore(item);
                    }
                    return item.status === 'current';
                },
            });
        }
        if (dataFields.includes('status')) {
            result.push({
                id: THREAT_ACTION_UNIGNORE,
                label: __('Unignore', 'jetpack-components'),
                isPrimary: true,
                isDestructive: true,
                callback: onUnignoreThreats,
                isEligible(item) {
                    if (!onUnignoreThreats) {
                        return false;
                    }
                    if (isThreatEligibleForUnignore) {
                        return isThreatEligibleForUnignore(item);
                    }
                    return item.status === 'ignored';
                },
            });
        }
        return result;
    }, [
        dataFields,
        onFixThreats,
        onIgnoreThreats,
        onUnignoreThreats,
        isThreatEligibleForFix,
        isThreatEligibleForIgnore,
        isThreatEligibleForUnignore,
    ]);
    /**
     * Apply the view settings (i.e. filters, sorting, pagination) to the dataset.
     *
     * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/dataviews/src/filter-and-sort-data-view.ts
     */
    const { data: processedData, paginationInfo } = useMemo(() => {
        return filterSortAndPaginate(data, view, fields);
    }, [data, view, fields]);
    /**
     * Callback function to update the view state.
     *
     * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dataviews/#onchangeview-function
     */
    const onChangeView = useCallback((newView) => {
        setView(newView);
    }, []);
    /**
     * DataView getItemId function - returns the unique ID for each record in the dataset.
     *
     * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dataviews/#getitemid-function
     */
    const getItemId = useCallback((item) => item.id.toString(), []);
    return (_jsx(DataViews, { actions: actions, data: processedData, defaultLayouts: defaultLayouts, fields: fields, getItemId: getItemId, onChangeSelection: onChangeSelection, onChangeView: onChangeView, paginationInfo: paginationInfo, view: view, header: _jsx(ThreatsStatusToggleGroupControl, { data: data, view: view, onChangeView: onChangeView }) }));
}
