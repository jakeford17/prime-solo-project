import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "UPDATE_GOALIE" actions

function* updateGoalie (action) {
    try {
        yield axios.put('/api/goalie', action.payload);
    } catch (error) {
        console.log('error while updating goalie', error)
    }
}

function* updateGoalieSaga() {
    yield takeEvery('UPDATE_GOALIE', updateGoalie);
}

export default updateGoalieSaga;