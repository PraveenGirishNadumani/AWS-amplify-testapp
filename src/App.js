// import logo from './logo.svg';
import './App.css';
// import React from "react";
import Amplify from "aws-amplify";
import awsConfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
// import { withAuthenticator } from "aws-amplify-react";
import { Auth } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsConfig);

const onSignOutClick = async () => {
  await Auth.signOut()
      .then(data => {
        // console.log('success',data);
        window.location.reload(false);
      })
      .catch();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Hola, sign in success</h2>
        <button onClick={onSignOutClick}>
          Log out
        </button>
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);
