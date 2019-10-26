import React from "react";
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export class PasswordTextInput extends React.Component {
  state = {
    hidden: true
  };

  onInputLabelPressed = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render = () => (
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={this.state.hidden}
        {...this.props}
      />
      <TouchableOpacity onPress={this.onInputLabelPressed}>
        <Text>{this.state.hidden ? "Show" : "Hide"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
});
