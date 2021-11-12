import React from 'react';

const ProfileSocial = (props) => {

return(
	Object.entries(props.profile).map(([key, value]) => {
		return (key + " - " + value + "; ")
	})
)
}

export default ProfileSocial