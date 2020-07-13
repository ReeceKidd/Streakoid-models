import { CoinCredits } from '../Types/CoinCredits';

export type CoinCreditTypes =
    | CompleteSoloStreakCredit
    | CompleteChallengeStreakCredit
    | CompleteTeamMemberStreakCredit
    | CompleteTeamStreakCredit;

export interface CompleteSoloStreakCredit {
    coinCreditType: CoinCredits.completeSoloStreak;
    soloStreakId: string;
}

export interface CompleteChallengeStreakCredit {
    coinCreditType: CoinCredits.completeChallengeStreak;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
}

export interface CompleteTeamMemberStreakCredit {
    coinCreditType: CoinCredits.completeTeamMemberStreak;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
}

export interface CompleteTeamStreakCredit {
    coinCreditType: CoinCredits.completeTeamStreak;
    teamStreakId: string;
    teamStreakName: string;
}
