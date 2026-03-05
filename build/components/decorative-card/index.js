import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style.scss';
/**
 * A decorative card used in the disconnection flow.
 *
 * @param {DecorativeCardProps} props - The properties.
 * @return {ReactNode} - The DecorativeCard component.
 */
const DecorativeCard = ({ format = 'horizontal', icon, imageUrl }) => {
    return (_jsxs("div", { className: 'jp-components__decorative-card ' +
            (format ? 'jp-components__decorative-card--' + format : ''), children: [
            _jsx("div", { className: "jp-components__decorative-card__image", style: { backgroundImage: imageUrl ? `url( ${imageUrl} )` : '' } }), _jsx("div", { className: "jp-components__decorative-card__content", children: _jsx("div", { className: "jp-components__decorative-card__lines" }) }), icon ? (_jsx("div", { className: "jp-components__decorative-card__icon-container", children: _jsx("span", { className: 'jp-components__decorative-card__icon jp-components__decorative-card__icon--' + icon }) })) : null] }));
};
export default DecorativeCard;
