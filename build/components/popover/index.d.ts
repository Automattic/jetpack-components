import './style.scss';
import type { FC, ReactNode } from 'react';
type PopoverProps = {
    action: ReactNode;
    icon?: ReactNode;
    children?: ReactNode;
};
declare const Popover: FC<PopoverProps>;
export default Popover;
