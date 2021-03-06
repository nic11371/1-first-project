import React from 'react'
import Preloader from '../../Common/Preloader/preloader'
import classes from "./ProfileInfo.module.css"
import ProfileSocial from './ProfileSocial'
import ProfileStatusHook from './ProfileStatusHook'
import Following from '../../Common/Follow/Follow';
import { UserPhoto } from '../../Common/UserPhoto/photo';
import ProfileDataHook from './ProfileDataHook'

const ProfileInfo = React.memo(({ profile, status, updateStatus, user, isOwner,
	savePhoto, onClick, dataFormThunkCreator, isProfileUpdate, toggleIsProfileUpdate, isPhotoLoading,
	  ...props }) => {
	if (!profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}



	return (
		<div className={classes.ProfileInfo}>
			<div className={classes.descriptionBlock}>
				<div>
					<UserPhoto photo={profile.photos.large} isPhotoLoading={isPhotoLoading} />
				</div>
				{isOwner && <input type="file" onChange={onMainPhotoSelected} />}
				
				<ProfileStatusHook status={status} updateStatus={updateStatus} isOwner={isOwner}/>
				<ProfileDataHook profile={profile} onClick={onClick} isOwner={isOwner} 
					dataFormThunkCreator={dataFormThunkCreator} isProfileUpdate={isProfileUpdate}
					toggleIsProfileUpdate={toggleIsProfileUpdate}
				/>

				<div><ProfileSocial profile={profile.contacts} /></div>
				{!isOwner && <div>Following:
					{user.map(p => <Following followInProgress={props.followInProgress}
						followThunkCreator={props.followThunkCreator}
						unfollowThunkCreator={props.unfollowThunkCreator}
						user={p}
					/>)}
					
				</div>}
				
			</div>

		</div>

	)
});

export default ProfileInfo


