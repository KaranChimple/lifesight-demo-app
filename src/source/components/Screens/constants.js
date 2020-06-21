import {MOBILE, OOH, TV, RADIO} from './Assets/index';

export const CAMPAIGN_TYPES = [
    {
        id: 0,
        name: 'Digital',
        logo: MOBILE,
        comingSoon: false,
    },
    {
        id: 1,
        name: 'Out of Home',
        logo: OOH,
        comingSoon: false,
    },
    {
        id: 2,
        name: 'TV',
        logo: TV,
        comingSoon: true,
    },
    {
        id: 3,
        name: 'Radio',
        logo: RADIO,
        comingSoon: true,
    }
];

export const CHANNEL_TYPES = [
    'In App', 
    'Mobile Web', 
    'Desktop', 
    'Social Media', 
    'Paid Search', 
    'Email', 
    'Lead Form', 
    'landing Page',
];

export const TRACKING_OPTIONS = [
    'Visits',
    'Transactions',
]

export const TAB1 = 'STEP 1 - SELECT CHANNEL';

export const TAB2 = 'STEP 2 - FLIGHT';

export const TAB3 = 'STEP3 - BUDGET';
