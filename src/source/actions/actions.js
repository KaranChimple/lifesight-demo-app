import { CHANGE_TO_NEXTTAB, SUBMIT_TAB_DATA } from './actionTypes';

const changeTabDetails = ({ tabName, data }) => {
    return {
        type: CHANGE_TO_NEXTTAB,
        tabName,
        data,
    };
};

const submitTabData = (data) => {
    return {
        type: SUBMIT_TAB_DATA,
        data,
    }
}

export const changeTab = ({ tabName, data }) => dispatch => {
    dispatch(changeTabDetails({ tabName, data }));
}

export const submitDataFromTabs = ({ data }) => dispatch => {
    dispatch(submitTabData(data));
}