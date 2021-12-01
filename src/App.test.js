import { Provider } from 'react-redux';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, div
  );

  ReactDOM.unmountComponentAtNode(div);
});
	
