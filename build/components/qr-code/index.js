import { jsx as _jsx } from "react/jsx-runtime";
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
/**
 * Renders a QR Code.
 *
 * @param {QRCodeProps} props - Component props
 * @return {React.ReactNode} - React component.
 */
const QRCode = ({ value = 'https://jetpack.com', size = 248, bgColor, fgColor, level, includeMargin, imageSettings, renderAs = 'canvas', }) => {
    const commonProps = {
        value,
        size,
        bgColor,
        fgColor,
        level,
        includeMargin,
        imageSettings,
    };
    return renderAs === 'svg' ? (_jsx(QRCodeSVG, { ...commonProps })) : (_jsx(QRCodeCanvas, { ...commonProps }));
};
export default QRCode;
