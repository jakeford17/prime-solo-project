import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "POST_NEW_GOALIE" actions
function* addGoalie(action) {
    try {
        yield axios.post('/api/goalie', action.payload);
    } catch (error) {
        console.log('error posting new goalie', error);
    }
}

function* addGoalieSaga() {
    yield takeEvery('POST_NEW_GOALIE', addGoalie);
}

export default addGoalieSaga;