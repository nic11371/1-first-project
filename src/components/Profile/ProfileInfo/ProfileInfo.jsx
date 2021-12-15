import React, { Suspense } from 'react'
import Preloader from '../../Common/Preloader/preloader'
import classes from "./ProfileInfo.module.css"
import ProfileSocial from './ProfileSocial'
import ProfileStatusHook from './ProfileStatusHook'
import Following from '../../Common/Follow/Follow';
import { UserPhoto } from '../../Common/UserPhoto/photo';

const ProfileInfo = React.memo(({ profile, status, updateStatus, user, isOwner, 
	savePhoto, ...props }) => {
	if (!profile) {
		return <Preloader />
	}

	
	const onMainPhotoSelected = (e) => {
		if(e.target.files.length) {
			savePhoto(e.target.files[0])
		} 
	}

	return (
		<div className={classes.ProfileInfo}>
			<div className={classes.descriptionBlock}>
				<div>{profile.fullName}</div>
				<div>
					<UserPhoto photo={profile.photos.large} />
				</div>
				{isOwner && <input type="file" onChange={onMainPhotoSelected} />}
				<ProfileStatusHook status={status} updateStatus={updateStatus} />
				<div>{profile.lookingForAJob}</div>
				<div>{profile.lookingForAJobDescription}</div>
				<div><ProfileSocial profile={profile.contacts} /></div>
				<div>Following:
					<Following followInProgress={props.followInProgress}
						followThunkCreator={props.followThunkCreator}
						unfollowThunkCreator={props.unfollowThunkCreator}
						user={user}
					/>
				</div>
			</div>

		</div>

	)
});

export default ProfileInfo


