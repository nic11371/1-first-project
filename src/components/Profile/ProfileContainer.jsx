import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
	getProfileThunkCreator, getUserStatusThunkCreator,
	updatePhotoThunkCreator,
	updateStatusThunkCreator, dataFormThunkCreator, toggleIsProfileUpdate, userFollowed,
	followedUser, unfollowedUser
} from '../../redux/profileReducer'
import { followThunkCreator, unfollowThunkCreator, 
	getUsersThunkCreator, } from '../../redux/usersReducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { isAuth, profile, profileStatus, userId } from './ProfileSelectors';
import { getFollowInProgress, getUsers } from './../Users/usersSelectors';

class ProfileContainer extends React.Component {

	updateRefreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.autorizedUserId;
			if (!userId) {
				this.props.history.push("/login")
			}
		}
		this.props.getUsersThunkCreator()
		this.props.getProfileThunkCreator(userId);
		this.props.getUserStatusThunkCreator(userId);
		this.props.users
		.map(u => {
			if( +userId == u.id) {
				this.props.userFollowed(u)
	}});

	}
 
	componentDidMount() {
		this.updateRefreshProfile()
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.match.params.userId != this.props.match.params.userId) {
		this.updateRefreshProfile();
		} 
	}

	render() {
		return (
			<Profile {...this.props}
				isOwner={!this.props.match.params.userId}
			 	profile={this.props.profile} status={this.props.status}
				updateStatus={this.props.updateStatusThunkCreator}
				followed = {this.props.users.followed}
				followInProgress={this.props.followInProgress}
				followThunkCreator={this.props.followThunkCreator}
				unfollowThunkCreator={this.props.unfollowThunkCreator}
				userId = {this.props.match.params.userId}
				users={this.props.profileFollowed} 
				savePhoto={this.props.updatePhotoThunkCreator}
				
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		profile: profile(state),
		status: profileStatus(state),
		isAuth: isAuth(state),
		autorizedUserId: userId(state),
		users: getUsers(state),
		followInProgress: getFollowInProgress(state),
		isProfileUpdate: state.profilePage.isProfileUpdate,
		profileFollowed:state.profilePage.profileFollowed,
		usersFollowed: state.usersPage.profileFollowed
	})
}

export default compose(
	connect(mapStateToProps, {
		getProfileThunkCreator,
		getUserStatusThunkCreator,
		updateStatusThunkCreator,
		followThunkCreator,
		unfollowThunkCreator,
		getUsersThunkCreator,
		updatePhotoThunkCreator,
		dataFormThunkCreator, 
		toggleIsProfileUpdate,
		userFollowed,
		followedUser, unfollowedUser,

		
	}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)

