import { FirstSection, SecondSection, ThirdSection } from "../../components/molecules"
import classes from './styles.module.scss'

const MainLending = () => {

    return (
        <div className={classes.wrapper}>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}

export { MainLending }