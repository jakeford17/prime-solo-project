import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "POST_NEW_DEFENSE" actions
function* addDefense(action) {
    try {
        yield axios.post('/api/defense', action.payload);
    } catch (error) {
        console.log('error posting new defenseman', error);
    }
}

function* addDefenseSaga() {
    yield takeEvery('POST_NEW_DEFENSE', addDefense);
}

export default addDefenseSaga;