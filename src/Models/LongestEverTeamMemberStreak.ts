import StreakTypes from '../Types/StreakTypes';

export interface LongestEverTeamMemberStreak {
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
    startDate: string;
    numberOfDays: number;
    streakType: StreakTypes.teamMember;
    endDate?: string;
}
