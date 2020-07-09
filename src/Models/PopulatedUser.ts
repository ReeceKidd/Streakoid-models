import UserTypes from '../Types/UserTypes';
import { DatabaseAchievementType } from './DatabaseAchievement';
import { BasicUser } from './BasicUser';
import { ProfileImages } from './ProfileImages';

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
    achievements: DatabaseAchievementType[];
    createdAt: string;
    updatedAt: string;
    profileImages: ProfileImages;
    username: string;
}
