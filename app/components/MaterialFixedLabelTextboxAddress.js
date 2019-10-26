import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default class MaterialFixedLabelTextbox extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD:app/components/MaterialFixedLabelTextboxAddress.js
    this.state = { value: "" };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(text) {
    this.setState({ value: text });
=======
    this.state = {value: ""};
>>>>>>> 11da095af0aa0fe3c5d012270295c99e995c3917:app/components/MaterialFixedLabelTextbox.js
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
<<<<<<< HEAD:app/components/MaterialFixedLabelTextboxAddress.js
        <TextInput
          style={styles.inputStyle}
          placeholder={this.props.placeholder}
        />
=======
        <TextInput style={styles.inputStyle} onChangeText={this.props.reff} placeholder={this.props.placeholder}/>
>>>>>>> 11da095af0aa0fe3c5d012270295c99e995c3917:app/components/MaterialFixedLabelTextbox.js
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  label: {
    color: "#000",
    alignSelf: "flex-start",
    opacity: 0.5,
    paddingTop: 16,
    paddingBottom: 8,
    fontSize: 16,
    // fontFamily: "arial",
    lineHeight: 16
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    paddingLeft: 30,
    fontSize: 16,
    // fontFamily: "arial",
    lineHeight: 16
  }
});
