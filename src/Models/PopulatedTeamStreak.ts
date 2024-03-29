import StreakStatus from '../Types/StreakStatus';
import { CurrentStreak } from './CurrentStreak';
import { PastStreak } from './PastStreak';
import { PopulatedTeamMember } from './PopulatedTeamMember';
import { LongestEverTeamStreak } from './LongestEverTeamStreak';
import TeamVisibilityTypes from '../Types/TeamVisibilityTypes';

export interface PopulatedTeamStreak {
    _id: string;
    creatorId: string;
    streakName: string;
    completedToday: boolean;
    active: boolean;
    status: StreakStatus;
    currentStreak: CurrentStreak;
    pastStreaks: Array<PastStreak>;
    members: PopulatedTeamMember[];
    totalTimesTracked: number;
    timezone: string;
    creator: {
        _id: string;
        username: string;
    };
    longestTeamStreak: LongestEverTeamStreak;
    visibility: TeamVisibilityTypes;
    createdAt: string;
    updatedAt: string;
    inviteKey?: string;
    streakDescription?: string;
    numberOfMinutes?: number;
}
