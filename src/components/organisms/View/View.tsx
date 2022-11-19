import { FC, useEffect, useMemo, useRef, useState } from "react"
import { getFrameStyles } from "utils";
import { IViewProps } from "./types"

const View: FC<IViewProps> = ({
    js = '',
    html = '',
    css = '',
    minHeigth = 'auto'
}) => {
    const frame = useRef<HTMLIFrameElement | null>(null);
    const style = useMemo(() => getFrameStyles(css), [css])
    const [log, setLog] = useState()
    const [error, setError] = useState<string[]>([])

    useEffect(() => {
        if(frame.current) {
            console.dir(frame.current)
            const frameDocument = frame.current.contentWindow?.document 
                || frame.current?.contentDocument
            frameDocument?.open()
            frameDocument?.write(html + style)
            frameDocument?.close()
            try {
                frame.current.contentWindow?.window?.eval(js)
            } catch (err: any) {
                setError([...error, err.message])
            }
        }
    }, [js, html, style])

    return (
        <>
            <iframe 
                ref={frame}
                tabIndex={0}
                frameBorder={0}
                sandbox="allow-same-origin"
                style={{
                    width: '100%', 
                    minHeight: minHeigth,
                    height: 'auto',
                }}
            />
        </>
    )
}

export { View }