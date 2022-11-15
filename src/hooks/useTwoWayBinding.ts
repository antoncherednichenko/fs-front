import { useState } from "react"

export const useTwoWayBinding = (initialValue: string | undefined = '') => {
    const [value, setValue] = useState(initialValue)
    const changeHandler = (newValue: string) => { setValue(newValue) }
    return { value, changeHandler } 
}