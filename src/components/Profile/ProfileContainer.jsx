import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
	getProfileThunkCreator, getUserStatusThunkCreator,
	updatePhotoThunkCreator,
	updateStatusThunkCreator, dataFormThunkCreator, toggleIsProfileUpdate, userFollowed,
	followedUser, unfollowedUser, userFollowedGlobal
} from '../../redux/profileReducer'
import {
	followThunkCreator, unfollowThunkCreator,
	getUsersThunkCreator,
} from '../../redux/usersReducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { isAuth, profile, profileStatus, userId } from './ProfileSelectors';
import { getFollowInProgress, getUsers } from '../Users/usersSelectors';
import { useEffect } from 'react';

export const ProfileContainer = (props) => {
	
	const updateRefreshProfile = () => {
		let userId = props.match.params.userId;
		if (!userId) {
			userId = props.autorizedUserId;
			if (!userId) {
				props.history.push("/login")
			}
		}
		
		// props.getUsersThunkCreator()
		props.getProfileThunkCreator(userId);
		props.getUserStatusThunkCreator(userId);
		//!перебирает всех пользователей из users. нужно исправить и выдавать пользователей порционо
		// props.users
		// 	.map(u => {
		// 		if (+userId == u.id) {
		// 			props.userFollowed(u);
		// 			props.userFollowedGlobal(u)
		// 		}
		// 	});
	}

	useEffect(() => {
		updateRefreshProfile()
	})
	
		return (
			<Profile {...props}
				isOwner={!props.match.params.userId}
				profile={props.profile} status={props.status}
				updateStatus={props.updateStatusThunkCreator}
				followed={props.users.followed}
				followInProgress={props.followInProgress}
				followThunkCreator={props.followThunkCreator}
				unfollowThunkCreator={props.unfollowThunkCreator}
				userId={props.match.params.userId}
				users={props.profileFollowed}
				savePhoto={props.updatePhotoThunkCreator}
				isPhotoLoading={props.isPhotoLoading}
			/>
		)
	
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
		profileFollowed: state.profilePage.profileFollowed,
		usersFollowed: state.usersPage.profileFollowed,
		isPhotoLoading: state.profilePage.isPhotoLoading
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
		followedUser, unfollowedUser, userFollowedGlobal


	}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)

