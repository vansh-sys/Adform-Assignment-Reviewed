/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CampaignList } from '../components/CampaignList';
import { mockStore } from '../mocks/mock_store';

configure({ adapter: new Adapter() });

describe('CampaignList', () => {
  it('should render self & sub components', () => {
    const props = {
      userList: mockStore.userList,
      isLoading: mockStore.isLoading,
      campaignList: mockStore.campaignList,
      preparedList: mockStore.preparedList,
      fetchCampaigns: jest.fn(),
    };
    const wrapper = shallow(<CampaignList {...props} />);
    expect(wrapper.find('header').hasClass('header')).toBe(true);
    expect(wrapper.find('img').hasClass('addFormLogo')).toBe(true);
    // expect(wrapper.getElements()).toMatchSnapshot();
  });
});
