import { BasicUser } from './BasicUser';

export interface Registered {
    userId: string;
    username: string;
}

export interface CompletedSoloStreak {
    userId: string;
    username: string;
    soloStreakId: string;
    soloStreakName: string;
    currentStreakNumberOfDaysInARow: number;
    totalTimesTracked: number;
    createdAt: string;
}

export interface CompletedChallengeStreak {
    userId: string;
    username: string;
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    currentStreakNumberOfDaysInARow: number;
    totalTimesTracked: number;
    createdAt: string;
}

export interface CompletedTeamMemberStreak {
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

export interface CreatedSoloStreak {
    userId: string;
    username: string;
    soloStreakId: string;
    soloStreakName: string;
}

export interface CreatedTeamStreak {
    userId: string;
    username: string;
    teamStreakId: string;
    teamStreakName: string;
    members: BasicUser[];
}

export interface JoinedChallenge {
    userId: string;
    username: string;
    challengeId: string;
    challengeName: string;
    numberOfMembersInChallenge: number;
}

export interface FollowedUser {
    userId: string;
    username: string;
    userFollowedId: string;
    userFollowedUsername: string;
}

export interface SubscribedToAnnualPlan {
    userId: string;
    username: string;
}

export interface SubscribedToMonthlyPlan {
    userId: string;
    username: string;
}
