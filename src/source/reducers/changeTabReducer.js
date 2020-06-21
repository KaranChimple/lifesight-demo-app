import { TAB1 } from '../components/Screens/constants';
import { CHANGE_TO_NEXTTAB, SUBMIT_TAB_DATA } from '../actions/actionTypes';

const initialData = {
    tabName: TAB1,
    data: {},
}

export default function changeTabReducer(state = initialData, action) {
    if (action.type === CHANGE_TO_NEXTTAB) {
        return {
            ...state,
            tabName: action.tabName,
            data: { ...state.data, ...action.data },
        }
    }
    if(action.type === SUBMIT_TAB_DATA) {
        console.log('Data To Be Submitted: ', {
            ...state.data, ...action.data
        });
        return {
            ...state,
            data: {...state.data, ...action.data},
        }
    }
    return state;
}
