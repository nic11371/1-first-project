let rerenderEntireTree;

let state = {
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
		newMessageText: ""
	},
	profilePage: {
		posts: [
			{ id: 1, message: "Hi, do you do", count: 422 },
			{ id: 2, message: "My name is Nikolay", count: 35 },
			{ id: 3, message: "", count: 0 },
			{ id: 4, message: "", count: 68 }, { message: "", count: 4 },
		],
		newPostText: ""
	},
	sidebar: {
		friends:
			[
				{ id: 1, name: "Nikolay" },
				{ id: 2, name: "Ruslan" },
				{ id: 3, name: "Dima" },
				{ id: 5, name: "Pavel" },
			]

	}

}
window.state=state;
export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		count: 0
	}
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = "";
	rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export let addMessage = () => {
	let newMessage = {
		message: state.dialogsPage.newMessageText,
	}
	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = "";
	rerenderEntireTree(state);
}

export let updateMessageText = (newTextMessage) => {
	state.dialogsPage.newMessageText = newTextMessage;
	rerenderEntireTree(state);
}

export const subscribe = (observe) => {
	rerenderEntireTree = observe;
}

export default state;