import { jsx as _jsx } from "react/jsx-runtime";
import './style.scss';
import UnstyledJetpackFooter from './jetpack-footer.js';
// A pure re-export would let bundlers that honour `sideEffects` drop the style import above.
const JetpackFooter = props => _jsx(UnstyledJetpackFooter, { ...props });
export default JetpackFooter;
