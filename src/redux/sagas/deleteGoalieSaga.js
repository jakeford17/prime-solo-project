import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "DELETE_GOALIE" actions

function* deleteGoalie (action) {
    try {
        yield axios.delete(`/api/goalie/${action.payload}`);
        yield put({ type: 'GET_GOALIE', payload: action.payload })
    } catch (error) {
        console.log('error while deleting goalie', error)
    }
}

function* deleteGoalieSaga() {
    yield takeEvery('DELETE_GOALIE', deleteGoalie);
}

export default deleteGoalieSaga;