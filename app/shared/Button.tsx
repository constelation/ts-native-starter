import Event_ from 'constelation-Event_'
import React from 'react'
import Style_ from 'constelation-Style_'
import Text from 'constelation-Text'
import View from 'constelation-View'

interface Props {
  marginTop: number,
  label: string,
  onPress: Function,
}

export default class Button extends React.Component<Props, void> {
  render() {
    return (
      <Event_
        onPress={this.props.onPress}
        pressEffect='opacity'
      >
        <Style_
          borderColor='black'
          borderWidth={1}
          borderRadius={1}
        >
          <View
            center
            paddingVertical={5}
            paddingHorizontal={10}
            marginTop={this.props.marginTop}
          >
            <Text color='black'>
              {this.props.label}
            </Text>
          </View>
        </Style_>
      </Event_>
    )
  }
}