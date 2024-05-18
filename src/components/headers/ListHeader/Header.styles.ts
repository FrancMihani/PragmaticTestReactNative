import { useSafeAreaInsets } from 'react-native-safe-area-context'
import _useStyles from 'styles/useStyles'
import useTheme from 'theme/useTheme'

const useStyles = () => {
  const edgeInsets = useSafeAreaInsets()
  const { colors } = useTheme()
  return _useStyles({
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
}

export default useStyles
