import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, getUsersThunkCreator,
 followThunkCreator, unfollowThunkCreator } from "../../redux/usersReducer";
import Preloader from "../Common/Preloader/preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage,  getFetching, getFollowInProgress,
	 getPageSize, getPortionSize, getTotalUsersCount, getUsers} from "./usersSelectors";
import { PureComponent } from "react";
import { UsersArrayType } from "../../Types/types";
import Users from "./Users";
import { AppStateType } from "../../redux/reduxStore";

export type PropsType =  MapStatePropsType & MapDispatchPropsType & TOwnProps

export type MapStatePropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	portionSize: number
	users: Array<UsersArrayType>
	isFetching:boolean
	followInProgress: Array<number>
}

export type MapDispatchPropsType = {
	followThunkCreator: (userId:any) => void,
	unfollowThunkCreator: (userId:any) => void,
	getUsersThunkCreator:(currentPage:any,pageSize:any, portionSize:any ) =>
	 void
	setCurrentPage: (pageNumber:number) => void
}

export type TOwnProps = {

}

class UsersContainer extends PureComponent<PropsType> {
	componentDidMount() {
		const {currentPage, pageSize, portionSize} = this.props
		this.props.getUsersThunkCreator(currentPage, pageSize, portionSize)
	}

	onPageChanged = (pageNumber:number) => {
		const {pageSize, portionSize} = this.props;
		this.props.setCurrentPage(pageNumber);
		this.props.getUsersThunkCreator(pageNumber, pageSize, portionSize)
	}

	render() {
		return <>
		{this.props.isFetching ? <Preloader /> : null }
			<Users totalUsersCount={this.props.totalUsersCount}
				portionSize={this.props.portionSize}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				followInProgress={this.props.followInProgress}
				followThunkCreator={this.props.followThunkCreator}
				unfollowThunkCreator={this.props.unfollowThunkCreator}
			/>
		</>
	}
}

const mapStateToProps = (state:AppStateType): MapStatePropsType => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		portionSize: getPortionSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getFetching(state),
		followInProgress: getFollowInProgress(state),
	}
}

export default compose(
	connect<MapStatePropsType,MapDispatchPropsType, TOwnProps, AppStateType>(mapStateToProps, 
{ getUsersThunkCreator, unfollowThunkCreator, followThunkCreator, setCurrentPage}),
	withAuthRedirect
)(UsersContainer)

