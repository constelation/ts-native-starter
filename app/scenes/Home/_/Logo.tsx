import Animate_ from 'constelation-animate_'
import Event_ from 'constelation-event_'
import Image from 'constelation-image'
import View from 'constelation-view'
import React from 'react'

import Button from 'shared/Button'

// const EVENTS = {
//   END_HERO: 'HOME_END_HERO',
// }

// Showing controls of Animate_ with refs

export default class Logo extends React.Component<void, void> {
  node: Animate_
  rotating: boolean
  // rotating: boolean = true

  handleToggleRotation = () => {
    if (this.rotating === true) {
      this.node.stop()
      this.rotating = false
    }
    else {
      this.node.start()
      this.rotating = true
    }
  }

  setRef = (node: Animate_) => {
    this.node = node
  }

  render() {
    return (
      <Event_
        onPress={this.handleToggleRotation}
        pressEffect='opacity'
      >
        <Animate_
          ref={this.setRef}
          repeat
          // Note what happens if useNativeDriver is commented when opening modal
          useNativeDriver
          animation={`
            0: {
              rotate: '0deg',
            },
            1: {
              rotate: '360deg',
            }
          `}
          duration={20000}
          easing='linear'
          // startEvent={EVENTS.END_HERO}
        >
          <Image source={require('images/logo.png')} />
        </Animate_>
      </Event_>
    )
  }
}
