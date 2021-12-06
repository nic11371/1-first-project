import { createSelector } from "reselect"

const profileSelector = (state) => {
	return state.profilePage.profile
}

export const profile = createSelector(profileSelector, (profile) => {
	return profile
} )

export const profileStatusSelector = (state) => {
	return state.profilePage.status
}

export const profileStatus = createSelector(profileStatusSelector, (status) => {
	return status
} )

const isAuthSelector = (state) => {
	return state.auth.isAuth
}

export const isAuth = createSelector(isAuthSelector, (isAuth) => {
	return isAuth
} )

const userIdSelector = (state) => {
	return state.auth.userId
}

export const userId = createSelector(userIdSelector, (autorizedUserId) => {
	return autorizedUserId
})


