import React from 'react'
import useAssets from 'store/hooks/useAssets'
import useStyles from 'styles/useStyles'
import { FlatList, SafeAreaView } from 'react-native'
import { MainHeader } from 'components/headers/MainHeader'
import { TextButton } from 'components/buttons/TextButton'
import ListItem from 'screens/CryptoTrackerPro/components/ListItem'

import { PropsFor } from 'navigation/types'

const CryptoTrackerProListScreen = ({ navigation }: PropsFor<'CryptoTrackerProListScreen'>) => {
  const { assets } = useAssets()
  const styles = useStyles({
    button: { marginBottom: 10 },
    container: { marginHorizontal: 20 },
  })

  return (
    <>
      <MainHeader title="CryptoTracker Pro" />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.container}
        data={assets}
        keyExtractor={val => val}
        renderItem={({ item }) => <ListItem asset={item} />}
      />
      <SafeAreaView>
        <TextButton style={styles.button} onPress={() => navigation.navigate('CryptoTrackerProFormScreen')}>
          + Add a Cryptocurrency
        </TextButton>
      </SafeAreaView>
    </>
  )
}

export default CryptoTrackerProListScreen
