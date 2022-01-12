import React from 'react';

const ProfileSocial = ({profile}) => {

return(
	Object.entries(profile).map(([key, value]) => {
		return <div> key={key}
		<b>{key}:</b> {value} 
		</div>
	})
)
}

export default ProfileSocial