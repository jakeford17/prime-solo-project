import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "GET_FORWARDS" actions
function* getDefense(action) {
    try {
        const response = yield axios.get('/api/defense');
        yield put({ type: 'FETCH_DEFENSE', payload: response.data });
    } catch(error) {
        console.log('error while getting elemnts', error);
    }
}

function* getDefenseSaga() {
    yield takeEvery('GET_DEFENSE', getDefense);
}

export default getDefenseSaga;