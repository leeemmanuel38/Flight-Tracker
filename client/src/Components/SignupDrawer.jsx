import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import App from '../App.js'; 



const styles = {
  navBar: {'top': AppBar.height}
}

export class SignupDrawer extends React.Component {

  constructor() {
    super();
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            zDepth={10}
            title="New User Registration"
            onClick={this.handleToggle} className="material-icons"
            
            />
          <Drawer
            open={this.state.open}
            width={200}
            containerStyle={styles.navBar}>
            <MenuItem onClick={() => App.history.push('/')}>Home Page</MenuItem>
            <MenuItem onClick={() => App.hisotry.push('/signup')}>Log-in</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }

} 

export default SignupDrawer;