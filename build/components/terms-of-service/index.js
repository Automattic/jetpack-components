import { jsx as _jsx } from "react/jsx-runtime";
import { createInterpolateElement } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import clsx from 'clsx';
import { getRedirectUrl } from "../../index.js";
import Text from "../text/index.js";
import './styles.scss';
const TermsOfService = ({ className, multipleButtons, agreeButtonLabel, isTextOnly, ...textProps }) => {
    const getTOSContent = () => {
        if (isTextOnly) {
            return _jsx(TermsOfServiceTextOnly, {});
        }
        if (multipleButtons) {
            return _jsx(MultipleButtonsText, { multipleButtonsLabels: multipleButtons });
        }
        return _jsx(SingleButtonText, { agreeButtonLabel: agreeButtonLabel });
    };
    return (_jsx(Text, { className: clsx(className, 'terms-of-service'), ...textProps, children: getTOSContent() }));
};
const MultipleButtonsText = ({ multipleButtonsLabels }) => {
    if (Array.isArray(multipleButtonsLabels) && multipleButtonsLabels.length > 1) {
        return createInterpolateElement(sprintf(
        /* translators: %1$s is button label 1 and %2$s is button label 2 */
        __('By clicking <strong>%1$s</strong> or <strong>%2$s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site‘s data</shareDetailsLink> with us.', 'jetpack-components'), multipleButtonsLabels[0], multipleButtonsLabels[1]), {
            strong: _jsx("strong", {}),
            tosLink: _jsx(Link, { slug: "wpcom-tos" }),
            shareDetailsLink: _jsx(Link, { slug: "jetpack-support-what-data-does-jetpack-sync" }),
        });
    }
    return createInterpolateElement(__('By clicking the buttons above, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site‘s data</shareDetailsLink> with us.', 'jetpack-components'), {
        tosLink: _jsx(Link, { slug: "wpcom-tos" }),
        shareDetailsLink: _jsx(Link, { slug: "jetpack-support-what-data-does-jetpack-sync" }),
    });
};
const SingleButtonText = ({ agreeButtonLabel }) => createInterpolateElement(sprintf(
/* translators: %s is a button label */
__('By clicking <strong>%s</strong>, you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site‘s data</shareDetailsLink> with us.', 'jetpack-components'), agreeButtonLabel), {
    strong: _jsx("strong", {}),
    tosLink: _jsx(Link, { slug: "wpcom-tos" }),
    shareDetailsLink: _jsx(Link, { slug: "jetpack-support-what-data-does-jetpack-sync" }),
});
const TermsOfServiceTextOnly = () => createInterpolateElement(__('By continuing you agree to our <tosLink>Terms of Service</tosLink> and to <shareDetailsLink>sync your site’s data</shareDetailsLink> with us. We’ll check if that email is linked to an existing WordPress.com account or create a new one instantly.', 'jetpack-components'), {
    tosLink: _jsx(Link, { slug: "wpcom-tos" }),
    shareDetailsLink: _jsx(Link, { slug: "jetpack-support-what-data-does-jetpack-sync" }),
});
const Link = ({ slug, children }) => (_jsx("a", { className: "terms-of-service__link", href: getRedirectUrl(slug), rel: "noopener noreferrer", target: "_blank", children: children }));
export default TermsOfService;
