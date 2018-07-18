import React from 'react';
import { connect } from 'react-redux';
import { startEditCampaign, startRemoveCampaign } from '../actions/campaign'
import AckermanPage from './AckermanPage'

export class EditCampaignPage extends React.Component {
    onSubmit = (campaign) => {
        this.props.startEditCampaign(this.props.campaign.id, campaign);
        this.history.push('/dashboard');
    }

    onRemove = (campaign) => {
        this.props.startRemoveCampaign({ id: this.props.campaign.id });
        this.props.history.push('/dashboard')
    }
    render() {
        return(
            <div>
            <AckermanPage />
            </div>
        )
    }
}

// const mapStateToProps = (state, props) => ({ 
//     campaign: state.campaigns.find((campaign) => campaign.id === props.match.params.id)
// });

const mapDispatchToProps = (dispatch, props) => ({
    startEditCampaign: (id, campaign) => dispatch(startEditCampaign(id, campaign)),
    startRemoveCampaign: (data) => dispatch(startRemoveCampaign(data))
});

export default connect(mapDispatchToProps)(EditCampaignPage);