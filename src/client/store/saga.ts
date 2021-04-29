import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import config from '../config';
import { PHOTO_START } from '../store/types/Details.type';
import { onPhotoSuccessAction, onPhotoFailureAction } from '../store/actions/Details.action';

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

export default function* rootSaga() {
	yield takeEvery(PHOTO_START, uploadPhotoCall);
}