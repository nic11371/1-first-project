import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfileThunkCreator, getUserStatusThunkCreator, 
	updateStatusThunkCreator} from '../../redux/profileReducer'
import {followThunkCreator, unfollowThunkCreator} from '../../redux/usersReducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { isAuth, profile, profileStatus, userId } from './ProfileSelectors';
import { getFollowInProgress, getUsers } from './../Users/usersSelectors';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.autorizedUserId;
			if(!userId) {
				this.props.history.push("/login")
			}
		}
		this.props.getProfileThunkCreator(userId);
		this.props.getUserStatusThunkCreator(userId);

	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status}
			updateStatus={this.props.updateStatusThunkCreator} 
			followInProgress={this.props.followInProgress}
					followThunkCreator={this.props.followThunkCreator}
					unfollowThunkCreator={this.props.unfollowThunkCreator}
					user={this.props.user }
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return({
	profile: profile(state),
	status: profileStatus(state),
	isAuth: isAuth(state),
	autorizedUserId: userId(state),
	user: profile(state),
	followInProgress: getFollowInProgress(state)
})}

export default compose(
	connect(mapStateToProps, {getProfileThunkCreator, 
		getUserStatusThunkCreator, 
		updateStatusThunkCreator,
		followThunkCreator,
		unfollowThunkCreator
	}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)

