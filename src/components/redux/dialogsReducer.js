const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const initialState = {
	
		dialogs: [
			{ id: 1, name: "Nikolay" },
			{ id: 2, name: "Ruslan" },
			{ id: 3, name: "Dima" },
			{ id: 4, name: "Vovan" },
			{ id: 5, name: "Pavel" },
		],
		messages: [
			{ message: "Hi" }, { message: "How, are you?" }, { message: "Yes" }, { message: "Goodbay Vovan" }, {}
		],
		newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {



	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state, 
				messages: [...state.messages, {id: 7, message: state.newMessageText}],
				newMessageText: "",
			}
		case UPDATE_MESSAGE_TEXT:
			return {
			...state,
			newMessageText: action.newTextMessage
		}
		default:
			return state
	}
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageTextActionCreator = (message) =>
	({ type: UPDATE_MESSAGE_TEXT, newTextMessage: message })

export default dialogsReducer;