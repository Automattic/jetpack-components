import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './style.module.scss';
/**
 * Chip component
 *
 * @param {object} props      - The component properties.
 * @param {string} props.type - The type new or info
 * @param {string} props.text - Chip text
 * @return {React.ReactElement} The `Chip` component.
 */
const Chip = ({ type = 'info', text }) => {
    const classes = clsx(styles.chip, styles[`is-${type}`]);
    return _jsx("span", { className: classes, children: text });
};
export default Chip;
