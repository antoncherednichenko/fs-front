import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

const CoursesSkeleton = () => {
  const cardList = [
    { width: "550px", height: '350px', id: 1 },
    { width: "550px", height: '350px', id: 2 }
  ]
  return (
    <>
      <Box sx={{
        width: 'max-content',
        display: 'flex',
        gap: '15px',
        flexDirection: 'column',
        m: '0 auto',
        py: '25px',
      }}>
        {cardList.map((card) => (
          <Skeleton
            variant="rectangular"
            animation="wave" 
            width={card.width} 
            height={card.height} 
            key={card.id} 
          />
        ))}
      </Box>
    </>
  )
}

export { CoursesSkeleton }