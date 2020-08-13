import { LongestEverSoloStreak } from './LongestEverSoloStreak';
import { LongestEverChallengeStreak } from './LongestEverChallengeStreak';
import { LongestEverTeamMemberStreak } from './LongestEverTeamMemberStreak';
import { LongestEverTeamStreak } from './LongestEverTeamStreak';

export type LongestEverStreak =
    | LongestEverSoloStreak
    | LongestEverChallengeStreak
    | LongestEverTeamMemberStreak
    | LongestEverTeamStreak
    | {
          numberOfDays: number;
      };
