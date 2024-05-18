import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useStyles from 'styles/useStyles'
import useTheme from 'theme/useTheme'
import { Image, StatusBar, View, ViewProps } from 'react-native'
import { Title } from 'components/text/Title'
import { profileImage } from '../../../assets/images'

type Props = ViewProps & { title: string }

export enum BAR_STYLE {
  LightContent = 'light-content',
  DarkContent = 'dark-content',
}

export const HeaderComponent = (props: Props) => {
  const edgeInsets = useSafeAreaInsets()
  const { colors, isDarkMode } = useTheme()
  const styles = useStyles({
    container: { backgroundColor: colors.primary },
    content: {
      marginTop: edgeInsets.top,
      alignItems: 'center',
      flex: 1,
      paddingHorizontal: 20,
      flexDirection: 'row',
    },
    title: { color: colors.surface },
    profileImage: { marginLeft: 'auto', height: 50, width: 50 },
  })

  return (
    <View {...props} style={[{ height: edgeInsets.top + 100 }, styles.container, props.style]}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={isDarkMode ? BAR_STYLE.DarkContent : BAR_STYLE.LightContent}
      />
      <View style={styles.content}>
        <Title style={styles.title}>{props.title}</Title>
        <Image source={profileImage} style={styles.profileImage} />
      </View>
    </View>
  )
}
