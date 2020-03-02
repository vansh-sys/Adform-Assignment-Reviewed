/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBox from '../components/SearchBox';

configure({ adapter: new Adapter() });

const props = {
  onSearch: jest.fn(),
};

describe('SearchBox', () => {
  it('should render search component', () => {
    const wrapper = shallow(<SearchBox onSearch={props} />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});
