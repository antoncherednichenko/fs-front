import { FC } from "react"
import { MenuItem, Select as MuiSelect, Typography, useTheme } from "@mui/material"
import { ISelectProps } from "./types"
import { item, select } from "./styles"

const Select: FC<ISelectProps> = ({ values, onChange, placeholder, value }) => {
    const theme = useTheme()
    return (
        <MuiSelect
            variant="outlined"
            sx={select(theme)}
            value={value}
            placeholder={placeholder}
            onChange={(e: any) => onChange(e.target.value as string)}
        >
            {values.map(value => (
                <MenuItem 
                    sx={item(theme)} 
                    key={value} 
                    value={value}
                >
                    <Typography sx={{padding: 0}} variant="body2">{value}</Typography>
                </MenuItem>
            ))}
        </MuiSelect>
    )
}

export { Select }