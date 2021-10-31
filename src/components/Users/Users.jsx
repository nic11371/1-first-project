import React from "react";
import userPhoto from "./../../assets/img/1.png"
import classes from "./users.module.css"

const Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for(let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return <div className={classes.Users}>

		<div className={classes.pageNumber}>
			{pages.map(p => {

				return <span className={props.currentPage === p && classes.selectedPage}
					onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
			})}
		</div>
		{
			props.users.map(u => <div key={u.id}>
				<div>{u.name}</div>
				<div>
					<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={classes.userPhoto} />
				</div>
				<div>Followed
					{u.followed ? <button onClick={() => { props.unfollowed(u.id) }} > Unfollow </button>
						: <button onClick={() => { props.followed(u.id) }}>Follow</button>}
				</div>
				<div>{u.status}</div>
				{/* <div>{u.location.country}
					{u.location.city}</div> */}
			</div>)
		}

	</div>
}
export default Users