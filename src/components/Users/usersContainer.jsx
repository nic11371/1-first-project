import React from "react";
import { connect } from "react-redux";
import { followedAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowedAC } from "../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users.jsx";


class UsersContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {

				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return <Users totalUsersCount={this.props.totalUsersCount} 
							pageSize={this.props.pageSize} 
							currentPage={this.props.currentPage}
							onPageChanged={this.onPageChanged}
							users={this.props.users}
							followed={this.props.followed}
							unfollowed={this.props.unfollowed}

		/>
	}
}

const mapStateToProps = (state) => {

	return { 
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage 
	}
}

const mapDispatchToProps = (dispatch) => {
	
	return {
		followed: (userId) => {
			dispatch(followedAC(userId))
		},
		unfollowed: (userId) => {
			dispatch(unfollowedAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		}
 	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
