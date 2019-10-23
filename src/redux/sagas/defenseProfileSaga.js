import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "POST_NEW_DEFENSE" actions
function* getDefenseProfile(action) {
    try {
        const response = yield axios.get('/api/defense/defenseprofile/' + action.payload);
        yield put({ type: 'ONE_DEFENSE_INFO', payload: response.data });
    } catch (error) {
        console.log('error getting defense profile', error);
    }
}

function* defenseProfileSaga() {
    yield takeEvery('GET_ONE_DEFENSE', getDefenseProfile);
}

export default defenseProfileSaga;