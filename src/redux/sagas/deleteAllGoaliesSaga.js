import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "DELETE_ALL_GOALIE" actions

function* deleteAllGoalies(action) {
    try {
        yield axios.delete(`/api/goalie/delete/${action.payload}`);
        yield put({ type: 'GET_GOALIE', payload: action.payload })
    } catch (error) {
        console.log('error while deleting goalies', error)
    }
}

function* deleteAllGoaliesSaga() {
    yield takeEvery('DELETE_ALL_GOALIE', deleteAllGoalies);
}

export default deleteAllGoaliesSaga;