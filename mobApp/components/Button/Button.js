import React, { Component } from 'react';
import { Button, TouchableOpacity, Text } from 'react-native';
import propTypes from 'prop-types';

import colors from '../../Util/colors';
import style from './Button.style';

class Btn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.touchable === false) {
      return (
        <>
          <Button
            title={this.props.title}
            onPress={this.props.onPress}
            disabled={this.props.disabled}
            color={this.disabled ? this.props.disabledColor : this.props.color}
          >
            {this.props.children}
          </Button>
        </>
      );
    } else {
      return (
        <>
          <TouchableOpacity
            onPress={this.props.onPress}
            color={this.props.color}
            disabled={this.props.disabled}
            style={{
              ...style.touchable,
              backgroundColor: this.props.disabled
                ? this.props.disabledColor
                : this.props.color
            }}
          >
            <Text>{this.props.title}</Text>
            {this.props.children}
          </TouchableOpacity>
        </>
      );
    }
  }
}

Btn.defaultProps = {
  title: 'BUTTON',
  color: colors.cyan,
  disabledColor: colors.gray,
  disabled: false,
  touchable: false
};

Btn.propTypes = {
  title: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
  accessibilityLabel: propTypes.string,
  color: propTypes.string,
  disabled: propTypes.bool,
  touchable: propTypes.bool,
  opacityDepth: propTypes.number,
  opacityDuration: propTypes.number
};

export default Btn;
