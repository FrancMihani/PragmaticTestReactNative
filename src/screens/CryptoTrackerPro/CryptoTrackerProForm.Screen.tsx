import React, { useState } from 'react'
import useStyles from 'styles/useStyles'
import useTheme from 'theme/useTheme'
import useDebounce from 'hooks/useDebounce'
import useAssetsService from 'services/assets/useAssetsService'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { Title } from 'components/text/Title'
import { TextButton } from 'components/buttons/TextButton'
import { TextInput } from 'components/TextInput'
import { SubmitButton } from 'components/buttons/SubmitButton'

import { BAR_STYLE } from 'types/enums'
import { PropsFor } from 'navigation/types'

const CryptoTrackerProFormScreen = ({ navigation }: PropsFor<'CryptoTrackerProListScreen'>) => {
  const { colors, isDarkMode } = useTheme()
  const styles = useStyles({
    backButton: { textAlign: 'left' },
    m20: { margin: 20 },
    container: { justifyContent: 'center', height: '80%' },
    title: { color: colors.onSurface },
    textInput: { marginVertical: 20 },
    submitButton: { marginLeft: 'auto' },
  })

  const [value, setValue] = useState('')
  const slug = useDebounce(value)
  const { data, isPending, isError } = useAssetsService().useFindOne(slug)

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={isDarkMode ? BAR_STYLE.LightContent : BAR_STYLE.DarkContent}
      />
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
          <SubmitButton disabled={isPending || isError} style={styles.submitButton}>
            Add
          </SubmitButton>
        </View>
      </SafeAreaView>
    </>
  )
}

export default CryptoTrackerProFormScreen
