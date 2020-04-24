import ProfileImages from './ProfileImages';
import PastSubscription from './PastSubscription';
import UserAchievement from './UserAchievement';
import UserTypes from '../Types/UserTypes';
import UserPushNotifications from './UserPushNotifications';

interface User {
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
    achievements: UserAchievement[];
    stripe: {
        customer: string;
        subscription: string;
    };
    profileImages: ProfileImages;
    pushNotificationToken: string;
    pushNotifications: UserPushNotifications;
    hasCompletedIntroduction: boolean;
    createdAt: string;
    updatedAt: string;
}

export default User;
