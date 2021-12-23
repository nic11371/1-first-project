import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL = "network/auth/GET_CAPTCHA_URL";

const initialState = {
		userId: null,
      email: null,
      login: null,
		isAuth: false,
		captchaURL: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: 
		case GET_CAPTCHA_URL:
			return {
				...state, ...action.payload
			}		
		default:
			return state;
	}
}

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, 
	payload: {userId, login, email, isAuth} })
	export const getCaptchaUrl = (captchaURL) => ({ type: GET_CAPTCHA_URL, 
		payload: {captchaURL} })

export const authThunkCreator = () => async (dispatch) => {
	const response = await authAPI.me()
		if(response.data.resultCode === 0 ) {
			let {id, login, email} = response.data.data
			dispatch(setAuthUserData(id, login, email, true));	
		}
}

export const loginAuthThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
	 const response = await authAPI.login(email, password, rememberMe, captcha)
		if(response.data.resultCode === 0 ) {
			dispatch(authThunkCreator())
		} else {
			if(response.data.resultCode === 10) {
				dispatch(getCaptchaUrlThunkCreator())
}
			}
			const message = response.data.messages.length > 0 
			? response.data.messages : "some error"
			dispatch(stopSubmit( "login", {_error: message}))
		}			
	


export const logoutAuthThunkCreator = () => async (dispatch) => {
	const response = await authAPI.logout()
		if(response.data.resultCode === 0 ) {
			dispatch(setAuthUserData(null, null, null, false))
		}			
}

export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
	const response = await securityAPI.getCaptchaURL();
		const captcha = response.data.url;
			dispatch(getCaptchaUrl(captcha));	
}

export default authReducer;

