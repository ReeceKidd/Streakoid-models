import { BasicUser } from './BasicUser';

export interface AnalyticsRegister {
    userId: string;
    username: string;
}

export interface AnalyticsCompleteSoloStreak {
    userId: string;
    username: string;
    soloStreakId: string;
    soloStreakName: string;
    currentStreakNumberOfDaysInARow: number;
    totalTimesTracked: number;
    createdAt: string;
}

export interface AnalyticsIncompleteSoloStreak {
    userId: string;
    username: string;
    soloStreakId: string;
    soloStreakName: string;
    currentStreakNumberOfDaysInARow: number;
    totalTimesTracked: number;
    createdAt: string;
}

export interface AnalyticsCompleteChallengeStreak {
    userId: string;
    username: string;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    currentStreakNumberOfDaysInARow: number;
    totalTimesTracked: number;
    createdAt: string;
}

export interface AnalyticsIncompleteChallengeStreak {
    userId: string;
    username: string;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    currentStreakNumberOfDaysInARow: number;
    totalTimesTracked: number;
    createdAt: string;
}

export interface AnalyticsCompleteTeamMemberStreak {
    userId: string;
    username: string;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
    members: BasicUser[];
    currentStreakNumberOfDaysInARow: number;
    totalTimesTracked: number;
    createdAt: string;
}

export interface AnalyticsIncompleteTeamMemberStreak {
    userId: string;
    username: string;
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
    members: BasicUser[];
    currentStreakNumberOfDaysInARow: number;
    totalTimesTracked: number;
    createdAt: string;
}

export interface CreateSoloStreak {
    userId: string;
    username: string;
    soloStreakId: string;
    soloStreakName: string;
}

export interface CreateTeamStreak {
    userId: string;
    username: string;
    teamStreakId: string;
    teamStreakName: string;
    members: BasicUser[];
}

export interface JoinChallenge {
    userId: string;
    username: string;
    challengeId: string;
    challengeName: string;
    numberOfMembersInChallenge: number;
}

export interface FollowUser {
    userId: string;
    username: string;
    userFollowedId: string;
    userFollowedUsername: string;
}
