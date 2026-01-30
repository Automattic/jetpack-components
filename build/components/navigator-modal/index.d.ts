import { Screen } from './screen.tsx';
import './styles.scss';
import { SharedProps, TNavigatorModalContext } from './types.ts';
/**
 * Renders a modal with navigator capabilities.
 *
 * @param {SharedProps & TNavigatorModalContext} props - Props
 *
 * @return Component
 */
declare function NavigatorModalMain({ children, className, initialPath, onClose, isDismissible, }: SharedProps & TNavigatorModalContext): import("react/jsx-runtime").JSX.Element;
export declare const NavigatorModal: typeof NavigatorModalMain & {
    Screen: typeof Screen & {
        displayName: string;
    };
};
export {};
