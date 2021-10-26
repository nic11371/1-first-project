import React from "react";
import classes from "./users.module.css"
import * as axios from "axios"
import userPhoto from "./../../assets/img/1.png"

class Users extends React.Component {

	componentDidMount() {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return <div className={classes.Users}>
			{
				this.props.users.map(u => <div key={u.id}>
					<div>{u.name}</div>
					<div>
						<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={classes.userPhoto} />
					</div>
					<div>Followed
						{u.followed ? <button onClick={() => { this.props.unfollowed(u.id) }} > Unfollow </button>
							: <button onClick={() => { this.props.followed(u.id) }}>Follow</button>}
					</div>
					<div>{u.status}</div>
					{/* <div>{u.location.country}
					{u.location.city}</div> */}
				</div>)
			}

		</div>
	}
}

export default Users