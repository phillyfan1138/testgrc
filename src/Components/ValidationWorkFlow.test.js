import React from 'react';
import ReactDOM from 'react-dom';
import {ValidationFlow} from './ValidationWorkFlow';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


it('renders ValidationFlow without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider>
    <ValidationFlow 
      step={0}
      contents={[{text:"text", title:"title"}]} 
      handleStepChange={()=>{}}     
    />
  </MuiThemeProvider>, div);
});