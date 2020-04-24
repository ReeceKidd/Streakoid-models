import AchievmentTypes from '../Types/AchievementTypes';

export type DatabaseAchievementType = OneHundredDaySoloStreakDatabaseAchievement;

export interface DatabaseAchievement {
    _id: string;
    createdAt: string;
    updatedAt: string;
}

export interface OneHundredDaySoloStreakDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievmentTypes.oneHundredDaySoloStreak;
    name: string;
    description: string;
}
