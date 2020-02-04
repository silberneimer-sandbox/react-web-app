import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './applications/app/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
        region: 'XX-XXXX-X',
        userPoolId: 'XX-XXXX-X_abcd1234',
        userPoolWebClientId: 'XX-XXXX-X_abcd1234',
    }
});
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
