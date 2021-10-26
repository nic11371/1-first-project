import { connect } from "react-redux";
import { followedAC, setUsersAC, unfollowedAC } from "../redux/usersReducer";
import Users from "./users"

const mapStateToProps = (props) => {

	return { 
		users: props.usersPage.users
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
		}
	}
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer