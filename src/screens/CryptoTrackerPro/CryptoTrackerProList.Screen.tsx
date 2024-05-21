import React from 'react'
import { MainHeader } from 'components/headers/MainHeader'
import { FlatList } from 'react-native'
import { TextButton } from 'components/buttons/TextButton'
import { PropsFor } from 'navigation/types'
import useAssets from 'store/selectors/useAssets'
import { Root } from 'store/types'

const CryptoTrackerProListScreen = ({ navigation }: PropsFor<'CryptoTrackerProListScreen'>) => {
  const assets = useAssets() as Root['assets']

  return (
    <>
      <MainHeader title="CryptoTracker Pro" />
      {/*<FlatList data={} renderItem={} />*/}
      <TextButton onPress={() => navigation.navigate('CryptoTrackerProFormScreen')}>+ Add a Cryptocurrency</TextButton>
    </>
  )
}

export default CryptoTrackerProListScreen
