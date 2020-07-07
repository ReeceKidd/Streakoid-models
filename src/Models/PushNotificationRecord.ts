import PushNotificationTypes from '../Types/PushNotificationTypes';

export interface PushNotificationRecord {
    userId: string;
    pushNotificationType: PushNotificationTypes;
    createdAt: string;
    updatedAt: string;
}
