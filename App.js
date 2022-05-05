import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

import Home from './screens/Home'
import Detail from './screens/Detail'
import Map from './screens/Map'
import Favorite from './screens/Favorite'
import Search from './screens/Search'
import Account from './screens/Account'
import colors from './assets/colors/colors'
import { icons } from './assets/datas/Contant'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

Entypo.loadFont()
FontAwesome.loadFont()

const TabNavigater = () => {
  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary
      }}
    >
      <Tab.Screen
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({color}) => <FontAwesome name='cutlery' size={24} color={color}/>,
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({color}) => <FontAwesome name='search' size={24} color={color}/>,
        }}
      />
      <Tab.Screen 
        name='Favorite' 
        component={Favorite}
        options={{
          tabBarIcon: ({color}) => <FontAwesome name='heart' size={24} color={color}/>,
        }}
      />
      <Tab.Screen 
        name='Account' 
        component={Account} 
        options={{
          tabBarIcon: ({color}) => <FontAwesome name='user' size={24} color={color}/>,
        }}
      />
    </Tab.Navigator>
  )
}

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TabNavigater' component={TabNavigater} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='Map' component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App