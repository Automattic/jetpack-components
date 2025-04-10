import { Component } from 'react';
import './style.scss';
import { GridiconProps } from './types.ts';
declare class Gridicon extends Component<GridiconProps> {
    static defaultProps: {
        'aria-hidden': string;
        focusable: string;
    };
    needsOffset(icon: any, size: any): boolean;
    getSVGDescription(icon: any): string;
    renderIcon(icon: any): import("react/jsx-runtime").JSX.Element;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default Gridicon;
