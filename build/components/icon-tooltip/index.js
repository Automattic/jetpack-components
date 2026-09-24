import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { speak } from '@wordpress/a11y';
import { Popover } from '@wordpress/components';
import { focus } from '@wordpress/dom';
import { Icon, info } from '@wordpress/icons';
import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState, } from 'react';
import Button from '../button/index.js';
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
const IconTooltip = ({ className = '', popoverClassName, iconClassName = '', placement = 'bottom-end', animate = true, iconCode = info, iconSize = 18, offset = 10, title, children, popoverAnchorStyle = 'icon', trigger, onTriggerClick, closeOnClickOutside = true, forceShow = false, hoverShow = false, wide = false, inline = true, shift = false, }) => {
    const POPOVER_HELPER_WIDTH = 124;
    const [isVisible, setIsVisible] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const wrapperRef = useRef(null);
    const popoverRef = useRef(null);
    const triggerRef = useRef(null);
    const hasTextTrigger = trigger !== undefined;
    // Where focus should land after Tab leaves the tooltip. The effect below applies it, rather
    // than the handler, because Popover puts focus back on the trigger as it unmounts.
    const focusAfterClose = useRef(null);
    // Opening on hover must not pull focus off whatever the visitor is using.
    const openedByHover = useRef(false);
    const hideTooltip = useCallback(() => setIsVisible(false), [setIsVisible]);
    const toggleTooltip = useCallback(e => {
        e.preventDefault();
        onTriggerClick?.();
        openedByHover.current = false;
        setIsVisible(!isVisible);
    }, [isVisible, setIsVisible, onTriggerClick]);
    // Focus can stay on the trigger while its tooltip is open, so it handles the dialog keys too.
    const handleTriggerKeyDown = useCallback((event) => {
        // A held key repeats activation, so only its first press toggles.
        if (event.repeat && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            return;
        }
        // A link only activates on Enter; a button also activates on Space.
        if (hasTextTrigger && event.key === ' ') {
            toggleTooltip(event);
            return;
        }
        if (!isVisible) {
            return;
        }
        if (event.key === 'Escape') {
            event.preventDefault();
            hideTooltip();
        }
        else if (event.key === 'Tab') {
            // Step into the popover even when it is portaled away from the trigger.
            const first = event.shiftKey ? null : focus.tabbable.find(popoverRef.current)[0];
            if (first) {
                event.preventDefault();
                first.focus();
            }
            else {
                hideTooltip();
            }
        }
    }, [hasTextTrigger, isVisible, hideTooltip, toggleTooltip]);
    const isAnchorWrapper = popoverAnchorStyle === 'wrapper';
    const isForcedToShow = isAnchorWrapper && forceShow;
    const handlePopoverKeyDown = useCallback((event) => {
        const wrapper = wrapperRef.current;
        const popover = popoverRef.current;
        if (event.key !== 'Tab' || !wrapper || !popover) {
            return;
        }
        const tabbables = focus.tabbable.find(popover);
        const boundary = event.shiftKey ? tabbables[0] : tabbables[tabbables.length - 1];
        const leaving = !tabbables.length ||
            event.target === boundary ||
            (event.shiftKey && event.target === popover);
        if (!leaving) {
            return;
        }
        if (event.shiftKey && triggerRef.current) {
            event.preventDefault();
            triggerRef.current.focus();
            return;
        }
        // A popover rendered in a portal sits at the end of the document, so Tab out of it has
        // to resume from the trigger's place in the page instead of the popover's.
        const step = event.shiftKey ? focus.tabbable.findPrevious : focus.tabbable.findNext;
        let destination = step(wrapper);
        while (destination &&
            (wrapper.contains(destination) || popover.contains(destination))) {
            destination = step(destination);
        }
        event.preventDefault();
        focusAfterClose.current = destination ?? null;
        hideTooltip();
    }, [hideTooltip]);
    const args = {
        // To be compatible with deprecating prop `position`.
        position: placementsToPositions(placement),
        placement,
        animate,
        noArrow: false,
        resize: false,
        flip: false,
        offset, // The distance (in px) between the anchor and the popover.
        // Focus stays on the trigger, which handles the dialog keys; a caller-controlled popover
        // has no trigger, so it focuses its first button instead.
        focusOnMount: isForcedToShow ? 'firstElement' : false,
        // Tab moves through the popover in document order rather than cycling inside it, and
        // handlePopoverKeyDown decides where it lands on the way out.
        constrainTabbing: false,
        onKeyDownCapture: handlePopoverKeyDown,
        ref: popoverRef,
        onClose: () => {
            const popover = popoverRef.current;
            if (popover?.contains(popover.ownerDocument.activeElement)) {
                focusAfterClose.current = triggerRef.current;
            }
            hideTooltip();
        },
        onFocusOutside: (event) => {
            // A pointer press on our own trigger dismisses through that trigger instead.
            if (closeOnClickOutside && !wrapperRef.current?.contains(event.relatedTarget)) {
                hideTooltip();
            }
        },
        className: clsx('icon-tooltip-container', popoverClassName),
        inline,
        shift,
    };
    const wrapperClassNames = clsx('icon-tooltip-wrapper', { 'has-text-trigger': hasTextTrigger }, className);
    const iconShiftBySize = {
        left: isAnchorWrapper ? 0 : -(POPOVER_HELPER_WIDTH / 2 - iconSize / 2) + 'px',
    };
    // Focus may never enter the popover, so outside presses are watched directly.
    useEffect(() => {
        if (!isVisible || isForcedToShow || !closeOnClickOutside) {
            return;
        }
        const doc = wrapperRef.current?.ownerDocument;
        const handlePointerDown = (event) => {
            const target = event.target;
            if (!wrapperRef.current?.contains(target) && !popoverRef.current?.contains(target)) {
                hideTooltip();
            }
        };
        doc?.addEventListener('pointerdown', handlePointerDown);
        return () => doc?.removeEventListener('pointerdown', handlePointerDown);
    }, [isVisible, isForcedToShow, closeOnClickOutside, hideTooltip]);
    useEffect(() => {
        if (isForcedToShow || isVisible) {
            return;
        }
        const destination = focusAfterClose.current;
        focusAfterClose.current = null;
        destination?.focus();
    }, [isForcedToShow, isVisible]);
    // Focus stays on the trigger, so a screen reader hears the popover through an announcement.
    useEffect(() => {
        const popover = popoverRef.current;
        if (isVisible && !openedByHover.current && popover) {
            speak(popover.innerText ?? popover.textContent, 'polite');
        }
    }, [isVisible]);
    const handleMouseEnter = useCallback(() => {
        if (hoverShow) {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                setHoverTimeout(null);
            }
            openedByHover.current = true;
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
    const helper = (_jsx("div", { className: clsx('icon-tooltip-helper', { 'is-wide': wide }), style: iconShiftBySize, children: (isForcedToShow || isVisible) && (_jsx(Popover, { ...args, children: _jsxs("div", { children: [title && _jsx("div", { className: "icon-tooltip-title", children: title }), _jsx("div", { className: "icon-tooltip-content", children: children })] }) })) }));
    return (_jsxs("div", { ref: wrapperRef, className: wrapperClassNames, "data-testid": "icon-tooltip_wrapper", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [hasTextTrigger && (_jsxs(_Fragment, { children: [_jsx("a", { ref: triggerRef, href: "#", role: "button", className: "icon-tooltip-trigger", "aria-expanded": isVisible, onClick: toggleTooltip, onKeyDown: handleTriggerKeyDown, children: trigger }), _jsx("span", { className: "icon-tooltip-anchor", children: _jsx("span", { children: helper }) })] })), !hasTextTrigger && !isAnchorWrapper && (_jsx(Button, { ref: triggerRef, variant: "link", "aria-expanded": isVisible, onClick: toggleTooltip, onKeyDown: handleTriggerKeyDown, children: _jsx(Icon, { className: iconClassName, icon: iconCode, size: iconSize }) })), !hasTextTrigger && helper] }));
};
export default IconTooltip;
