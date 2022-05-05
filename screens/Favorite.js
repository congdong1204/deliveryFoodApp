import React from 'react'
import {
  View,
  Text
} from 'react-native'
import colors from '../assets/colors/colors'

const Favorite = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, color: colors.primary}}>Favorite Screen</Text>
    </View>
  )
}

export default Favorite