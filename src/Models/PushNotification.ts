import PushNotificationSupportedDeviceTypes from '../Types/PushNotificationSupportedDeviceTypes';

export interface PushNotification {
    token: string;
    endpointArn: string;
    deviceType: PushNotificationSupportedDeviceTypes;
}
