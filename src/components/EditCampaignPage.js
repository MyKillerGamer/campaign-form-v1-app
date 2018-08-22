import React from 'react';
import { connect } from 'react-redux';
import CampaignForm from './CampaignForm';
import { startEditCampaign, startCancelCampaign, startRemoveCampaign } from '../actions/campaigns';

export class EditCampaignPage extends React.Component {
    state = {
        updated: 0
    }
    onSubmit = (campaign) => {
        this.props.startEditCampaign(this.props.campaign.id, campaign);
        this.props.history.push('/dashboard');
    }
    onCancel = (campaign) => {
        this.props.startCancelCampaign(this.props.campaign, campaign);
        this.props.startRemoveCampaign({id: this.props.campaign.id});
        this.props.history.push('/dashboard');
        this.setState({updated: Math.random()});
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Campaign</h1>
                    </div>
                </div>
                <div className="content-container">
                    <CampaignForm 
                        campaign={this.props.campaign}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onCancel}>Cancel Campaign</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({ 
    campaign: state.campaigns.find((campaign) => campaign.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditCampaign: (id, campaign) => dispatch(startEditCampaign(id, campaign)),
    startRemoveCampaign: (data) => dispatch(startRemoveCampaign(data)),
    startCancelCampaign: (data) => dispatch(startCancelCampaign(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCampaignPage);