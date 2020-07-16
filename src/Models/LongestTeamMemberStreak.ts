export interface LongestTeamMemberStreak {
    teamMemberStreakId: string;
    teamStreakId: string;
    teamStreakName: string;
    startDate: Date;
    numberOfDays: number;
    endDate?: Date;
}
