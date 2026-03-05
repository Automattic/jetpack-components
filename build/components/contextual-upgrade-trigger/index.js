import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon, arrowRight } from '@wordpress/icons';
import clsx from 'clsx';
import IconTooltip from '../icon-tooltip/index.js';
import Text from '../text/index.js';
import styles from './style.module.scss';
const ContextualUpgradeTrigger = ({ description, cta, onClick, href, openInNewTab = false, className, tooltipText = '', }) => {
    const Tag = href !== undefined ? 'a' : 'button';
    const tagProps = Tag === 'a' ? { href, ...(openInNewTab && { target: '_blank' }) } : { onClick };
    return (_jsxs("div", { className: clsx(styles.cut, className), children: [
            _jsxs("div", { children: [
                    _jsxs("div", { children: [
                            _jsx(Text, { className: styles.description, children: description }), tooltipText && (_jsx(IconTooltip, { className: styles.iconContainer, iconSize: 16, offset: 4, children: _jsx(Text, { variant: "body-small", children: tooltipText }) }))] }), _jsx("div", { children: _jsx(Tag, { ...tagProps, children: _jsx(Text, { className: styles.cta, children: cta }) }) })
                ] }), _jsx(Icon, { icon: arrowRight, className: styles.icon, size: 30 })
        ] }));
};
export default ContextualUpgradeTrigger;
