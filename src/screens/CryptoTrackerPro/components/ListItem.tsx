import React, { useCallback, useMemo } from 'react'
import useAssets from 'store/hooks/useAssets'
import useAssetsService from 'services/assets/useAssetsService'
import useTheme from 'theme/useTheme'
import useStyles from 'styles/useStyles'
import { Alert, Image, Pressable, Text, View } from 'react-native'
import { circle } from 'styles'

type Props = { asset: string }

const ListItem = ({ asset }: Props) => {
  const { colors } = useTheme()
  const styles = useStyles({
    container: {
      height: 100,
      flexDirection: 'row',
      borderBottomColor: colors.outline,
      borderBottomWidth: 1,
      alignItems: 'center',
    },
  })

  const { removeAsset } = useAssets()
  const { data } = useAssetsService().useFindOneMetrics(asset)
  const item = useMemo(() => data?.data?.data, [data?.data?.data])

  const handleRemoveAsset = useCallback(() => {
    Alert.alert('Are you sure you want to remove this asset', '', [
      { text: 'Ok', onPress: () => removeAsset(asset) },
      { text: 'Cancel', style: 'cancel' },
    ])
  }, [asset, removeAsset])

  return (
    <Pressable style={styles.container} onLongPress={handleRemoveAsset}>
      <Image style={circle(50)} source={{ uri: `https://asset-images.messari.io/images/${item?.id}/64.png?v=2` }} />
      <View>
        <Text>{item?.name}</Text>
        <Text>{item?.symbol}</Text>
      </View>
      <View>
        <Text>{item?.market_data.percent_change_usd_last_24_hours}</Text>
        <Text>{item?.market_data.price_usd}</Text>
      </View>
    </Pressable>
  )
}

export default ListItem
