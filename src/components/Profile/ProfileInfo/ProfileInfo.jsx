import React from 'react'
import Preloader from '../../Common/Preloader/preloader'
import classes from "./ProfileInfo.module.css"
import ProfileSocial from './ProfileSocial'
import ProfileStatusHook from './ProfileStatusHook'
import Following from '../../Common/Follow/Follow';
import { UserPhoto } from '../../Common/UserPhoto/photo';

const ProfileInfo = React.memo(({ profile, status, updateStatus, ...props }) => {
	if (!profile) {
		return <Preloader />
	}
	return (
		<div className={classes.ProfileInfo}>

			{/* <div>
				<img src="https://images8.alphacoders.com/790/790793.jpg" alt="" />
			</div> */}

			<div className={classes.descriptionBlock}>
				<div>{profile.fullName}</div>
				<UserPhoto user={props.user}
					photo={props.user.photos.large} />
				<ProfileStatusHook status={status} updateStatus={updateStatus} />
				<div>{profile.lookingForAJob}</div>
				<div>{profile.lookingForAJobDescription}</div>
				<div><ProfileSocial profile={profile.contacts} /></div>
				<div>Following:
					{/* <Following followInProgress={props.followInProgress}
					followThunkCreator={props.followThunkCreator}
					unfollowThunkCreator={props.unfollowThunkCreator}
					userId={props.user } */}
					{/* /> */}
				</div>
			</div>
		</div>

	)
});

export default ProfileInfo
