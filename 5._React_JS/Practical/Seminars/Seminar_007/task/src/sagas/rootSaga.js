import { all } from 'redux-saga/effects';
import watchUserActions from './usersSaga';

function* rootSaga() {
    yield all([watchUserActions()]);
}

export default rootSaga;