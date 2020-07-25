import UserTypes from '../Types/UserTypes';
import { DatabaseAchievementType } from './DatabaseAchievement';
import { BasicUser } from './BasicUser';
import { ProfileImages } from './ProfileImages';
import { LongestSoloStreak } from './LongestSoloStreak';
import { LongestChallengeStreak } from './LongestChallengeStreak';
import { LongestTeamMemberStreak } from './LongestTeamMemberStreak';
import { LongestTeamStreak } from './LongestTeamStreak';
import { LongestEverStreak } from './LongestEverStreak';

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
    achievements: DatabaseAchievementType[];
    createdAt: string;
    updatedAt: string;
    profileImages: ProfileImages;
    username: string;
}
