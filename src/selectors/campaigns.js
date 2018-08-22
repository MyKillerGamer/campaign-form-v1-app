import moment from 'moment';

// Get visible campaigns
export default (campaigns, { text, sortBy, startDate, endDate }) => {
    return campaigns.filter((campaign) => {
        const createdAtMoment = moment(campaign.submitDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = typeof text !== 'string' || campaign.campaignNumber.includes(text) ; 

      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'dateNew') {
            return a.submitDate < b.submitDate ? 1 : -1;
        } else if(sortBy === 'dateOld') {
            return a.submitDate > b.submitDate ? 1 : -1;
        }
    });
};