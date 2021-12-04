import { connect } from 'react-redux';
import { getSidebarActionCreator } from '../../../redux/sidebarReducer';
import FriendsItem from "./friendsItem"

let mapStateToProps = (state) => {
	return {
		sidebar: state.sidebar
	}
}

const FriendItemContainer = connect(mapStateToProps, getSidebarActionCreator)(FriendsItem)

export default FriendItemContainer