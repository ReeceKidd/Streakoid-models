import { OidXpSourcesTypes } from '../Types/OidXpSourcesTypes';

export type OidXpSources =
    | SoloStreakCompleteOidXpSource
    | ChallengeStreakCompleteOidXpSource
    | TeamMemberStreakCompleteOidXpSource
    | TeamStreakCompleteOidXpSource;

export interface SoloStreakCompleteOidXpSource {
    oidXpSourceType: OidXpSourcesTypes.soloStreakComplete;
    soloStreakId: string;
}

export interface ChallengeStreakCompleteOidXpSource {
    oidXpSourceType: OidXpSourcesTypes.challengeStreakComplete;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
}

export interface TeamMemberStreakCompleteOidXpSource {
    oidXpSourceType: OidXpSourcesTypes.teamMemberStreakComplete;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
}

export interface TeamStreakCompleteOidXpSource {
    oidXpSources: OidXpSourcesTypes.teamStreakComplete;
    teamStreakId: string;
    teamStreakName: string;
}
