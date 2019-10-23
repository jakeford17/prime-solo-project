import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// worker Saga: will be fired on "GET_FORWARDS" actions
function* getForwards(action) {
    try {
        const response = yield axios.get('/api/forwards');
        yield put({ type: 'FETCH_FORWARDS', payload: response.data });
    } catch(error) {
        console.log('error while getting elemnts', error);
    }
}

function* getForwardsSaga() {
    yield takeEvery('GET_FORWARDS', getForwards);
}

export default getForwardsSaga;