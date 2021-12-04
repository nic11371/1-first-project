import { authThunkCreator } from "./authReducer";

const SET_INITIALIZED = "network/app/SET_INITIALIZED";
const initialState = {
		initialized: false
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true
			}
		default:
			return state;
	}
}

export const initializedSuccess = () => ({ type: SET_INITIALIZED })
export const initializeAppThunkCreator = () => async (dispatch) => {
	const response = await dispatch(authThunkCreator());
	dispatch(initializedSuccess())
}
export default appReducer;

