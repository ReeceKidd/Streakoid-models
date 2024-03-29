import { CoinCharges } from '../Types/CoinCharges';

export type CoinChargeTypes =
    | IncompleteSoloStreakCharge
    | IncompleteChallengeStreakCharge
    | IncompleteTeamMemberStreakCharge
    | IncompleteTeamStreakCharge
    | RecoverSoloStreakCharge
    | RecoverChallengeStreakCharge
    | RecoverTeamMemberStreakCharge;

export interface IncompleteSoloStreakCharge {
    coinChargeType: CoinCharges.incompleteSoloStreak;
    soloStreakId: string;
}

export interface IncompleteChallengeStreakCharge {
    coinChargeType: CoinCharges.incompleteChallengeStreak;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
}

export interface IncompleteTeamMemberStreakCharge {
    coinChargeType: CoinCharges.incompleteTeamMemberStreak;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
}

export interface IncompleteTeamStreakCharge {
    coinChargeType: CoinCharges.incompleteTeamStreak;
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

export interface RecoverTeamMemberStreakCharge {
    coinChargeType: CoinCharges.recoverTeamMemberStreak;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
}
