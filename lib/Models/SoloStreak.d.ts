import StreakStatus from '../Types/StreakStatus';
import { CurrentStreak } from './CurrentStreak';
import { PastStreak } from './PastStreak';
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
    updatedAt: string;
    createdAt: string;
    streakDescription?: string;
    numberOfMinutes?: number;
}
//# sourceMappingURL=SoloStreak.d.ts.map
