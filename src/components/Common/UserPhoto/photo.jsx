import userPhoto from "../../../assets/img/1.png";

export const UserPhoto = ({photo}) => {
return (
	<img src={photo != null ? photo : userPhoto} alt=""  />
)
}
