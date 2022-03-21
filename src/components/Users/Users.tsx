import React, { FC } from "react";
import classes from "./users.module.css";
import Paginator from "../Common/Paginator/Paginator"
import User from "./User";
import { UsersArrayType } from "../../Types/types";

export type PropsUsersType = {
	totalUsersCount:number,
	pageSize: number,
	currentPage: number,
	onPageChanged: (pageNumber:any) => void,
	portionSize: number,	
	users: Array<UsersArrayType>,
	followInProgress: Array<number>,
	followThunkCreator: (userId:number) => void,
	unfollowThunkCreator: (userId:number) => void,
}
const Users: FC<PropsUsersType> = React.memo(({ totalUsersCount, pageSize, portionSize, currentPage,
	onPageChanged, users, ...props }) => {

	return <div className={classes.Users}>
		<Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} 
		portionSize={portionSize} currentPage={currentPage} onPageChanged={onPageChanged} />
		{
			users.map(u => <User user={u}
				key={u.id}
				followInProgress={props.followInProgress}
				followThunkCreator={props.followThunkCreator}
				unfollowThunkCreator={props.unfollowThunkCreator} />
				
			)
		}

	</div>
});
export default Users