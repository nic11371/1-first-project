import { FC } from "react"
import { UserArrayType } from "../../Users/User"

export type PropsType = {
	user: any
	followInProgress: Array<number>
	followThunkCreator: (userId:number) => void
	unfollowThunkCreator: (userId:number) => void
}
//user:Array<UserArrayType>
const Following:FC<PropsType> = ({ user, followInProgress,
	followThunkCreator, unfollowThunkCreator }) => {

	const followInProgressDisabled = () => {
		return followInProgress.some(id => id === user.id)
	}

	return (user.followed ? <button disabled={followInProgressDisabled()}
		onClick={() => {
			unfollowThunkCreator(user.id)
		}} > Unfollow </button>
		: <button disabled={followInProgressDisabled()}
			onClick={() => {
				followThunkCreator(user.id)
			}}
		>Follow</button>)
}

export default Following

