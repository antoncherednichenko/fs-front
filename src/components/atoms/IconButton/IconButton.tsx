import { IconButton as MuiIconButton } from "@mui/material"
import { FC } from "react"
import { MdClear, MdMenu } from 'react-icons/md'
import { IIconButtonProps } from "./types"


const IconButton: FC<IIconButtonProps> = ({ 
    size = 45, 
    onClick = () => {}
}) => {
    return (
        <MuiIconButton onClick={onClick}>
            <MdMenu size={size} />
        </MuiIconButton>
    )
}
  
export { IconButton }