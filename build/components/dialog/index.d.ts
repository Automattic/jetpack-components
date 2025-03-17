import React from 'react';
type DialogProps = {
    primary: React.ReactNode;
    secondary?: React.ReactNode;
    isTwoSections?: boolean;
    isCard?: boolean;
    containerProps: object;
};
/**
 * Dialog component.
 *
 * @param {object}          props                - React component props.
 * @param {React.ReactNode} props.primary        - Primary-section content.
 * @param {React.ReactNode} props.secondary      - Secondary-section content.
 * @param {boolean}         props.isTwoSections  - Handle two sections layout when true.
 * @param {object}          props.containerProps - Props to pass to the container component.
 * @return {React.ReactNode}                 Rendered dialog
 */
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
