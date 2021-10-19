const initialState = {
	friends:
		[
			{ id: 1, name: "Nikolay" },
			{ id: 2, name: "Ruslan" },
			{ id: 3, name: "Dima" },
			{ id: 5, name: "Pavel" },
		]

}


const sidebarReducer = (state = initialState, action) => {
	return {
		...state,
		friends: [...state.friends]
	}
}

export default sidebarReducer;