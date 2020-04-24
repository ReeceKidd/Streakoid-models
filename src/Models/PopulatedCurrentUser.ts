import ProfileImages from './ProfileImages';
import PastSubscription from './PastSubscription';
import BasicUser from './BasicUser';
import DatabaseAchievementType from './DatabaseAchievement';
import UserTypes from '../Types/UserTypes';
import UserPushNotifications from './UserPushNotifications';

interface PopulatedCurrentUser {
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
    achievements: DatabaseAchievementType[];
    profileImages: ProfileImages;
    pushNotificationToken: string;
    pushNotifications: UserPushNotifications;
    hasCompletedIntroduction: boolean;
    createdAt: string;
    updatedAt: string;
}

export default PopulatedCurrentUser;
