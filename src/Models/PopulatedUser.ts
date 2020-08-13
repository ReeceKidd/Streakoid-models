import UserTypes from '../Types/UserTypes';
import { DatabaseAchievementType } from './DatabaseAchievement';
import { BasicUser } from './BasicUser';
import { ProfileImages } from './ProfileImages';
import { LongestEverSoloStreak } from './LongestEverSoloStreak';
import { LongestEverChallengeStreak } from './LongestEverChallengeStreak';
import { LongestEverTeamMemberStreak } from './LongestEverTeamMemberStreak';
import { LongestEverTeamStreak } from './LongestEverTeamStreak';
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
    longestSoloStreak: LongestEverSoloStreak;
    longestChallengeStreak: LongestEverChallengeStreak;
    longestTeamMemberStreak: LongestEverTeamMemberStreak;
    longestTeamStreak: LongestEverTeamStreak;
    longestEverStreak: LongestEverStreak;
    longestCurrentStreak: LongestCurrentStreak;
    achievements: DatabaseAchievementType[];
    createdAt: string;
    updatedAt: string;
    profileImages: ProfileImages;
    username: string;
}
