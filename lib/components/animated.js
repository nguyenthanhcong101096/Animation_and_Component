import React, { Component } from 'react';
import { StyleSheet, Animated, Easing, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
this.animatedValue = new Animated.Value(0)

const handlAnimation = () => {
  Animated.timing(this.animatedValue, {
    toValue: 1,
    duration: 500,
    easing: Easing.bounce
  }).start()
}

// animation scale
export const Scale = (props) => {
  handlAnimation()
  const scale = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ scale }] }
      ]}>
      {props.children}
    </Animated.View>
  )
}


// animation opacity
export const Opacity = (props) => {
  handlAnimation()
  const opacity = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })
  return (
    <Animated.View
      style={{ opacity }}>
      {props.children}
    </Animated.View>
  )
}

// animation slide right
export const SlideRight = (props) => {
  handlAnimation()
  const marginRight = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [width, 0],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View
      style={{ marginRight }}>
      {props.children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderRadius: 5,
    width: width - 32
  }
})
