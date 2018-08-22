import React from 'react';
import { connect } from 'react-redux';
import CampaignListItem from './CampaignListItem';
import selectcampaigns from '../selectors/campaigns';

export const campaignList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Campaign</div>
            <div className="show-for-desktop">Campaign Number/Label</div>
        </div>
            <div className="list-body">
                {
                    props.campaigns.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No campaigns</span>
                        </div>
                    ) : (
                        props.campaigns.map((campaign) => {
                            return <CampaignListItem key={campaign.id} {...campaign}/>
                        })
                    )
                }
            </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        campaigns: selectcampaigns(state.campaigns, state.filters)
    };
};

export default connect(mapStateToProps)(campaignList);