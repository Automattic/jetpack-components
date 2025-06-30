import type { FC, ReactNode } from 'react';
type NoticeProps = {
    /** The severity of the alert. */
    level?: 'error' | 'warning' | 'info' | 'success';
    /** The title of the notice */
    title?: string;
    /** A list of action elements to show across the bottom */
    actions?: ReactNode[];
    /** Hide close button */
    hideCloseButton?: boolean;
    /** Method to call when the close button is clicked */
    onClose?: () => void;
    /** Children to be rendered inside the alert. */
    children: ReactNode;
};
/**
 * Notice component
 *
 * @param {object}      props                 - The component properties.
 * @param {string}      props.level           - The notice level: error, warning, info, success.
 * @param {boolean}     props.hideCloseButton - Whether to hide the close button.
 * @param {Function}    props.onClose         - The function to call when the close button is clicked.
 * @param {string}      props.title           - The title of the notice.
 * @param {ReactNode[]} props.actions         - Actions to show across the bottom of the bar.
 * @param {Component}   props.children        - The notice content.
 * @return {ReactElement}              The `Notice` component.
 */
declare const Notice: FC<NoticeProps>;
export default Notice;
