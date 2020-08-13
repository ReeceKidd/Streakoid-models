import StreakTypes from '../Types/StreakTypes';

export interface LongestCurrentChallengeStreak {
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    startDate: string;
    numberOfDays: number;
    streakType: StreakTypes.challenge;
}
