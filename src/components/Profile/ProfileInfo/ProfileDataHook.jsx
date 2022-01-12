import React, { useState } from 'react'
import { toggleIsProfileUpdate } from '../../../redux/profileReducer';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';

const ProfileDataHook = React.memo(({ profile, dataFormThunkCreator, 
	isOwner, isProfileUpdate, error, ...props }) => {

const [editMode, setEditMode] = useState(false);

// useEffect( () => {
// 	dataFormThunkCreator(formData)
// }, [dataFormThunkCreator(formData)]) 

	const onSubmit = (formData, isProfileUpdate) => {
		dataFormThunkCreator(formData);
	return isProfileUpdate && setEditMode(false);
	}

	return (<div>
		{editMode ?	<ProfileDataForm profile={profile} onSubmit={onSubmit} 
		initialValues={profile}/> :
		<ProfileData profile={profile} clickActivateMode={() => {setEditMode(true)}} 
		isOwner={isOwner} /> 
		
		}
	</div>)
});

export default ProfileDataHook;


