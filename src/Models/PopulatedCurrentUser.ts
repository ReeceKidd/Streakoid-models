import UserTypes from '../Types/UserTypes';
import { PastSubscription } from './PastSubscription';
import { BasicUser } from './BasicUser';
import { DatabaseAchievementType } from './DatabaseAchievement';
import { ProfileImages } from './ProfileImages';
import { UserPushNotifications } from './UserPushNotifications';
import PushNotificationSupportedDeviceTypes from '../Types/PushNotificationSupportedDeviceTypes';

export interface PopulatedCurrentUser {
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
    following: BasicUser[];
    followers: BasicUser[];
    totalStreakCompletes: number;
    totalLiveStreaks: number;
    achievements: DatabaseAchievementType[];
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
