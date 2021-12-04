const GET_SIDEBAR = "network/sidebar/GET_SIDEBAR";
const ADD_FRIENDS = "network/sidebar/ADD_FRIENDS"

const initialState = {
	friends:
		[
			{ id: 1, name: "Nikolay" },
			{ id: 2, name: "Ruslan" },
			{ id: 3, name: "Dima" },
			{ id: 5, name: "Pavel" },
		]
}

const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SIDEBAR:
			return {
				...state, friends: [...state.friends]
			}
		case ADD_FRIENDS: 
		return {
			...state, friends: [...state.friends, {id: 7, name: action.friend}]
		}	
		default: return state
	}

}

export const getSidebarActionCreator = () => ({type: GET_SIDEBAR});
export const addSidebarActionCreator = (friend) => ({type: ADD_FRIENDS, friend});

export default sidebarReducer;