import AchievementTypes from '../Types/AchievementTypes';

export type AchievementType = OneHundredDaySoloStreakAchievement | OneHundredDayChallengeStreakAchievement;

export interface OneHundredDaySoloStreakAchievement {
    achievementType: AchievementTypes.oneHundredDaySoloStreak;
    name: string;
    description: string;
}

export interface OneHundredDayChallengeStreakAchievement {
    achievementType: AchievementTypes.oneHundredDayChallengeStreak;
    name: string;
    description: string;
}
