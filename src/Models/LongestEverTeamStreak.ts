import { TeamMember } from './TeamMember';
import StreakTypes from '../Types/StreakTypes';

export interface LongestEverTeamStreak {
    teamStreakId: string;
    teamStreakName: string;
    members: TeamMember[];
    startDate: string;
    numberOfDays: number;
    streakType: StreakTypes.team;
    endDate?: string;
}
