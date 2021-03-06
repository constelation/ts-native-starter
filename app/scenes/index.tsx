import mobx from 'mobx'
import { Provider } from 'mobx-react/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigator, TabNavigator, TabView } from 'react-navigation'

import counter from 'stores/counter'

import Dummy from './Dummy'
import Home from './Home'
import ProfileNavigator from './ProfileNavigator'
import Showcase from './Showcase'

// -- MobX --
// throw an exception on any attempt to modify MobX state outside an action
mobx.useStrict( true )

// log all mobx actions when in development mode
if (__DEV__) {
  mobx.spy( ev => {
    if (ev.type === 'action') {
      /* tslint:disable */
      console.log( ev.name )
      /* tslint:enable */
    }
  })
}

const stores = { counter }

// -- Routes --
// TODO: consider moving Tabs to its own folder
const Tabs = TabNavigator({
  Home: {
    screen: Home,
  },
  ProfileNavigator: {
    screen: ProfileNavigator,
  },
  Showcase: {
    screen: Showcase,
  },
}, {
  lazyLoad: true,
  tabBarComponent: TabView.TabBarBottom, // override Android's default of top
  tabBarOptions: {
    activeTintColor: '#111',
    showIcon: true,
  },
})

const App = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Dummy: {
    screen: Dummy,
  },
}, {
  headerMode: 'none',
  // mode: 'modal',
},
)

export default class Root extends React.Component<void, void> {
  render() {
    return (
      <Provider {...stores} >
        <App cardStyle={styles.card} />
      </Provider>
    )
  }
}

// Kind of a bummer that this style override is necessary to need see the grey default here:
// https://github.com/react-community/react-navigation/blob/master/src/views/Card.js#L81
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
})
