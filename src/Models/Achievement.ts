import AchievementTypes from '../Types/AchievementTypes';

export type AchievementType =
    | OneHundredDaySoloStreakAchievement
    | OneHundredDayChallengeStreakAchievement
    | OneHundredDayTeamMemberStreakAchievement
    | OneHundredDayTeamStreakAchievement
    | OneHundredCoinsAchievement
    | TwoHundredAndFiftyCoinsAchievement
    | FiveHundredCoinsAchievement
    | OneThousandCoinsAchievement
    | TenThousandCoinsAchievement
    | FiftyThousandCoinsAchievement
    | OneHundredThousandCoinsAchievement
    | TwoHundredAndFiftyCoinsAchievement
    | FiveHundredThousandCoinsAchievement
    | OneMillionCoinsAchievement
    | TenTotalTimesTrackedAchievement
    | FiftyTotalTimesTrackedAchievement
    | OneHundredTotalTimesTrackedAchievement
    | TwoHundredAndFiftyTotalTimesTrackedAchievement
    | FiveHundredTotalTimesTrackedAchievement
    | OneThousandTotalTimesTrackedAchievement;

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

export interface OneHundredDayTeamMemberStreakAchievement {
    achievementType: AchievementTypes.oneHundredDayTeamMemberStreak;
    name: string;
    description: string;
}

export interface OneHundredDayTeamStreakAchievement {
    achievementType: AchievementTypes.oneHundredDayTeamStreak;
    name: string;
    description: string;
}

export interface OneHundredCoinsAchievement {
    achievementType: AchievementTypes.oneHundredCoins;
    name: string;
    description: string;
}

export interface TwoHundredAndFiftyCoinsAchievement {
    achievementType: AchievementTypes.twoHundredAndFiftyCoins;
    name: string;
    description: string;
}

export interface FiveHundredCoinsAchievement {
    achievementType: AchievementTypes.fiveHundredCoins;
    name: string;
    description: string;
}

export interface OneThousandCoinsAchievement {
    achievementType: AchievementTypes.oneThousandCoins;
    name: string;
    description: string;
}

export interface TenThousandCoinsAchievement {
    achievementType: AchievementTypes.tenThousandCoins;
    name: string;
    description: string;
}

export interface TwentyFiveThousandCoinsAchievement {
    achievementType: AchievementTypes.twentyFiveThousandCoins;
    name: string;
    description: string;
}

export interface FiftyThousandCoinsAchievement {
    achievementType: AchievementTypes.fiftyThousandCoins;
    name: string;
    description: string;
}

export interface OneHundredThousandCoinsAchievement {
    achievementType: AchievementTypes.oneHundredThousandCoins;
    name: string;
    description: string;
}

export interface TwoHundredAndFiftyThousandCoinsAchievement {
    achievementType: AchievementTypes.twoHundredAndFiftyThousandCoins;
    name: string;
    description: string;
}

export interface FiveHundredThousandCoinsAchievement {
    achievementType: AchievementTypes.fiveHundredThousandCoins;
    name: string;
    description: string;
}

export interface OneMillionCoinsAchievement {
    achievementType: AchievementTypes.oneMillionCoins;
    name: string;
    description: string;
}

export interface OneMillionCoinsAchievement {
    achievementType: AchievementTypes.oneMillionCoins;
    name: string;
    description: string;
}

export interface TenTotalTimesTrackedAchievement {
    achievementType: AchievementTypes.tenTotalTimesTracked;
    name: string;
    description: string;
}

export interface FiftyTotalTimesTrackedAchievement {
    achievementType: AchievementTypes.fiftyTotalTimesTracked;
    name: string;
    description: string;
}

export interface OneHundredTotalTimesTrackedAchievement {
    achievementType: AchievementTypes.oneHundredTotalTimesTracked;
    name: string;
    description: string;
}

export interface TwoHundredAndFiftyTotalTimesTrackedAchievement {
    achievementType: AchievementTypes.twoHundredAndFiftyTotalTimesTracked;
    name: string;
    description: string;
}

export interface FiveHundredTotalTimesTrackedAchievement {
    achievementType: AchievementTypes.fiveHundredTotalTimesTracked;
    name: string;
    description: string;
}

export interface OneThousandTotalTimesTrackedAchievement {
    achievementType: AchievementTypes.oneThousandTotalTimesTracked;
    name: string;
    description: string;
}
