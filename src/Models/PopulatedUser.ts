import UserTypes from '../Types/UserTypes';
import { DatabaseAchievementType } from './DatabaseAchievement';
import { BasicUser } from './BasicUser';
import { ProfileImages } from './ProfileImages';

export interface PopulatedUser {
    _id: string;
    username: string;
    isPayingMember: boolean;
    userType: UserTypes;
    timezone: string;
    followers: BasicUser[];
    following: BasicUser[];
    totalStreakCompleted: number;
    achievements: DatabaseAchievementType[];
    createdAt: string;
    updatedAt: string;
    profileImages: ProfileImages;
    pushNotificationToken: string;
}
