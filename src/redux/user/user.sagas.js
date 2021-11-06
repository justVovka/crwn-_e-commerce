import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './user.action-types';
import { auth, createUserProfileDocument, googleProvider } from '../../firebase/firebase.utils';
import { googleSignInError, googleSignInSuccess } from './user.actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(googleSignInError(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart)
  ]);
}