import React from 'react';

const ProfileSocial = ({profile}) => {

return(
	Object.entries(profile).map(([key, value]) => {
		return <div> 
		<b>{key}:</b> {value} 
		</div>
	})
)
}

export default ProfileSocial