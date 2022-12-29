import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { TrainerContent } from "./TrainerContent"

const tools = true
const tabs = [
    { label: 'index.html', value: 'html' },
    { label: 'style.css', value: 'css' },
    { label: 'main.js', value: 'javascript' },
]

const Trainer = () => {
    const { pathname } = useLocation()
    const lessonParams = useMemo(() => {
        const pathList = pathname.split('/')
        return new URLSearchParams({
            course: pathList.at(-2) ?? "",
            lesson: pathList.at(-1) ?? ""
        }).toString()
    }, [pathname])
    console.log(lessonParams, 'params')

    return <TrainerContent tabs={tabs} />
}

export { Trainer }