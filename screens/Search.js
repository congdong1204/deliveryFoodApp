import React from 'react'
import {
  View,
  Text
} from 'react-native'
import colors from '../assets/colors/colors'

const Search = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, color: colors.primary}}>Search Screen</Text>
    </View>
  )
}

export default Search