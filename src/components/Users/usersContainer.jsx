import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, getUsersThunkCreator,
 followThunkCreator, unfollowThunkCreator } from "../../redux/usersReducer";
import Users from "./Users.jsx";
import Preloader from "../Common/Preloader/preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage,  getFetching, getFollowInProgress,
	 getPageSize, getTotalUsersCount, getUsers} from "./usersSelectors";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
	}

	render() {
		console.log("USERS")
		return <>
		{this.props.isFetching ? <Preloader /> : null }
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				followInProgress={this.props.followInProgress}
				followThunkCreator={this.props.followThunkCreator}
				unfollowThunkCreator={this.props.unfollowThunkCreator}

			/>
		</>
	}
}


const mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getFetching(state),
		followInProgress: getFollowInProgress(state),
	}
}

export default compose(
	connect(mapStateToProps, 
{ setCurrentPage, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator}),
	withAuthRedirect
)(UsersContainer)

