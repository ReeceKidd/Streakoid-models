import StreakTypes from '../Types/StreakTypes';

export interface LongestEverTeamMemberStreak {
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
    startDate: Date;
    numberOfDays: number;
    streakType: StreakTypes.teamMember;
    endDate?: Date;
}
