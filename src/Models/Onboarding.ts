import WhyDoYouWantToBuildNewHabitsTypes from '../Types/WhyDoYouWantToBuildNewHabitsTypes';
import WhatBestDescribesYouTypes from '../Types/WhatBestDescribesYouTypes';

export interface Onboarding {
    _id: string;
    whyDoYouWantToBuildNewHabitsChoice: WhyDoYouWantToBuildNewHabitsTypes;
    whatBestDescribesYouChoice: WhatBestDescribesYouTypes;
}
