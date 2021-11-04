import React from "react";
import userPhoto from "./../../assets/img/1.png";
import classes from "./users.module.css";
import { NavLink } from 'react-router-dom';
import axios from "axios";

const Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
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
				<span>
					<div>{u.name}</div>
					<div>
						<NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={classes.userPhoto} />
						</NavLink>
					</div>
					<div>Followed
						{u.followed ? <button onClick={() => {

							axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
								withCredentials: true,
								headers: {
									"API-KEY": "3aade411-572d-4e59-a034-44be6761daea"
								}
							})
								.then(response => {
									
								if (response.data.resultCode === 0) {
										props.unfollowed(u.id)
									}
								})


						}} > Unfollow </button>
							: <button onClick={() => {

								axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
									withCredentials: true,
									headers: {
										"API-KEY": "3aade411-572d-4e59-a034-44be6761daea"
								}
								})
									.then(response => {
									
										if (response.data.resultCode === 0) {
											props.followed(u.id)
										}
									})
									
									
							}}>Follow</button>}
					</div>
					<div>{u.status}</div>
					{/* <div>{u.location.country}
					{u.location.city}</div> */}
				</span>
			</div>
			)
		}

	</div>
}
export default Users