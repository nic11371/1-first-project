import { createSelector } from "reselect";

const itializedSelector = (state) => {
	return state.app.initialized;
}

export const initialized = createSelector(itializedSelector, (initialized) => {
	return initialized
})
