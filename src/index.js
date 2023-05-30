import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import store from './store'
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd'
import reportWebVitals from './reportWebVitals';
import { HTML5Backend } from 'react-dnd-html5-backend'


const root = ReactDOM.createRoot(document.getElementById('root'));

function updateColorScheme(isNightMode) {

  const root = document.documentElement;

  if (isNightMode) {
    root.style.setProperty('--color-primary', '#645FC6');
    root.style.setProperty('--background-1', '#2C2C38');
    root.style.setProperty('--background-2', '#21212D');
    root.style.setProperty('--main-text-color', '#FFFFFF');
    root.style.setProperty('--secondary-text-color', '#717581');
  } else {
    root.style.setProperty('--color-primary', '#645FC6');
    root.style.setProperty('--background-1', '#FFFFFF');
    root.style.setProperty('--background-2', '#F3F7FF');
    root.style.setProperty('--main-text-color', '#000000');
    root.style.setProperty('--secondary-text-color', '#5c5c5c');
  }
}

root.render(
  <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <React.StrictMode>
        <App changeTheme={updateColorScheme} />
      </React.StrictMode>
    </Provider>
  </DndProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// reportWebVitals(console.log)
updateColorScheme(JSON.parse(localStorage.getItem('nightMode')))