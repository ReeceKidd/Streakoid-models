import AchievementTypes from '../Types/AchievementTypes';

export type DatabaseAchievementType =
    | OneHundredDaySoloStreakDatabaseAchievement
    | OneHundredDayChallengeStreakDatabaseAchievement
    | OneHundredDayTeamMemberStreakDatabaseAchievement
    | OneHundredDayTeamStreakDatabaseAchievement
    | OneHundredCoinsDatabaseAchievement
    | TwoHundredAndFiftyCoinsDatabaseAchievement
    | FiveHundredCoinsDatabaseAchievement
    | OneThousandCoinsDatabaseAchievement
    | TenThousandCoinsDatabaseAchievement
    | TwentyFiveThousandCoinsDatabaseAchievement
    | FiftyThousandCoinsDatabaseAchievement
    | OneHundredThousandCoinsDatabaseAchievement
    | TwoHundredAndFiftyCoinsDatabaseAchievement
    | FiveHundredThousandCoinsDatabaseAchievement
    | OneMillionCoinsDatabaseAchievement;

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

export interface OneHundredDayChallengeStreakDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.oneHundredDayChallengeStreak;
    name: string;
    description: string;
}

export interface OneHundredDayTeamMemberStreakDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.oneHundredDayTeamMemberStreak;
    name: string;
    description: string;
}

export interface OneHundredDayTeamStreakDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.oneHundredDayTeamStreak;
    name: string;
    description: string;
}

export interface OneHundredCoinsDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.oneHundredCoins;
    name: string;
    description: string;
}

export interface TwoHundredAndFiftyCoinsDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.twoHundredAndFiftyCoins;
    name: string;
    description: string;
}

export interface FiveHundredCoinsDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.fiveHundredCoins;
    name: string;
    description: string;
}

export interface OneThousandCoinsDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.oneThousandCoins;
    name: string;
    description: string;
}

export interface TenThousandCoinsDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.tenThousandCoins;
    name: string;
    description: string;
}

export interface TwentyFiveThousandCoinsDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.twentyFiveThousandCoins;
    name: string;
    description: string;
}

export interface FiftyThousandCoinsDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.fiftyThousandCoins;
    name: string;
    description: string;
}

export interface OneHundredThousandCoinsDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.oneHundredThousandCoins;
    name: string;
    description: string;
}

export interface TwoHundredAndFiftyThousandCoinsDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.twoHundredAndFiftyThousandCoins;
    name: string;
    description: string;
}

export interface FiveHundredThousandCoinsDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.fiveHundredThousandCoins;
    name: string;
    description: string;
}

export interface OneMillionCoinsDatabaseAchievement extends DatabaseAchievement {
    achievementType: AchievementTypes.oneMillionCoins;
    name: string;
    description: string;
}

export interface TenTotalTracksDatabaseAchievement {
    achievementType: AchievementTypes.tenTotalTracks;
    name: string;
    description: string;
}

export interface FiftyTotalTracksDatabaseAchievement {
    achievementType: AchievementTypes.fiftyTotalTracks;
    name: string;
    description: string;
}

export interface OneHundredTotalTracksDatabaseAchievement {
    achievementType: AchievementTypes.oneHundredTotalTracks;
    name: string;
    description: string;
}

export interface TwoHundredAndFiftyTotalTracksDatabaseAchievement {
    achievementType: AchievementTypes.twoHundredAndFiftyTotalTracks;
    name: string;
    description: string;
}

export interface FiveHundredTotalTracksDatabaseAchievement {
    achievementType: AchievementTypes.fiveHundredTotalTracks;
    name: string;
    description: string;
}

export interface OneThousandTotalTracksDatabaseAchievement {
    achievementType: AchievementTypes.oneThousandTotalTracks;
    name: string;
    description: string;
}
