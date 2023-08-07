import { useState } from "react";

export function useCycle(images: string []) {
    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent(prevCount => prevCount + 1 === images.length  ?  0 : prevCount + 1)
    }
        const prev = () => {
            setCurrent(prevCount => prevCount - 1 < 0  ?  images.length - 1 : prevCount - 1)
    }
    return [current, next, prev] as [typeof current, typeof next, typeof prev]
}