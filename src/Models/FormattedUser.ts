import UserTypes from '../Types/UserTypes';
import { ProfileImages } from './ProfileImages';

export interface FormattedUser {
    _id: string;
    username: string;
    isPayingMember: boolean;
    userType: UserTypes;
    timezone: string;
    createdAt: string;
    updatedAt: string;
    profileImages: ProfileImages;
    endpointArn: string;
    totalStreakCompletes: number;
}
