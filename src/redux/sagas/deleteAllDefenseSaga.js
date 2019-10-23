import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "DELETE_ALL_DEFENSE" actions

function* deleteAllDefense(action) {
    try {
        yield axios.delete(`/api/defense/delete/${action.payload}`);
        yield put({ type: 'GET_DEFENSE', payload: action.payload })
    } catch (error) {
        console.log('error while deleting defense', error)
    }
}

function* deleteAllDefenseSaga() {
    yield takeEvery('DELETE_ALL_DEFENSE', deleteAllDefense);
}

export default deleteAllDefenseSaga;