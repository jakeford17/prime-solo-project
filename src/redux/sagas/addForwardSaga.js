import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "POST_NEW_FORWARD" actions
function* addForward(action) {
    try {
        yield axios.post('/api/forwards', action.payload);
    } catch (error) {
        console.log('error posting new forward', error);
    }
}

function* addForwardSaga() {
    yield takeEvery('POST_NEW_FORWARD', addForward);
}

export default addForwardSaga;