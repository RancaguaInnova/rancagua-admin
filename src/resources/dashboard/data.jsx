import { useEffect, useState } from "react"
import providerUrl from "../../urlprovider"
import { fetchJson as httpClient } from "../../provider/httpClient"

const getKpi = async () => {
  try {
    let options = {}
    options.method = "GET"
    const response = await httpClient(`${providerUrl}/citizen/kpi`, options)
    return await response?.data
  } catch (e) {
    return []
  }
}

export function useKPI() {
  const [loading, setLoading] = useState(false)
  const [kpi, setKpi] = useState(null)
  useEffect(function () {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await getKpi()
        setKpi(response)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return { loading, kpi }
}
