import { TeamMember } from './TeamMember';

export interface LongestTeamStreak {
    teamStreakId: string;
    teamStreakName: string;
    members: TeamMember[];
    startDate: Date;
    numberOfDays: number;
    endDate?: Date;
}
