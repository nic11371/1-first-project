import React from 'react'

const ProfileData = React.memo(({ profile, clickActivateMode, isOwner, ...props }) => {

	return (<div>
		{isOwner && <button onClick={clickActivateMode}>Edit Profile</button>} 
		<div><b>FullName:</b> {profile.fullName}</div>
		<div><b>lookingForAJob:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
		<div><b>lookingForAJobDescription:</b> {profile.lookingForAJobDescription}</div>
		<div><b>About me:</b> {profile.aboutMe}</div>
	</div>)
});

export default ProfileData;


