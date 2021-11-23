import { createSelector } from "reselect"

const isAuthSelector = (state) => {
	return state.auth.isAuth
}

export const isAuth = createSelector(isAuthSelector, (isAuth) => {
	return isAuth
})