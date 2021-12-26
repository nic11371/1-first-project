import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
	getProfileThunkCreator, getUserStatusThunkCreator,
	updatePhotoThunkCreator,
	updateStatusThunkCreator, dataFormThunkCreator
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
	}
 
	componentDidMount() {
		this.updateRefreshProfile()
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.match.params.userId != this.props.match.params.userId) {
		this.updateRefreshProfile()
		} 
	}

	arrayUser = (array) => {
		return array.filter(f => f.id == this.props.match.params.userId)
	}

	render() {
		return (
			<Profile {...this.props}
				isOwner={!this.props.match.params.userId}
			 	profile={this.props.profile} status={this.props.status}
				updateStatus={this.props.updateStatusThunkCreator}
				followInProgress={this.props.followInProgress}
				followThunkCreator={this.props.followThunkCreator}
				unfollowThunkCreator={this.props.unfollowThunkCreator}
				user={this.arrayUser(this.props.user)}
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
		user: getUsers(state),
		followInProgress: getFollowInProgress(state),
		isProfileUpdate: state.profilePage.isProfileUpdate
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
		dataFormThunkCreator
	}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)

