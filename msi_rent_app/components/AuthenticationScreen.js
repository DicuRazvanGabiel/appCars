import React from 'react';
import { Text, View, Button } from 'react-native';


//Screen for introducing user and pass 
class AuthenticationScreen extends React.Component {
  
    _logInChengeScreen = () =>{
      this.props.navigation.navigate('App')
    }
    
    render() {
      return (
        <View>
          <Text>Authentication  Screen</Text>
          <Button title="Log in" onPress={this._logInChengeScreen}/>
        </View>
      )
    }
  }

export default AuthenticationScreen