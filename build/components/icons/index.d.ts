import { SocialLogo } from 'social-logos';
import { BaseIconProps } from './types.ts';
import type React from 'react';
export declare const AntiSpamIcon: React.FC<BaseIconProps>;
export declare const BackupIcon: React.FC<BaseIconProps>;
export declare const BoostIcon: React.FC<BaseIconProps>;
export declare const CrmIcon: React.FC<BaseIconProps>;
export declare const ExtrasIcon: React.FC<BaseIconProps>;
export declare const ProtectIcon: React.FC<BaseIconProps>;
export declare const ScanIcon: React.FC<BaseIconProps>;
export declare const SearchIcon: React.FC<BaseIconProps>;
export declare const SocialIcon: React.FC<BaseIconProps>;
export declare const VideopressIcon: React.FC<BaseIconProps>;
export declare const StarIcon: React.FC<BaseIconProps>;
export declare const CheckmarkIcon: React.FC<BaseIconProps>;
export declare const ClipboardIcon: React.FC<BaseIconProps>;
export declare const JetpackIcon: React.FC<BaseIconProps>;
export declare const ShareIcon: React.FC<BaseIconProps>;
export declare const AiIcon: React.FC<BaseIconProps>;
export declare const StatsIcon: React.FC<BaseIconProps>;
declare const jetpackIcons: {
    'anti-spam': React.FC<BaseIconProps>;
    backup: React.FC<BaseIconProps>;
    boost: React.FC<BaseIconProps>;
    crm: React.FC<BaseIconProps>;
    extras: React.FC<BaseIconProps>;
    protect: React.FC<BaseIconProps>;
    scan: React.FC<BaseIconProps>;
    search: React.FC<BaseIconProps>;
    social: React.FC<BaseIconProps>;
    star: React.FC<BaseIconProps>;
    videopress: React.FC<BaseIconProps>;
    jetpack: React.FC<BaseIconProps>;
    share: React.FC<BaseIconProps>;
    ai: React.FC<BaseIconProps>;
    stats: React.FC<BaseIconProps>;
};
declare const iconsMap: {
    'anti-spam': React.FC<BaseIconProps>;
    backup: React.FC<BaseIconProps>;
    boost: React.FC<BaseIconProps>;
    crm: React.FC<BaseIconProps>;
    extras: React.FC<BaseIconProps>;
    protect: React.FC<BaseIconProps>;
    scan: React.FC<BaseIconProps>;
    search: React.FC<BaseIconProps>;
    social: React.FC<BaseIconProps>;
    star: React.FC<BaseIconProps>;
    videopress: React.FC<BaseIconProps>;
    jetpack: React.FC<BaseIconProps>;
    share: React.FC<BaseIconProps>;
    ai: React.FC<BaseIconProps>;
    stats: React.FC<BaseIconProps>;
};
export type JetpackIconSlug = keyof typeof jetpackIcons;
export type IconsMap = typeof iconsMap;
export type IconSlug = keyof IconsMap;
/**
 * Return icon component by slug.
 *
 * @param {string} slug - Icon slug.
 * @return {React.ComponentType<BaseIconProps>}   Icon component.
 */
export declare function getIconBySlug<Slug extends IconSlug>(slug: Slug): IconsMap[Slug];
export declare const SocialServiceIcon: React.FC<{
    serviceName: React.ComponentProps<typeof SocialLogo>['icon'];
    className?: string;
    iconSize?: number;
}>;
export {};
