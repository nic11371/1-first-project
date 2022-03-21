import { FC } from "react";
import userPhoto from "../../../assets/img/1.png";
import { UsersArrayType } from "../../../Types/types";
import Preloader from '../Preloader/preloader'

export type PhotoType = {
	photo: string
	isPhotoLoading: boolean
	user: Array<UsersArrayType>
}
export const UserPhoto:FC<PhotoType> = ({photo, isPhotoLoading}) => {
	if(isPhotoLoading) {
		return <Preloader/>
	}
return (
	<img src={photo != null ? photo : userPhoto} alt=""  />)
}
