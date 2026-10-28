import type { PeriodSelectorProps } from './types.ts';
import type { JSX } from 'react';
/**
 * A dropdown of period presets, with optional buttons to step to the previous or next period.
 *
 * @param {PeriodSelectorProps} props - Component props.
 * @return {JSX.Element} The selector.
 */
export default function PeriodSelector<Value extends string>({ presets, value, label, onChange, onPrevious, onNext, isPreviousDisabled, isNextDisabled, disabled, className, }: PeriodSelectorProps<Value>): JSX.Element;
