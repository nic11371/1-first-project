import react from "React"
import { usersAPI } from "../../api/api";


export const unfollowContainer = (props) => {
	return usersAPI.unfollow(props.userId)
	.then(response => {
		
	if (response.resultCode === 0) {
			props.unfollowed(props.userId)
		}
	})
}

export const followContainer = (props) => {
	return usersAPI.follow(props.userId)
	.then(response => {
		
	if (response.resultCode === 0) {
			props.followed(props.userId)
		}
	})
}

