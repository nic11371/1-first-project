const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

const initialState = {
	users: [],
	pageSize: 15,
	totalUsersCount: 0,
	currentPage: 2
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOWED:
			return {
				...state,
				users: state.users.map(u => {
					if(u.id === action.userId) {
						return {...u, followed:true}
					}
					return u
				})				
			}
		case UNFOLLOWED:
			return {
				...state,
				users: state.users.map(u => {
					if(u.id === action.userId){
						return {...u, followed: false}
					}
					return u
				})
			}
		case SET_USERS: {
			
		return {...state, users: action.users }
}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalUsersCount: action.count}
		}
		default:
			return state;
	}
}

export const followedAC = (userId) => ({ type: FOLLOWED, userId })
export const unfollowedAC = (userId) => ({ type: UNFOLLOWED, userId})
export const setUsersAC = (users) => ({ type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export default usersReducer;

