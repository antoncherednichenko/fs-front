import { Box } from "@mui/material"
import { PageBuilder } from "components/organisms";
import { useGetPage } from "hooks"
import { Pages } from "__data__"
import { Skelet } from "./Skelet";

const Courses = () => {
  const { isLoading, data, error } = useGetPage(Pages.Courses)

  return (
    <Box>
      {isLoading && (
        <Skelet />
      )}
      {!isLoading && (
        <PageBuilder features={data} error={error} />
      )}
    </Box>
  )
};

export { Courses }
