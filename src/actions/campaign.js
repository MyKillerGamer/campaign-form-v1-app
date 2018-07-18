import database from '../firebase/firebase'

// ADD_CAMPAIGN
export const addCampaign = (campaign) => ({
    type: 'ADD_CAMPAIGN',
    campaign
});

export const startAddCampaign = (campaignData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            submitDate = 0, 
            campaignNumber = '', 
            campaignName = '', 
            contactID = '',
            OPNumber = '',
            campaignObjective = '',
            campaignSentDate = 0,
            campaignChannel = '',
            maxTargetSize = '',
            holdoutSize = '',
            adobeProgram = '',
            adobeNature = '',
            adobeMarketingType = '',
            adobeConsentType = '',
            adobeProductConsent = '',
            adobeBusinessDivision = '',
            passTo = '',
            thirdPartySpec = '',
            fieldsForDataExtract = '',
            personalisationFields = '',
            dataSelectionInstructions = '',
            dataSelectionExclusions = '',
            campaignNumberExclusions = '',
            comments = '',
            postCampaignAnalysis = ''
        } = campaignData;
        const campaign = { 
            submitDate, 
            campaignNumber, 
            campaignName, 
            contactID,
            OPNumber,
            campaignObjective,
            campaignSentDate,
            campaignChannel,
            maxTargetSize,
            holdoutSize,
            adobeProgram,
            adobeNature,
            adobeMarketingType,
            adobeConsentType,
            adobeProductConsent,
            adobeBusinessDivision,
            passTo,
            thirdPartySpec,
            fieldsForDataExtract,
            personalisationFields,
            dataSelectionInstructions,
            dataSelectionExclusions,
            campaignNumberExclusions,
            comments,
            postCampaignAnalysis };

        return database.ref(`users/${uid}/campaigns`).push(campaign).then((ref) => {
            dispatch(addCampaign({
                id: ref.key,
                ...campaign
            }))
        });
    };
};

// REMOVE_CAMPAIGN
export const removeCampaign = ({ id } = {}) => ({
    type: 'REMOVE_CAMPAIGN',
    id
});

export const startRemoveCampaign = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/campaigns/${id}`).remove().then(() => {
            dispatch(removeCampaign({ id }));
        });
    };
};

// EDIT_CAMPAIGN
export const editCampaign = (id, updates) => ({
    type: 'EDIT_CAMPAIGN',
    id, 
    updates
});

export const startEditCampaign = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/campaigns/${id}`).update(updates).then(() => {
            dispatch(editCampaign(id, updates));
        });
    };
};

// SET_CAMPAIGNS
export const setCampaigns = (campaigns) => ({
    type: 'SET_CAMPAIGNS',
    campaigns
})

export const startSetCampaigns = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/campaigns`)
            .once('value')
            .then((snapshot) => {
                const campaigns = [];
        
                snapshot.forEach((childSnapshot) => {
                    campaigns.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
            
                dispatch(setCampaigns(campaigns));
            });
    }
};