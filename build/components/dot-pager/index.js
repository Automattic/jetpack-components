import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import clsx from 'clsx';
import { Children, useState, useEffect, useCallback, useMemo } from 'react';
import { Swipeable } from '../swipeable/index.js';
import './style.scss';
const Controls = ({ currentPage, numberOfPages, setCurrentPage, tracksPrefix, tracksFn, }) => {
    // Create a map of memoized handlers for each page
    const pageHandlers = useMemo(() => Array.from({ length: numberOfPages }, (_, page) => () => {
        tracksFn(tracksPrefix + '_dot_click', {
            current_page: currentPage,
            destination_page: page,
        });
        setCurrentPage(page);
    }), [numberOfPages, currentPage, tracksFn, tracksPrefix, setCurrentPage]);
    if (numberOfPages < 2) {
        return null;
    }
    return (_jsx("ul", { className: "dot-pager__controls", "aria-label": __('Pager controls', 'jetpack-components'), children: Array.from({ length: numberOfPages }, (_, page) => (_jsx("li", { "aria-current": page === currentPage ? 'page' : undefined, children: _jsx(Button, { className: clsx('dot-pager__control-choose-page', {
                    'dot-pager__control-current': page === currentPage,
                }), disabled: page === currentPage, "aria-label": sprintf(
                /* translators: %1$d: current page number, %2$d: total number of pages */
                __('Page %1$d of %2$d', 'jetpack-components'), page + 1, numberOfPages), onClick: pageHandlers[page] }, page.toString()) }, `page-${page}`))) }));
};
const DotPager = ({ hasDynamicHeight = false, children, className = '', onPageSelected, isClickEnabled = false, rotateTime = 0, tracksPrefix = '', tracksFn = () => { }, ...props }) => {
    const normalizedChildren = Children.toArray(children).filter(Boolean);
    const [currentPage, setCurrentPage] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const numPages = Children.count(normalizedChildren);
    useEffect(() => {
        if (rotateTime > 0 && numPages > 1 && !isPaused) {
            const timerId = setTimeout(() => {
                // Add 1 to numPages to account for the clones
                setCurrentPage((currentPage + 1) % (numPages + 1));
            }, rotateTime * 1000);
            return () => clearTimeout(timerId);
        }
    }, [currentPage, numPages, rotateTime, isPaused]);
    const handleSelectPage = useCallback((index) => {
        setCurrentPage(index);
        onPageSelected?.(index);
    }, [onPageSelected]);
    const handleMouseEnter = useCallback(() => {
        setIsPaused(true);
    }, []);
    const handleMouseLeave = useCallback(() => {
        setIsPaused(false);
    }, []);
    return (_jsxs("div", { className: clsx('dot-pager', className), onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, ...props, children: [
            _jsx(Controls, { currentPage: currentPage, numberOfPages: numPages, setCurrentPage: handleSelectPage, tracksPrefix: tracksPrefix, tracksFn: tracksFn }), _jsx(Swipeable, { hasDynamicHeight: hasDynamicHeight, onPageSelect: handleSelectPage, currentPage: currentPage, pageClassName: "dot-pager__page", containerClassName: "dot-pager__pages", isClickEnabled: isClickEnabled, children: normalizedChildren })
        ] }));
};
export default DotPager;
