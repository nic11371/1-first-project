import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL = "network/auth/GET_CAPTCHA_URL";

const initialState = {
		userId: null as number | null,
      email: null as string | null,
      login: null as string | null,
		isAuth: false,
		captchaURL: null as string | null
}

type initialStateType = typeof initialState

const authReducer = (state: initialStateType = initialState, action: any): initialStateType => {
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
export type setAuthUserDataPayloadType = {userId:number | null, login:string | null, email:string | null, isAuth:boolean}
export type setAuthUserDataType = {type: typeof SET_USER_DATA, payload: setAuthUserDataPayloadType }
export type getCaptchaUrlType = {type: typeof GET_CAPTCHA_URL, payload: getCaptchaUrlPayloadType }
export type getCaptchaUrlPayloadType = {captchaURL:boolean | string}
export const setAuthUserData = (userId:number | null, login:string | null, email:string | null, isAuth:boolean)
:setAuthUserDataType => ({ type: SET_USER_DATA, 
	payload: {userId, login, email, isAuth} })
export const getCaptchaUrl = (captchaURL:boolean | string ):getCaptchaUrlType => ({ type: GET_CAPTCHA_URL, 
		payload: {captchaURL} })

export const authThunkCreator = () => async (dispatch:any) => {
	const response = await authAPI.me()
		if(response.data.resultCode === 0 ) {
			let {id, login, email} = response.data.data
			dispatch(setAuthUserData(id, login, email, true));	
		}
}
//! type captcha set up "Boolean" on the server. Attention! Espessialy need set up the type on string.
//!Captcha show Error because the type is string.
export const loginAuthThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: null) =>
 async (dispatch:any) => {
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
	


export const logoutAuthThunkCreator = () => async (dispatch:any) => {
	const response = await authAPI.logout()
		if(response.data.resultCode === 0 ) {
			dispatch(setAuthUserData(null, null, null, false))
		}			
}

export const getCaptchaUrlThunkCreator = () => async (dispatch:any) => {
	const response = await securityAPI.getCaptchaURL();
		const captcha = response.data.url;
			dispatch(getCaptchaUrl(captcha));	
}

export default authReducer;

