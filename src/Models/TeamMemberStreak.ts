import { LongestEverTeamMemberStreak } from './LongestEverTeamMemberStreak';
import StreakStatus from '../Types/StreakStatus';
import TeamVisibilityTypes from '../Types/TeamVisibilityTypes';

export interface TeamMemberStreak {
    _id: string;
    userId: string;
    teamStreakId: string;
    streakName: string;
    status: StreakStatus;
    completedToday: boolean;
    active: boolean;
    currentStreak: {
        startDate: string;
        numberOfDaysInARow: number;
        endDate: string;
    };
    pastStreaks: Array<{
        endDate: string;
        startDate: string;
        numberOfDaysInARow: number;
    }>;
    timezone: string;
    totalTimesTracked: number;
    longestTeamMemberStreak: LongestEverTeamMemberStreak;
    visibility: TeamVisibilityTypes;
    username: string;
    userProfileImage: string;
    createdAt: string;
    updatedAt: string;
}
