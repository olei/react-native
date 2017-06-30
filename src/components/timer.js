/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'

import Dimensions from 'Dimensions'
const {width, height} = Dimensions.get('window')

export default class Timer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <View style={styles.markBox}>
        <Text style={styles.mark} onPress={this.props.eveFn.bind(this.props.obj, false)}></Text>
        <View style={styles.timer}>
          <Text style={{textAlign: 'center', marginTop: 10, lineHeight: 20, fontSize: 18, color: '#333'}}>设置签到时间</Text>
          <Text style={{textAlign: 'left', paddingLeft: 20, lineHeight: 30, fontSize: 14, color: '#f6a21c', marginBottom: 5}}>不再担心错过签到，设置每天提醒时间</Text>
          <View style={styles.liBox}>
            <Text style={styles.li}>8:00</Text>
            <Text style={styles.li}>10:00</Text>
            <Text style={styles.li}>12:00</Text>
          </View>
          <View style={styles.liBox}>
            <Text style={styles.li}>14:00</Text>
            <Text style={styles.li}>20:00</Text>
            <Text style={styles.li}>不提醒</Text>
          </View>
          <View style={{backgroundColor: '#0a8cdd', width: 260, height: 35,  borderRadius: 6, marginLeft: 20, marginTop: 10}}><Text onPress={this.props.eveFn.bind(this.props.obj, false)} style={{color: '#fff', lineHeight: 24, width: 260, height: 35, textAlign: 'center', backgroundColor: 'rgba(0,0,0,0)'}}>确认</Text></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  markBox: {
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height
  },
  mark: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  timer: {
    width: width * .8,
    height: 200,
    backgroundColor: '#fff',
    position: 'absolute',
    top: height/2 - 200,
    left: width/2 - width*.8/2,
    borderRadius: 6
  },
  liBox: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 12,
    alignItems: 'center',
    flexDirection: 'row'
  },
  li: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cecece',
    textAlign: 'center',
    marginRight: 8,
    lineHeight: 20,
    height: 26,
    fontSize: 14
  }
})