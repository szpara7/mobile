import { Text, View, TextInput } from 'react-native';
import React, { Component } from 'react';

import Button from '../../components/Button/Button';
import style from '../../styles/Login';
import colors from '../../Util/colors';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      rememberMe: false
    };

    this.login = this.login.bind(this);
  }

  login() {
    console.log('ASD');
  }

  render() {
    return (
      <View>
        <TextInput
          style={style.container}
          value={this.state.login}
          onChange={login => this.setState({ login })}
        />
        <Button title='Zaloguj' color={colors.black} onPress={this.login} />
      </View>
    );
  }
}
