import type { FC } from 'react';
declare global {
    interface Window {
        zE: Function;
    }
}
interface ZendeskChatProps {
    jwt_token: string;
}
export type ZendeskChatType = FC<ZendeskChatProps>;
export {};
