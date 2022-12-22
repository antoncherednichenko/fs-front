import { FC, PropsWithChildren, useMemo } from "react"
import { useGetPage } from "hooks"
import { IPageProps } from "./types"
import { Box } from "@mui/material"
import { PageBuilder } from "components/organisms"
import { useParams } from "react-router-dom"

const Page: FC<PropsWithChildren<IPageProps>> = ({ route, children, routeId, page }) => {
    const params = useParams()
    const currentRoute = useMemo(() => {
        if (page) {
            return page
        }
        return routeId ? params[routeId] : route.replace('/', '')
    }, [routeId, params])
    const { isLoading, data, error } = useGetPage(currentRoute ?? '/')
    return (
        <Box>
            <>
                {isLoading && (
                    <>
                       {children}
                    </>
                )}
                {!isLoading && (
                    <PageBuilder features={data} error={error} />
                )}
            </>
        </Box>
    )
}

export { Page }