import React from 'react'
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../Common/FormsControls/FormsControls';
import styles from "../../Common/FormsControls/FormsControls.module.css"

 const ProfileDataForm = ({profile, handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit}>
		<div><b>FullName</b>
		{createField("FullName", "fullName", Input, [])}
		</div>
			<div><b>lookingForAJob</b>
			{createField("", "lookingForAJob", Input, [], {type: "checkbox"})}
			</div>
			<div><b>lookingForAJobDescription</b>
			{createField("My Professional Skills", "lookingForAJobDescription", Textarea, [])}
			</div>
			<div><b>About me</b>
			{createField("About me", "aboutMe", Textarea, [])}
			</div>
			
			<div>
				<b>Contacts</b>
				{Object.keys(profile.contacts).map(key => {
				return <div key={key}>
					 <b>{key}:
					{createField(key, "contacts." + key.toLocaleLowerCase() , Input, [])}</b>
				</div>})}
			</div>
			{error && <div className={styles.formSummaryError}>{error}</div>}
			<div>
				<button>Save</button>
			</div>
		</form>

	)
}

const ProfileDataReduxForm = reduxForm({ form: 'profileEdit' })(ProfileDataForm)

export default ProfileDataReduxForm










