import StreakStatus from '../Types/StreakStatus';
import { CurrentStreak } from './CurrentStreak';
import { PastStreak } from './PastStreak';
import { TeamMember } from './TeamMember';
import { LongestTeamStreak } from './LongestEverTeamStreak';

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
    longestTeamStreak: LongestTeamStreak;
    timezone: string;
    createdAt: string;
    updatedAt: string;
    inviteKey: string;
    streakDescription?: string;
    numberOfMinutes?: number;
}
