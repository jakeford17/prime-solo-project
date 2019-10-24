import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import addForwardSaga from './addForwardSaga';
import getForwardsSaga from './getForwardsSaga';
import forwardProfileSaga from './forwardProfileSaga';
import updateForwardSaga from './updateForwardSaga';
import deleteForwardSaga from './deleteForwardSaga';
import deleteAllForwardsSaga from './deleteAllForwardsSaga';
import addDefenseSaga from './addDefenseSaga';
import getDefenseSaga from './getDefenseSaga';
import defenseProfileSaga from './defenseProfileSaga';
import updateDefenseSaga from './updateDefenseSaga';
import deleteDefenseSaga from './deleteDefenseSaga';
import deleteAllDefenseSaga from './deleteAllDefenseSaga';
import addGoalieSaga from './addGoalieSaga';
import getGoalieSaga from './getGoalieSaga';
import goalieProfileSaga from './goalieProfileSaga';
import updateGoalieSaga from './updateGoalieSaga';
import deleteGoalieSaga from './deleteGoalieSaga';
import deleteAllGoaliesSaga from './deleteAllGoaliesSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    addForwardSaga(),
    getForwardsSaga(),
    forwardProfileSaga(),
    updateForwardSaga(),
    deleteForwardSaga(),
    deleteAllForwardsSaga(),
    addDefenseSaga(),
    getDefenseSaga(),
    defenseProfileSaga(),
    updateDefenseSaga(),
    deleteDefenseSaga(),
    deleteAllDefenseSaga(),
    addGoalieSaga(),
    getGoalieSaga(),
    goalieProfileSaga(),
    updateGoalieSaga(),
    deleteGoalieSaga(),
    deleteAllGoaliesSaga(),
  ]);
}
