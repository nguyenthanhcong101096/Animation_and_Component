import { View, StyleSheet, ScrollView, Animated } from 'react-native';
import React, { Component } from 'react';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;

export default class ScrollviewAnimatedHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }


  renderHeader() {
    const heightImage = this.state.scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 140, 200],
      outputRange: [1, 0.5, 0],
      extrapolate: 'clamp'
    })

    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [0, -50],
      extrapolate: 'clamp'
    })

    return (
      <Animated.View
        style={[styles.header, this.props.style, { height: heightImage }]}>
        <Animated.Image
          source={require('../image/test.png')}
          resizeMode={'stretch'}
          style={[styles.imageBackGround, { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] }]}>
        </Animated.Image>
      </Animated.View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }])}
          bounces={false}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 200, height: 1400 }}>
            {this.props.children}
          </View>
        </ScrollView>
        {this.renderHeader()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden'
  },

  imageBackGround: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: 200,
    resizeMode: 'cover'
  }
})

