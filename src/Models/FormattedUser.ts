import UserTypes from '../Types/UserTypes';
import { ProfileImages } from './ProfileImages';
import { PushNotification } from './PushNotification';

export interface FormattedUser {
    _id: string;
    isPayingMember: boolean;
    userType: UserTypes;
    timezone: string;
    createdAt: string;
    updatedAt: string;
    profileImages: ProfileImages;
    pushNotification: PushNotification;
    totalStreakCompletes: number;
    longestEverStreakNumberOfDays: number;
    longestCurrentStreakNumberOfDays: number;
    username: string;
}
