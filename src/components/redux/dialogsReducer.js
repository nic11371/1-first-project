const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {

	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				message: state.newMessageText,
			}
			state.messages.push(newMessage);
			state.newMessageText = "";
			return state;
		case UPDATE_MESSAGE_TEXT:
			state.newMessageText = action.newTextMessage;
			return state;
		default:
			return state
	}
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageTextActionCreator = (message) =>
	({ type: UPDATE_MESSAGE_TEXT, newTextMessage: message })

export default dialogsReducer;