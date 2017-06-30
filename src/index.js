/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import Timer from './components/timer'

import Dimensions from 'Dimensions'
const {width, height} = Dimensions.get('window')

class RNDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mark: false,
      focus: [],
      ad: 'https://atths.jzb.com/website/fe/pub_images/scores/link.png',
      cycle: 1,  //当前处于第 周期
      day: 2,    //签到总天数
      sign_continue: 2, //已签到天数
      total_score: 23, //用户元宝数
      today_score: 3//获得元宝数
    }
  }

  componentWillMount () {
    console.log(`${width}--${height}`)
    fetch('https://wechat-dev.jzb.com/live/index/lbt', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((json) => {
      this.setState({
        focus: json
      })
      // console.log(this.state.focus)
    })
  }

  componentDidMount () {}

  componentWillUnmount () {}

  timerFn (f) {
    this.setState({
      mark: f
    })
  }

  render () {
    let mark = (
      <Text></Text>
    )
    if (this.state.mark) {
      mark = (
        <Timer obj={this} eveFn={this.timerFn} />
      )
    }
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('../images/headBg.jpg')}>
          <View style={styles.overlay}>
            <View style={styles.overlayHeader}>
              <View style={styles.back}>
                <Text style={styles.backStyle}>后退</Text>
              </View>
              <View style={styles.title}>
                <Text style={styles.titStyle}>签到</Text>
              </View>
              <View style={styles.record}>
                <Text style={styles.reStyle}>元宝记录</Text>
              </View>
            </View>
            <View style={styles.ru}>
              <View style={styles.ruBox}>
                <Text style={styles.txt1}>已签到</Text>
                <View style={styles.line}></View>
                <Text style={styles.txt2}><Text style={styles.txt3}>+6</Text>元宝</Text>
              </View>
            </View>
            <Text style={styles.butt} onPress={this.timerFn.bind(this, true)}>签到提醒</Text>
            <Text style={{fontSize: 14, lineHeight: 25, color: '#fff'}}>元宝: {this.state.total_score}</Text>
          </View>  
        </Image>
        <Text style={{color: '#6a6a6a', fontSize: 14, lineHeight: 35}}>已连续签到<Text style={styles.or}>{this.state.sign_continue}</Text>天，再签<Text style={styles.or}>7</Text>天领取额外奖励</Text>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.backgroundImage} style={{width: 240, height:240}} source={{uri: 'http://fe.jzb.com/pub_images/scores/e443483ab4bda08833f425fa2f8b9544.png'}}>
            <Text style={{color: '#6a3811', fontSize: 26, fontWeight: '700', textAlign: 'center', marginTop: 175, backgroundColor: 'rgba(0,0,0,0)', lineHeight: 40}}>+6元宝</Text>
          </Image>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{flex: 1, backgroundColor: '#ff8625', color: '#fff', fontSize: 14, width: 50, height: 20, textAlign: 'center', borderRadius: 20, lineHeight: 16}}>小提示</Text>
          <Text style={{flex: 1, color: '#6b6b6b', fontSize: 12, lineHeight:16, marginLeft: 5}}>参与回帖，可额外获得1个元宝</Text>
        </View>
        <View style={styles.ad}>
          <Image style={{width: width, height: 77}} source={{uri: this.state.ad}}></Image>
        </View>
        {mark}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#dbf1fe',
    alignItems: 'center'
  },
  backgroundImage: {
    width: width,
    height: 220,
    resizeMode: 'stretch'
  },
  overlay: {
     backgroundColor: 'rgba(0,0,0,0)',
     alignItems: 'center'
  },
  overlayHeader: {
    width: width,
    height: 40,
    marginTop: 20,
    flexDirection: 'row'
  },
  back: {
    flex: 1
  },
  backStyle: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 27,
    marginLeft: 15
  },
  title: {
    flex: 1,
    alignItems: 'center'
  },
  titStyle: {
    fontSize: 18,
    color: '#fff',
    lineHeight: 27
  },
  record: {
    flex: 1
  },
  reStyle: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 27,
    textAlign: 'right',
    paddingRight: 15
  },
  ru: {
    width: 106,
    height: 106,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 53,
    marginTop: 20
  },
  ruBox: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: '#53c4ee',
    margin: 6
  },
  txt1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderTopColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0)',
    marginTop: 20
  },
  line: {
    backgroundColor: '#fff',
    height: 2,
    marginTop: 6,
    width: 80,
    marginLeft: 7
  },
  txt2: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    backgroundColor: 'rgba(255,255,255,0)'
  },
  txt3: {
    color: '#ffc64a'
  },
  butt: {
    position: 'absolute',
    top: 75,
    right: 15,
    fontSize: 12,
    fontWeight: 'bold',
    width: 66,
    height: 20,
    lineHeight: 15,
    textAlign: 'center',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10
  },
  or: {
    color: '#ff6c2c'
  },
  flBox: {
    width: width * .9,
    marginTop: 20,
    flexDirection: 'row'
  },
  flBox2: {
    width: width * .65,
    marginTop: 10,
    flexDirection: 'row'
  },
  fl: {
    height: 90,
    flex: 1,
    marginLeft: -3,
    borderWidth: 3,
    borderColor: '#c9eafe',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  flTxtR: {
    textAlign: 'center',
    color: '#ff621d',
    lineHeight: 25
  },
  flTxtN: {
    textAlign: 'center',
    color: '#a9a9a9',
    lineHeight: 25
  },
  signR: {
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#ffc64a',
    borderColor: '#ff9c0e',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 6
  },
  signN: {
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#dcdcdc',
    borderColor: '#cdcdcd',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 6
  },
  signTexR: {
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#fff',
    lineHeight: 26,
    fontWeight: '600',
    fontSize: 16,
    shadowOffset: { width:0, height:0 },
    shadowColor: '#c00',
    shadowOpacity: 1,
    shadowRadius: 1
  },
  signTexN: {
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#fff',
    lineHeight: 26,
    fontWeight: '600',
    fontSize: 16,
    shadowOffset: { width:0, height:0 },
    shadowColor: '#8e8e8e',
    shadowOpacity: 1,
    shadowRadius: 1
  },
  okBox: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#ff7437',
    marginLeft: 25
  },
  okTxt: {
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#fff',
    fontSize: 9,
    textAlign: 'center',
    lineHeight: 13,
    transform: [{rotateZ: '-30deg'}]
  },
  ad: {
    width: width,
    backgroundColor: '#c00',
    position: 'absolute',
    bottom: 0,
    left: 0
  },
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
});

//  项目名要有所对应
AppRegistry.registerComponent('RNDemo', () => RNDemo);