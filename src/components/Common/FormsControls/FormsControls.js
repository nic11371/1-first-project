import React from 'react'
import styles from './FormsControls.module.css'

export const FormsControls = ({input, meta, children, ...props}) => {

	const hasError = meta.touched && meta.error 
	return (
		<div className={styles.formsControls + " " + (hasError && styles.error)}>
			<div>
			{React.isValidElement && React.cloneElement(children,{...input, ...props})}
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

export const Textarea = (props) => {
	return <FormsControls {...props}><textarea /></FormsControls>
}

export const Input = (props) => {
	return <FormsControls {...props}><input /></FormsControls>
}