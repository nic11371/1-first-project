import { connect } from "react-redux";
import { followedAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowedAC } from "../redux/usersReducer";
import UserAPIComponent from "./UsersAPIComponent"

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


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserAPIComponent)

export default UsersContainer