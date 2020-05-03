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
}

export interface CompletedChallengeStreak {
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    currentStreakNumberOfDaysInARow: number;
}

export interface CompletedTeamMemberStreak {
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
    members: BasicUser[];
    currentStreakNumberOfDaysInARow: number;
}

export interface CreatedSoloStreak {
    soloStreakId: string;
    soloStreakName: string;
    soloStreakDescription: string;
}

export interface CreatedTeamStreak {
    teamStreakId: string;
    teamStreakName: string;
    members: BasicUser[];
}

export interface JoinedChallenge {
    challengeId: string;
    challengeName: string;
    numberOfMembersInChallenge: number;
}

export interface FollowedUser {
    userFollowedId: string;
    userFollowedUsername: string;
}
