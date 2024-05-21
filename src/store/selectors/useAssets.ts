import { useSelector } from 'react-redux'
import { Root } from 'store/types'

const useAssets = () => useSelector<Root>(state => state.assets)

export default useAssets
