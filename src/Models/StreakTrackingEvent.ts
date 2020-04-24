import StreakTrackingEventTypes from '../Types/StreakTrackingEventTypes';
import StreakTypes from '../Types/StreakTypes';

export interface StreakTrackingEvent {
    _id: string;
    type: StreakTrackingEventTypes;
    streakId: string;
    streakType: StreakTypes;
    userId: string;
    createdAt: string;
    updatedAt: string;
}
