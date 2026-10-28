import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Card, Field, Link, Radio, Stack, Text } from '@wordpress/ui';
import clsx from 'clsx';
import './style.scss';
/**
 * Lays out radio cards in two columns, or one on narrow screens.
 *
 * @param {RadioCardGridProps} props - Component props.
 * @return {JSX.Element} The grid.
 */
export function RadioCardGrid({ children, className }) {
    return _jsx("div", { className: clsx('jp-radio-card-grid', className), children: children });
}
/**
 * A card with a radio, picked by a click on its illustration. Render it in a `RadioGroup` inside a `Field.Root`.
 *
 * @param {RadioCardProps} props - Component props.
 * @return {JSX.Element} The card.
 */
export default function RadioCard({ id, value, title, illustration, previewUrl, onPreviewClick, disabled, }) {
    const titleId = `${id}__title`;
    const handlePreviewClick = useCallback(() => {
        onPreviewClick?.(value);
    }, [value, onPreviewClick]);
    return (_jsxs(Field.Item, { disabled: disabled, children: [_jsx(Card.Root, { className: "jp-radio-card", children: _jsx(Card.Content, { children: _jsxs(Card.FullBleed, { className: "jp-radio-card__surface", children: [_jsx(Field.Label, { className: "jp-radio-card__illustration", children: illustration }), _jsx(Radio, { id: id, className: "jp-radio-card__radio", value: value, disabled: disabled, "aria-labelledby": titleId })] }) }) }), _jsxs(Stack, { gap: "xs", direction: "column", children: [_jsx(Text, { id: titleId, variant: "body-sm", children: title }), previewUrl && (_jsx(Link, { href: previewUrl, onClick: handlePreviewClick, children: __('Preview and edit', 'jetpack-components') }))] })] }));
}
export { RadioCard };
