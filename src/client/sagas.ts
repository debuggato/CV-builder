import { all } from 'redux-saga/effects';
import { watchPhotoUpload } from '@app/sidebar/details/duck/Details.saga';

export default function* rootSaga() {
  yield all([watchPhotoUpload()]);
}