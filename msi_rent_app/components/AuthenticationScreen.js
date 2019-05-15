import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import StatusBarBackground from './car_list_screen/StatusBarBackground';

//Screen for introducing user and pass 
class AuthenticationScreen extends React.Component {
  
  _logInChengeScreen = () =>{
    this.props.navigation.navigate('App')
  }
  
  render() {
    return (
      <Container >
      <StatusBarBackground />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
        <View style={styles.buttonLogINContainer} >
          <Button title="Log in" onPress={this._logInChengeScreen}/>
        </View>
        
      </Content>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonLogINContainer: {
    padding: 15 
  }
});

export default AuthenticationScreen