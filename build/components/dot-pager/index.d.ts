import { ReactNode } from 'react';
import './style.scss';
type DotPagerProps = {
    hasDynamicHeight?: boolean;
    children: ReactNode;
    className?: string;
    onPageSelected?: (index: number) => void;
    isClickEnabled?: boolean;
    rotateTime?: number;
    tracksPrefix?: string;
    tracksFn?: (eventName: string, data?: Record<string, unknown>) => void;
};
declare const DotPager: ({ hasDynamicHeight, children, className, onPageSelected, isClickEnabled, rotateTime, tracksPrefix, tracksFn, ...props }: DotPagerProps) => import("react").JSX.Element;
export default DotPager;
