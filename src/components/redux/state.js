let store = {
	_rerenderEntireTree() { },

	_state: {
		dialogsPage: {
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
			
		},
		profilePage: {
			posts: [
				{ id: 1, message: "Hi, do you do", count: 422 },
				{ id: 2, message: "My name is Nikolay", count: 35 },
				{ id: 3, message: "", count: 0 },
				{ id: 4, message: "", count: 68 }, { message: "", count: 4 },
			],
			newPostText: "",
			
		},
		sidebar: {
			friends:
				[
					{ id: 1, name: "Nikolay" },
					{ id: 2, name: "Ruslan" },
					{ id: 3, name: "Dima" },
					{ id: 5, name: "Pavel" },
				]

		},

	},
	addMessage() {
		let newMessage = {
			message: this._state.dialogsPage.newMessageText,
		}
		this._state.dialogsPage.messages.push(newMessage);
		this._state.dialogsPage.newMessageText = "";
		this._rerenderEntireTree(this._state);
	},
	updateMessageText(newTextMessage) {
		this._state.dialogsPage.newMessageText = newTextMessage;
		this._rerenderEntireTree(this._state);
	},
	addPost() {
			let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			count: 0
		}
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = "";
		this._rerenderEntireTree(this._state);
	},
	updateNewPostText(newText) {
	
		this._state.profilePage.newPostText = newText;
		this._rerenderEntireTree(this._state);
	},
	getState() {
		return this._state;
	},
	
	subscribe(observe) {
		this._rerenderEntireTree = observe;
	}
}
export default store;
//window.store=store;