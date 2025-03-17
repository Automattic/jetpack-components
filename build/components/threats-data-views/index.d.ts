/// <reference types="react" resolution-mode="require"/>
import { type Threat } from '@automattic/jetpack-scan';
import { type ActionButton, type Filter } from '@wordpress/dataviews';
/**
 * DataViews component for displaying security threats.
 *
 * @param {object}   props                             - Component props.
 * @param {Array}    props.data                        - Threats data.
 * @param {Array}    props.filters                     - Initial DataView filters.
 * @param {Function} props.onChangeSelection           - Callback function run when an item is selected.
 * @param {Function} props.onFixThreats                - Threat fix action callback.
 * @param {Function} props.onIgnoreThreats             - Threat ignore action callback.
 * @param {Function} props.onUnignoreThreats           - Threat unignore action callback.
 * @param {Function} props.isThreatEligibleForFix      - Function to determine if a threat is eligible for fixing.
 * @param {Function} props.isThreatEligibleForIgnore   - Function to determine if a threat is eligible for ignoring.
 * @param {Function} props.isThreatEligibleForUnignore - Function to determine if a threat is eligible for unignoring.
 *
 * @return {JSX.Element} The ThreatsDataViews component.
 */
export default function ThreatsDataViews({ data, filters, onChangeSelection, isThreatEligibleForFix, isThreatEligibleForIgnore, isThreatEligibleForUnignore, onFixThreats, onIgnoreThreats, onUnignoreThreats, }: {
    data: Threat[];
    filters?: Filter[];
    onChangeSelection?: (selectedItemIds: string[]) => void;
    isThreatEligibleForFix?: (threat: Threat) => boolean;
    isThreatEligibleForIgnore?: (threat: Threat) => boolean;
    isThreatEligibleForUnignore?: (threat: Threat) => boolean;
    onFixThreats?: (threats: Threat[]) => void;
    onIgnoreThreats?: ActionButton<Threat>['callback'];
    onUnignoreThreats?: ActionButton<Threat>['callback'];
}): JSX.Element;
