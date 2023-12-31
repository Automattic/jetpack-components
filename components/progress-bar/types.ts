export type ProgressBarProps = {
	/**
	 * Optional classname to apply to the root element.
	 */
	className?: string;

	/**
	 * Optional classname to apply to the progress element.
	 */
	progressClassName?: string;

	/**
	 * The current progress percentage, from 0 to 1.
	 */
	progress: number;

	/**
	 * The progress bar height.
	 */
	size?: 'normal' | 'small';
};
