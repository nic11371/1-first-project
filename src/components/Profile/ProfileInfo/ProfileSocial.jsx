import React from 'react';

const ProfileSocial = ({profile}) => {

return(
	Object.entries(profile).map(([key, value]) => {
		return (key + " - " + value + "; ")
	})
)
}

export default ProfileSocial