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
    | TenTotalTracksAchievement
    | FiftyTotalTracksAchievement
    | OneHundredTotalTracksAchievement
    | TwoHundredAndFiftyTotalTracksAchievement
    | FiveHundredTotalTracksAchievement
    | OneThousandTotalTracksAchievement;

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

export interface TenTotalTracksAchievement {
    achievementType: AchievementTypes.tenTotalTracks;
    name: string;
    description: string;
}

export interface FiftyTotalTracksAchievement {
    achievementType: AchievementTypes.fiftyTotalTracks;
    name: string;
    description: string;
}

export interface OneHundredTotalTracksAchievement {
    achievementType: AchievementTypes.oneHundredTotalTracks;
    name: string;
    description: string;
}

export interface TwoHundredAndFiftyTotalTracksAchievement {
    achievementType: AchievementTypes.twoHundredAndFiftyTotalTracks;
    name: string;
    description: string;
}

export interface FiveHundredTotalTracksAchievement {
    achievementType: AchievementTypes.fiveHundredTotalTracks;
    name: string;
    description: string;
}

export interface OneThousandTotalTracksAchievement {
    achievementType: AchievementTypes.oneThousandTotalTracks;
    name: string;
    description: string;
}
