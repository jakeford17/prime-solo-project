import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "DELETE_DEFENSE" actions
function* deleteDefense(action) {
    try {
        yield axios.delete(`/api/defense/${action.payload}`);
        yield put({ type: 'GET_DEFENSE', payload: action.payload })
    } catch (error) {
        console.log('error while deleting defense', error)
    }
}

function* deleteDefenseSaga() {
    yield takeEvery('DELETE_DEFENSE', deleteDefense);
}

export default deleteDefenseSaga;