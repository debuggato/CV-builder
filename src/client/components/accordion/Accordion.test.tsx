import React from 'react';
import AccordionView from './Accordion.view';
import { shallow } from 'enzyme';

describe('[Components]: Accordion', () => {
  it('expects to render correctly', () => {
    const wrapper = shallow(<AccordionView title="Title"><p>{'Something here...'}</p></AccordionView>);

    expect(wrapper).toMatchSnapshot();
  });
});