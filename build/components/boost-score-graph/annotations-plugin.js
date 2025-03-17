import uPlot from 'uplot';
import './style-annotation.scss';
/**
 * Custom tooltips plugin for uPlot.
 *
 * @param annotations - The periods to display in the tooltip.
 *
 * @return The plugin object.
 */
export function annotationsPlugin(annotations) {
    let containerEl, annotationsContainer;
    /**
     * Initialize the plugin
     *
     * @param {uPlot} u - The uPlot instance.
     */
    function init(u) {
        containerEl = u.under;
        annotationsContainer = document.createElement('div');
        annotationsContainer.classList.add('jb-graph-annotations');
        const annotationEl = document.createElement('div');
        annotationEl.classList.add('jb-graph-annotations__annotation');
        annotations.forEach(annotation => {
            const lineEl = document.createElement('div');
            lineEl.classList.add('jb-graph-annotations__line');
            lineEl.addEventListener('mouseenter', () => {
                annotationEl.innerHTML = annotation.text;
                annotationEl.style.display = 'block';
                annotationEl.style.left = u.valToPos(annotation.timestamp / 1000, 'x') + 'px';
            });
            annotation.line = lineEl;
            annotationsContainer.appendChild(lineEl);
        });
        annotationEl.addEventListener('mouseleave', () => {
            annotationEl.style.display = 'none';
        });
        containerEl.appendChild(annotationsContainer);
        u.over.appendChild(annotationEl);
    }
    /**
     * Called when the chart is resized.
     * @param {uPlot} u - The uPlot instance.
     */
    function setSize(u) {
        annotations.forEach(annotation => {
            const annotationEl = annotation.line;
            uPlot.assign(annotationEl.style, {
                left: u.valToPos(annotation.timestamp / 1000, 'x') + 'px',
            });
        });
    }
    return {
        hooks: {
            init,
            setSize,
        },
    };
}
