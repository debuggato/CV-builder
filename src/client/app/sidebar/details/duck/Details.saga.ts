import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import config from '@config/config';
import { PHOTO_START } from './Details.types';
import { onPhotoSuccessAction, onPhotoFailureAction } from './Details.actions';

const sendImgToServer = (data: any) => {
  return axios.post(config.upload_url, data);
}

function* uploadPhotoCall(action: any) {
  const data = new FormData();

  data.append('file', action.value.target.files[0]);

  try {
    yield sendImgToServer(data);
    yield put(onPhotoSuccessAction('/assets/photo_profile.jpg'));
  } catch (error) {
    put(onPhotoFailureAction(error));
  }
}

export function* watchPhotoUpload() {
  yield takeEvery(PHOTO_START, uploadPhotoCall);
}