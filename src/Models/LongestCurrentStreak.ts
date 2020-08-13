import { LongestCurrentSoloStreak } from './LongestCurrentSoloStreak';
import { LongestCurrentChallengeStreak } from './LongestCurrentChallengeStreak';
import { LongestCurrentTeamMemberStreak } from './LongestCurrentTeamMemberStreak';

export type LongestCurrentStreak =
    | LongestCurrentSoloStreak
    | LongestCurrentChallengeStreak
    | LongestCurrentTeamMemberStreak
    | {
          numberOfDays: number;
      };
