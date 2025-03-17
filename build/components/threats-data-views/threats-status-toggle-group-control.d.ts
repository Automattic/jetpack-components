/// <reference types="react" resolution-mode="require"/>
import { type Threat } from '@automattic/jetpack-scan';
import { type View } from '@wordpress/dataviews';
/**
 * ToggleGroupControl component for filtering threats by status.
 * @param {object}     props              - Component props.
 * @param { Threat[]}  props.data         - Threats data.
 * @param { View }     props.view         - The current view.
 * @param { Function } props.onChangeView - Callback function to handle view changes.
 * @return {JSX.Element|null} The component or null.
 */
export default function ThreatsStatusToggleGroupControl({ data, view, onChangeView, }: {
    data: Threat[];
    view: View;
    onChangeView: (newView: View) => void;
}): JSX.Element;
