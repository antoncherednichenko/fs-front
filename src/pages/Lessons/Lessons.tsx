import { PageBuilder } from "components/organisms";
import { useGetPage } from "hooks"
import { useParams } from "react-router-dom"

const Lessons = () => {
 const { lesson } = useParams()
 const { isLoading, data, error } = useGetPage(lesson ?? '');
  return (
    <>
      {!isLoading && (
        <PageBuilder 
          features={data} 
          error={error} 
        />
      )}
      {isLoading && (
        <span>skelet</span>
      )}
    </>
  )
}

export { Lessons }