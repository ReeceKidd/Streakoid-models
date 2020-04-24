import BasicUser from './BasicUser';
import ProfileImages from './ProfileImages';
import DatabaseAchievementType from './DatabaseAchievement';
import UserTypes from '../Types/UserTypes';

interface PopulatedUser {
    _id: string;
    username: string;
    isPayingMember: boolean;
    userType: UserTypes;
    timezone: string;
    followers: BasicUser[];
    following: BasicUser[];
    achievements: DatabaseAchievementType[];
    createdAt: string;
    updatedAt: string;
    profileImages: ProfileImages;
    pushNotificationToken: string;
}

export default PopulatedUser;
