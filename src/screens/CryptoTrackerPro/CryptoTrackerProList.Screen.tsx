import React from 'react'
import useAssets from 'store/hooks/useAssets'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { MainHeader } from 'components/headers/MainHeader'
import { TextButton } from 'components/buttons/TextButton'
import ListItem from 'screens/CryptoTrackerPro/components/ListItem'

import { PropsFor } from 'navigation/types'

const CryptoTrackerProListScreen = ({ navigation }: PropsFor<'CryptoTrackerProListScreen'>) => {
  const { assets } = useAssets()
  const { bottom } = useSafeAreaInsets()

  return (
    <>
      <MainHeader title="CryptoTracker Pro" />
      <FlatList data={assets} keyExtractor={val => val} renderItem={({ item }) => <ListItem asset={item} />} />
      <TextButton style={{ bottom }} onPress={() => navigation.navigate('CryptoTrackerProFormScreen')}>
        + Add a Cryptocurrency
      </TextButton>
    </>
  )
}

export default CryptoTrackerProListScreen
