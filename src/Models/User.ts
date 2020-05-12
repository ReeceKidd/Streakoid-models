import UserTypes from '../Types/UserTypes';
import { PastSubscription } from './PastSubscription';
import { ProfileImages } from './ProfileImages';
import { UserAchievement } from './UserAchievement';
import { UserPushNotifications } from './UserPushNotifications';
import PushNotificationSupportedDeviceTypes from '../Types/PushNotificationSupportedDeviceTypes';

export interface User {
    _id: string;
    username: string;
    membershipInformation: {
        isPayingMember: boolean;
        pastMemberships: PastSubscription[];
        currentMembershipStartDate: Date | null;
    };
    email: string;
    userType: UserTypes;
    timezone: string;
    followers: string[];
    following: string[];
    totalStreakCompletes: number;
    totalLiveStreaks: number;
    achievements: UserAchievement[];
    stripe: {
        customer: string;
        subscription: string;
    };
    profileImages: ProfileImages;
    pushNotification: {
        token: string;
        endpointArn: string;
        deviceType: PushNotificationSupportedDeviceTypes;
    };
    pushNotifications: UserPushNotifications;
    hasCompletedIntroduction: boolean;
    createdAt: string;
    updatedAt: string;
}
