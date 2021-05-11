import React from 'react';
import renderer from 'react-test-renderer';
import PhotoView from './Photo';

describe('', () => {
	it('expects to render photo component WITH photo url set', () => {

		const onUpload = () => { }

		const wrapper = renderer
			.create(
				<PhotoView onUpload={onUpload} imgUrl="/assets/photo_profile.jpg" />
			)
			.toJSON();

		expect(wrapper).toMatchSnapshot();
	});
});