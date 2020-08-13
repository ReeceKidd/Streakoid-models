import StreakTypes from '../Types/StreakTypes';

export interface LongestCurrentSoloStreak {
    soloStreakId: string;
    soloStreakName: string;
    startDate: string;
    numberOfDays: number;
    streakType: StreakTypes.solo;
}
