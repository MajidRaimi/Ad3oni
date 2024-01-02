
import { NavBar, PrayerFormattedText, ShareWithUsButton } from "../components"


const Hero = () => {
    return (
        <section className='min-h-screen background flex flex-col  justify-between text-white'>
            <NavBar />
            <PrayerFormattedText />
            <ShareWithUsButton />
        </section>
    )
}

export default Hero
