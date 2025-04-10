import React from 'react';
import type { ButtonProps } from './types.ts';
/**
 * Button component
 *
 * @param {ButtonProps} props - Component Props
 * @return {React.ReactNode} Rendered button
 */
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default Button;
