import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectCampaigns from '../selectors/campaigns';

export const campaignsSummary = ({ campaignCount }) => {
    const campaignWord = campaignCount === 1 ? 'campaign' : 'campaigns';

    return (
        <div className="page-header" >
            <div className="content-container" >
                <h1 className="page-header__title" >Viewing <span>{campaignCount}</span> {campaignWord} </h1>
                <div className="page-header__actions" >
                    <Link className="button" to="/create">Add Campaign</Link>
                </div>    
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleCampaigns = selectCampaigns(state.campaigns, state.filters);

    return {
        campaignCount: visibleCampaigns.length
    }
};

export default connect(mapStateToProps)(campaignsSummary);