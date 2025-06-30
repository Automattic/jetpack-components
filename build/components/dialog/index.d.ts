import type { ReactNode, FC } from 'react';
type DialogProps = {
    primary: ReactNode;
    secondary?: ReactNode;
    isTwoSections?: boolean;
    isCard?: boolean;
    containerProps: object;
};
/**
 * Dialog component.
 *
 * @param {object}    props                - React component props.
 * @param {ReactNode} props.primary        - Primary-section content.
 * @param {ReactNode} props.secondary      - Secondary-section content.
 * @param {boolean}   props.isTwoSections  - Handle two sections layout when true.
 * @param {object}    props.containerProps - Props to pass to the container component.
 * @return {ReactNode}                 Rendered dialog
 */
declare const Dialog: FC<DialogProps>;
export default Dialog;
