import StreakTypes from '../Types/StreakTypes';

export interface LongestEverSoloStreak {
    soloStreakId: string;
    soloStreakName: string;
    startDate: string;
    numberOfDays: number;
    streakType: StreakTypes.solo;
    endDate?: string;
}
