import StreakStatus from '../Types/StreakStatus';
import { CurrentStreak } from './CurrentStreak';
import { PastStreak } from './PastStreak';
import { PopulatedTeamMember } from './PopulatedTeamMember';
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
    timezone: string;
    creator: {
        _id: string;
        username: string;
    };
    createdAt: string;
    updatedAt: string;
    streakDescription?: string;
    numberOfMinutes?: number;
}
//# sourceMappingURL=PopulatedTeamStreak.d.ts.map
