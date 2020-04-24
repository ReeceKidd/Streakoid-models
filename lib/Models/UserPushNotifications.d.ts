import { CustomStreakReminder, CompleteAllStreaksReminder } from './StreakReminders';
export interface UserPushNotifications {
    teamStreakUpdates: {
        enabled: boolean;
    };
    newFollowerUpdates: {
        enabled: boolean;
    };
    achievementUpdates: {
        enabled: boolean;
    };
    customStreakReminders: CustomStreakReminder[];
    completeAllStreaksReminder?: CompleteAllStreaksReminder;
}
//# sourceMappingURL=UserPushNotifications.d.ts.map
