/// <reference types="react" resolution-mode="require"/>
import { type Threat } from '@automattic/jetpack-scan';
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
export default function ThreatFixerButton({ threat, className, onClick, }: {
    threat: Threat;
    onClick: (items: Threat[]) => void;
    className?: string;
}): JSX.Element;
