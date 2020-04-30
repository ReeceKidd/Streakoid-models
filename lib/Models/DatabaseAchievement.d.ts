import AchievementTypes from '../Types/AchievementTypes';
export declare type DatabaseAchievementType = OneHundredDaySoloStreakDatabaseAchievement;
export interface DatabaseAchievement {
    _id: string;
    createdAt: string;
    updatedAt: string;
}
export interface OneHundredDaySoloStreakDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.oneHundredDaySoloStreak;
    name: string;
    description: string;
}
//# sourceMappingURL=DatabaseAchievement.d.ts.map
