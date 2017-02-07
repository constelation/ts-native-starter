import Event_ from 'constelation-event_'
import Style_ from 'constelation-style_'
import Text from 'constelation-text'
import View from 'constelation-view'
import React from 'react'
import {
  StatusBar,
} from 'react-native'

interface IProps {
  navigation: {
    goBack: Function,
  },
}

export default class Dummy extends React.Component<IProps, void> {
  handlePress = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View
        grow
      >
        <StatusBar
          animated
          barStyle='light-content'
        />

        <Event_
          onPress={this.handlePress}
        >
          <Style_
            backgroundColor='black'
          >
            <View
              grow
              center
              padding={10}
            >
              <Text
                size={20}
                color='white'
              >
                HAI
              </Text>
            </View>
          </Style_>
        </Event_>
      </View>
    )
  }
}
