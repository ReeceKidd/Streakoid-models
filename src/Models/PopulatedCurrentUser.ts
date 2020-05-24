import UserTypes from '../Types/UserTypes';
import { PastSubscription } from './PastSubscription';
import { BasicUser } from './BasicUser';
import { DatabaseAchievementType } from './DatabaseAchievement';
import { ProfileImages } from './ProfileImages';
import { UserPushNotifications } from './UserPushNotifications';
import { PushNotification } from './PushNotification';
import { Onboarding } from './Onboarding';

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
    pushNotification: PushNotification;
    pushNotifications: UserPushNotifications;
    hasCompletedIntroduction: boolean;
    hasCompletedTutorial: boolean;
    onboarding: Onboarding;
    hasCompletedOnboarding: boolean;
    createdAt: string;
    updatedAt: string;
}
