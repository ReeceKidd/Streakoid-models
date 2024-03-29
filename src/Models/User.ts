import UserTypes from '../Types/UserTypes';
import { PastSubscription } from './PastSubscription';
import { ProfileImages } from './ProfileImages';
import { UserAchievement } from './UserAchievement';
import { UserPushNotifications } from './UserPushNotifications';
import { PushNotification } from './PushNotification';
import { Onboarding } from './Onboarding';
import { LongestEverSoloStreak } from './LongestEverSoloStreak';
import { LongestEverChallengeStreak } from './LongestEverChallengeStreak';
import { LongestEverTeamMemberStreak } from './LongestEverTeamMemberStreak';
import { LongestEverTeamStreak } from './LongestEverTeamStreak';
import { LongestEverStreak } from './LongestEverStreak';
import { LongestCurrentStreak } from './LongestCurrentStreak';

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
    totalCoins: number;
    oidXp: number;
    longestSoloStreak: LongestEverSoloStreak;
    longestChallengeStreak: LongestEverChallengeStreak;
    longestTeamMemberStreak: LongestEverTeamMemberStreak;
    longestTeamStreak: LongestEverTeamStreak;
    longestEverStreak: LongestEverStreak;
    longestCurrentStreak: LongestCurrentStreak;
    email?: string;
    firstName?: string;
    lastName?: string;
}
