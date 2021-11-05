import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)
		this._callSubscriber(this._state);
		
	}
}

window.store=store
export default store;
