import {createContext, useState, useEffect,  useCallback } from 'react'
import axios from 'axios'

export const IssueContext = createContext({
  issues: [],
  url: ''
})
// creamos un wrapper o provider para envolver a los componentes que van a consumir el context
const IssueProvider = ({ children, url }) => {

  const [issues, setIssues] = useState([])

  const fetchIssues = useCallback(async () => {
    const response = await axios(url)

    if (response) {
      setIssues(response.data)
    }
  }, [url])


  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  const context = {
    issues,
    url
  }

  return <IssueContext.Provider value={context}>{children}</IssueContext.Provider>
}

export default IssueProvider
