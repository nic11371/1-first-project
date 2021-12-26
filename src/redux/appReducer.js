import { authThunkCreator } from "./authReducer";

const SET_INITIALIZED = "network/app/SET_INITIALIZED";
const GET_TEXT_GLOBAL_ERROR = "network/app/GET_TEXT_GLOBAL_ERROR"
const initialState = {
		initialized: false,
		globalError: null
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true
			}
		case GET_TEXT_GLOBAL_ERROR:
			return {
				...state, globalError: action.globalError
			}
		default:
			return state;
	}
}

export const initializedSuccess = () => ({ type: SET_INITIALIZED })
export const globalErrorReject = (globalError) => ({type: GET_TEXT_GLOBAL_ERROR, globalError})
export const initializeAppThunkCreator = () => async (dispatch) => {
	const response = await dispatch(authThunkCreator());
	dispatch(initializedSuccess())
}
export default appReducer;

