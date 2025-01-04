import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './App.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store';
const rootElement = document.getElementById('root');
import 'bootstrap/dist/css/bootstrap.min.css'
const root = createRoot(rootElement);
root.render(
 <StrictMode>
  <Provider store={store}>
  <App />
 </Provider>,
 </StrictMode>,
);