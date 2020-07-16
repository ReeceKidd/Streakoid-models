export interface LongestChallengeStreak {
    challengeStreakId: string;
    challengeId: string;
    challengeName: string;
    startDate: Date;
    numberOfDays: number;
    endDate?: Date;
}
