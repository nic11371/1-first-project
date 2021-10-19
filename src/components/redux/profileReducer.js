const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
	posts: [
		{ id: 1, message: "Hi, do you do", count: 422 },
		{ id: 2, message: "My name is Nikolay", count: 35 },
		{ id: 3, message: "", count: 0 },
		{ id: 4, message: "", count: 68 }, { message: "", count: 4 },
	],
	newPostText: "",
	
}

const profileReducer = (state = initialState, action) => {
	
	switch (action.type) {
				case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				count: 0
			}
			let copyState = {...state};
			copyState.posts = [...state.posts]
			copyState.posts.push(newPost);
			copyState.newPostText = "";
			return copyState;
		case UPDATE_NEW_POST_TEXT:{
			let copyState = {...state};
			copyState.newPostText = action.newText;
			return copyState;
		}
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;

