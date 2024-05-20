import _useStyles from 'styles/useStyles'
import useTheme from 'theme/useTheme'

const useStyles = () => {
  const { colors } = useTheme()
  return _useStyles({
    container: { paddingVertical: 10, backgroundColor: colors.secondary, width: 100, borderRadius: 5 },
    text: { color: colors.onSurface, textAlign: 'center', fontSize: 18, fontWeight: '600' },
  })
}

export default useStyles
