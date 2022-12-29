import { FC } from "react"
import { Tab, Tabs as MuiTabs } from "@mui/material"
import { ITabsProps } from "./types"

const Tabs: FC<ITabsProps> = ({ items, onChange, currentValue }) => {
    return (
        <MuiTabs
            value={currentValue}
            onChange={(e, value) => onChange(value)}
        >
            {items.map(item => (
                <Tab
                    key={item.value} 
                    value={item.value} 
                    label={item.label} 
                />
            ))}
        </MuiTabs>
    )
}

export { Tabs }