import StreakTypes from '../Types/StreakTypes';

export interface LongestEverChallengeStreak {
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    startDate: string;
    numberOfDays: number;
    streakType: StreakTypes.challenge;
    endDate?: string;
}
