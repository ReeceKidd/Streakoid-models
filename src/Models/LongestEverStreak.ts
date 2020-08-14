import { LongestEverSoloStreak } from './LongestEverSoloStreak';
import { LongestEverChallengeStreak } from './LongestEverChallengeStreak';
import { LongestEverTeamMemberStreak } from './LongestEverTeamMemberStreak';
import { LongestEverTeamStreak } from './LongestEverTeamStreak';
import StreakTypes from '../Types/StreakTypes';

export type LongestEverStreak =
    | LongestEverSoloStreak
    | LongestEverChallengeStreak
    | LongestEverTeamMemberStreak
    | LongestEverTeamStreak
    | {
          numberOfDays: number;
          streakType: StreakTypes.unknown;
      };
