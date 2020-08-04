import UserTypes from '../Types/UserTypes';
import { PastSubscription } from './PastSubscription';
import { BasicUser } from './BasicUser';
import { DatabaseAchievementType } from './DatabaseAchievement';
import { ProfileImages } from './ProfileImages';
import { UserPushNotifications } from './UserPushNotifications';
import { PushNotification } from './PushNotification';
import { Onboarding } from './Onboarding';
import { LongestSoloStreak } from './LongestSoloStreak';
import { LongestChallengeStreak } from './LongestChallengeStreak';
import { LongestTeamMemberStreak } from './LongestTeamMemberStreak';
import { LongestTeamStreak } from './LongestTeamStreak';
import { LongestEverStreak } from './LongestEverStreak';

export interface PopulatedCurrentUser {
    _id: string;
    membershipInformation: {
        isPayingMember: boolean;
        pastMemberships: PastSubscription[];
        currentMembershipStartDate: Date | null;
    };
    userType: UserTypes;
    timezone: string;
    following: BasicUser[];
    followers: BasicUser[];
    totalStreakCompletes: number;
    totalLiveStreaks: number;
    achievements: DatabaseAchievementType[];
    profileImages: ProfileImages;
    hasProfileImageBeenCustomized: boolean;
    pushNotification: PushNotification;
    pushNotifications: UserPushNotifications;
    hasCompletedIntroduction: boolean;
    hasCompletedTutorial: boolean;
    onboarding: Onboarding;
    hasCompletedOnboarding: boolean;
    createdAt: string;
    updatedAt: string;
    temporaryPassword: string;
    username: string;
    hasUsernameBeenCustomized: boolean;
    hasVerifiedEmail: boolean;
    hasCustomPassword: boolean;
    teamStreaksOrder: string[];
    coins: number;
    oidXp: number;
    longestSoloStreak: LongestSoloStreak;
    longestChallengeStreak: LongestChallengeStreak;
    longestTeamMemberStreak: LongestTeamMemberStreak;
    longestTeamStreak: LongestTeamStreak;
    longestEverStreak: LongestEverStreak;
    email?: string;
    firstName?: string;
    lastName?: string;
    stripe?: {
        customer: string;
        subscription: string;
    };
}
