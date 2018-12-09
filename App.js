import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollViewAnimatedHeader } from './lib/components';

import { Scale, Opacity, SlideRight } from './lib/components/animated'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  modal() {
    if (this.state.modal) {
      return (
        <SlideRight >
          <View style={{ backgroundColor: 'red', padding: 15, width: '100%', overflow: 'scroll' }}>
            <Text>Nguyễn thành công</Text>
            <Text>Nguyễn thành công</Text>
            <Text>Nguyễn thành công</Text>
            <Text>Nguyễn thành công</Text>
            <Text>Nguyễn thành công</Text>
          </View>
        </SlideRight>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text >Nguyễn thành công</Text>
        <TouchableOpacity
          onPress={() => { this.setState({ modal: true }) }}>
          <Text>Press Modal</Text>
        </TouchableOpacity>

        {this.modal()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
