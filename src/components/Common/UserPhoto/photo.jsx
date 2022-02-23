import userPhoto from "../../../assets/img/1.png";
import Preloader from '../../Common/Preloader/preloader'

export const UserPhoto = ({photo, isPhotoLoading}) => {
	if(isPhotoLoading) {
		return <Preloader/>
	}
return (
	<img src={photo != null ? photo : userPhoto} alt=""  />)
}
