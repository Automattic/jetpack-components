import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from '@wordpress/element';
import Gridicon from '../gridicon/index.js';
import { Testimonial } from './testimonial.js';
const Testimonials = ({ testimonials }) => {
    const [currentTestimonialIndex, setcurrentTestimonialIndex] = useState(0);
    const incrementTestimonial = useCallback(() => {
        const newIndex = currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1;
        setcurrentTestimonialIndex(newIndex);
    }, [currentTestimonialIndex, testimonials]);
    const decrementTestimonial = useCallback(() => {
        const newIndex = currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1;
        setcurrentTestimonialIndex(newIndex);
    }, [currentTestimonialIndex, testimonials]);
    const shouldShowArrows = testimonials.length > 1;
    return (_jsxs("div", { className: "testimonials", children: [shouldShowArrows && (_jsx("button", { "data-testid": "left-arrow", className: "testimonials__left-arrow", onClick: decrementTestimonial, children: _jsx(Gridicon, { icon: "chevron-left", size: 48 }) })), testimonials.map((testimonial, index) => (_jsx(Testimonial, { ...testimonial, hidden: currentTestimonialIndex !== index }, index))), shouldShowArrows && (_jsx("button", { "data-testid": "right-arrow", className: "testimonials__right-arrow", onClick: incrementTestimonial, children: _jsx(Gridicon, { icon: "chevron-right", size: 48 }) }))] }));
};
export default Testimonials;
