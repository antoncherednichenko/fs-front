import { pageApi } from "api/api"
import { useEffect, useState } from "react"

export const useGetPage = <T = unknown>(page: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    pageApi.getPage(page).then(resp => {
      if (resp.data?.code === 0) {
        setData(resp.data.data)
      }
    }).catch(err => {
      setError(err.message)
    }).finally(() => setIsLoading(false))
  }, [])

  return { isLoading, data, error }
}