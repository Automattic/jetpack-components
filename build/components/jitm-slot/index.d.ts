import './style.scss';
import type { JitmSlotProps } from './types.ts';
import type { FC } from 'react';
/**
 * Hosts the element the JITM script re-parents its card into.
 *
 * The JITM script places its card once per page load, so the element outlives any
 * one slot: an unmounted slot parks it, hidden, and the next slot takes it back.
 * `className` is for width and alignment; `style.scss` owns spacing.
 *
 * @param {JitmSlotProps} props - Component props.
 * @return {JSX.Element} The slot.
 */
declare const JitmSlot: FC<JitmSlotProps>;
export default JitmSlot;
