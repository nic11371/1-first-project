import authReducer, { setAuthUserData } from "./authReducer"


const state = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

it('state should be changed', () => {
	const action = setAuthUserData(state);
	const newState = authReducer(state, action);
	expect(newState.userId).toBe(state)
});
