import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './style.module.scss';
const LoadingPlaceholder = ({ children = null, width = null, height = null, className = '', }) => {
    return (_jsx("div", { className: clsx(styles.placeholder, className), style: { width, height }, children: children }));
};
export default LoadingPlaceholder;
