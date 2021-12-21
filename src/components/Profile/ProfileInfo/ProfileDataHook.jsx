import React, { useState } from 'react'
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';

const ProfileDataHook = React.memo(({ profile, dataFormThunkCreator, isOwner, ...props }) => {

const [editMode, setEditMode] = useState(false);

	const onSubmit = (formData) => {
		dataFormThunkCreator(formData).then(
			() => setEditMode(false)
		)
		
	}
	
	return (<div>
		{editMode ?	<ProfileDataForm profile={profile} onSubmit={onSubmit} 
		initialValues={profile} /> :
		<ProfileData profile={profile} clickActivateMode={() => {setEditMode(true)}} 
		isOwner={isOwner} /> 
		
		}
	</div>)
});

export default ProfileDataHook;


