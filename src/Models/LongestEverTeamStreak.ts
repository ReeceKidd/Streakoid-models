import { TeamMember } from './TeamMember';
import StreakTypes from '../Types/StreakTypes';

export interface LongestEverTeamStreak {
    teamStreakId: string;
    teamStreakName: string;
    members: TeamMember[];
    startDate: Date;
    numberOfDays: number;
    streakType: StreakTypes.team;
    endDate?: Date;
}
