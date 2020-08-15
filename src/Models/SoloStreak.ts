import StreakStatus from '../Types/StreakStatus';
import { CurrentStreak } from './CurrentStreak';
import { PastStreak } from './PastStreak';
import { LongestEverSoloStreak } from './LongestEverSoloStreak';
import VisibilityTypes from '../Types/VisibilityTypes';

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
    longestSoloStreak: LongestEverSoloStreak;
    updatedAt: string;
    createdAt: string;
    visibility: VisibilityTypes;
    userDefinedIndex?: number;
    streakDescription?: string;
    numberOfMinutes?: number;
}
