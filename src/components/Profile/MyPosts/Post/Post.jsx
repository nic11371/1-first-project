import React from 'react'
import classes from "./Post.module.css"

const Post = (props) => {
	return (
					<div className={classes.item}>
					<img src="https://w-dog.ru/wallpapers/1/44/330229991618348/bengalskij-xishhnik-tigr.jpg" alt="" />
						
						{ props.message }
						<span>like {props.count}</span>
					</div>
					
	)
}

export default Post
