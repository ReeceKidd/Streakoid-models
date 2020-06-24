import PushNotificationSupportedDeviceTypes from '../Types/PushNotificationSupportedDeviceTypes';

export interface PushNotification {
    token: string;
    deviceType: PushNotificationSupportedDeviceTypes;
    androidEndpointArn?: string;
    iosEndpointArn?: string;
    //Legacy support
    endpointArn?: string;
}
