import { jsx as _jsx } from "react/jsx-runtime";
/**
 * External dependencies
 */
import clsx from 'clsx';
/**
 * Internal dependencies
 */
import styles from './style.module.scss';
/**
 * Progress Bar component
 *
 * @param {ProgressBarProps} props - Component props.
 * @return {ReactNode} - ProgressBar react component.
 */
const ProgressBar = ({ className, progressClassName, progress, size = 'normal', }) => {
    if (progress == null) {
        return null;
    }
    const normalizedProgress = Math.max(Math.min(progress, 1), 0);
    const style = {
        width: `${normalizedProgress * 100}%`,
    };
    return (_jsx("div", { className: clsx(className, styles.wrapper, { [styles.small]: size === 'small' }), children: _jsx("div", { className: clsx(progressClassName, styles.progress), style: style }) }));
};
export default ProgressBar;
