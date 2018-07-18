import React from 'react';
import AckermansPage from './AckermanPage';
import { connect } from 'react-redux';
import { startAddCampaign } from '../actions/campaign';

export class AddExpensePage extends React.Component {
    onSubmit = (campaign) => {
        this.props.startAddCampaign(campaign);
        this.props.history.push('/dashboard/ackermans');
        const test = () => {startAddCampaign}
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
                    <AckermansPage 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);