import UserTypes from '../Types/UserTypes';
import { PastSubscription } from './PastSubscription';
import { ProfileImages } from './ProfileImages';
import { UserAchievement } from './UserAchievement';
import { UserPushNotifications } from './UserPushNotifications';
import { PushNotification } from './PushNotification';
import { Onboarding } from './Onboarding';
import { LongestSoloStreak } from './LongestSoloStreak';
import { LongestChallengeStreak } from './LongestChallengeStreak';
import { LongestTeamMemberStreak } from './LongestTeamMemberStreak';
import { LongestTeamStreak } from './LongestTeamStreak';

export interface User {
    _id: string;
    userIdentifier: string;
    membershipInformation: {
        isPayingMember: boolean;
        pastMemberships: PastSubscription[];
        currentMembershipStartDate: Date | null;
    };
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
    hasProfileImageBeenCustomized: boolean;
    pushNotification: PushNotification;
    pushNotifications: UserPushNotifications;
    hasCompletedIntroduction: boolean;
    hasCompletedTutorial: boolean;
    onboarding: Onboarding;
    hasCompletedOnboarding: boolean;
    createdAt: string;
    updatedAt: string;
    username: string;
    cognitoUsername: string;
    temporaryPassword: string;
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
    email?: string;
    firstName?: string;
    lastName?: string;
}
