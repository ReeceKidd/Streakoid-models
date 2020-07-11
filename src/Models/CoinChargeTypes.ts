import { CoinCharges } from '../Types/CoinCharges';

export type CoinChargeTypes =
    | SoloStreakCompleteCharge
    | ChallengeStreakCompleteCharge
    | TeamMemberStreakCompleteCharge
    | TeamStreakCompleteCharge;

export interface SoloStreakCompleteCharge {
    coinChargeType: CoinCharges.soloStreakIncomplete;
    soloStreakId: string;
}

export interface ChallengeStreakCompleteCharge {
    coinChargeType: CoinCharges.challengeStreakIncomplete;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
}

export interface TeamMemberStreakCompleteCharge {
    coinChargeType: CoinCharges.teamMemberStreakIncomplete;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
}

export interface TeamStreakCompleteCharge {
    coinChargeType: CoinCharges.teamStreakIncomplete;
    teamStreakId: string;
    teamStreakName: string;
}

export interface RecoverSoloStreakCharge {
    coinChargeType: CoinCharges.recoverSoloStreak;
    soloStreakId: string;
}

export interface RecoverChallengeStreakCharge {
    coinChargeType: CoinCharges.recoverChallengeStreak;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
}
