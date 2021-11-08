import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfileThunkCreator} from '../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router';

class ProfileContainer extends React.Component {

	componentDidMount() {
		this.props.getProfileThunkCreator(this.props.match.params.userId)
	}

	render() {
	if(!this.props.isAuth) return <Redirect to={"/login"} />
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainerComponent)
