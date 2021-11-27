import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./Header.module.css"

const Header = React.memo((props) => {
	return (
		<div className={classes.header}>
			<img src="https://img2.freepng.ru/20180509/gvw/kisspng-globe-earth-clip-art-5af366a46f1587.271956161525900964455.jpg" alt="" />
			<div className={classes.loginBlock}>
			{props.isAuth ? 
			<div>{props.login} <button onClick={props.logoutAuthThunkCreator}>Log Out</button></div> 
			: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</div>
	)
});

export default Header
