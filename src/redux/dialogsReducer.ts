const ADD_MESSAGE = "network/dialogs/ADD-MESSAGE";
const REMOVE_MESSAGE = "network/dialogs/REMOVE_MESSAGE"

const initialState = {
	
		dialogs: [
			{ id: 1, name: "Nikolay" },
			{ id: 2, name: "Ruslan" },
			{ id: 3, name: "Dima" },
			{ id: 4, name: "Vovan" },
			{ id: 5, name: "Pavel" },
		] as Array<DialogType>,
		messages: [
			{ message: "Hi" }, { message: "How, are you?" }, 
			{ message: "Yes" }, { message: "Goodbay Vovan" }, {}
		] as Array<MessageType>,
		newMessageText: "",
}
export type DialogType = {id:number, name:string}
export type MessageType = {id: number | null, message:string}
export type InitialStateType = typeof initialState; 
const dialogsReducer = (state: InitialStateType = initialState, action:any):InitialStateType => {

	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state, 
				messages: [...state.messages, {id: 7, message: action.newMessageText}],
			}
			case REMOVE_MESSAGE:
			return {
				...state, 
				messages: state.messages.filter(r => r.message != action.userId),
			}
		default:
			return state
	}
}
export type addMessageActionCreatorType = {type: typeof ADD_MESSAGE, newMessageText: string}
export type removeMessageActionCreatorType = {type: typeof REMOVE_MESSAGE, userId: number}
export const addMessageActionCreator = (newMessageText:string):addMessageActionCreatorType =>
 ({ type: ADD_MESSAGE, newMessageText });
 export const removeMessageActionCreator = (userId:number):removeMessageActionCreatorType =>
 ({ type: REMOVE_MESSAGE, userId });

export default dialogsReducer;