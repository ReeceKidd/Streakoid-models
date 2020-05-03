export interface Registered {
    userId: string;
    username: string;
}

export interface CompletedSoloStreak {
    soloStreakId: string;
    soloStreakName: string;
    currentStreakNumberOfDaysInARow: number;
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
}

export interface CreatedSoloStreak {
    soloStreakId: string;
    soloStreakName: string;
}

export interface CreatedTeamStreak {
    teamStreakId: string;
    teamStreakName: string;
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
