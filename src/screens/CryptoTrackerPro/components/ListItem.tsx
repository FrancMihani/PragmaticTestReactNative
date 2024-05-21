import React, { useCallback } from 'react'
import useAssets from 'store/hooks/useAssets'
import useAssetsService from 'services/assets/useAssetsService'
import { Alert, Pressable, Text } from 'react-native'

type Props = { asset: string }

const ListItem = ({ asset }: Props) => {
  const { removeAsset } = useAssets()
  const { data, isPending } = useAssetsService().useFindOneMetrics(asset)

  const handleRemoveAsset = useCallback(() => {
    Alert.alert('Are you sure you want to remove this asset', '', [
      { text: 'Ok', onPress: () => removeAsset(asset) },
      { text: 'Cancel', style: 'cancel' },
    ])
  }, [asset, removeAsset])

  return (
    <Pressable onLongPress={handleRemoveAsset}>
      <Text>{asset}</Text>
    </Pressable>
  )
}

export default ListItem
