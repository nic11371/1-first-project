import React from 'react'
import { connect } from 'react-redux'
import { authThunkCreator, logoutAuthThunkCreator } from '../../redux/authReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	
})

export default connect(mapStateToProps, {authThunkCreator, 
 logoutAuthThunkCreator})(HeaderContainer)
