import React, { useCallback, useMemo } from 'react'
import useAssets from 'store/hooks/useAssets'
import useAssetsService from 'services/assets/useAssetsService'
import useTheme from 'theme/useTheme'
import useStyles from 'styles/useStyles'
import { Alert, Image, Pressable, Text, View } from 'react-native'
import { Title } from 'components/text/Title'
import { circle } from 'styles'

type Props = { asset: string }

const ListItem = ({ asset }: Props) => {
  const { removeAsset } = useAssets()
  const { data } = useAssetsService().useFindOneMetrics(asset)
  const item = useMemo(() => data?.data?.data, [data?.data?.data])

  const { colors } = useTheme()
  const styles = useStyles({
    image: { ...circle(50), marginRight: 10 },
    container: {
      height: 100,
      flexDirection: 'row',
      borderBottomColor: colors.outline,
      borderBottomWidth: 1,
      alignItems: 'center',
    },
    right: { marginLeft: 'auto', alignItems: 'flex-end' },
    title: { fontSize: 20, color: colors.onSurface },
    subtitle: { fontSize: 15, color: colors.outline },
    percentage: {
      color: (item?.market_data.percent_change_usd_last_24_hours || 0) > 0 ? colors.success : colors.danger,
    },
  })

  const handleRemoveAsset = useCallback(() => {
    Alert.alert('Are you sure you want to remove this asset', '', [
      { text: 'Ok', onPress: () => removeAsset(asset) },
      { text: 'Cancel', style: 'cancel' },
    ])
  }, [asset, removeAsset])

  return (
    <Pressable style={styles.container} onLongPress={handleRemoveAsset}>
      <Image style={styles.image} source={{ uri: `https://asset-images.messari.io/images/${item?.id}/64.png?v=2` }} />
      <View>
        <Title style={styles.title}>{item?.name}</Title>
        <Text style={styles.subtitle}>{item?.symbol}</Text>
      </View>
      <View style={styles.right}>
        <Title style={styles.title}>${item?.market_data.price_usd?.toFixed(5)}</Title>
        <Text style={[styles.subtitle, styles.percentage]}>
          {item?.market_data.percent_change_usd_last_24_hours?.toFixed(3)}%
        </Text>
      </View>
    </Pressable>
  )
}

export default ListItem
