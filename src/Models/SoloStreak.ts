import CurrentStreak from "./CurrentStreak";
import PastStreak from "./PastStreak";
import StreakStatus from "../Types/StreakStatus";

interface SoloStreak {
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

export default SoloStreak;
