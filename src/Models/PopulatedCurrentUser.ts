import UserTypes from '../Types/UserTypes';
import { PastSubscription } from './PastSubscription';
import { BasicUser } from './BasicUser';
import { DatabaseAchievementType } from './DatabaseAchievement';
import { ProfileImages } from './ProfileImages';
import { UserPushNotifications } from './UserPushNotifications';

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
    achievements: DatabaseAchievementType[];
    profileImages: ProfileImages;
    pushNotificationToken: string;
    pushNotifications: UserPushNotifications;
    hasCompletedIntroduction: boolean;
    createdAt: string;
    updatedAt: string;
}
