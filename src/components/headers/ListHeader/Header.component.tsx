import React from 'react'
import { StatusBar, View, ViewProps } from 'react-native'
import { Title } from 'components/text/Title'
import useStyles from 'styles/useStyles'
import useTheme from 'theme/useTheme'

type Props = ViewProps & { title: string }

export enum BAR_STYLE {
  LightContent = 'light-content',
  DarkContent = 'dark-content',
}

export const HeaderComponent = (props: Props) => {
  const { colors, isDarkMode, edgeInsets } = useTheme()
  const styles = useStyles({
    container: { backgroundColor: colors.primary },
    content: { marginTop: edgeInsets.top, justifyContent: 'center', flex: 1, paddingHorizontal: 20 },
    title: { color: colors.surface },
  })

  return (
    <View {...props} style={[{ height: edgeInsets.top + 100 }, styles.container, props.style]}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={isDarkMode ? BAR_STYLE.LightContent : BAR_STYLE.DarkContent}
      />
      <View style={styles.content}>
        <Title style={styles.title}>{props.title}</Title>
      </View>
    </View>
  )
}
