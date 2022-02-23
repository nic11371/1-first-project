import React, { useEffect, useState } from "react";

export const ProfileStatusHook = (props) => {
	
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)
	

	useEffect( () => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		if(props.isOwner){
		return setEditMode(true)}
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status)
	}

	const onChangeStatus = (e) => {
		setStatus(e.target.value)
	}

		return (
			<div>
				{!editMode &&
					<div>
						<span onDoubleClick={activateEditMode}>
							{props.status || "Input status"}</span>
					</div>
				}
				{editMode &&
					<div>
						<input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode} 
							value={status} />
					</div>
				}
			</div>
		)

}

export default ProfileStatusHook