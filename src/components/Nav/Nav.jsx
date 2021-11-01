import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'
import FriendItemContainer from './FriendsItem/friendsItemContainer'

const Nav = (props) => {

	return (
		<nav className={classes.nav}>
			<div className={classes.item} >
				<NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
			</div>
			<div className={`${classes.item} ${classes.sidebar}`}>
				<NavLink to="/friends" activeClassName={classes.activeLink} 
				className={classes.friends}>Friends  </NavLink>
			</div>
			<div className={classes.item}>
				<FriendItemContainer />
			</div>
			<div className={classes.item}>
				<NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
			</div>
		</nav>
	)
}

export default Nav
