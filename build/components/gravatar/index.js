import { jsx as _jsx } from "react/jsx-runtime";
/**
 * External dependencies
 */
import { Hovercards } from '@gravatar-com/hovercards';
import '@gravatar-com/hovercards/dist/style.css';
import { useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';
import { sha256 } from 'js-sha256';
import './style.scss';
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
export default function Gravatar({ defaultImage = 'initials', displayName, email, size = 48, className, useHovercard = true, }) {
    const profileImageRef = useRef(null);
    const hovercardRef = useRef(null);
    useEffect(() => {
        if (!useHovercard || !profileImageRef.current) {
            return;
        }
        hovercardRef.current = new Hovercards({
            // See https://github.com/Automattic/gravatar/tree/trunk/web/packages/hovercards#translations
            i18n: {
                'Edit your profile →': __('Edit your profile →', 'jetpack-components'),
                'View profile →': __('View profile →', 'jetpack-components'),
                Contact: __('Contact', 'jetpack-components'),
                'Send money': __('Send money', 'jetpack-components'),
                'Sorry, we are unable to load this Gravatar profile.': __('Sorry, we are unable to load this Gravatar profile.', 'jetpack-components'),
                'Gravatar not found.': __('Gravatar not found.', 'jetpack-components'),
                'This profile is private.': __('This profile is private.', 'jetpack-components'),
                'Too Many Requests.': __('Too many requests.', 'jetpack-components'),
                'Internal Server Error.': __('Internal server error.', 'jetpack-components'),
                'Is this you?': __('Is this you?', 'jetpack-components'),
                'Claim your free profile.': __('Claim your free profile.', 'jetpack-components'),
                Email: __('Email', 'jetpack-components'),
                'Home Phone': __('Home phone', 'jetpack-components'),
                'Work Phone': __('Work phone', 'jetpack-components'),
                'Cell Phone': __('Cell phone', 'jetpack-components'),
                'Contact Form': __('Contact form', 'jetpack-components'),
                Calendar: __('Calendar', 'jetpack-components'),
            },
        });
        hovercardRef.current.attach(profileImageRef.current);
    }, [useHovercard]);
    if (!email) {
        return null;
    }
    const hashedEmail = sha256(email);
    const hovercardName = displayName ? `&name=${encodeURIComponent(displayName)}` : '';
    return (_jsx("img", { ref: profileImageRef, className: clsx('jetpack-components-gravatar', className), alt: displayName || '', src: `https://secure.gravatar.com/avatar/${hashedEmail}?d=${defaultImage}${hovercardName}`, width: size, height: size, loading: "lazy" }));
}
