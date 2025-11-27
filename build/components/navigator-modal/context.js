import { createContext } from '@wordpress/element';
const initialContextValue = {
    onClose: () => { },
};
export const NavigatorModalContext = createContext(initialContextValue);
NavigatorModalContext.displayName = 'NavigatorModalContext';
