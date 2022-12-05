import { 
    IoIosSchool, 
    IoIosRibbon, 
    IoMdCube, 
    IoIosJournal 
} from 'react-icons/io'
import { IconsNames } from "__data__";

export const renderIcon = (name: string, size?: number) => {
    const currentSize = size || 25
    switch(name) {
        case IconsNames.Library:
            return <IoIosSchool size={currentSize} />
        case IconsNames.Achievement:
            return <IoIosRibbon size={currentSize} />
        case IconsNames.Sandbox:
            return <IoMdCube size={currentSize} />
        case IconsNames.Book:
            return <IoIosJournal size={currentSize} />
        default:
            return <></>
    }   
}