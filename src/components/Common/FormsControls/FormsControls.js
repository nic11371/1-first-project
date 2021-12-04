import React from 'react'
import { Field } from 'redux-form'
import styles from './FormsControls.module.css'

export const FormsControls = ({ input, meta: { touched, error }, children, ...props }) => {

	const hasError = touched && error
	return (
		<div className={styles.formsControls + " " + (hasError && styles.error)}>
			<div>
				{React.isValidElement && React.cloneElement(children, { ...input, ...props })}
			</div>
			{hasError && <span>{error}</span>}
		</div>
	)
}

export const Textarea = (props) => {
	return <FormsControls {...props}><textarea /></FormsControls>
}

export const Input = (props) => {
	return <FormsControls {...props}><input /></FormsControls>
}

export const createField = (placeholder, name,
	component, validate, props = {}, text = "") => <div> <Field placeholder={placeholder}
		name={name}
		component={component} validate={validate} {...props} /> {text} </div>
