import StreakTypes from '../Types/StreakTypes';

export interface LongestCurrentTeamMemberStreak {
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
    startDate: Date;
    numberOfDays: number;
    streakType: StreakTypes.teamMember;
}
