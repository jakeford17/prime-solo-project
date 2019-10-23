import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "DELETE_ALL_FORWARDS" actions

function* deleteAllForwards(action) {
    try {
        yield axios.delete(`/api/forwards/delete/${action.payload}`);
        yield put({ type: 'GET_FORWARDS', payload: action.payload })
    } catch (error) {
        console.log('error while deleting forward', error)
    }
}

function* deleteAllForwardsSaga() {
    yield takeEvery('DELETE_ALL_FORWARDS', deleteAllForwards);
}

export default deleteAllForwardsSaga;