const Following = ({ user, followInProgress,
	followThunkCreator, unfollowThunkCreator }) => {

	const followInProgressDisabled = () => {
		return followInProgress.some(id => id === user.id)
	}

	return (true ? <button disabled={followInProgressDisabled()}
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