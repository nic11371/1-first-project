import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {

	componentDidMount() {
		
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = 20577;
		}
		profileAPI.getProfile(userId).then(response => {
				this.props.setUserProfile(response);
			})
	}

	render() {
	
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
