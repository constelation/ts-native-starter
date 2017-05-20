import Animate_ from 'constelation-animate_'
import Event_ from 'constelation-event_'
import Image from 'constelation-image'
import View from 'constelation-view'
import React from 'react'

import Button from 'shared/Button'
import Logo from './_/Logo'

const EVENTS = {
  END_HERO: 'HOME_END_HERO',
}

interface IProps {
  navigation: {
    navigate: Function,
  }
}

export default class Home extends React.Component<IProps, void> {
  static navigationOptions = {
    tabBar: {
      label: 'Home',
      icon: ({ tintColor }: { tintColor: string }) => (
        <Image
          source={require('images/icon-home.png')}
          tintColor={tintColor}
        />
      ),
    },
  }

  handleShowFullScreenModal = () => {
    this.props.navigation.navigate('Dummy')
  }

  handleShowFullScreenModalScene = () => {
    // TODO use custom Transition to support modal transition here
    // see CardStack https://github.com/react-community/react-navigation/blob/master/src/views/CardStack.js
    // and TransitionConfigs https://github.com/react-community/react-navigation/blob/master/src/views/TransitionConfigs.js
    this.props.navigation.navigate('Dummy')
  }

  render() {
    return (
      <View
        center
        grow
      >
        <Animate_
          start
          animation={`
            0: {
              translateY: 100,
              scale: 1
            },
            1: {
              translateY: 0,
              scale: 1.3
            }
          `}
          duration={400}
          delay={700}
          easing='out'
          onEndEvent={EVENTS.END_HERO}
        >
          <View>
            <Logo />
          </View>
        </Animate_>

        <Animate_
          startOnEvent={EVENTS.END_HERO}
          animation='fadeIn'
          duration={300}
        >
          <View>
            <Button
              marginTop={60}
              label='Full screen Detail scene'
              onPress={this.handleShowFullScreenModal}
            />
            <Button
              marginTop={30}
              label='Full screen Modal scene'
              onPress={this.handleShowFullScreenModalScene}
            />
          </View>
        </Animate_>

      </View>
    )
  }
}
