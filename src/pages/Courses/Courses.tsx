import { Box } from "@mui/material"
import { PageBuilder } from "components/organisms";
import { useGetPage } from "hooks"
import { Pages } from "__data__"

const Courses = () => {
  const { isLoading, data, error } = useGetPage(Pages.Courses)

  return (
    <Box>
      {isLoading && (
        <span>loading</span>
      )}
      {!isLoading && (
        <PageBuilder features={data} error={error} />
      )}
    </Box>
  )
};

export { Courses }
