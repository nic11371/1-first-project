import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfileThunkCreator, getUserStatusThunkCreator, 
	updateStatusThunkCreator} from '../../redux/profileReducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { isAuth, profile, profileStatus, userId } from './ProfileSelectors';

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
			updateStatus={this.props.updateStatusThunkCreator} />
		)
	}
}

const mapStateToProps = (state) => {
	return({
	profile: profile(state),
	status: profileStatus(state),
	isAuth: isAuth(state),
	autorizedUserId: userId(state)
})}

export default compose(
	connect(mapStateToProps, {getProfileThunkCreator, 
		getUserStatusThunkCreator, 
		updateStatusThunkCreator
	}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)

