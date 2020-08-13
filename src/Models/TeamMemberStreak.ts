import { LongestEverTeamMemberStreak } from './LongestEverTeamMemberStreak';
import StreakStatus from '../Types/StreakStatus';

export interface TeamMemberStreak {
    _id: string;
    userId: string;
    teamStreakId: string;
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
    createdAt: string;
    updatedAt: string;
}
