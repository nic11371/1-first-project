import React from "react";
import classes from "./users.module.css";
import Paginator from "./../Common/Paginator/Paginator"
import User from "./User";

const Users = React.memo(({ totalUsersCount, pageSize, portionSize, currentPage,
	onPageChanged, users, ...props }) => {

	return <div className={classes.Users}>
		<Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} 
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