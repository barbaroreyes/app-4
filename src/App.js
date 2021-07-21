import Amplify from 'aws-amplify'
import config from './aws-exports'
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
     <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator (App);
