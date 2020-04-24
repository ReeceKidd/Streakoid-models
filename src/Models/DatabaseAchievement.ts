import AchievmentTypes from '../Types/AchievementTypes';

type DatabaseAchievementType = OneHundredDaySoloStreakDatabaseAchievement;

interface DatabaseAchievement {
    _id: string;
    createdAt: string;
    updatedAt: string;
}

export interface OneHundredDaySoloStreakDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievmentTypes.oneHundredDaySoloStreak;
    name: string;
    description: string;
}

export default DatabaseAchievementType;
