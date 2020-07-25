import { LongestSoloStreak } from './LongestSoloStreak';
import { LongestChallengeStreak } from './LongestChallengeStreak';
import { LongestTeamMemberStreak } from './LongestTeamMemberStreak';
import { LongestTeamStreak } from './LongestTeamStreak';

export type LongestEverStreak =
    | LongestSoloStreak
    | LongestChallengeStreak
    | LongestTeamMemberStreak
    | LongestTeamStreak;
