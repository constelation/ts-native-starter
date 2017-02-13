import Animate_, { AnimationConfig, emitAnimationEvent } from 'constelation-animate_'
// import Event_ from 'constelation-event_'
import Image from 'constelation-image'
import ScrollView from 'constelation-scroll-view'
import Style_ from 'constelation-style_'
import View from 'constelation-view'
import React from 'react'
import Event from 'shared/Event'
import Style from 'shared/Style'
import BoxSequence from './_/BoxSequence'

const box1Animation = {
  from: {
    opacity: 0.2,
    width: 20,
    height: 20,
  },
  to: {
    opacity: 1,
    width: 200,
    height: 200,
  },
}

interface IState {
  startLogoAnimation: boolean,
}

export default class Showcase extends React.Component<void, IState> {
  static navigationOptions = {
    tabBar: {
      label: 'Showcase',
      icon: ({ tintColor }: { tintColor: string }) => (
        <Image
          source={require('images/icon-lab.png')}
          tintColor={tintColor}
        />
      ),
    },
  }

  state = {
    startLogoAnimation: false,
  }

  componentDidMount() {
    // Note the global event emitted
    // Not the best example. but showing that it is possible
    setTimeout(
      () => {
        emitAnimationEvent('BOX_SEQUENCE')
      },
      1000,
    )
  }

  handleStartLogoAnimation = () => {
    this.setState({ startLogoAnimation: true })
  }

  handleEndLogoAnimation = () => {
    this.setState({ startLogoAnimation: false })
  }

  render() {
    return (
      <AnimationConfig timingMultiplier={10} >
        <ScrollView
          grow
          marginTop={65}
          marginBottom={50}
        >

          <BoxSequence />

          <Event
            pressEffect='opacity'
            onPress={this.handleStartLogoAnimation}
          >
            <Animate_
              start={this.state.startLogoAnimation}
              repeat={2}
              direction='alternate'
              animation={`
              0: {
                opacity: 0.5,
                translateX: 0,
                rotate: '0deg',
              },
              0.5: {
                opacity: 0,
                translateX: 100,
                rotate: '180deg',
              },
              1: {
                opacity: 1,
                translateX: 200,
                rotate: '360deg',
              },
            `}
              duration={800}
              easing='linear'
              onEnd={this.handleEndLogoAnimation}
            >
              <Image source={require('images/logo.png')} />
            </Animate_>
          </Event>

          <Style_
            backgroundColor='lightgrey'
            opacity={0.5}
            rotate='123deg'
            translateX={40}
          >
            <View horizontal height={200} >
              <Style_ backgroundColor='red' >
                <View width={50} />
              </Style_>
              <Style_ backgroundColor='green' >
                <View width={50} />
              </Style_>
              <Style_ backgroundColor='blue' >
                <View width={50} />
              </Style_>
            </View>
          </Style_>

          <Style
            backgroundColor='grey'
            opacity={0.5}
          >
            <Style_ backgroundColor='red' >
              <View height={50} />
            </Style_>
            <Style_ backgroundColor='green' >
              <View height={50} />
            </Style_>
            <Style_ backgroundColor='blue' >
              <View height={50} />
            </Style_>
          </Style>

        </ScrollView>
      </AnimationConfig>
    )
  }
}
