import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout" >
        <div className="box-layout__box" >
            <h1 className="box-layout__title" >Campaign Form Submission</h1>
            <p>Please log in to submit a Campaign Form</p>
            <button className="button" onClick={startLogin} >Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);