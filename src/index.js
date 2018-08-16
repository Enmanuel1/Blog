import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import App from './App';
import firebase from 'firebase'
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyBzwWZ0oNzt9QkOJ7NpQGG1HUHY0K0HjRw",
  authDomain: "punto-y-coma-6fa96.firebaseapp.com",
  databaseURL: "https://punto-y-coma-6fa96.firebaseio.com",
  projectId: "punto-y-coma-6fa96",
  storageBucket: "punto-y-coma-6fa96.appspot.com",
  messagingSenderId: "242987080138"
});

render(
	<App/>,
	document.getElementById('root')
);
registerServiceWorker();
