import dialogsReducer, { addMessageActionCreator, removeMessageActionCreator } from "./dialogsReducer"

const state = {
			messages: [
			{ message: "Hi" }, { message: "How, are you?" }, { message: "Yes" }, { message: "Goodbay Vovan" }, {}
		]
}

it ("length of message should be incremented", () => {
	const newState = dialogsReducer(state, addMessageActionCreator("Hi is anonimous"));
	expect(newState.messages.length).toBe(6)
})

it ("message of new message should be correct", () => {
	const newState = dialogsReducer(state, addMessageActionCreator("Hi is anonimous"));
	expect(newState.messages[5].message).toBe("Hi is anonimous")
})

it ("length of message should be decremented", () => {
	const newState = dialogsReducer(state, removeMessageActionCreator("Hi"));
	expect(newState.messages.length).toBe(4)
});

