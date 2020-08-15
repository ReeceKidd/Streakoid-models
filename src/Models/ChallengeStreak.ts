import StreakStatus from '../Types/StreakStatus';
import { CurrentStreak } from './CurrentStreak';
import { PastStreak } from './PastStreak';
import { LongestEverChallengeStreak } from './LongestEverChallengeStreak';
import VisibilityTypes from '../Types/VisibilityTypes';

export interface ChallengeStreak {
    _id: string;
    challengeId: string;
    challengeName: string;
    userId: string;
    userProfileImage: string;
    status: StreakStatus;
    completedToday: boolean;
    active: boolean;
    currentStreak: CurrentStreak;
    pastStreaks: Array<PastStreak>;
    timezone: string;
    totalTimesTracked: number;
    longestChallengeStreak: LongestEverChallengeStreak;
    visibility: VisibilityTypes;
    updatedAt: string;
    createdAt: string;
    username: string;
    userDefinedIndex?: number;
}
