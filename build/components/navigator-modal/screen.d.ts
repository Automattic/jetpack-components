import { Navigator } from '@wordpress/components';
import { FooterProps } from './footer.tsx';
export type ScreenProps = Omit<React.ComponentProps<typeof Navigator.Screen>, 'content' | 'children'> & {
    /**
     * The title of the screen.
     */
    title?: string;
    /**
     * Optional icon to display in the header.
     */
    headerIcon?: React.ReactNode;
    /**
     * The path of the screen.
     */
    path: string;
    /**
     * The sidebar content
     */
    sidebar?: React.ReactNode;
    /**
     * Whether the screen is locked or has a parent screen.
     *
     * When it's locked, it means there will be no navigation back to a previous screen.
     */
    isScreenLocked?: boolean;
    /**
     * The footer content
     */
    footerContent?: React.ReactNode;
    /**
     * The footer actions
     */
    footerActions?: FooterProps['actions'];
    /**
     * className to be applied to the modal.
     */
    className?: string;
    /**
     * The content of the screen.
     */
    content?: React.ReactNode;
    /**
     * The children of the screen. Alternative to `content`.
     */
    children?: React.ReactNode;
};
/**
 * Renders a screen.
 *
 * @param {ScreenProps} props - Props
 *
 * @return The rendered screen.
 */
export declare function Screen({ path, className, title, sidebar, headerIcon, isScreenLocked, footerContent, footerActions, children, content, ...props }: ScreenProps): import("react/jsx-runtime").JSX.Element;
