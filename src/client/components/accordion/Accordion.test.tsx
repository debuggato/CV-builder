import React from 'react';
import renderer from 'react-test-renderer';
import AccordionView from './Accordion';

describe('[Components]: Accordion', () => {
	it('expects to render correctly', () => {
		const wrapper = renderer
			.create(<AccordionView title="Title"><p>{'Something here...'}</p></AccordionView>)
			.toJSON();

		expect(wrapper).toMatchSnapshot();
	});
});