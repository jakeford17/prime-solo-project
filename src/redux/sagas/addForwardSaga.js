import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "POST_NEW_FORWARD" actions
function* addForward(action) {
    try {
        yield axios.post('/api/forwards', action.payload);
    } catch (error) {
        console.log('error posting new forward', error);
    }
    // const config = {
    //     headers: { 'Content-Type': 'application/json' },
    //     withCredentials: true,
    // };
    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
}

function* addForwardSaga() {
    yield takeEvery('POST_NEW_FORWARD', addForward);
}

export default addForwardSaga;