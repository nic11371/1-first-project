import sidebarReducer, { addSidebarActionCreator, getSidebarActionCreator } from "./sidebarReducer"


const state = {
	friends:
		[
			{ id: 1, name: "Nikolay" },
			{ id: 2, name: "Ruslan" },
			{ id: 3, name: "Dima" },
			{ id: 5, name: "Pavel" },
		]
}

it ("length of sidebar should be incremented", () => {
	const newState = sidebarReducer(state, addSidebarActionCreator({id: 8, name: "Vladimir"}));
	expect(newState.friends.length).toBe(5) 
})

it ("current length of sidebar should be get", () => {
	const newState = sidebarReducer(state, getSidebarActionCreator());
	expect(newState.friends.length).toBe(4) 
})
