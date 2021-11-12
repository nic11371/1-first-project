import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfileThunkCreator, getUserStatusThunkCreator, 
	updateStatusThunkCreator} from '../../redux/profileReducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	componentDidMount() {
		this.props.getProfileThunkCreator(this.props.match.params.userId);
		this.props.getUserStatusThunkCreator(this.props.match.params.userId);

	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status}
			updateStatus={this.props.updateStatus} />
		)
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status
})

export default compose(
	connect(mapStateToProps, {getProfileThunkCreator, getUserStatusThunkCreator, 
		updateStatusThunkCreator}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)

