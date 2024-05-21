import { useDispatch, useSelector } from 'react-redux'
import { addAsset as _addAsset, removeAsset as _removeAsset } from 'store/slices/assetsSlice.ts'
import { Root } from 'store/types'

const useAssets = () => {
  const dispatch = useDispatch()
  const assets = useSelector<Root>(state => state.assets) as Root['assets']
  const addAsset = (val: string) => dispatch(_addAsset(val))
  const removeAsset = (val: string) => dispatch(_removeAsset(val))

  return { assets, addAsset, removeAsset }
}

export default useAssets
