const Following = ({ user, userId, followInProgress,
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

