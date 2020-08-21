import StreakStatus from '../Types/StreakStatus';
import { CurrentStreak } from './CurrentStreak';
import { PastStreak } from './PastStreak';
import { TeamMember } from './TeamMember';
import { LongestEverTeamStreak } from './LongestEverTeamStreak';
import TeamVisibilityTypes from '../Types/TeamVisibilityTypes';

export interface TeamStreak {
    _id: string;
    creatorId: string;
    streakName: string;
    completedToday: boolean;
    active: boolean;
    status: StreakStatus;
    currentStreak: CurrentStreak;
    pastStreaks: PastStreak[];
    members: TeamMember[];
    totalTimesTracked: number;
    longestTeamStreak: LongestEverTeamStreak;
    timezone: string;
    createdAt: string;
    updatedAt: string;
    inviteKey: string;
    visibility: TeamVisibilityTypes;
    streakDescription?: string;
    numberOfMinutes?: number;
}
