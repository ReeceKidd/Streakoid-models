import { LongestTeamMemberStreak } from './LongestTeamMemberStreak';

export interface TeamMemberStreak {
    _id: string;
    userId: string;
    teamStreakId: string;
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
    longestTeamMemberStreak: LongestTeamMemberStreak;
    createdAt: string;
    updatedAt: string;
}
