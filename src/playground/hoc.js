// Higher Order Component (HOC) - A component that renders another component
// Reuse code without rewriting
// Render Hijacking
// Prop Manipulation
// Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin ?
                <div>
                    <p>This is private. Please don't share this.</p>
                    <WrappedComponent {...props} />
                </div> 
                : 
                <div> You do not have permission to view this file</div>}
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : ( 
                <p>Please log in to view the info</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="you are almost there!" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="you are almost there!" />, document.getElementById('app'));