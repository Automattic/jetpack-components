import { jsx as _jsx } from "react/jsx-runtime";
import { getFixerState, getFixerAction, getFixerDescription, } from '@automattic/jetpack-scan';
import { Tooltip } from '@wordpress/components';
import { useCallback, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button } from '@automattic/jetpack-components';
import styles from './styles.module.scss';
/**
 * Threat Fixer Button component.
 *
 * @param {object}   props           - Component props.
 * @param {object}   props.threat    - The threat.
 * @param {Function} props.onClick   - The onClick function.
 * @param {string}   props.className - The className.
 *
 * @return {JSX.Element} The component.
 */
export default function ThreatFixerButton({ threat, className, onClick, }) {
    const fixerState = useMemo(() => {
        return getFixerState(threat.fixer);
    }, [threat.fixer]);
    const tooltipText = useMemo(() => {
        if (!threat.fixable) {
            return null;
        }
        if (fixerState.error) {
            return __('An error occurred auto-fixing this threat.', 'jetpack-components');
        }
        if (fixerState.stale) {
            return __('The auto-fixer is taking longer than expected.', 'jetpack-components');
        }
        if (fixerState.inProgress) {
            return __('An auto-fixer is in progress.', 'jetpack-components');
        }
        return getFixerDescription(threat);
    }, [threat, fixerState]);
    const buttonText = useMemo(() => {
        if (!threat.fixable) {
            return null;
        }
        if (fixerState.error) {
            return __('Error', 'jetpack-components');
        }
        return getFixerAction(threat);
    }, [threat, fixerState.error]);
    const handleClick = useCallback((event) => {
        event.stopPropagation();
        onClick([threat]);
    }, [onClick, threat]);
    if (!threat.fixable) {
        return null;
    }
    return (_jsx("div", { children: _jsx(Tooltip, { className: styles.tooltip, text: tooltipText, children: _jsx(Button, { size: "small", weight: "regular", variant: "secondary", onClick: handleClick, children: buttonText, className: className, isLoading: fixerState.inProgress, isDestructive: (threat.fixable && threat.fixable.fixer === 'delete') ||
                    fixerState.error ||
                    fixerState.stale, style: { minWidth: '72px' } }) }) }));
}
