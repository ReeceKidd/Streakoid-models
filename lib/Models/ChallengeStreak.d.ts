import CurrentStreak from './CurrentStreak';
import PastStreak from './PastStreak';
import StreakStatus from '../Types/StreakStatus';
interface ChallengeStreak {
    _id: string;
    challengeId: string;
    userId: string;
    status: StreakStatus;
    completedToday: boolean;
    active: boolean;
    currentStreak: CurrentStreak;
    pastStreaks: Array<PastStreak>;
    timezone: string;
    updatedAt: string;
    createdAt: string;
}
export default ChallengeStreak;
//# sourceMappingURL=ChallengeStreak.d.ts.map
