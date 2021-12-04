import Profile from "../components/Profile/Profile";
import profileReducer, { addPostActionCreator, removePostActionCreator,
setStatus, setUserProfile } from "./profileReducer"


const state = {
	posts: [
		{ id: 1, message: "Hi, do you do", count: 422 },
		{ id: 2, message: "My name is Nikolay", count: 35 },
		{ id: 3, message: "", count: 0 },
		{ id: 4, message: "", count: 68 }
	],
}

it('length of posts should be incremented', () => {
	let action = addPostActionCreator("Hello")
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(5)
})

it('message of new post should be correct', () => {
	let action = addPostActionCreator("Hello")
	let newState = profileReducer(state, action);
	expect(newState.posts[4].message).toBe("Hello")
})

it('length of posts should be decremented', () => {
	let action = removePostActionCreator(1)
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(3)
})

it('after deleting length should`t be decrement if id is incorrect' , () => {
	let action = removePostActionCreator(1000)
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(4)
})

it('status should be set' , () => {
	let action = setStatus("Hi")
	let newState = profileReducer(state, action);
	expect(newState.status).toBe("Hi")
})

it('user profile should be set' , () => {
	let action = setUserProfile(Profile)
	let newState = profileReducer(state, action);
	expect(newState.profile).toBe(Profile)
})



