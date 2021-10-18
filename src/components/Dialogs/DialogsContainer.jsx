import React from 'react'
import StoreContext from '../../StoreContext';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = () => {

	return (
		<StoreContext.Consumer> 
		{
			(store) => {
				let state = store.getState().dialogsPage;
				let addMessage = () => {
					store.dispatch(addMessageActionCreator());
				}

				let changeMessage = (message) => {
					store.dispatch(updateMessageTextActionCreator(message));
				}
					return <Dialogs addMessage={addMessage} changeMessage={changeMessage}
					dialogsPage={state}
				/>
			}
		}

		</StoreContext.Consumer>
	)
}

export default DialogsContainer
