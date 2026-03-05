import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover } from '@wordpress/components';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import Button from '../button/index.js';
import Gridicon from '../gridicon/index.js';
import './style.scss';
const placementsToPositions = (placement) => {
    const mapping = {
        'top-end': 'top left',
        top: 'top center',
        'top-start': 'top right',
        'bottom-end': 'bottom left',
        bottom: 'bottom center',
        'bottom-start': 'bottom right',
    };
    return mapping[placement];
};
/**
 * Generate Icon Tooltip
 *
 * @param {IconTooltipProps} props - Props
 * @return {ReactElement} - JSX element
 */
const IconTooltip = ({ className = '', iconClassName = '', placement = 'bottom-end', animate = true, iconCode = 'info-outline', iconSize = 18, offset = 10, title, children, popoverAnchorStyle = 'icon', forceShow = false, hoverShow = false, wide = false, inline = true, shift = false, }) => {
    const POPOVER_HELPER_WIDTH = 124;
    const [isVisible, setIsVisible] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const hideTooltip = useCallback(() => setIsVisible(false), [setIsVisible]);
    const toggleTooltip = useCallback(e => {
        e.preventDefault();
        setIsVisible(!isVisible);
    }, [isVisible, setIsVisible]);
    const args = {
        // To be compatible with deprecating prop `position`.
        position: placementsToPositions(placement),
        placement,
        animate,
        noArrow: false,
        resize: false,
        flip: false,
        offset, // The distance (in px) between the anchor and the popover.
        focusOnMount: 'firstElement',
        onClose: hideTooltip,
        className: 'icon-tooltip-container',
        inline,
        shift,
    };
    const isAnchorWrapper = popoverAnchorStyle === 'wrapper';
    const wrapperClassNames = clsx('icon-tooltip-wrapper', className);
    const iconShiftBySize = {
        left: isAnchorWrapper ? 0 : -(POPOVER_HELPER_WIDTH / 2 - iconSize / 2) + 'px',
    };
    const isForcedToShow = isAnchorWrapper && forceShow;
    const handleMouseEnter = useCallback(() => {
        if (hoverShow) {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                setHoverTimeout(null);
            }
            setIsVisible(true);
        }
    }, [hoverShow, hoverTimeout]);
    const handleMouseLeave = useCallback(() => {
        if (hoverShow) {
            const id = setTimeout(() => {
                setIsVisible(false);
                setHoverTimeout(null);
            }, 100);
            setHoverTimeout(id);
        }
    }, [hoverShow]);
    return (_jsxs("div", { className: wrapperClassNames, "data-testid": "icon-tooltip_wrapper", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [!isAnchorWrapper && (_jsx(Button, { variant: "link", onMouseDown: toggleTooltip, children: _jsx(Gridicon, { className: iconClassName, icon: iconCode, size: iconSize }) })), _jsx("div", { className: clsx('icon-tooltip-helper', { 'is-wide': wide }), style: iconShiftBySize, children: (isForcedToShow || isVisible) && (_jsx(Popover, { ...args, children: _jsxs("div", { children: [title && _jsx("div", { className: "icon-tooltip-title", children: title }), _jsx("div", { className: "icon-tooltip-content", children: children })
                        ] }) })) })
        ] }));
};
export default IconTooltip;
