import PushNotificationTypes from '../Types/PushNotificationTypes';

export interface PushNotificationRecord {
    userId: string;
    pushNotificationType: PushNotificationTypes;
    title: string;
    body: string;
    androidEndpointArn?: string;
    iosEndpointArn?: string;
    createdAt: string;
    updatedAt: string;
}
