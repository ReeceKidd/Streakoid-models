import PushNotificationTypes from '../Types/PushNotificationTypes';

export type PushNotificationType =
    | CustomStreakReminderPushNotification
    | CompleteAllStreaksReminderPushNotification
    | CompletedTeamStreakUpdatePushNotification
    | IncompletedTeamStreakUpdatePushNotification
    | AddedNoteToTeamStreakPushNotification
    | NewFollowerPushNotification
    | UnlockedAchievementPushNotification
    | JoinedTeamStreakPushNotification;

export type CustomStreakReminderPushNotification =
    | CustomSoloStreakReminderPushNotification
    | CustomChallengeStreakReminderPushNotification
    | CustomTeamStreakReminderPushNotification;

export interface CustomSoloStreakReminderPushNotification {
    pushNotificationType: PushNotificationTypes.customSoloStreakReminder;
    soloStreakId: string;
    soloStreakName: string;
}

export interface CustomChallengeStreakReminderPushNotification {
    pushNotificationType: PushNotificationTypes.customChallengeStreakReminder;
    challengeStreakId: string;
    challengeName: string;
}

export interface CustomTeamStreakReminderPushNotification {
    pushNotificationType: PushNotificationTypes.customTeamStreakReminder;
    teamStreakId: string;
    teamStreakName: string;
}

export interface CompleteAllStreaksReminderPushNotification {
    pushNotificationType: PushNotificationTypes.completeAllStreaksReminder;
}

export interface CompletedTeamStreakUpdatePushNotification {
    pushNotificationType: PushNotificationTypes.completedTeamStreakUpdate;
    teamStreakId: string;
    teamStreakName: string;
    title: string;
    body: string;
}

export interface IncompletedTeamStreakUpdatePushNotification {
    pushNotificationType: PushNotificationTypes.incompletedTeamStreakUpdate;
    teamStreakId: string;
    teamStreakName: string;
    title: string;
    body: string;
}

export interface AddedNoteToTeamStreakPushNotification {
    pushNotificationType: PushNotificationTypes.addedNoteToTeamStreak;
    userId: string;
    teamStreakId: string;
    teamStreakName: string;
    note: string;
    title: string;
    body: string;
    username: string;
}

export interface NewFollowerPushNotification {
    pushNotificationType: PushNotificationTypes.newFollower;
    followerId: string;
    title: string;
    body: string;
    followerUsername: string;
}

export interface UnlockedAchievementPushNotification {
    pushNotificationType: PushNotificationTypes.unlockedAchievement;
    achievementId: string;
    title: string;
    body: string;
}

export interface JoinedTeamStreakPushNotification {
    pushNotificationType: PushNotificationTypes.joinedTeamStreak;
    userId: string;
    teamStreakId: string;
    teamStreakName: string;
    title: string;
    username: string;
}
