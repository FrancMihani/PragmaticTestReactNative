import React from 'react'
import { MainHeader } from 'components/headers/MainHeader'
import { FlatList } from 'react-native'
import { TextButton } from 'components/buttons/TextButton'

const CryptoTrackerProListScreen = () => {
  return (
    <>
      <MainHeader title="CryptoTracker Pro" />
      {/*<FlatList data={} renderItem={} />*/}
      <TextButton>+ Add a Cryptocurrency</TextButton>
    </>
  )
}

export default CryptoTrackerProListScreen
