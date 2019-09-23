import { all } from "redux-saga/effects";

import authSaga from "./authSaga";
import logoutSaga from "./logoutSaga";
import profileSaga from "./profileSaga";
import editProfileSaga from "./editProfileSaga";
import followSaga from "./followSaga";
import unfollowSaga from "./unfollowSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    logoutSaga(),
    profileSaga(),
    editProfileSaga(),
    followSaga(),
    unfollowSaga()
  ]);
}
