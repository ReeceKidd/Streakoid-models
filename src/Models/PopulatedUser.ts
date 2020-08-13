import UserTypes from '../Types/UserTypes';
import { DatabaseAchievementType } from './DatabaseAchievement';
import { BasicUser } from './BasicUser';
import { ProfileImages } from './ProfileImages';
import { LongestSoloStreak } from './LongestEverSoloStreak';
import { LongestChallengeStreak } from './LongestEverChallengeStreak';
import { LongestTeamMemberStreak } from './LongestEverTeamMemberStreak';
import { LongestTeamStreak } from './LongestEverTeamStreak';
import { LongestEverStreak } from './LongestEverStreak';
import { LongestCurrentStreak } from './LongestCurrentStreak';

export interface PopulatedUser {
    _id: string;
    isPayingMember: boolean;
    userType: UserTypes;
    timezone: string;
    coins: number;
    oidXp: number;
    followers: BasicUser[];
    following: BasicUser[];
    totalStreakCompletes: number;
    totalLiveStreaks: number;
    longestSoloStreak: LongestSoloStreak;
    longestChallengeStreak: LongestChallengeStreak;
    longestTeamMemberStreak: LongestTeamMemberStreak;
    longestTeamStreak: LongestTeamStreak;
    longestEverStreak: LongestEverStreak;
    longestCurrentStreak: LongestCurrentStreak;
    achievements: DatabaseAchievementType[];
    createdAt: string;
    updatedAt: string;
    profileImages: ProfileImages;
    username: string;
}
