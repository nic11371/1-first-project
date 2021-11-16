import React from 'react'
import { connect } from 'react-redux'
import { authThunkCreator, logoutAuthThunkCreator } from '../../redux/authReducer'
import { getProfileThunkCreator } from '../../redux/profileReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.authThunkCreator()
}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	
})

export default connect(mapStateToProps, {authThunkCreator, 
	getProfileThunkCreator, logoutAuthThunkCreator})(HeaderContainer)
