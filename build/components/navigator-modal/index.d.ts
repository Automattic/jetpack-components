import { Modal } from '@wordpress/components';
import { Screen } from './screen.tsx';
import './styles.scss';
import { TNavigatorModalContext } from './types.ts';
type ModalProps = React.ComponentProps<typeof Modal>;
type NavigatorModalProps = Omit<ModalProps, 'onRequestClose'> & TNavigatorModalContext;
/**
 * Renders a modal with navigator capabilities.
 *
 * @param {NavigatorModalProps} props - Props
 *
 * @return Component
 */
declare function NavigatorModalMain({ children, className, initialPath, onClose, isDismissible, ...props }: NavigatorModalProps): import("react").JSX.Element;
export declare const NavigatorModal: typeof NavigatorModalMain & {
    Screen: typeof Screen & {
        displayName: string;
    };
};
export {};
