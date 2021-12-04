import appReducer, { initializedSuccess } from "./appReducer"


const state = {
	initialized: false
}

it("initialized should be true", () => {
	const newState = appReducer(state, initializedSuccess(true));
	expect(newState.initialized).toBe(true)
})

