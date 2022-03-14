import { authThunkCreator } from "./authReducer";

const SET_INITIALIZED = "network/app/SET_INITIALIZED";
const GET_TEXT_GLOBAL_ERROR = "network/app/GET_TEXT_GLOBAL_ERROR"
const initialState: InitialStateType = {
		initialized: false,
		globalError: null
}

export type InitialStateType = {
	initialized: boolean
	globalError: null | string
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

export type  initializedSuccessType = {type: typeof SET_INITIALIZED}
export type globalErrorRejectType = {type: typeof GET_TEXT_GLOBAL_ERROR, globalError: null| string}
export const initializedSuccess = (): initializedSuccessType => ({ type: SET_INITIALIZED })
export const globalErrorReject = (globalError: null| string): globalErrorRejectType => ({type: GET_TEXT_GLOBAL_ERROR, globalError})
export const initializeAppThunkCreator = (state:any) => async (dispatch:any) => {
	const response = await dispatch(authThunkCreator());
	dispatch(initializedSuccess());
}
export default appReducer;

