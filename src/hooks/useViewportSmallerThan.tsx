import { useEffect, useState } from 'react'

const useViewportSmallerThan = (viewport:number) => {

    const [isViewportSmaller, setIsViewportSmaller] = useState(viewport > window.innerWidth)

    useEffect(() => {
        const listener = () => {
          
            setIsViewportSmaller(viewport > window.innerWidth)

        }
        window.addEventListener('resize', listener)
        
        return () => window.removeEventListener('resize', listener)

    }, [viewport])

    return isViewportSmaller

}

export default useViewportSmallerThan