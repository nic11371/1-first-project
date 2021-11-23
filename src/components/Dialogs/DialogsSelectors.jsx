import { createSelector } from "reselect"

const dialogsPageSelector = (state) => {
	return state.dialogsPage
}

export const dialogsPage = createSelector(dialogsPageSelector, (dialogsPage) => {
	return dialogsPage
})

