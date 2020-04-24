import AchievementTypes from "../Types/AchievementTypes";

type AchievementType = OneHundredDaySoloStreakAchievement;

export interface OneHundredDaySoloStreakAchievement {
  achievementType: AchievementTypes.oneHundredDaySoloStreak;
  name: string;
  description: string;
}

export default AchievementType;
