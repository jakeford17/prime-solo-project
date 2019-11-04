import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "UPDATE_DEFENSE" actions
function* updateDefense(action) {
    try {
        yield axios.put('/api/defense', action.payload);
    } catch (error) {
        console.log('error while updating defense', error)
    }
}

function* updateDefenseSaga() {
    yield takeEvery('UPDATE_DEFENSE', updateDefense);
}

export default updateDefenseSaga;