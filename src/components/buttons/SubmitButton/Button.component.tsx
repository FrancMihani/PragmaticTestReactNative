import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import useStyles from 'components/buttons/SubmitButton/Button.styles'

import { TextProps } from 'react-native/Libraries/Text/Text'

export const ButtonComponent = (props: TextProps) => {
  const styles = useStyles()

  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
      <Text {...props} style={styles.text} onPress={undefined} />
    </TouchableOpacity>
  )
}
