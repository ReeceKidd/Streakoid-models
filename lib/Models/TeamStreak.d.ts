import TeamMember from './TeamMember';
import StreakStatus from '../Types/StreakStatus';
import CurrentStreak from './CurrentStreak';
import PastStreak from './PastStreak';
interface TeamStreak {
    _id: string;
    creatorId: string;
    streakName: string;
    completedToday: boolean;
    active: boolean;
    status: StreakStatus;
    currentStreak: CurrentStreak;
    pastStreaks: PastStreak[];
    members: TeamMember[];
    timezone: string;
    createdAt: string;
    updatedAt: string;
    streakDescription?: string;
    numberOfMinutes?: number;
}
export default TeamStreak;
//# sourceMappingURL=TeamStreak.d.ts.map