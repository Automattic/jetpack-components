import { jsx as _jsx } from "react/jsx-runtime";
import { _x } from '@wordpress/i18n';
import Badge from '../badge/index.js';
const ThreatSeverityBadge = ({ severity }) => {
    if (severity >= 5) {
        return (_jsx(Badge, { variant: "danger", children: _x('Critical', 'Severity label for issues rated 5 or higher.', 'jetpack-components') }));
    }
    if (severity >= 3 && severity < 5) {
        return (_jsx(Badge, { variant: "warning", children: _x('High', 'Severity label for issues rated between 3 and 5.', 'jetpack-components') }));
    }
    return (_jsx(Badge, { children: _x('Low', 'Severity label for issues rated below 3.', 'jetpack-components') }));
};
export default ThreatSeverityBadge;
