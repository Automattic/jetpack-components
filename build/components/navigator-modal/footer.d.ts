import { Button } from '@wordpress/components';
import { SharedProps } from './types.ts';
export type FooterProps = SharedProps & {
    actions?: Array<((props: {
        navigate: VoidFunction;
    }) => React.ReactElement) | React.ComponentProps<typeof Button>>;
    isScreenLocked?: boolean;
};
/**
 * Renders a footer.
 *
 * @param {FooterProps} props - Props
 *
 * @return The rendered footer.
 */
export declare function Footer({ children, actions, isScreenLocked }: FooterProps): import("react/jsx-runtime").JSX.Element;
