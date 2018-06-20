import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = 'r3cbgjmoc9i2r3um';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(uid);
});

test('Should wipe uid from state', () => {
    const currentState = {
        uid: 'gnfev9teytekur'
    };
    const state = authReducer(currentState, { type: 'LOGOUT' });
    expect(state.uid).toBeFalsy();
});