import { NavLink } from "react-router-dom"
import userPhoto from "../../../assets/img/1.png";
import classes from "./photo.module.css"

export const UserPhoto = ({user, photo, ...props}) => {
return <div>
<NavLink to={'/profile/' + user.id}>
	<img src={photo != null ? photo : userPhoto} alt="" className={classes.userPhoto} />
</NavLink>
</div>
}
