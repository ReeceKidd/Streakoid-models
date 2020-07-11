import { CoinCredits } from '../Types/CoinCredits';

export type CoinCreditTypes =
    | SoloStreakCompleteCredit
    | ChallengeStreakCompleteCredit
    | TeamMemberStreakCompleteCredit
    | TeamStreakCompleteCredit;

export interface SoloStreakCompleteCredit {
    coinCreditType: CoinCredits.soloStreakComplete;
    soloStreakId: string;
}

export interface ChallengeStreakCompleteCredit {
    coinCreditType: CoinCredits.challengeStreakComplete;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
}

export interface TeamMemberStreakCompleteCredit {
    coinCreditType: CoinCredits.teamMemberStreakComplete;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
}

export interface TeamStreakCompleteCredit {
    coinCreditType: CoinCredits.teamStreakComplete;
    teamStreakId: string;
    teamStreakName: string;
}
