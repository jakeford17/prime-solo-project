import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "GET_ONE_GOALIE" actions
function* getGoalieProfile(action) {
    try {
        const response = yield axios.get('/api/goalie/goalieprofile/' + action.payload);
        yield put({ type: 'ONE_GOALIE_INFO', payload: response.data });
    } catch (error) {
        console.log('error getting goalie profile', error);
    }
}

function* goalieProfileSaga() {
    yield takeEvery('GET_ONE_GOALIE', getGoalieProfile);
}

export default goalieProfileSaga;