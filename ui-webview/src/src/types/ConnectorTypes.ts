﻿import {type NamedAppType} from "./CoreTypes.ts";

export interface ConnectorAccount {
    namedApp: NamedAppType;
    qualifiedAppName: string;

    inAppIdentifier: string;
    inAppDisplayName: string;
}

export const ConnectorType =
{
    Offline: 'Offline',
    ResoniteAPI: 'ResoniteAPI',
    VRChatAPI: 'VRChatAPI',
} as const;

export type ConnectorTypeType = typeof ConnectorType[keyof typeof ConnectorType];

export const RefreshMode =
{
    ManualUpdatesOnly: 'ManualUpdatesOnly',
    ContinuousLightUpdates: 'ContinuousLightUpdates',
    ContinuousFullUpdates: 'ContinuousFullUpdates',
} as const;

export type RefreshModeType = typeof RefreshMode[keyof typeof RefreshMode];

export const LiveMode =
{
    NoLiveFunction: 'NoLiveFunction',
    OnlyInGameStatus: 'OnlyInGameStatus',
    FullStatus: 'FullStatus',
} as const;

export type LiveModeType = typeof LiveMode[keyof typeof LiveMode];
