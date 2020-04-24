export type AcheivementEventType = UnlockedAcheivement;

export interface UnlockedAcheivement {
    _id: string;
    streakId: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
}
