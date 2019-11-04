import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "UPDATE_FORWARD" actions
function* updateForward(action) {
    try {
        yield axios.put('/api/forwards', action.payload);
    } catch (error) {
        console.log('error while updating forward', error)
    }
}

function* updateForwardSaga() {
    yield takeEvery('UPDATE_FORWARD', updateForward);
}

export default updateForwardSaga;