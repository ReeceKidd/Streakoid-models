import { LongestCurrentSoloStreak } from './LongestCurrentSoloStreak';
import { LongestCurrentChallengeStreak } from './LongestCurrentChallengeStreak';
import { LongestCurrentTeamMemberStreak } from './LongestCurrentTeamMemberStreak';
import StreakTypes from '../Types/StreakTypes';

export type LongestCurrentStreak =
    | LongestCurrentSoloStreak
    | LongestCurrentChallengeStreak
    | LongestCurrentTeamMemberStreak
    | {
          numberOfDays: number;
          streakType: StreakTypes.unknown;
      };
