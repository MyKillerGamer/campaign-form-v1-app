import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const CampaignListItem = ({ id, campaignNumber, submitDate }) => (
<Link className="list-item" to={`/edit/${id}`}>
    <div>
        <h3 className="list-item__title">{campaignNumber}</h3>
        <span className="list-item__sub-title">{moment(submitDate).format('Do of MMMM, YYYY')}</span>
    </div>
</Link>
);

export default CampaignListItem;