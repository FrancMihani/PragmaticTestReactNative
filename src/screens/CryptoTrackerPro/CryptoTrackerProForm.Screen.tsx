import React, { useState } from 'react'
import useStyles from 'styles/useStyles'
import useTheme from 'theme/useTheme'
import { SafeAreaView, View } from 'react-native'
import { Title } from 'components/text/Title'
import { TextButton } from 'components/buttons/TextButton'
import { TextInput } from 'components/TextInput'

import { PropsFor } from 'navigation/types'

const CryptoTrackerProFormScreen = ({ navigation }: PropsFor<'CryptoTrackerProListScreen'>) => {
  const { colors } = useTheme()
  const styles = useStyles({
    backButton: { textAlign: 'left' },
    m20: { margin: 20 },
    container: { justifyContent: 'center', height: '80%' },
    title: { color: colors.onSurface },
    textInput: { marginVertical: 20 },
  })

  const [value, setValue] = useState('')

  return (
    <SafeAreaView style={styles.m20}>
      <TextButton style={styles.backButton} onPress={navigation.goBack}>
        {'< Back to list'}
      </TextButton>
      <View style={styles.container}>
        <Title style={styles.title}>Add a Cryptocurrency</Title>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          placeholder="  Use a name or ticker symbol..."
        />
      </View>
    </SafeAreaView>
  )
}

export default CryptoTrackerProFormScreen
