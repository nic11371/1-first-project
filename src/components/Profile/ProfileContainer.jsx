import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfileThunkCreator} from '../../redux/profileReducer'
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

	componentDidMount() {
		this.props.getProfileThunkCreator(this.props.match.params.userId)
	}

	render() {
	
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainerComponent)
