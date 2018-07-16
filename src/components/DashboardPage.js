import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
    <div>
        <p>Brand selection</p>
        <Link to="/dashboard/ackermans">
            <h1>Ackermans</h1>
        </Link>
        <Link to="/dashboard/pepmoney">
            <h1>Pep Money</h1>
        </Link>
    </div>
);

export default DashboardPage;