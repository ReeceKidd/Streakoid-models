import PushNotificationSupportedDeviceTypes from '../Types/PushNotificationSupportedDeviceTypes';

export interface PushNotification {
    token: string;
    deviceType: PushNotificationSupportedDeviceTypes;
    endpointArn?: string;
}
