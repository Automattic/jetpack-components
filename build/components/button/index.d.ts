import type { ButtonProps } from './types.ts';
/**
 * Button component
 *
 * @param {ButtonProps} props - Component Props
 * @return {ReactNode} Rendered button
 */
declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default Button;
