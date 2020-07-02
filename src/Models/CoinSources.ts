import { CoinSourcesTypes } from '../Types/CoinSourcesTypes';

export type CoinSources = SoloStreakComplete | ChallengeStreakComplete | TeamMemberStreakComplete | TeamStreakComplete;

export interface SoloStreakComplete {
    coinSourceType: CoinSourcesTypes.soloStreakComplete;
    soloStreakId: string;
}

export interface ChallengeStreakComplete {
    coinSourceType: CoinSourcesTypes.challengeStreakComplete;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
}

export interface TeamMemberStreakComplete {
    coinSourceType: CoinSourcesTypes.teamMemberStreakComplete;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
}

export interface TeamStreakComplete {
    CoinSources: CoinSourcesTypes.teamStreakComplete;
    teamStreakId: string;
    teamStreakName: string;
}
