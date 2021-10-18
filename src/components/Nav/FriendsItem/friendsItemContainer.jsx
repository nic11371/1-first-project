import { connect } from 'react-redux';
import FriendsItem from "./friendsItem"

let mapStateToProps = (state) => {
	return {
		sidebar: state.sidebar
	}
}

const FriendItemContainer = connect(mapStateToProps)(FriendsItem)

export default FriendItemContainer