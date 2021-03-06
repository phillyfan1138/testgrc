import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

it('renders Login without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider>
    <Login 
        username="username" 
        user={{
                userType:"type",
                cn:"testuser"
            }}
        password="pswd"
        handleLogin={()=>{}}
    />
    </MuiThemeProvider>, div);
});