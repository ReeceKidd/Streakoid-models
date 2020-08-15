import StreakStatus from '../Types/StreakStatus';
import { CurrentStreak } from './CurrentStreak';
import { PastStreak } from './PastStreak';
import { TeamMember } from './TeamMember';
import { LongestEverTeamStreak } from './LongestEverTeamStreak';
import VisibilityTypes from '../Types/VisibilityTypes';

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
    visibility: VisibilityTypes;
    streakDescription?: string;
    numberOfMinutes?: number;
}
