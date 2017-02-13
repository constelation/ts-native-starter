import Style_, { IProps } from 'constelation-style_/index.native'
import View from 'constelation-view/index.native'
import React from 'react'

export default class Event extends React.PureComponent<IProps, void> {
  render() {
    const {children, ...props} = this.props

    return (
      <Style_ {...props}>
        <View>{children}</View>
      </Style_>
    )
  }
}