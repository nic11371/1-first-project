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
let copyState = {...state}
copyState.friends = [...state.friends]
	return copyState;
}

export default sidebarReducer;