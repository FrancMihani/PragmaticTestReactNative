import React from 'react'
import { MainHeader } from 'components/headers/MainHeader'
import { FlatList, Text } from 'react-native'
import { TextButton } from 'components/buttons/TextButton'
import { PropsFor } from 'navigation/types'
import useAssets from 'store/hooks/useAssets'

const CryptoTrackerProListScreen = ({ navigation }: PropsFor<'CryptoTrackerProListScreen'>) => {
  const { assets } = useAssets()

  return (
    <>
      <MainHeader title="CryptoTracker Pro" />
      <FlatList data={assets} keyExtractor={val => val} renderItem={({ item }) => <Text>{item}</Text>} />
      <TextButton onPress={() => navigation.navigate('CryptoTrackerProFormScreen')}>+ Add a Cryptocurrency</TextButton>
    </>
  )
}

export default CryptoTrackerProListScreen
