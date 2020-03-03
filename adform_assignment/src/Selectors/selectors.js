import { createSelector } from 'reselect';

const selectUserList = (state) => state.userList;
const selectCampaigns = (state) => state.campaignList;
const selectPreparedList = (state) => state.preparedList;
const selectLoader = (state) => state.isLoading;

const selectCampaignUsers = createSelector(
  [selectUserList, selectCampaigns, selectPreparedList, selectLoader],
  (userList, campaignList, preparedList, isLoading) => ({
    userList, campaignList, preparedList, isLoading,
  }),
);

export default selectCampaignUsers;
