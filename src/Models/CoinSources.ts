import { CoinSourcesTypes } from '../Types/CoinSourcesTypes';

export type CoinSources =
    | SoloStreakCompleteCoinSource
    | ChallengeStreakCompleteCoinSource
    | TeamMemberStreakCompleteCoinSource
    | TeamStreakCompleteCoinSource;

export interface SoloStreakCompleteCoinSource {
    coinSourceType: CoinSourcesTypes.soloStreakComplete;
    soloStreakId: string;
}

export interface ChallengeStreakCompleteCoinSource {
    coinSourceType: CoinSourcesTypes.challengeStreakComplete;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
}

export interface TeamMemberStreakCompleteCoinSource {
    coinSourceType: CoinSourcesTypes.teamMemberStreakComplete;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
}

export interface TeamStreakCompleteCoinSource {
    CoinSources: CoinSourcesTypes.teamStreakComplete;
    teamStreakId: string;
    teamStreakName: string;
}
