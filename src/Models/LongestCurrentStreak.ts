import { LongestSoloStreak } from './LongestSoloStreak';
import { LongestChallengeStreak } from './LongestChallengeStreak';
import { LongestTeamMemberStreak } from './LongestTeamMemberStreak';

export type LongestCurrentStreak =
    | LongestSoloStreak
    | LongestChallengeStreak
    | LongestTeamMemberStreak
    | {
          numberOfDays: number;
      };
