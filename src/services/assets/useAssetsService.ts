import { useQuery, useQueryClient } from '@tanstack/react-query'
import messariClient from 'clients/messariClient'
import type {} from 'services/assets/types'

const useAssetsService = () => {
  const queryClient = useQueryClient()

  const useFindOne = (slug: string) =>
    useQuery(
      {
        queryKey: [`/assets/${slug}`, slug],
        queryFn: ({}) => messariClient().get<StatusResponse>(`/assets/${slug}`),
      },
      queryClient,
    )

  const useFindOneMetrics = (slug: string) =>
    useQuery(
      {
        queryKey: [`/assets/${slug}/metrics`, slug],
        queryFn: ({}) => messariClient().get<StatusResponse>(`/assets/${slug}/metrics`),
      },
      queryClient,
    )

  return { useFindOne, useFindOneMetrics }
}

export default useAssetsService
