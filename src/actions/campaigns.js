import database from '../firebase/firebase'
import moment from 'moment'

// ADD_CAMPAIGN
export const addCampaign = (campaign) => ({
    type: 'ADD_CAMPAIGN',
    campaign
})

export const startAddCampaign = (campaignData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            submitDate = moment(),
            campaignNumber = '',
            campaignName = '',
            contactID = '',  // Need to find out how to render from logged in account
            OPNumber  = '',    // Non-compulsory
            campaignObjective = '',
            campaignSentDate = moment().add(5, "days"),
            campaignChannel = '',
            maxTargetSize = '',  // Non-compulsory
            holdoutSize = '10%',
            adobeProgram = 'CFHProgram',
            adobeNature = 'etc',
            adobeMarketingType = 'etc',
            adobeConsentType = 'Marketing',
            adobeProductConsent = '',
            adobeBusinessDivision = '',
            passTo = 'thirdparty',   // Adobe by default, string when 3rd party is selected
            thirdPartySpec = '',
            fieldsForDataExtract = '',    // Related to ^, Non-compulsory -> Need to have it so that it is compulsory if third party is selected
            personalisationFields = '',
            dataSelectionInstructions = '',
            dataSelectionExclusions = '',
            campaignNumberExclusions = '',
            comments = '',    // Non-compulsory
            postCampaignAnalysis = '',    // Non-compulsory

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
            postCampaignAnalysis
        };

        return database.ref(`users/${uid}/campaigns`).push(campaign).then((ref) => {
            dispatch(addCampaign({
                id: ref.key,
                ...campaign
            }))
        });
    };
};

// CANCEL_CAMPAIGN
export const cancelCampaign = ({ id } = {}) => ({
    type: 'CANCEL_CAMPAIGN',
    id
});

export const startCancelCampaign = (campaignData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            submitDate = moment(),
            campaignNumber = '',
            campaignName = '',
            contactID = '',  // Need to find out how to render from logged in account
            OPNumber  = '',    // Non-compulsory
            campaignObjective = '',
            campaignSentDate = moment().add(5, "days"),
            campaignChannel = '',
            maxTargetSize = '',  // Non-compulsory
            holdoutSize = '10%',
            adobeProgram = 'CFHProgram',
            adobeNature = 'etc',
            adobeMarketingType = 'etc',
            adobeConsentType = 'Marketing',
            adobeProductConsent = '',
            adobeBusinessDivision = '',
            passTo = 'thirdparty',   // Adobe by default, string when 3rd party is selected
            thirdPartySpec = '',
            fieldsForDataExtract = '',    // Related to ^, Non-compulsory -> Need to have it so that it is compulsory if third party is selected
            personalisationFields = '',
            dataSelectionInstructions = '',
            dataSelectionExclusions = '',
            campaignNumberExclusions = '',
            comments = '',    // Non-compulsory
            postCampaignAnalysis = '',    // Non-compulsory
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
            postCampaignAnalysis
        };

        return database.ref(`users/${uid}/cancelledcampaigns`).push(campaign).then((ref) => {
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

export const startSetcampaigns = () => {
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

/*.then((campaignData = {}) => {
            return (dispatch, getState) => {
                const uid = getState().auth.uid;
                const {
                    submitDate = moment(),
                    campaignNumber = '',
                    campaignName = '',
                    contactID = '',  // Need to find out how to render from logged in account
                    OPNumber  = '',    // Non-compulsory
                    campaignObjective = '',
                    campaignSentDate = moment().add(5, "days"),
                    campaignChannel = '',
                    maxTargetSize = '',  // Non-compulsory
                    holdoutSize = '10%',
                    adobeProgram = 'CFHProgram',
                    adobeNature = 'etc',
                    adobeMarketingType = 'etc',
                    adobeConsentType = 'Marketing',
                    adobeProductConsent = '',
                    adobeBusinessDivision = '',
                    passTo = 'thirdparty',   // Adobe by default, string when 3rd party is selected
                    thirdPartySpec = '',
                    fieldsForDataExtract = '',    // Related to ^, Non-compulsory -> Need to have it so that it is compulsory if third party is selected
                    personalisationFields = '',
                    dataSelectionInstructions = '',
                    dataSelectionExclusions = '',
                    campaignNumberExclusions = '',
                    comments = '',    // Non-compulsory
                    postCampaignAnalysis = '',    // Non-compulsory
        
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
                    postCampaignAnalysis
                };
        
                return database.ref(`users/${uid}/campaigns/cancelled`).push(campaign).then((ref) => {
                    dispatch(addCampaign({
                        id: ref.key,
                        ...campaign
                    }))
                });
            };
        }) */