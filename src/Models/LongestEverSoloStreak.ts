import StreakTypes from '../Types/StreakTypes';

export interface LongestEverSoloStreak {
    soloStreakId: string;
    soloStreakName: string;
    startDate: Date;
    numberOfDays: number;
    streakType: StreakTypes.solo;
    endDate?: Date;
}
