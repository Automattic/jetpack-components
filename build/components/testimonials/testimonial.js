import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import './style.scss';
const Testimonial = ({ quote, author, profession, img, hidden }) => {
    return (_jsxs("div", { className: clsx('testimonial', hidden ? 'hidden' : 'show'), children: [
            _jsx("img", { className: "testimonial__author-img", src: img, alt: author }), _jsxs("div", { className: "testimonial__content", children: [
                    _jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "testimonial__quote-icon", children: [
                            _jsx("path", { d: "M14.6667 24L6.66675 24L6.66675 16L14.6667 16L14.6667 24Z", fill: "#1E1E1E" }), _jsx("path", { d: "M26.6667 24L18.6667 24L18.6667 16L26.6667 16L26.6667 24Z", fill: "#1E1E1E" }), _jsx("path", { d: "M6.66675 24.0001C6.66675 19.5573 6.66675 14.9337 6.66675 10.6686C6.66675 6.40254 10.0001 6.67016 12.0001 6.66987", stroke: "#1E1E1E", strokeWidth: "1.5" }), _jsx("path", { d: "M18.6668 24.0001C18.6667 19.5573 18.6667 14.9337 18.6667 10.6686C18.6667 6.40254 22.0001 6.67016 24.0001 6.66987", stroke: "#1E1E1E", strokeWidth: "1.5" })
                        ] }), _jsxs("div", { className: "testimonial__text-block", children: [
                            _jsxs("blockquote", { className: "testimonial__quote", children: ["\u201C", quote, "\u201D"] }), _jsxs("figcaption", { children: [
                                    _jsx("span", { className: "testimonial__author", children: author }), _jsx("span", { className: "testimonial__profession", children: profession })
                                ] })
                        ] })
                ] })
        ] }, author));
};
export { Testimonial };
