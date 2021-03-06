import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm } from 'redux-form';
import { loginAuthThunkCreator, logoutAuthThunkCreator, getCaptchaUrlThunkCreator } from '../../redux/authReducer';
import { maxLengthCreator, required } from '../../utilites/validation/validation';
import { createField, Input } from '../Common/FormsControls/FormsControls';
import { isAuth } from '../Profile/ProfileSelectors';
import styles from './../Common/FormsControls/FormsControls.module.css'

const maxLengthLogin30 = maxLengthCreator(30);
const maxLengthPassword15 = maxLengthCreator(15)
const LoginForm = ({handleSubmit, error, captcha}) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField("Email", "email", Input, [required, maxLengthLogin30], {type: "textarea"},)}
			{createField("Password", "password", Input, [required, maxLengthPassword15], {type: "password"})}
			{createField(null, "rememberMe", Input, [], {type: "checkbox"}, "remember Me")}
			{captcha && <img src={captcha}></img>}
			{captcha && createField("Symbols from image", "captcha", Input, [required], {}) }
			{error && <div className={styles.formSummaryError}>
			{error}
			</div> 
			}
			<div>
				<button>Login</button>
			</div>
		</form>

	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({loginAuthThunkCreator, isAuth, captcha}) => {

	let onSubmit = (formData) => {
		loginAuthThunkCreator(formData.email, formData.password, formData.rememberMe, 
			formData.captcha)
	}

	if(isAuth) {
		return <Redirect to={"/profile"} />
	} 

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captcha={captcha} />
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: isAuth(state),
	captcha: state.auth.captchaURL
})

export default connect(mapStateToProps,
	{ loginAuthThunkCreator, logoutAuthThunkCreator})(Login)

