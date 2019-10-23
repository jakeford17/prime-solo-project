import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "DELETE_FORWARD" actions

function* deleteForward (action) {
    try {
        yield axios.delete(`/api/forwards/${action.payload}`);
        yield put({ type: 'GET_FORWARDS', payload: action.payload })
    } catch (error) {
        console.log('error while deleting forward', error)
    }
}

function* deleteForwardSaga() {
    yield takeEvery('DELETE_FORWARD', deleteForward);
}

export default deleteForwardSaga;