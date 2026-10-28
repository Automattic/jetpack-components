import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { __, isRTL, sprintf } from '@wordpress/i18n';
import { calendar, chevronLeft, chevronRight } from '@wordpress/icons';
import { Button, IconButton, Menu, Stack } from '@wordpress/ui';
/**
 * A dropdown of period presets, with optional buttons to step to the previous or next period.
 *
 * @param {PeriodSelectorProps} props - Component props.
 * @return {JSX.Element} The selector.
 */
export default function PeriodSelector({ presets, value, label, onChange, onPrevious, onNext, isPreviousDisabled = false, isNextDisabled = false, disabled = false, className, }) {
    const selected = presets.find(preset => preset.value === value);
    const selectedLabel = selected?.label ?? __('Select period', 'jetpack-components');
    const [previousIcon, nextIcon] = isRTL()
        ? [chevronRight, chevronLeft]
        : [chevronLeft, chevronRight];
    return (_jsxs(Stack, { direction: "row", align: "center", gap: "xs", className: className, children: [_jsxs(Menu.Root, { children: [_jsxs(Menu.Trigger, { render: _jsx(Button, { variant: "outline", tone: "neutral", size: "compact" }), disabled: disabled, "aria-label": label &&
                            sprintf(
                            /* translators: %1$s: What the control picks, such as "Date range". %2$s: The selected period, such as "Last 30 days". */
                            __('%1$s: %2$s', 'jetpack-components'), label, selectedLabel), children: [_jsx(Button.Icon, { icon: calendar }), selectedLabel] }), _jsx(Menu.Popup, { positioner: _jsx(Menu.Positioner, { align: "end" }), "aria-label": label, children: _jsx(Menu.RadioGroup, { value: value, onValueChange: onChange, children: presets.map(preset => (_jsx(Menu.RadioItem, { value: preset.value, closeOnClick: true, children: _jsx(Menu.ItemLabel, { children: preset.label }) }, preset.value))) }) })] }), onPrevious && (_jsx(IconButton, { variant: "outline", tone: "neutral", size: "compact", icon: previousIcon, label: __('Previous period', 'jetpack-components'), onClick: onPrevious, disabled: disabled || isPreviousDisabled })), onNext && (_jsx(IconButton, { variant: "outline", tone: "neutral", size: "compact", icon: nextIcon, label: __('Next period', 'jetpack-components'), onClick: onNext, disabled: disabled || isNextDisabled }))] }));
}
