import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { loginAuthThunkCreator, logoutAuthThunkCreator } from '../../redux/authReducer';
import { maxLengthCreator, required } from '../../utilites/validation/validation';
import { Input } from '../Common/FormsControls/FormsControls';
import styles from './../Common/FormsControls/FormsControls.module.css'

const maxLengthLogin30 = maxLengthCreator(30);
const maxLengthPassword15 = maxLengthCreator(15)
const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Email"} name={"email"} 
				component={Input} type={"textarea"} validate={[required, maxLengthLogin30]} />
			</div>
			<div>
				<Field placeholder={"Password"} name={"password"} 
				component={Input} type={"password"} validate={[required, maxLengthPassword15]} />
			</div>
			<div>
				<Field name={"rememberMe"} component={"input"} type={"checkbox"} /> Remember me
			</div>
			{props.error && <div className={styles.formSummaryError}>
				{props.error}
			</div> 
			}
			<div>
				<button>Login</button>
			</div>
		</form>

	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

	let onSubmit = (formData) => {
		props.loginAuthThunkCreator(formData.email, formData.password, formData.rememberMe)
	}

	if(props.isAuth) {
		return <Redirect to={"/profile"} />
	} 

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapDispatchToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapDispatchToProps,
	{ loginAuthThunkCreator, logoutAuthThunkCreator })(Login)

