import { takeLatest, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.action-types';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsError, fetchCollectionsSuccess } from './shop.actions';

// worker
export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap)); // like dispatch
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

// watcher
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}