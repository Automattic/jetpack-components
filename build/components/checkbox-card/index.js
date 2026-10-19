import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Card, Checkbox, Field, Link, Stack, Text } from '@wordpress/ui';
import clsx from 'clsx';
import './style.scss';
/**
 * Lays out checkbox cards in two columns, or one on narrow screens.
 *
 * @param {CheckboxCardGridProps} props - Component props.
 * @return {JSX.Element} The grid.
 */
export function CheckboxCardGrid({ children, className }) {
    return _jsx("div", { className: clsx('jp-checkbox-card-grid', className), children: children });
}
/**
 * A card with a checkbox, toggled by a click on its illustration.
 *
 * @param {CheckboxCardProps} props - Component props.
 * @return {JSX.Element} The card.
 */
export default function CheckboxCard({ id, name, title, illustration, checked, onChange, previewUrl, onPreviewClick, disabled, }) {
    const titleId = `${id}__title`;
    const handleChange = useCallback((next) => onChange(name, next), [name, onChange]);
    const handlePreviewClick = useCallback(() => {
        onPreviewClick?.(name);
    }, [name, onPreviewClick]);
    return (_jsxs(Field.Root, { disabled: disabled, children: [_jsx(Card.Root, { className: "jp-checkbox-card", "data-checked": checked, children: _jsx(Card.Content, { children: _jsxs(Card.FullBleed, { className: "jp-checkbox-card__surface", children: [_jsx(Field.Label, { className: "jp-checkbox-card__illustration", children: illustration }), _jsx(Checkbox, { id: id, className: "jp-checkbox-card__checkbox", checked: checked, onCheckedChange: handleChange, "aria-labelledby": titleId })] }) }) }), _jsxs(Stack, { gap: "xs", direction: "column", children: [_jsx(Text, { id: titleId, variant: "body-sm", children: title }), previewUrl && (_jsx(Link, { href: previewUrl, onClick: handlePreviewClick, children: __('Preview and edit', 'jetpack-components') }))] })] }));
}
export { CheckboxCard };
