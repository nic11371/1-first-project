import { FriendsType } from '../Types/types';
const GET_SIDEBAR = "network/sidebar/GET_SIDEBAR";
const ADD_FRIENDS = "network/sidebar/ADD_FRIENDS"

const initialState = {
	friends:
		[
			{ id: 1, name: "Nikolay" },
			{ id: 2, name: "Ruslan" },
			{ id: 3, name: "Dima" },
			{ id: 5, name: "Pavel" },
		] as Array<FriendsType>
}
export type InitialStateType = typeof initialState;
const sidebarReducer = (state = initialState, action:any) => {
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
export type AddSidebarActionCreatorType = {type: typeof ADD_FRIENDS, friend:Array<FriendsType>}
export type GetSidebarActionCreatorType = {type: typeof GET_SIDEBAR}
export const getSidebarActionCreator = (): GetSidebarActionCreatorType =>
 ({type: GET_SIDEBAR});
export const addSidebarActionCreator = (friend:Array<FriendsType>): AddSidebarActionCreatorType =>
 ({type: ADD_FRIENDS, friend});

export default sidebarReducer;