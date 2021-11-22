import React from 'react'

const useDelayUnmount = ({ isMounted, delayTime }) => {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    let timeoutId
    if (isMounted && !shouldRender) {
      setShouldRender(true)
    }
    if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => {
        setShouldRender(false)
      }, delayTime)
    }
    return () => clearTimeout(timeoutId)
  }, [isMounted, delayTime, shouldRender])

  return shouldRender
}

export default useDelayUnmount
