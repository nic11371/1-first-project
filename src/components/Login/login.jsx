import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { loginAuthThunkCreator, logoutAuthThunkCreator } from '../../redux/authReducer';

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Email"} name={"email"} component={"input"} type={"textarea"} />
			</div>
			<div>
				<Field placeholder={"Password"} name={"password"} component={"input"} type={"password"} />
			</div>
			<div>
				<Field name={"rememberMe"} component={"input"} type={"checkbox"} /> Remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>

	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

	const onSubmit = (formData) => {
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

