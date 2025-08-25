import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { __, sprintf } from '@wordpress/i18n';
import { Icon, check, closeSmall } from '@wordpress/icons';
import clsx from 'clsx';
import { createContext, useContext, Children, cloneElement, } from 'react';
import IconTooltip from "../icon-tooltip/index.js";
import useBreakpointMatch from "../layout/use-breakpoint-match/index.js";
import TermsOfService from "../terms-of-service/index.js";
import Text from "../text/index.js";
import styles from './styles.module.scss';
const INCLUDED_TEXT = __('Included', 'jetpack-components');
const NOT_INCLUDED_TEXT = __('Not included', 'jetpack-components');
const COMING_SOON_TEXT = __('Coming soon', 'jetpack-components');
const PricingTableContext = createContext(undefined);
const getItemLabels = (isComingSoon, isIncluded, featureNameLabel) => {
    if (isComingSoon) {
        return {
            lg: COMING_SOON_TEXT,
            // translators: %s: Name of the current feature
            default: sprintf(__('%s coming soon', 'jetpack-components'), featureNameLabel),
        };
    }
    return {
        lg: isIncluded ? INCLUDED_TEXT : NOT_INCLUDED_TEXT,
        default: isIncluded
            ? featureNameLabel
            : sprintf(
            /* translators: %s: Name of the current feature */
            __('%s not included', 'jetpack-components'), featureNameLabel),
    };
};
export const PricingTableItem = ({ isIncluded = false, isComingSoon = false, index = 0, label = null, tooltipInfo, tooltipTitle, tooltipClassName = '', }) => {
    const [isLg] = useBreakpointMatch('lg');
    const item = useContext(PricingTableContext)[index];
    const isExplicitlyEmpty = label === '';
    const showTick = isComingSoon || isIncluded;
    const featureNameLabel = item.name;
    const defaultTooltipInfo = item.tooltipInfo;
    const defaultTooltipTitle = item.tooltipTitle;
    const showTooltip = tooltipInfo || (!isLg && defaultTooltipInfo);
    const labels = getItemLabels(isComingSoon, isIncluded, featureNameLabel);
    const defaultLabel = isLg ? labels.lg : labels.default;
    // Handle explicitly empty items (when label is empty string)
    if (isExplicitlyEmpty) {
        return (_jsx("div", { className: clsx(styles.item, styles.value, styles.empty) }));
    }
    return (_jsxs("div", { className: clsx(styles.item, styles.value), children: [_jsx(Icon, { className: clsx(styles.icon, showTick ? styles['icon-check'] : styles['icon-cross']), size: 32, icon: showTick ? check : closeSmall }), _jsx(Text, { variant: "body-small", children: label || defaultLabel }), showTooltip && (_jsx(IconTooltip, { title: tooltipTitle ? tooltipTitle : defaultTooltipTitle, iconClassName: styles['popover-icon'], className: clsx(styles.popover, tooltipClassName), placement: 'bottom-end', iconSize: 14, offset: 4, wide: Boolean(tooltipTitle && tooltipInfo), children: _jsx(Text, { variant: "body-small", component: "div", children: tooltipInfo || defaultTooltipInfo }) }))] }));
};
export const PricingTableHeader = ({ title, children }) => (_jsxs("div", { className: styles.headerContainer, children: [title && (_jsx(Text, { variant: "headline-small", className: styles.title, children: title })), _jsx("div", { className: styles.header, children: children })] }));
export const PricingTableColumn = ({ primary = false, children, className, }) => {
    let index = 0;
    return (_jsx("div", { className: clsx(styles.card, { [styles['is-primary']]: primary }, className), children: Children.map(children, child => {
            const item = child;
            if (item.type === PricingTableItem) {
                index++;
                return cloneElement(item, { index: index - 1 });
            }
            return item;
        }) }));
};
const PricingTable = ({ title, headerLogo, items, children, showIntroOfferDisclaimer = false, }) => {
    const [isLg] = useBreakpointMatch('lg');
    return (_jsxs(PricingTableContext.Provider, { value: items, children: [_jsx("div", { className: clsx(styles.container, { [styles['is-viewport-large']]: isLg }), style: {
                    '--rows': items.length + 1,
                    '--columns': Children.toArray(children).length + 1,
                }, children: _jsxs("div", { className: styles.table, children: [_jsxs("div", { children: [headerLogo && _jsx("div", { className: styles['header-logo'], children: headerLogo }), _jsx(Text, { variant: "headline-small", className: styles.tableTitle, children: title })] }), isLg &&
                            items.map((item, i) => {
                                // Skip rendering feature names that are empty
                                if (!item.name) {
                                    return (_jsx("div", { className: clsx(styles.item, styles.feature, styles.empty) }, i));
                                }
                                return (_jsxs("div", { className: clsx(styles.item, styles.feature, {
                                        [styles['last-feature']]: i === items.length - 1,
                                    }), children: [_jsx(Text, { variant: "body-small", children: _jsx("strong", { children: item.name }) }), item.tooltipInfo && (_jsx(IconTooltip, { title: item.tooltipTitle, iconClassName: styles['popover-icon'], className: styles.popover, placement: item.tooltipPlacement ? item.tooltipPlacement : 'bottom-end', iconSize: 14, offset: 4, wide: Boolean(item.tooltipTitle && item.tooltipInfo), children: _jsx(Text, { variant: "body-small", children: item.tooltipInfo }) }))] }, i));
                            }), children] }) }), _jsx("div", { className: styles['tos-container'], children: _jsxs("div", { className: styles.tos, children: [showIntroOfferDisclaimer && (_jsx(Text, { variant: "body-small", children: __('Reduced pricing is a limited offer for the first year and renews at regular price.', 'jetpack-components') })), _jsx(TermsOfService, { multipleButtons: true })] }) })] }));
};
export default PricingTable;
