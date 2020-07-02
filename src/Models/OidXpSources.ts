import { OidXpSourcesTypes } from '../Types/OidXpSourcesTypes';

export type OidXpSources = SoloStreakComplete | ChallengeStreakComplete | TeamMemberStreakComplete | TeamStreakComplete;

export interface SoloStreakComplete {
    OidXpSourceType: OidXpSourcesTypes.soloStreakComplete;
    soloStreakId: string;
}

export interface ChallengeStreakComplete {
    OidXpSourceType: OidXpSourcesTypes.challengeStreakComplete;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
}

export interface TeamMemberStreakComplete {
    OidXpSourceType: OidXpSourcesTypes.teamMemberStreakComplete;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
}

export interface TeamStreakComplete {
    OidXpSources: OidXpSourcesTypes.teamStreakComplete;
    teamStreakId: string;
    teamStreakName: string;
}
