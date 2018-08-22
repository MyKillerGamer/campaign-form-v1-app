// Campaigns Reducer

const campaignsReducerDefaultState = [];

export default (state = campaignsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CAMPAIGN':
            return [
                ...state,
                action.campaign
            ]
        case 'CANCEL_CAMPAIGN':
            return [
                ...state,
                action.campaign
            ]
        case 'REMOVE_CAMPAIGN':
            return state.filter(({ id }) => id !== action.id ); 
        case 'EDIT_CAMPAIGN':
            return state.map((campaign) => {
                if(campaign.id === action.id) {
                    return {
                        ...campaign,
                        ...action.updates
                    }
                } else {
                        return campaign;
                    };
                });
        case 'SET_CAMPAIGNS':
            return action.campaigns;
        default:
            return state;
    }
};