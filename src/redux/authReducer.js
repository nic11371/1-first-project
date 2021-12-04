import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "network/auth/SET_USER_DATA";

const initialState = {
		userId: null,
      email: null,
      login: null,
		isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, 
	payload: {userId, login, email, isAuth} })
export const authThunkCreator = () => async (dispatch) => {
	const response = await authAPI.me()
		if(response.data.resultCode === 0 ) {
			let {id, login, email} = response.data.data
			dispatch(setAuthUserData(id, login, email, true));	
		}
}

export const loginAuthThunkCreator = (email, password, rememberMe) => async (dispatch) => {
	 const response = await authAPI.login(email, password, rememberMe)
		if(response.data.resultCode === 0 ) {
			dispatch(authThunkCreator())
		} else {
			const message = response.data.messages.length > 0 
			? response.data.messages : "some error"
			dispatch(stopSubmit( "login", {_error: message}))
		}			
	
}

export const logoutAuthThunkCreator = () => async (dispatch) => {
	const response = await authAPI.logout()
		if(response.data.resultCode === 0 ) {
			dispatch(setAuthUserData(null, null, null, false))
		}			
}

export default authReducer;

