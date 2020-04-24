import StreakTrackingEventTypes from "../Types/StreakTrackingEventTypes";
import StreakTypes from "../Types/StreakTypes";

interface StreakTrackingEvent {
    _id: string;
    type: StreakTrackingEventTypes;
    streakId: string;
    streakType: StreakTypes;
    userId: string;
    createdAt: string;
    updatedAt: string;
}

export default StreakTrackingEvent;
