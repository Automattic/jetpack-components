import { CutBaseProps } from './types.ts';
import type { FC } from 'react';
/**
 * ContextualUpgradeTrigger component.
 *
 * @deprecated Use `Notice` from `@wordpress/ui` instead. Compose with `Notice.Root` (`intent="info"`), `Notice.Description` for the body, and `Notice.Actions` + `Notice.ActionLink` / `Notice.ActionButton` for the CTA. See https://github.com/Automattic/jetpack/issues/48160 for migration guidance.
 *
 * @param      props              - The component properties.
 * @param      props.description  - The body copy describing the upgrade context.
 * @param      props.cta          - The CTA label.
 * @param      props.onClick      - Click handler when rendered as a button.
 * @param      props.href         - When provided, renders as an anchor instead of a button.
 * @param      props.openInNewTab - Whether to open the link in a new tab.
 * @param      props.className    - Optional class for the root element.
 * @param      props.tooltipText  - Optional tooltip body shown next to the description.
 * @return The rendered upgrade trigger.
 */
declare const ContextualUpgradeTrigger: FC<CutBaseProps>;
export default ContextualUpgradeTrigger;
