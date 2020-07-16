import StreakStatus from '../Types/StreakStatus';
import { CurrentStreak } from './CurrentStreak';
import { PastStreak } from './PastStreak';
import { LongestSoloStreak } from './LongestSoloStreak';

export interface SoloStreak {
    _id: string;
    userId: string;
    streakName: string;
    status: StreakStatus;
    completedToday: boolean;
    active: boolean;
    currentStreak: CurrentStreak;
    pastStreaks: Array<PastStreak>;
    timezone: string;
    totalTimesTracked: number;
    longestSoloStreak: LongestSoloStreak;
    updatedAt: string;
    createdAt: string;
    userDefinedIndex?: number;
    streakDescription?: string;
    numberOfMinutes?: number;
}
