import { Button } from '@wordpress/components';
export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
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
export declare function Footer({ children, actions, isScreenLocked, className, ...props }: FooterProps): import("react/jsx-runtime").JSX.Element;
