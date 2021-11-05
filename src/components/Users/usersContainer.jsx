import React from "react";
import { connect } from "react-redux";
import { followed, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollowed } from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users.jsx";
import Preloader from "../Common/Preloader/preloader";


class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, 
		{
			withCredentials: true
		})
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, 
		{
			withCredentials: true
		})
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
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

