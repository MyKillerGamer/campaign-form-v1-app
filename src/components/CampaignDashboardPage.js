import React from 'react';
import Header from './Header';
import CampaignList from './CampaignList';
import CampaignsSummary from './CampaignsSummary';
import CampaignListFilters from './CampaignListFilters';

const CampaignDashboardPage = () => (
    <div>
    <CampaignsSummary />
    <CampaignListFilters />
    <CampaignList />
    </div>
);

export default CampaignDashboardPage;