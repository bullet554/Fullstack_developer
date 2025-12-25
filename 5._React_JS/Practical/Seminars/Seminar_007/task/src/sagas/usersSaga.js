import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from '../slices/usersSlice';

// API-запрос
function* fetchUsersApi() {
    const response = yield call(() =>
        fetch('https://jsonplaceholder.typicode.com/users')
    );

    if (!response.ok) {
        throw new Error('Ошибка загрузки пользователей');
    }

    return yield call(() => response.json());
}

// Рабочая сага
function* fetchUsers() {
    try {
        const users = yield call(fetchUsersApi);
        yield put(fetchUsersSuccess(users));
    } catch (error) {
        yield put(fetchUsersFailure(error.message));
    }
}

// Наблюдатель
function* watchFetchUsers() {
    yield takeEvery(fetchUsersStart.type, fetchUsers);
}

export default watchFetchUsers;
