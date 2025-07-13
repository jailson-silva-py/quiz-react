import { useEffect, type RefObject } from 'react'

const useOutClickElement = <T extends HTMLElement | null>(handle:any, Element:RefObject<T>) => {

    useEffect(() => {

        const listener = (e:Event) => {
            
            const el = Element.current;
            if(!el || Element.current?.contains(e.target as Node))
            console.log('handle')
            handle()

        }

        document.addEventListener('pointerdown', listener)

        return () => document.removeEventListener('pointerDown', listener)

    })

}

export default useOutClickElement