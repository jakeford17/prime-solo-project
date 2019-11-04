import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "GET_GOALIE" actions
function* getGoalie(action) {
    try {
        const response = yield axios.get('/api/goalie');
        yield put({ type: 'FETCH_GOALIE', payload: response.data });
    } catch (error) {
        console.log('error while getting elemnts', error);
    }
}

function* getGoalieSaga() {
    yield takeEvery('GET_GOALIE', getGoalie);
}

export default getGoalieSaga;