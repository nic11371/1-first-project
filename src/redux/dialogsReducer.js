const ADD_MESSAGE = "network/dialogs/ADD-MESSAGE";
const REMOVE_MESSAGE = "network/dialogs/REMOVE_MESSAGE"

const initialState = {
	
		dialogs: [
			{ id: 1, name: "Nikolay" },
			{ id: 2, name: "Ruslan" },
			{ id: 3, name: "Dima" },
			{ id: 4, name: "Vovan" },
			{ id: 5, name: "Pavel" },
		],
		messages: [
			{ message: "Hi" }, { message: "How, are you?" }, 
			{ message: "Yes" }, { message: "Goodbay Vovan" }, {}
		],
		newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {

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

export const addMessageActionCreator = (newMessageText) =>
 ({ type: ADD_MESSAGE, newMessageText });
 export const removeMessageActionCreator = (userId) =>
 ({ type: REMOVE_MESSAGE, userId });

export default dialogsReducer;