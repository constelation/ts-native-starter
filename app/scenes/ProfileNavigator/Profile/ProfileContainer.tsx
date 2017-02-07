// @flow
// Imports {{{

import Event_ from 'constelation-event_'
import Text from 'constelation-text'
import View from 'constelation-view'
import { inject, observer } from 'mobx-react/native'
import React from 'react'

import { Counter } from 'stores/counter'

import Profile from './Profile'

interface IProps {
  counter: Counter,
}

interface INavigatorProps {
  navigate: Function,
}

@inject('counter') @observer
export default class ProfileContainer extends React.Component<IProps, void> {
  static navigationOptions = {
    title: () => `Profile`,

    header: (props: INavigatorProps) => {
      return {
        right: (
          <Event_
            /* tslint:disable-next-line:jsx-no-lambda */
            onPress={() => props.navigate('ProfileDetail')}
            pressEffect='opacity'
          >
            <View marginRight={20}>
              <Text>Detail</Text>
            </View>
          </Event_>
        ),
      }
    },
  }
  handleIncreaseCounter = () => {
    this.props.counter.increase()
  }

  render() {
    return (
      <Profile
        value={this.props.counter.value}
        onIncreaseCounter={this.handleIncreaseCounter}
      />
    )
  }
}
