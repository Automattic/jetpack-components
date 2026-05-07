import '@gravatar-com/hovercards/dist/style.css';
import './style.scss';
/**
 * Gravatar `defaultImage` styles, mirroring https://docs.gravatar.com/sdk/images/#default-image
 */
type DefaultImage = 'blank' | 'color' | 'identicon' | 'initials' | 'monsterid' | 'mp' | 'retro' | 'robohash' | 'wavatar';
export type GravatarProps = {
    /**
     * Style of the placeholder image when the email has no Gravatar profile.
     * @default 'initials'
     */
    defaultImage?: DefaultImage;
    /**
     * Display name for accessibility (used as `alt` text and the hovercard label).
     */
    displayName?: string;
    /**
     * Email address to look up on Gravatar.
     */
    email: string;
    /**
     * Rendered avatar size in pixels.
     * @default 48
     */
    size?: number;
    /**
     * Optional class name forwarded to the underlying `<img>` element. The
     * default `jetpack-components-gravatar` class is always applied so consumers
     * can target it directly.
     */
    className?: string;
    /**
     * Whether to attach a Gravatar profile hovercard to the avatar.
     * @default true
     */
    useHovercard?: boolean;
};
/**
 * Renders a Gravatar profile image with an optional Gravatar profile hovercard.
 *
 * If the email has no Gravatar profile, the configured `defaultImage` style is
 * used (initials by default).
 *
 * Long-term, this is the seam for switching to a core or Gravatar-shipped
 * component (see https://github.com/WordPress/gutenberg/issues/76836); until
 * then, Forms and Newsletter share this implementation.
 *
 * @param props              - The component props.
 * @param props.defaultImage - Style of the placeholder image when the email has no Gravatar.
 * @param props.displayName  - Display name used for `alt` text + hovercard label.
 * @param props.email        - Email address to look up on Gravatar.
 * @param props.size         - Rendered avatar size in pixels.
 * @param props.className    - Optional class name forwarded to the underlying `<img>`.
 * @param props.useHovercard - Whether to attach the Gravatar profile hovercard.
 * @return The Gravatar avatar `<img>`, or null when no email is available.
 */
export default function Gravatar({ defaultImage, displayName, email, size, className, useHovercard }: GravatarProps): JSX.Element | null;
export {};
