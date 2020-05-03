import AnalyticEventTypes from '../Types/AnalyticEventsTypes';
import { BasicUser } from './BasicUser';

export interface AnalyticsRegister {
    analyticsEventType: AnalyticEventTypes.register;
    userId: string;
    username: string;
    createdAt: string;
}

export interface AnalyticsCompleteSoloStreak {
    analyticsEventType: AnalyticEventTypes.completeSoloStreak;
    userId: string;
    username: string;
    soloStreakId: string;
    soloStreakName: string;
    currentStreakNumberOfDaysInARow: number;
    totalTimesTracked: number;
    createdAt: string;
}

export interface AnalyticsIncompleteSoloStreak {
    analyticsEventType: AnalyticEventTypes.incompleteSoloStreak;
    userId: string;
    username: string;
    soloStreakId: string;
    soloStreakName: string;
    currentStreakNumberOfDaysInARow: number;
    totalTimesTracked: number;
    createdAt: string;
}

export interface AnalyticsCompleteChallengeStreak {
    analyticsEventType: AnalyticEventTypes.completeChallengeStreak;
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
    analyticsEventType: AnalyticEventTypes.incompleteChallengeStreak;
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
    analyticsEventType: AnalyticEventTypes.completeTeamMemberStreak;
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
    analyticsEventType: AnalyticEventTypes.incompleteTeamMemberStreak;
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
    analyticsEventType: AnalyticEventTypes.createSoloStreak;
    userId: string;
    username: string;
    soloStreakId: string;
    soloStreakName: string;
}

export interface CreateTeamStreak {
    analyticsEventType: AnalyticEventTypes.createTeamStreak;
    userId: string;
    username: string;
    teamStreakId: string;
    teamStreakName: string;
    members: BasicUser[];
}

export interface JoinChallenge {
    analyticsEventType: AnalyticEventTypes.joinChallenge;
    userId: string;
    username: string;
    challengeId: string;
    challengeName: string;
    numberOfMembersInChallenge: number;
}

export interface FollowUser {
    analyticsEventType: AnalyticEventTypes.followUser;
    userId: string;
    username: string;
    userFollowedId: string;
    userFollowedUsername: string;
}
