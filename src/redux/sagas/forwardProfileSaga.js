import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "POST_NEW_FORWARD" actions
function* getForwardProfile(action) {
    try {
        const response = yield axios.get('/api/forwards/forwardprofile/' + action.payload);
        yield put({ type: 'ONE_FORWARD_INFO', payload: response.data });
    } catch (error) {
        console.log('error getting forward profile', error);
    }
}

function* forwardProfileSaga() {
    yield takeEvery('GET_ONE_FORWARD', getForwardProfile);
}

export default forwardProfileSaga;