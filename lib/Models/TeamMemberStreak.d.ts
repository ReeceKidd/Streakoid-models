export interface TeamMemberStreak {
    _id: string;
    userId: string;
    teamStreakId: string;
    completedToday: boolean;
    active: boolean;
    currentStreak: {
        startDate: string;
        numberOfDaysInARow: number;
        endDate: string;
    };
    pastStreaks: Array<{
        endDate: string;
        startDate: string;
        numberOfDaysInARow: number;
    }>;
    timezone: string;
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=TeamMemberStreak.d.ts.map
