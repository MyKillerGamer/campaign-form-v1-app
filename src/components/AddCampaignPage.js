import React from 'react';
import CampaignForm from './CampaignForm';
import { connect } from 'react-redux';
import { startAddCampaign } from '../actions/campaigns';

export class AddCampaignPage extends React.Component {
    onSubmit = (campaign) => {
        this.props.startAddCampaign(campaign);
        this.props.history.push('/dashboard');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Campaign</h1>
                    </div>
                </div>
                <div className="content-container">
                    <CampaignForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => ({
    startAddCampaign: (campaign) => dispatch(startAddCampaign(campaign))
});

export default connect(undefined, mapDispatchToProps)(AddCampaignPage);