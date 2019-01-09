import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';

class Settings extends Component {
  prankHandler = () => {
    console.log('subject successfully pranked');
  }

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
          />
          <Button title="Forgot That Password?"     style={{marginTop:20}} onPress={this.prankHandler} />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
