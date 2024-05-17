import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import CryptoTrackerProListScreen from 'screens/CryptoTrackerPro/CryptoTrackerProList.Screen'
import CryptoTrackerProFormScreen from 'screens/CryptoTrackerPro/CryptoTrackerProForm.Screen'

import { RootScreensNavigationProps } from 'navigation/types'

const RootStack = createNativeStackNavigator<RootScreensNavigationProps>()

const Navigation = () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="CryptoTrackerProListScreen" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="CryptoTrackerProListScreen" component={CryptoTrackerProListScreen} />
      <RootStack.Screen name="CryptoTrackerProFormScreen" component={CryptoTrackerProFormScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
)

export default Navigation
