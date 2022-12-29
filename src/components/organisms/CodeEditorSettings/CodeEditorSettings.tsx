import { FC, useState, PropsWithChildren } from "react"
import { Box, IconButton, Modal, useTheme } from "@mui/material"
import { renderIcon } from "utils"
import { IconsNames } from "__data__"
import { iconButton, settingsModal } from "./styles"

const CodeEditorSettings: FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenModal = () => {
        setIsOpen(true)
    }
    const handleModalClose = () => {
        setIsOpen(false)
    }
    return (
        <Box>
            <IconButton onClick={handleOpenModal} sx={iconButton(theme)}>
                {renderIcon(IconsNames.Settings)}
            </IconButton>
            {isOpen && (
                <Modal
                    open={isOpen}
                    onClose={handleModalClose}
                >
                    <Box sx={settingsModal(theme)}>
                        {children}
                    </Box>
                </Modal>
            )}
        </Box>
    )
}

export { CodeEditorSettings }