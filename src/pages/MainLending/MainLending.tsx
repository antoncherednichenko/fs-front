import { FirstSection, SecondSection } from "../../components/molecules"
import classes from './styles.module.scss'

const MainLending = () => {

    return (
        <div className={classes.wrapper}>
            <FirstSection />
            <SecondSection />
        </div>
    )
}

export { MainLending }