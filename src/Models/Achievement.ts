import AchievementTypes from '../Types/AchievementTypes';

export type AchievementType = OneHundredDaySoloStreakAchievement;

export interface OneHundredDaySoloStreakAchievement {
    achievementType: AchievementTypes.oneHundredDaySoloStreak;
    name: string;
    description: string;
}
