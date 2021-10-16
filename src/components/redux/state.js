let store = {
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
	_callSubscriber() { },
	getState() {
		return this._state;
	},
		subscribe(observe) {
		this._callSubscriber = observe;
	},
	dispatch(action) {
		if(action.type === "ADD-POST") {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				count: 0
			}
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = "";
			this._callSubscriber(this._state);
		}
		else if(action.type === "UPDATE-NEW-POST-TEXT") {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
		else if (action.type === "ADD-MESSAGE") {
			let newMessage = {
				message: this._state.dialogsPage.newMessageText,
			}
			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newMessageText = "";
			this._callSubscriber(this._state);
		}
		else if(action.type === "UPDATE-MESSAGE-TEXT") {
			this._state.dialogsPage.newMessageText = action.newTextMessage;
			this._callSubscriber(this._state);
		}
	}
}
export default store;
//window.store=store;