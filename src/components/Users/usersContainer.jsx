import React from "react";
import { connect } from "react-redux";
import { followed, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollowed } from "../../redux/usersReducer";
import Users from "./Users.jsx";
import Preloader from "../Common/Preloader/preloader";
import { usersAPI } from "../../api/api";


class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)
			usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.items);
				this.props.setTotalUsersCount(response.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true)
		usersAPI.getUsers(pageNumber, this.props.pageSize)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.items)
			})
	}

	render() {
		return <>
		{this.props.isFetching ? <Preloader /> : null }
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				followed={this.props.followed}
				unfollowed={this.props.unfollowed}
			/>
		</>
	}
}

const mapStateToProps = (state) => {

	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}



export default connect(mapStateToProps, 
	{
		followed, unfollowed, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
	})(UsersContainer)

