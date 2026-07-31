import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Stack } from '@wordpress/ui';
import clsx from 'clsx';
import './style.scss';
/**
 * A decorative card used in the disconnection flow.
 *
 * @param {DecorativeCardProps} props - The properties.
 * @return {import('react').ReactNode} - The DecorativeCard component.
 */
function DecorativeCard({ format = 'horizontal', icon, imageUrl, className, ...rest }) {
    return (_jsxs(Card.Root, { "data-testid": "decorative-card", ...rest, "aria-hidden": "true", className: clsx('jp-components__decorative-card', `jp-components__decorative-card--${format}`, className), children: [_jsx("div", { className: "jp-components__decorative-card__image", "data-testid": "decorative-card_image", style: { backgroundImage: imageUrl ? `url(${imageUrl})` : undefined } }), icon === 'unlink' && (_jsx("div", { className: "jp-components__decorative-card__icon-container", children: _jsxs("svg", { className: "jp-components__decorative-card__icon", "data-testid": "decorative-card_icon", width: "34", height: "37", viewBox: "0 0 34 37", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M22.3335 10.001H25.0002C29.4184 10.001 33.0002 13.5827 33.0002 18.001V19.7788C33.0002 24.197 29.4184 27.7788 25.0002 27.7788H22.3335", stroke: "white", strokeWidth: "1.5", strokeLinecap: "square" }), _jsx("path", { d: "M11.6675 27.7783L9.00082 27.7783C4.58254 27.7783 1.00081 24.1966 1.00081 19.7783L1.00081 18.0005C1.00081 13.5823 4.58253 10.0005 9.00081 10.0005L11.6675 10.0005", stroke: "white", strokeWidth: "1.5", strokeLinecap: "square" }), _jsx("path", { d: "M10.9998 19.167L16.9998 19.167", stroke: "white", strokeWidth: "1.5" }), _jsx("path", { d: "M8.99951 35.998L24.9995 0.998048", stroke: "white" })] }) })), _jsx(Card.Content, { className: "jp-components__decorative-card__content", children: _jsxs(Stack, { className: "jp-components__decorative-card__lines", direction: "column", gap: "lg", children: [_jsx("div", { className: "jp-components__decorative-card__line" }), _jsx("div", { className: "jp-components__decorative-card__line" }), _jsx("div", { className: "jp-components__decorative-card__line jp-components__decorative-card__line--short" })] }) })] }));
}
export default DecorativeCard;
