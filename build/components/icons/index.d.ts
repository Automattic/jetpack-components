import { SocialLogo } from 'social-logos';
import { BaseIconProps } from './types.ts';
import type { ComponentProps, FC } from 'react';
export declare const AntiSpamIcon: FC<BaseIconProps>;
export declare const BackupIcon: FC<BaseIconProps>;
export declare const BoostIcon: FC<BaseIconProps>;
export declare const CrmIcon: FC<BaseIconProps>;
export declare const ExtrasIcon: FC<BaseIconProps>;
export declare const ProtectIcon: FC<BaseIconProps>;
export declare const ScanIcon: FC<BaseIconProps>;
export declare const SearchIcon: FC<BaseIconProps>;
export declare const SocialIcon: FC<BaseIconProps>;
export declare const VideopressIcon: FC<BaseIconProps>;
export declare const StarIcon: FC<BaseIconProps>;
export declare const CheckmarkIcon: FC<BaseIconProps>;
export declare const ClipboardIcon: FC<BaseIconProps>;
export declare const JetpackIcon: FC<BaseIconProps>;
export declare const ShareIcon: FC<BaseIconProps>;
export declare const AiIcon: FC<BaseIconProps>;
export declare const StatsIcon: FC<BaseIconProps>;
declare const jetpackIcons: {
    'anti-spam': FC<BaseIconProps>;
    backup: FC<BaseIconProps>;
    boost: FC<BaseIconProps>;
    crm: FC<BaseIconProps>;
    extras: FC<BaseIconProps>;
    protect: FC<BaseIconProps>;
    scan: FC<BaseIconProps>;
    search: FC<BaseIconProps>;
    social: FC<BaseIconProps>;
    star: FC<BaseIconProps>;
    videopress: FC<BaseIconProps>;
    jetpack: FC<BaseIconProps>;
    share: FC<BaseIconProps>;
    ai: FC<BaseIconProps>;
    stats: FC<BaseIconProps>;
};
declare const iconsMap: {
    'anti-spam': FC<BaseIconProps>;
    backup: FC<BaseIconProps>;
    boost: FC<BaseIconProps>;
    crm: FC<BaseIconProps>;
    extras: FC<BaseIconProps>;
    protect: FC<BaseIconProps>;
    scan: FC<BaseIconProps>;
    search: FC<BaseIconProps>;
    social: FC<BaseIconProps>;
    star: FC<BaseIconProps>;
    videopress: FC<BaseIconProps>;
    jetpack: FC<BaseIconProps>;
    share: FC<BaseIconProps>;
    ai: FC<BaseIconProps>;
    stats: FC<BaseIconProps>;
};
export type JetpackIconSlug = keyof typeof jetpackIcons;
export type IconsMap = typeof iconsMap;
export type IconSlug = keyof IconsMap;
/**
 * Return icon component by slug.
 *
 * @param {string} slug - Icon slug.
 * @return {ComponentType<BaseIconProps>}   Icon component.
 */
export declare function getIconBySlug<Slug extends IconSlug>(slug: Slug): IconsMap[Slug];
export declare const SocialServiceIcon: FC<{
    serviceName: ComponentProps<typeof SocialLogo>['icon'];
    className?: string;
    iconSize?: number;
}>;
export {};
