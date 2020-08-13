import StreakTypes from '../Types/StreakTypes';

export interface LongestCurrentSoloStreak {
    soloStreakId: string;
    soloStreakName: string;
    startDate: Date;
    numberOfDays: number;
    streakType: StreakTypes.solo;
}
